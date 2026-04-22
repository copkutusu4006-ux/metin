const STORAGE_KEY = "almanca_metinler_ilerleme_v1";

let aktifKategori = null;
let aktifMetin = null;
let aktifSorular = [];
let cevaplandiMi = false;
let mevcutVoices = [];

// Ekran elementleri
const mainMenu = document.getElementById("main-menu");
const readingScreen = document.getElementById("reading-screen");

const btnKolay = document.getElementById("btn-kolay");
const btnOrta = document.getElementById("btn-orta");
const btnZor = document.getElementById("btn-zor");
const btnSifirla = document.getElementById("btn-sifirla");

const btnBackMenu = document.getElementById("btn-back-menu");
const btnSubmitAnswers = document.getElementById("btn-submit-answers");
const btnNextText = document.getElementById("btn-next-text");
const btnReadFull = document.getElementById("btn-read-full");
const btnStopAudio = document.getElementById("btn-stop-audio");

const readingLevelBadge = document.getElementById("reading-level-badge");
const readingCounter = document.getElementById("reading-counter");
const readingRemaining = document.getElementById("reading-remaining");
const readingTitle = document.getElementById("reading-title");
const readingText = document.getElementById("reading-text");
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");
const customAlert = document.getElementById("custom-alert");

// Başlangıç
document.addEventListener("DOMContentLoaded", () => {
    sesleriYukle();
    olaylariBagla();
});

// Ses listesi
function sesleriYukle() {
    if (!("speechSynthesis" in window)) return;

    mevcutVoices = window.speechSynthesis.getVoices();

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            mevcutVoices = window.speechSynthesis.getVoices();
        };
    }
}

// Olaylar
function olaylariBagla() {
    btnKolay.addEventListener("click", () => kategoriBaslat("kolay"));
    btnOrta.addEventListener("click", () => kategoriBaslat("orta"));
    btnZor.addEventListener("click", () => kategoriBaslat("zor"));

    btnSubmitAnswers.addEventListener("click", cevaplariKontrolEt);
    btnNextText.addEventListener("click", sonrakiMetneGec);
    btnBackMenu.addEventListener("click", anaMenuyeDon);

    btnReadFull.addEventListener("click", () => {
        if (!aktifMetin) return;
        metniOku(aktifMetin.metin);
    });

    btnStopAudio.addEventListener("click", sesiDurdur);

    btnSifirla.addEventListener("click", () => {
        const onay = confirm("Tüm kategori ilerlemeleri sıfırlansın mı?");
        if (!onay) return;

        tumIlerlemeyiSifirla();
        bildirimGoster("Tüm ilerleme sıfırlandı.");
    });
}

// Kategori başlat
function kategoriBaslat(kategori) {
    aktifKategori = kategori;

    const secilenMetin = kategoridenSiradakiMetniGetir(kategori);

    if (!secilenMetin) {
        bildirimGoster("Bu kategoride gösterilecek metin bulunamadı.");
        return;
    }

    aktifMetin = secilenMetin;
    aktifSorular = seciliSorulariGetir(aktifMetin);
    cevaplandiMi = false;

    metniEkranaBas();
    soruFormunuOlustur();
    sonucuSifirla();
    ekraniGoster("reading");
}

// Ana menüye dön
function anaMenuyeDon() {
    sesiDurdur();
    ekraniGoster("menu");
}

// Sonraki metne geç
function sonrakiMetneGec() {
    if (!aktifKategori || !aktifMetin) {
        anaMenuyeDon();
        return;
    }

    mevcutMetniTamamlandiOlarakIsaretle(aktifKategori, aktifMetin.id);

    const yeniMetin = kategoridenSiradakiMetniGetir(aktifKategori);

    if (!yeniMetin) {
        bildirimGoster("Bu kategoride metin bulunamadı.");
        return;
    }

    aktifMetin = yeniMetin;
    aktifSorular = seciliSorulariGetir(aktifMetin);
    cevaplandiMi = false;

    metniEkranaBas();
    soruFormunuOlustur();
    sonucuSifirla();
    sesiDurdur();
}

