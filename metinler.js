window.metinler = [
    {
        id: 1,
        seviye: "kolay",
        baslik: "Im Park",
        metin: "Anna ist am Nachmittag im Park. Sie sitzt auf einer Bank und liest ein Buch. Neben ihr liegt ihre Tasche. Das Wetter ist schön und die Sonne scheint. Viele Menschen gehen spazieren. Anna trinkt auch eine kleine Flasche Wasser.",
        sorular: [
            {
                id: "1-dy-1",
                tip: "dogru-yanlis",
                soru: "Anna ist im Park.",
                dogruCevap: "dogru"
            },
            {
                id: "1-dy-2",
                tip: "dogru-yanlis",
                soru: "Anna spielt Fußball im Park.",
                dogruCevap: "yanlis"
            },
            {
                id: "1-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Wetter ist schön.",
                dogruCevap: "dogru"
            },
            {
                id: "1-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo ist Anna?",
                secenekler: ["Im Café", "Im Park", "In der Schule", "Zu Hause"],
                dogruIndex: 1
            },
            {
                id: "1-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht Anna?",
                secenekler: ["Sie liest ein Buch", "Sie kocht", "Sie tanzt", "Sie schläft"],
                dogruIndex: 0
            },
            {
                id: "1-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wetter?",
                secenekler: ["Schlecht", "Kalt", "Schön", "Neblig"],
                dogruIndex: 2
            },
            {
                id: "1-cs-4",
                tip: "coktan-secmeli",
                soru: "Was trinkt Anna?",
                secenekler: ["Kaffee", "Tee", "Saft", "Wasser"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 2,
        seviye: "kolay",
        baslik: "Im Café",
        metin: "Markus ist am Morgen in einem Café. Er sitzt am Fenster und trinkt einen Kaffee. Auf dem Tisch liegt ein Handy und ein Notizbuch. Markus wartet auf seine Freundin Lisa. Sie kommt um zehn Uhr. Danach frühstücken sie zusammen.",
        sorular: [
            {
                id: "2-dy-1",
                tip: "dogru-yanlis",
                soru: "Markus ist in einem Café.",
                dogruCevap: "dogru"
            },
            {
                id: "2-dy-2",
                tip: "dogru-yanlis",
                soru: "Markus wartet auf seinen Bruder.",
                dogruCevap: "yanlis"
            },
            {
                id: "2-dy-3",
                tip: "dogru-yanlis",
                soru: "Lisa kommt um zehn Uhr.",
                dogruCevap: "dogru"
            },
            {
                id: "2-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo sitzt Markus?",
                secenekler: ["Am Fenster", "Im Auto", "Im Garten", "Auf dem Sofa"],
                dogruIndex: 0
            },
            {
                id: "2-cs-2",
                tip: "coktan-secmeli",
                soru: "Was trinkt Markus?",
                secenekler: ["Tee", "Milch", "Kaffee", "Wasser"],
                dogruIndex: 2
            },
            {
                id: "2-cs-3",
                tip: "coktan-secmeli",
                soru: "Was liegt auf dem Tisch?",
                secenekler: ["Ein Buch und ein Glas", "Ein Handy und ein Notizbuch", "Ein Apfel und ein Stift", "Eine Zeitung und eine Tasche"],
                dogruIndex: 1
            },
            {
                id: "2-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen Markus und Lisa später?",
                secenekler: ["Sie gehen ins Kino", "Sie arbeiten zusammen", "Sie frühstücken zusammen", "Sie fahren nach Berlin"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 3,
        seviye: "kolay",
        baslik: "Zu Hause",
        metin: "Sofia ist heute zu Hause. Sie hat keinen Kurs am Abend. In der Küche macht sie eine Suppe. Danach räumt sie das Wohnzimmer auf. Später sieht sie fern und schreibt noch eine Nachricht an ihre Mutter. Um elf Uhr geht sie schlafen.",
        sorular: [
            {
                id: "3-dy-1",
                tip: "dogru-yanlis",
                soru: "Sofia ist heute zu Hause.",
                dogruCevap: "dogru"
            },
            {
                id: "3-dy-2",
                tip: "dogru-yanlis",
                soru: "Sofia hat einen Kurs am Abend.",
                dogruCevap: "yanlis"
            },
            {
                id: "3-dy-3",
                tip: "dogru-yanlis",
                soru: "Sofia schreibt eine Nachricht an ihre Mutter.",
                dogruCevap: "dogru"
            },
            {
                id: "3-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo ist Sofia?",
                secenekler: ["In der Schule", "Zu Hause", "Im Büro", "Im Supermarkt"],
                dogruIndex: 1
            },
            {
                id: "3-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht Sofia in der Küche?",
                secenekler: ["Sie macht eine Suppe", "Sie trinkt Kaffee", "Sie liest ein Buch", "Sie telefoniert"],
                dogruIndex: 0
            },
            {
                id: "3-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht sie später?",
                secenekler: ["Sie geht joggen", "Sie fährt mit dem Bus", "Sie sieht fern", "Sie besucht Freunde"],
                dogruIndex: 2
            },
            {
                id: "3-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann geht Sofia schlafen?",
                secenekler: ["Um neun Uhr", "Um zehn Uhr", "Um elf Uhr", "Um zwölf Uhr"],
                dogruIndex: 2
            }
        ]
    },

    {
        id: 101,
        seviye: "orta",
        baslik: "Ein Tag in der Schule",
        metin: "Tom ist Schüler und geht jeden Tag in die Schule. Sein Unterricht beginnt um acht Uhr. Heute hat er Deutsch, Mathe und Sport. In der Pause kauft er ein Brötchen und einen Saft. Nach dem Unterricht fährt er mit dem Bus nach Hause. Am Abend macht er seine Hausaufgaben.",
        sorular: [
            {
                id: "101-dy-1",
                tip: "dogru-yanlis",
                soru: "Tom geht jeden Tag in die Schule.",
                dogruCevap: "dogru"
            },
            {
                id: "101-dy-2",
                tip: "dogru-yanlis",
                soru: "Heute hat Tom nur Sport.",
                dogruCevap: "yanlis"
            },
            {
                id: "101-dy-3",
                tip: "dogru-yanlis",
                soru: "Nach dem Unterricht fährt Tom mit dem Bus nach Hause.",
                dogruCevap: "dogru"
            },
            {
                id: "101-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann beginnt der Unterricht?",
                secenekler: ["Um sieben Uhr", "Um acht Uhr", "Um neun Uhr", "Um zehn Uhr"],
                dogruIndex: 1
            },
            {
                id: "101-cs-2",
                tip: "coktan-secmeli",
                soru: "Was kauft Tom in der Pause?",
                secenekler: ["Einen Kaffee und Kuchen", "Ein Buch und Wasser", "Ein Brötchen und einen Saft", "Ein Handy und Brot"],
                dogruIndex: 2
            },
            {
                id: "101-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie fährt Tom nach Hause?",
                secenekler: ["Mit dem Zug", "Mit dem Auto", "Mit dem Fahrrad", "Mit dem Bus"],
                dogruIndex: 3
            },
            {
                id: "101-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht Tom am Abend?",
                secenekler: ["Er spielt Fußball", "Er macht Hausaufgaben", "Er geht einkaufen", "Er schläft früh"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 102,
        seviye: "orta",
        baslik: "Im Supermarkt",
        metin: "Frau Keller geht nach der Arbeit in den Supermarkt. Sie braucht Milch, Brot, Eier und Obst. Im Markt ist es heute voll. Viele Menschen kaufen für das Wochenende ein. Frau Keller sucht auch Kaffee, aber sie findet nur Tee. An der Kasse wartet sie zehn Minuten.",
        sorular: [
            {
                id: "102-dy-1",
                tip: "dogru-yanlis",
                soru: "Frau Keller geht vor der Arbeit in den Supermarkt.",
                dogruCevap: "yanlis"
            },
            {
                id: "102-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie braucht Milch, Brot, Eier und Obst.",
                dogruCevap: "dogru"
            },
            {
                id: "102-dy-3",
                tip: "dogru-yanlis",
                soru: "Im Supermarkt sind heute viele Menschen.",
                dogruCevap: "dogru"
            },
            {
                id: "102-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann geht Frau Keller in den Supermarkt?",
                secenekler: ["Nach der Arbeit", "Am Morgen", "In der Nacht", "Vor dem Frühstück"],
                dogruIndex: 0
            },
            {
                id: "102-cs-2",
                tip: "coktan-secmeli",
                soru: "Was findet Frau Keller nicht?",
                secenekler: ["Brot", "Milch", "Kaffee", "Obst"],
                dogruIndex: 2
            },
            {
                id: "102-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum kaufen viele Menschen ein?",
                secenekler: ["Für eine Party", "Für das Wochenende", "Für die Schule", "Für die Reise"],
                dogruIndex: 1
            },
            {
                id: "102-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange wartet sie an der Kasse?",
                secenekler: ["Fünf Minuten", "Acht Minuten", "Zehn Minuten", "Zwanzig Minuten"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 103,
        seviye: "orta",
        baslik: "Der Samstag",
        metin: "Am Samstag steht Ali um neun Uhr auf. Zuerst frühstückt er mit seiner Familie. Danach putzt er sein Zimmer und hilft seiner Mutter in der Küche. Am Nachmittag trifft er seine Freunde im Stadtzentrum. Sie trinken etwas und sprechen über die Schule. Am Abend ist Ali müde, aber zufrieden.",
        sorular: [
            {
                id: "103-dy-1",
                tip: "dogru-yanlis",
                soru: "Ali steht am Samstag um neun Uhr auf.",
                dogruCevap: "dogru"
            },
            {
                id: "103-dy-2",
                tip: "dogru-yanlis",
                soru: "Ali trifft am Nachmittag seine Lehrer.",
                dogruCevap: "yanlis"
            },
            {
                id: "103-dy-3",
                tip: "dogru-yanlis",
                soru: "Am Abend ist Ali zufrieden.",
                dogruCevap: "dogru"
            },
            {
                id: "103-cs-1",
                tip: "coktan-secmeli",
                soru: "Mit wem frühstückt Ali?",
                secenekler: ["Mit seinen Freunden", "Mit seiner Familie", "Mit seinem Lehrer", "Allein"],
                dogruIndex: 1
            },
            {
                id: "103-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht Ali nach dem Frühstück?",
                secenekler: ["Er geht einkaufen", "Er putzt sein Zimmer", "Er fährt mit dem Bus", "Er liest Zeitung"],
                dogruIndex: 1
            },
            {
                id: "103-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo trifft Ali seine Freunde?",
                secenekler: ["Im Park", "Im Café", "Im Stadtzentrum", "In der Schule"],
                dogruIndex: 2
            },
            {
                id: "103-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie ist Ali am Abend?",
                secenekler: ["Müde und zufrieden", "Traurig und krank", "Nervös und laut", "Hungrig und böse"],
                dogruIndex: 0
            }
        ]
    },

    {
        id: 201,
        seviye: "zor",
        baslik: "Ein Besuch bei Oma",
        metin: "Laura fährt am Sonntag mit ihrem Bruder zu ihrer Oma. Die Oma wohnt in einem kleinen Dorf. Dort trinken sie zusammen Tee und essen Kuchen. Laura erzählt von der Schule und ihr Bruder spricht über seine Arbeit. Am Nachmittag gehen alle ein bisschen spazieren. Später fahren Laura und ihr Bruder wieder nach Hause.",
        sorular: [
            {
                id: "201-dy-1",
                tip: "dogru-yanlis",
                soru: "Laura fährt am Sonntag zu ihrer Oma.",
                dogruCevap: "dogru"
            },
            {
                id: "201-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Oma wohnt in einer großen Stadt.",
                dogruCevap: "yanlis"
            },
            {
                id: "201-dy-3",
                tip: "dogru-yanlis",
                soru: "Am Nachmittag gehen alle spazieren.",
                dogruCevap: "dogru"
            },
            {
                id: "201-cs-1",
                tip: "coktan-secmeli",
                soru: "Mit wem fährt Laura zu ihrer Oma?",
                secenekler: ["Mit ihrer Schwester", "Mit ihrer Mutter", "Mit ihrem Bruder", "Mit ihrer Freundin"],
                dogruIndex: 2
            },
            {
                id: "201-cs-2",
                tip: "coktan-secmeli",
                soru: "Was essen sie zusammen?",
                secenekler: ["Suppe", "Kuchen", "Pizza", "Salat"],
                dogruIndex: 1
            },
            {
                id: "201-cs-3",
                tip: "coktan-secmeli",
                soru: "Worüber spricht Lauras Bruder?",
                secenekler: ["Über seine Arbeit", "Über seinen Hund", "Über den Urlaub", "Über ein Auto"],
                dogruIndex: 0
            },
            {
                id: "201-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann fahren Laura und ihr Bruder nach Hause?",
                secenekler: ["Am Morgen", "Zu Mittag", "Später", "Um acht Uhr genau"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 202,
        seviye: "zor",
        baslik: "Im Büro",
        metin: "Herr Neumann arbeitet in einem Büro in der Stadt. Jeden Morgen kommt er pünktlich um halb neun. Zuerst liest er seine E-Mails und trinkt einen Kaffee. Danach telefoniert er mit Kunden und schreibt Berichte. Zu Mittag isst er mit einer Kollegin in einem kleinen Restaurant. Am Abend verlässt er das Büro um siebzehn Uhr.",
        sorular: [
            {
                id: "202-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Neumann arbeitet in einem Büro.",
                dogruCevap: "dogru"
            },
            {
                id: "202-dy-2",
                tip: "dogru-yanlis",
                soru: "Er kommt jeden Morgen zu spät.",
                dogruCevap: "yanlis"
            },
            {
                id: "202-dy-3",
                tip: "dogru-yanlis",
                soru: "Zu Mittag isst Herr Neumann mit einer Kollegin.",
                dogruCevap: "dogru"
            },
            {
                id: "202-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann kommt Herr Neumann ins Büro?",
                secenekler: ["Um acht Uhr", "Um halb neun", "Um neun Uhr", "Um zehn Uhr"],
                dogruIndex: 1
            },
            {
                id: "202-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht er zuerst?",
                secenekler: ["Er schreibt Berichte", "Er telefoniert", "Er liest E-Mails", "Er geht essen"],
                dogruIndex: 2
            },
            {
                id: "202-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo isst er zu Mittag?",
                secenekler: ["Zu Hause", "In einem kleinen Restaurant", "Im Park", "Im Supermarkt"],
                dogruIndex: 1
            },
            {
                id: "202-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann verlässt er das Büro?",
                secenekler: ["Um fünfzehn Uhr", "Um sechzehn Uhr", "Um siebzehn Uhr", "Um achtzehn Uhr"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 203,
        seviye: "zor",
        baslik: "Eine kleine Reise",
        metin: "Miriam macht mit ihrer Freundin eine kleine Reise nach Hamburg. Sie fahren am Freitag mit dem Zug. Das Hotel liegt nicht weit vom Bahnhof entfernt. Am Samstag besuchen sie ein Museum und machen viele Fotos. Am Abend essen sie in einem Restaurant am Wasser. Am Sonntag kaufen sie noch ein paar Souvenirs und fahren dann zurück.",
        sorular: [
            {
                id: "203-dy-1",
                tip: "dogru-yanlis",
                soru: "Miriam reist mit ihrer Freundin.",
                dogruCevap: "dogru"
            },
            {
                id: "203-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie fahren mit dem Bus nach Hamburg.",
                dogruCevap: "yanlis"
            },
            {
                id: "203-dy-3",
                tip: "dogru-yanlis",
                soru: "Am Samstag besuchen sie ein Museum.",
                dogruCevap: "dogru"
            },
            {
                id: "203-cs-1",
                tip: "coktan-secmeli",
                soru: "Wohin reist Miriam?",
                secenekler: ["Nach Berlin", "Nach München", "Nach Hamburg", "Nach Köln"],
                dogruIndex: 2
            },
            {
                id: "203-cs-2",
                tip: "coktan-secmeli",
                soru: "Womit fahren sie?",
                secenekler: ["Mit dem Zug", "Mit dem Auto", "Mit dem Flugzeug", "Mit dem Bus"],
                dogruIndex: 0
            },
            {
                id: "203-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machen sie am Samstag?",
                secenekler: ["Sie kaufen Kleidung", "Sie besuchen ein Museum", "Sie fahren nach Hause", "Sie arbeiten im Hotel"],
                dogruIndex: 1
            },
            {
                id: "203-cs-4",
                tip: "coktan-secmeli",
                soru: "Was kaufen sie am Sonntag?",
                secenekler: ["Bücher", "Souvenirs", "Kuchen", "Schuhe"],
                dogruIndex: 1
            }
        ]
    }
];