// Metni ekrana bas
function metniEkranaBas() {
    if (!aktifMetin) return;

    readingLevelBadge.textContent = kategoriEtiketi(aktifKategori);
    readingTitle.textContent = aktifMetin.baslik;

    const tumKategoriMetinleri = kategoriMetinleriniGetir(aktifKategori);
    const tamamlananSayisi = kategorideTamamlananMetinSayisi(aktifKategori);
    const gosterilenSira = Math.min(tamamlananSayisi + 1, tumKategoriMetinleri.length);

    readingCounter.textContent = `Metin ${gosterilenSira} / ${tumKategoriMetinleri.length}`;

    const kalan = kategorideKalanMetinSayisi(aktifKategori);
    if (readingRemaining) {
        readingRemaining.textContent = `Kalan: ${kalan} metin`;
    }

    metniCumlelereRenderEt(aktifMetin.metin);
}

// Soruları form olarak oluştur
function soruFormunuOlustur() {
    if (!quizForm) return;

    quizForm.innerHTML = "";

    aktifSorular.forEach((soru, index) => {
        const siraNo = index + 1;

        const questionCard = document.createElement("div");
        questionCard.className = "question-card";

        const questionText = document.createElement("p");
        questionText.className = "question-text";
        questionText.textContent = `${siraNo}. ${soru.soru}`;
        questionCard.appendChild(questionText);

        let secenekler = [];

        if (soru.tip === "dogru-yanlis") {
            secenekler = [
                { label: "Doğru", value: "dogru" },
                { label: "Yanlış", value: "yanlis" }
            ];
        } else if (soru.tip === "coktan-secmeli") {
            secenekler = secenekleriHazirla(soru);
        }

        secenekler.forEach(secenek => {
            const label = document.createElement("label");
            label.className = "option-label";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${siraNo}`;
            input.value = String(secenek.value);

            const span = document.createElement("span");
            span.textContent = secenek.label;

            label.appendChild(input);
            label.appendChild(span);
            questionCard.appendChild(label);
        });

        quizForm.appendChild(questionCard);
    });

    btnSubmitAnswers.disabled = false;
}

// Çoktan seçmeli şıkları hazırla
function secenekleriHazirla(soru) {
    if (!Array.isArray(soru.secenekler)) return [];

    const karisik = soru.secenekler.map((secenek, index) => ({
        label: secenek,
        value: index
    }));

    return karistir([...karisik]);
}

// Cevapları kontrol et
function cevaplariKontrolEt() {
    if (cevaplandiMi) return;

    let dogruSayisi = 0;
    const toplamSoru = aktifSorular.length;

    aktifSorular.forEach((soru, index) => {
        const siraNo = index + 1;
        const secilen = quizForm.querySelector(`input[name="q${siraNo}"]:checked`);

        if (!secilen) return;

        if (soru.tip === "dogru-yanlis") {
            if (secilen.value === soru.dogruCevap) {
                dogruSayisi++;
            }
        }

        if (soru.tip === "coktan-secmeli") {
            if (Number(secilen.value) === soru.dogruIndex) {
                dogruSayisi++;
            }
        }
    });

    quizResult.style.display = "block";
    quizResult.textContent = `Sonuç: ${dogruSayisi}/${toplamSoru}`;

    cevaplandiMi = true;
    btnSubmitAnswers.disabled = true;
}

// Sonucu sıfırla
function sonucuSifirla() {
    quizResult.style.display = "none";
    quizResult.textContent = "";
    btnSubmitAnswers.disabled = false;
}

// Ekran göster
function ekraniGoster(hedef) {
    if (hedef === "menu") {
        mainMenu.style.display = "block";
        readingScreen.style.display = "none";
    }

    if (hedef === "reading") {
        mainMenu.style.display = "none";
        readingScreen.style.display = "block";
    }
}

// Kategori etiketi
function kategoriEtiketi(kategori) {
    if (kategori === "kolay") return "Kolay";
    if (kategori === "orta") return "Orta";
    if (kategori === "zor") return "Zor";
    return "";
}

// Metinleri kategoriye göre getir
function kategoriMetinleriniGetir(kategori) {
    if (!Array.isArray(window.metinler)) return [];
    return window.metinler.filter(metin => metin.seviye === kategori);
}

// Kategori için sıradaki metni getir
function kategoridenSiradakiMetniGetir(kategori) {
    let tumMetinler = kategoriMetinleriniGetir(kategori);
    let ilerleme = ilerlemeyiGetir();
    let tamamlananIdler = ilerleme[kategori]?.tamamlananMetinIdleri || [];

    let kalanMetinler = tumMetinler.filter(metin => !tamamlananIdler.includes(metin.id));

    if (tumMetinler.length === 0) {
        return null;
    }

    if (kalanMetinler.length === 0) {
        kategoriIlerlemesiniSifirla(kategori);
        ilerleme = ilerlemeyiGetir();
        tamamlananIdler = ilerleme[kategori]?.tamamlananMetinIdleri || [];
        kalanMetinler = tumMetinler.filter(metin => !tamamlananIdler.includes(metin.id));

        bildirimGoster(`${kategoriEtiketi(kategori)} kategorisindeki tüm metinler bitti. Liste yeniden karıştırıldı.`);
    }

    return rastgeleElemanSec(kalanMetinler);
}

// Seçili 5 soruyu üret
function seciliSorulariGetir(metin) {
    if (!metin || !Array.isArray(metin.sorular)) return [];

    const dogruYanlislar = karistir(
        metin.sorular.filter(soru => soru.tip === "dogru-yanlis")
    ).slice(0, 2);

    const coktanSecmeliler = karistir(
        metin.sorular.filter(soru => soru.tip === "coktan-secmeli")
    ).slice(0, 3);

    return karistir([...dogruYanlislar, ...coktanSecmeliler]);
}

// Metni cümlelere render et
function metniCumlelereRenderEt(metin) {
    readingText.innerHTML = "";

    const cumleler = metniCumlelereBol(metin);

    cumleler.forEach(cumle => {
        const span = document.createElement("span");
        span.className = "reading-sentence";
        span.textContent = `${cumle} `;
        span.addEventListener("click", () => cumleyiOku(cumle));
        readingText.appendChild(span);
    });
}

// Metni cümlelere böl
function metniCumlelereBol(metin) {
    if (!metin || typeof metin !== "string") return [];

    return metin
        .split(/(?<=[.!?])\s+/)
        .map(cumle => cumle.trim())
        .filter(Boolean);
}

// Tüm metni oku
function metniOku(metin) {
    if (!("speechSynthesis" in window)) {
        bildirimGoster("Bu cihazda seslendirme desteklenmiyor.");
        return;
    }

    if (!metin) return;

    sesiDurdur();

    const utterance = new SpeechSynthesisUtterance(metin);
    utterance.lang = "de-DE";
    utterance.rate = 0.82;
    utterance.pitch = 1;

    const uygunVoice = almancaSesBul();
    if (uygunVoice) {
        utterance.voice = uygunVoice;
    }

    window.speechSynthesis.speak(utterance);
}

// Tek cümle oku
function cumleyiOku(cumle) {
    if (!("speechSynthesis" in window)) {
        bildirimGoster("Bu cihazda seslendirme desteklenmiyor.");
        return;
    }

    if (!cumle) return;

    sesiDurdur();

    const utterance = new SpeechSynthesisUtterance(cumle);
    utterance.lang = "de-DE";
    utterance.rate = 0.8;
    utterance.pitch = 1;

    const uygunVoice = almancaSesBul();
    if (uygunVoice) {
        utterance.voice = uygunVoice;
    }

    window.speechSynthesis.speak(utterance);
}

// Almanca ses bul
function almancaSesBul() {
    if (!Array.isArray(mevcutVoices) || mevcutVoices.length === 0) return null;

    return (
        mevcutVoices.find(voice => voice.lang === "de-DE") ||
        mevcutVoices.find(voice => voice.lang && voice.lang.startsWith("de")) ||
        null
    );
}

// Sesi durdur
function sesiDurdur() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

// Bildirim göster
function bildirimGoster(mesaj) {
    if (!customAlert) return;

    customAlert.textContent = mesaj;
    customAlert.style.display = "block";

    clearTimeout(customAlert._hideTimeout);

    customAlert._hideTimeout = setTimeout(() => {
        customAlert.style.display = "none";
    }, 2500);
}

// Yardımcı: karıştır
function karistir(dizi) {
    const kopya = [...dizi];

    for (let i = kopya.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kopya[i], kopya[j]] = [kopya[j], kopya[i]];
    }

    return kopya;
}

// Yardımcı: rastgele eleman
function rastgeleElemanSec(dizi) {
    if (!Array.isArray(dizi) || dizi.length === 0) return null;
    return dizi[Math.floor(Math.random() * dizi.length)];
}

// Storage: ilerlemeyi getir
function ilerlemeyiGetir() {
    const varsayilan = {
        kolay: { tamamlananMetinIdleri: [] },
        orta: { tamamlananMetinIdleri: [] },
        zor: { tamamlananMetinIdleri: [] }
    };

    try {
        const kayitli = localStorage.getItem(STORAGE_KEY);
        if (!kayitli) return varsayilan;

        const parsed = JSON.parse(kayitli);

        return {
            kolay: {
                tamamlananMetinIdleri: Array.isArray(parsed?.kolay?.tamamlananMetinIdleri)
                    ? parsed.kolay.tamamlananMetinIdleri
                    : []
            },
            orta: {
                tamamlananMetinIdleri: Array.isArray(parsed?.orta?.tamamlananMetinIdleri)
                    ? parsed.orta.tamamlananMetinIdleri
                    : []
            },
            zor: {
                tamamlananMetinIdleri: Array.isArray(parsed?.zor?.tamamlananMetinIdleri)
                    ? parsed.zor.tamamlananMetinIdleri
                    : []
            }
        };
    } catch (error) {
        return varsayilan;
    }
}

// Storage: ilerlemeyi kaydet
function ilerlemeyiKaydet(veri) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(veri));
}

// Kategori sıfırla
function kategoriIlerlemesiniSifirla(kategori) {
    const ilerleme = ilerlemeyiGetir();
    ilerleme[kategori] = { tamamlananMetinIdleri: [] };
    ilerlemeyiKaydet(ilerleme);
}

// Tümünü sıfırla
function tumIlerlemeyiSifirla() {
    localStorage.removeItem(STORAGE_KEY);
}

// Mevcut metni tamamlandı olarak işaretle
function mevcutMetniTamamlandiOlarakIsaretle(kategori, metinId) {
    const ilerleme = ilerlemeyiGetir();

    if (!ilerleme[kategori]) {
        ilerleme[kategori] = { tamamlananMetinIdleri: [] };
    }

    const liste = ilerleme[kategori].tamamlananMetinIdleri;

    if (!liste.includes(metinId)) {
        liste.push(metinId);
    }

    ilerlemeyiKaydet(ilerleme);
}

// Kategoride kaç metin tamamlandı
function kategorideTamamlananMetinSayisi(kategori) {
    const ilerleme = ilerlemeyiGetir();
    return ilerleme[kategori]?.tamamlananMetinIdleri?.length || 0;
}

// Kategoride kalan metin sayısı
function kategorideKalanMetinSayisi(kategori) {
    const toplam = kategoriMetinleriniGetir(kategori).length;
    const tamamlanan = kategorideTamamlananMetinSayisi(kategori);
    return Math.max(toplam - tamamlanan, 0);
}