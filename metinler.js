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
    },{
        id: 4,
        seviye: "kolay",
        baslik: "Mein Hund",
        metin: "Mein Hund heißt Bello. Er ist drei Jahre alt und sehr groß. Er spielt gern im Garten. Ich gehe jeden Tag mit Bello spazieren. Er isst gern Fleisch und trinkt viel Wasser. Am Abend schläft er auf dem Teppich.",
        sorular: [
            {
                id: "4-dy-1",
                tip: "dogru-yanlis",
                soru: "Der Hund heißt Bello.",
                dogruCevap: "dogru"
            },
            {
                id: "4-dy-2",
                tip: "dogru-yanlis",
                soru: "Bello ist klein.",
                dogruCevap: "yanlis"
            },
            {
                id: "4-dy-3",
                tip: "dogru-yanlis",
                soru: "Bello schläft auf dem Sofa.",
                dogruCevap: "yanlis"
            },
            {
                id: "4-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie alt ist der Hund?",
                secenekler: ["Ein Jahr", "Zwei Jahre", "Drei Jahre", "Vier Jahre"],
                dogruIndex: 2
            },
            {
                id: "4-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo spielt Bello?",
                secenekler: ["Im Haus", "Im Garten", "Im Park", "Im Wald"],
                dogruIndex: 1
            },
            {
                id: "4-cs-3",
                tip: "coktan-secmeli",
                soru: "Was isst Bello gern?",
                secenekler: ["Fisch", "Gemüse", "Obst", "Fleisch"],
                dogruIndex: 3
            },
            {
                id: "4-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann geht die Person spazieren?",
                secenekler: ["Jeden Tag", "Einmal pro Woche", "Am Wochenende", "Nie"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 5,
        seviye: "kolay",
        baslik: "Das Frühstück",
        metin: "Heute ist Sonntag. Die Familie Schmidt frühstückt um neun Uhr. Auf dem Tisch stehen Brot, Butter, Marmelade und Käse. Herr Schmidt trinkt Kaffee mit Milch. Frau Schmidt trinkt einen Tee. Die Kinder essen Müsli und trinken Orangensaft.",
        sorular: [
            {
                id: "5-dy-1",
                tip: "dogru-yanlis",
                soru: "Heute ist Montag.",
                dogruCevap: "yanlis"
            },
            {
                id: "5-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Familie frühstückt um neun Uhr.",
                dogruCevap: "dogru"
            },
            {
                id: "5-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Kinder trinken Orangensaft.",
                dogruCevap: "dogru"
            },
            {
                id: "5-cs-1",
                tip: "coktan-secmeli",
                soru: "Welcher Tag ist heute?",
                secenekler: ["Montag", "Samstag", "Sonntag", "Freitag"],
                dogruIndex: 2
            },
            {
                id: "5-cs-2",
                tip: "coktan-secmeli",
                soru: "Was trinkt Herr Schmidt?",
                secenekler: ["Wasser", "Tee", "Saft", "Kaffee"],
                dogruIndex: 3
            },
            {
                id: "5-cs-3",
                tip: "coktan-secmeli",
                soru: "Was essen die Kinder?",
                secenekler: ["Brot", "Müsli", "Käse", "Obst"],
                dogruIndex: 1
            },
            {
                id: "5-cs-4",
                tip: "coktan-secmeli",
                soru: "Was gibt es NICHT auf dem Tisch?",
                secenekler: ["Butter", "Fleisch", "Marmelade", "Brot"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 6,
        seviye: "kolay",
        baslik: "Meine Wohnung",
        metin: "Ich heiße Julia. Ich wohne in Berlin. Meine Wohnung ist nicht groß, aber sehr hell. Ich habe ein Wohnzimmer, ein Schlafzimmer, eine kleine Küche und ein Bad. Im Wohnzimmer steht ein rotes Sofa. Ich habe auch einen Balkon. Da lese ich oft Bücher.",
        sorular: [
            {
                id: "6-dy-1",
                tip: "dogru-yanlis",
                soru: "Julia wohnt in München.",
                dogruCevap: "yanlis"
            },
            {
                id: "6-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Wohnung ist groß.",
                dogruCevap: "yanlis"
            },
            {
                id: "6-dy-3",
                tip: "dogru-yanlis",
                soru: "Im Wohnzimmer steht ein rotes Sofa.",
                dogruCevap: "dogru"
            },
            {
                id: "6-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo wohnt Julia?",
                secenekler: ["In Hamburg", "In Berlin", "In Köln", "In Frankfurt"],
                dogruIndex: 1
            },
            {
                id: "6-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie ist die Wohnung?",
                secenekler: ["Dunkel und groß", "Hell und groß", "Hell und nicht groß", "Dunkel und klein"],
                dogruIndex: 2
            },
            {
                id: "6-cs-3",
                tip: "coktan-secmeli",
                soru: "Welche Zimmer hat sie?",
                secenekler: ["Zwei Schlafzimmer", "Eine große Küche", "Ein Wohnzimmer, ein Schlafzimmer, Küche und Bad", "Zwei Bäder"],
                dogruIndex: 2
            },
            {
                id: "6-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht Julia auf dem Balkon?",
                secenekler: ["Sie schläft", "Sie isst", "Sie liest Bücher", "Sie arbeitet"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 7,
        seviye: "kolay",
        baslik: "Einkaufen",
        metin: "Maria braucht neue Kleidung. Sie geht in ein Modegeschäft. Sie sucht eine Hose und ein T-Shirt. Das T-Shirt ist blau und kostet fünfzehn Euro. Die Hose ist schwarz und kostet vierzig Euro. Maria kauft beide Sachen. Sie bezahlt an der Kasse mit Karte.",
        sorular: [
            {
                id: "7-dy-1",
                tip: "dogru-yanlis",
                soru: "Maria sucht ein Kleid.",
                dogruCevap: "yanlis"
            },
            {
                id: "7-dy-2",
                tip: "dogru-yanlis",
                soru: "Das T-Shirt kostet 15 Euro.",
                dogruCevap: "dogru"
            },
            {
                id: "7-dy-3",
                tip: "dogru-yanlis",
                soru: "Maria bezahlt an der Kasse mit Karte.",
                dogruCevap: "dogru"
            },
            {
                id: "7-cs-1",
                tip: "coktan-secmeli",
                soru: "Was sucht Maria?",
                secenekler: ["Schuhe und Socken", "Eine Jacke", "Eine Hose und ein T-Shirt", "Einen Pullover"],
                dogruIndex: 2
            },
            {
                id: "7-cs-2",
                tip: "coktan-secmeli",
                soru: "Welche Farbe hat das T-Shirt?",
                secenekler: ["Rot", "Grün", "Blau", "Weiß"],
                dogruIndex: 2
            },
            {
                id: "7-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie viel kostet die Hose?",
                secenekler: ["20 Euro", "30 Euro", "40 Euro", "50 Euro"],
                dogruIndex: 2
            },
            {
                id: "7-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo bezahlt sie?",
                secenekler: ["Im Restaurant", "An der Kasse", "Im Büro", "Im Supermarkt"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 8,
        seviye: "kolay",
        baslik: "Der Deutschkurs",
        metin: "Ali lernt Deutsch. Sein Deutschkurs ist am Montag und Mittwochabend. Der Kurs beginnt um achtzehn Uhr und endet um zwanzig Uhr. Die Lehrerin heißt Frau Müller. Sie ist sehr nett. Ali lernt viele neue Wörter. Nach dem Kurs geht er mit Freunden eine Pizza essen.",
        sorular: [
            {
                id: "8-dy-1",
                tip: "dogru-yanlis",
                soru: "Ali lernt Englisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "8-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Lehrerin heißt Frau Müller.",
                dogruCevap: "dogru"
            },
            {
                id: "8-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Kurs endet um 20 Uhr.",
                dogruCevap: "dogru"
            },
            {
                id: "8-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann ist der Deutschkurs?",
                secenekler: ["Am Wochenende", "Am Morgen", "Am Montag und Mittwochabend", "Jeden Tag"],
                dogruIndex: 2
            },
            {
                id: "8-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert der Kurs?",
                secenekler: ["Eine Stunde", "Zwei Stunden", "Drei Stunden", "Vier Stunden"],
                dogruIndex: 1
            },
            {
                id: "8-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist die Lehrerin?",
                secenekler: ["Böse", "Langweilig", "Sehr nett", "Müde"],
                dogruIndex: 2
            },
            {
                id: "8-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht Ali nach dem Kurs?",
                secenekler: ["Er schläft", "Er macht Hausaufgaben", "Er liest ein Buch", "Er isst Pizza"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 9,
        seviye: "kolay",
        baslik: "Im Kino",
        metin: "Lukas und Sarah gehen am Samstag ins Kino. Der Film fängt um acht Uhr an. Sie kaufen zwei Tickets und eine große Tüte Popcorn. Der Film ist sehr lustig. Sie lachen viel. Nach dem Film fahren sie mit der U-Bahn nach Hause. Es ist schon spät.",
        sorular: [
            {
                id: "9-dy-1",
                tip: "dogru-yanlis",
                soru: "Lukas und Sarah gehen am Freitag ins Kino.",
                dogruCevap: "yanlis"
            },
            {
                id: "9-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Film fängt um acht Uhr an.",
                dogruCevap: "dogru"
            },
            {
                id: "9-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Film ist sehr traurig.",
                dogruCevap: "yanlis"
            },
            {
                id: "9-cs-1",
                tip: "coktan-secmeli",
                soru: "Was kaufen sie im Kino?",
                secenekler: ["Pizza und Cola", "Wasser und Chips", "Zwei Tickets und Popcorn", "Ein Buch"],
                dogruIndex: 2
            },
            {
                id: "9-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie ist der Film?",
                secenekler: ["Langweilig", "Lustig", "Traurig", "Schlecht"],
                dogruIndex: 1
            },
            {
                id: "9-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machen Lukas und Sarah beim Film?",
                secenekler: ["Sie schlafen", "Sie essen Pizza", "Sie weinen", "Sie lachen viel"],
                dogruIndex: 3
            },
            {
                id: "9-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie fahren sie nach Hause?",
                secenekler: ["Mit dem Bus", "Mit dem Taxi", "Mit der U-Bahn", "Mit dem Auto"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 10,
        seviye: "kolay",
        baslik: "Meine Hobbys",
        metin: "Hallo, ich bin Max. Ich habe viele Hobbys. Am Wochenende spiele ich oft Fußball mit meinen Freunden. Ich schwimme auch sehr gern. Im Winter fahre ich Ski. Am Abend spiele ich manchmal Gitarre oder höre Musik. Das macht mir viel Spaß.",
        sorular: [
            {
                id: "10-dy-1",
                tip: "dogru-yanlis",
                soru: "Max hat keine Hobbys.",
                dogruCevap: "yanlis"
            },
            {
                id: "10-dy-2",
                tip: "dogru-yanlis",
                soru: "Max spielt am Wochenende Fußball.",
                dogruCevap: "dogru"
            },
            {
                id: "10-dy-3",
                tip: "dogru-yanlis",
                soru: "Im Sommer fährt er Ski.",
                dogruCevap: "yanlis"
            },
            {
                id: "10-cs-1",
                tip: "coktan-secmeli",
                soru: "Was macht Max am Wochenende oft?",
                secenekler: ["Er kocht", "Er spielt Fußball", "Er lernt", "Er arbeitet"],
                dogruIndex: 1
            },
            {
                id: "10-cs-2",
                tip: "coktan-secmeli",
                soru: "Was fährt Max im Winter?",
                secenekler: ["Fahrrad", "Auto", "Ski", "Zug"],
                dogruIndex: 2
            },
            {
                id: "10-cs-3",
                tip: "coktan-secmeli",
                soru: "Welches Instrument spielt Max?",
                secenekler: ["Klavier", "Gitarre", "Geige", "Flöte"],
                dogruIndex: 1
            },
            {
                id: "10-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht ihm Spaß?",
                secenekler: ["Musik hören und Gitarre spielen", "Das Büro", "Die Schule", "Das Auto"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 11,
        seviye: "kolay",
        baslik: "Eine Party",
        metin: "Emma hat heute Geburtstag. Sie wird zwanzig Jahre alt. Sie macht eine Party im Garten. Viele Freunde kommen. Es gibt Musik, Getränke und einen großen Schokoladenkuchen. Die Freunde bringen Geschenke mit. Sie tanzen und singen. Das Wetter ist warm und die Sterne leuchten.",
        sorular: [
            {
                id: "11-dy-1",
                tip: "dogru-yanlis",
                soru: "Emma hat heute Geburtstag.",
                dogruCevap: "dogru"
            },
            {
                id: "11-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Party ist im Haus.",
                dogruCevap: "yanlis"
            },
            {
                id: "11-dy-3",
                tip: "dogru-yanlis",
                soru: "Es gibt einen Schokoladenkuchen.",
                dogruCevap: "dogru"
            },
            {
                id: "11-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie alt wird Emma?",
                secenekler: ["18", "19", "20", "21"],
                dogruIndex: 2
            },
            {
                id: "11-cs-2",
                tip: "coktan-secmeli",
                soru: "Was bringen die Freunde mit?",
                secenekler: ["Essen", "Geschenke", "Haustiere", "Bücher"],
                dogruIndex: 1
            },
            {
                id: "11-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machen die Freunde?",
                secenekler: ["Sie schlafen", "Sie tanzen und singen", "Sie arbeiten", "Sie sehen fern"],
                dogruIndex: 1
            },
            {
                id: "11-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wetter?",
                secenekler: ["Kalt", "Regnerisch", "Warm", "Es schneit"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 12,
        seviye: "kolay",
        baslik: "Der Sommerurlaub",
        metin: "Familie Braun fährt im August ans Meer. Die Reise dauert sechs Stunden mit dem Auto. Sie haben ein Hotelzimmer mit Balkon. Jeden Tag gehen sie an den Strand. Die Kinder bauen eine Sandburg und der Vater schwimmt im Wasser. Am Abend essen sie Fisch im Restaurant.",
        sorular: [
            {
                id: "12-dy-1",
                tip: "dogru-yanlis",
                soru: "Familie Braun fährt im Winter in den Urlaub.",
                dogruCevap: "yanlis"
            },
            {
                id: "12-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie fahren mit dem Auto.",
                dogruCevap: "dogru"
            },
            {
                id: "12-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie schlafen in einem Zelt.",
                dogruCevap: "yanlis"
            },
            {
                id: "12-cs-1",
                tip: "coktan-secmeli",
                soru: "Wohin fährt die Familie?",
                secenekler: ["In die Berge", "Ans Meer", "In die Stadt", "Zu Oma"],
                dogruIndex: 1
            },
            {
                id: "12-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Reise?",
                secenekler: ["Drei Stunden", "Sechs Stunden", "Acht Stunden", "Zehn Stunden"],
                dogruIndex: 1
            },
            {
                id: "12-cs-3",
                tip: "coktan-secmeli",
                soru: "Was bauen die Kinder?",
                secenekler: ["Ein Haus", "Einen Schneemann", "Eine Sandburg", "Ein Auto"],
                dogruIndex: 2
            },
            {
                id: "12-cs-4",
                tip: "coktan-secmeli",
                soru: "Was essen sie am Abend?",
                secenekler: ["Pizza", "Pommes", "Fisch", "Suppe"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 13,
        seviye: "kolay",
        baslik: "Der neue Job",
        metin: "Herr Bauer hat einen neuen Job. Er arbeitet jetzt als Bäcker. Er steht jeden Morgen um drei Uhr auf. Die Arbeit beginnt um vier Uhr. Er backt Brot, Brötchen und Kuchen. Um zwölf Uhr mittags hat er Feierabend. Er ist müde, aber er liebt seinen Beruf.",
        sorular: [
            {
                id: "13-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Bauer arbeitet als Lehrer.",
                dogruCevap: "yanlis"
            },
            {
                id: "13-dy-2",
                tip: "dogru-yanlis",
                soru: "Er steht um drei Uhr auf.",
                dogruCevap: "dogru"
            },
            {
                id: "13-dy-3",
                tip: "dogru-yanlis",
                soru: "Er backt Pizza und Nudeln.",
                dogruCevap: "yanlis"
            },
            {
                id: "13-cs-1",
                tip: "coktan-secmeli",
                soru: "Als was arbeitet Herr Bauer?",
                secenekler: ["Als Koch", "Als Bäcker", "Als Fahrer", "Als Arzt"],
                dogruIndex: 1
            },
            {
                id: "13-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann beginnt die Arbeit?",
                secenekler: ["Um drei Uhr", "Um vier Uhr", "Um fünf Uhr", "Um sechs Uhr"],
                dogruIndex: 1
            },
            {
                id: "13-cs-3",
                tip: "coktan-secmeli",
                soru: "Was backt er NICHT?",
                secenekler: ["Brot", "Kuchen", "Brötchen", "Pizza"],
                dogruIndex: 3
            },
            {
                id: "13-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann hat er Feierabend?",
                secenekler: ["Am Nachmittag", "Am Abend", "Um zwölf Uhr mittags", "In der Nacht"],
                dogruIndex: 2
            }
        ]
    },{
        id: 14,
        seviye: "kolay",
        baslik: "Das Picknick",
        metin: "Heute ist das Wetter sehr schön. Anna und Max machen ein Picknick im Park. Sie haben einen Korb mit Essen. Im Korb sind Äpfel, Bananen, Brot und Käse. Sie trinken auch eine Flasche Apfelsaft. Max spielt Gitarre und Anna singt. Es ist ein schöner Tag.",
        sorular: [
            {
                id: "14-dy-1",
                tip: "dogru-yanlis",
                soru: "Anna und Max machen ein Picknick.",
                dogruCevap: "dogru"
            },
            {
                id: "14-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Wetter ist schlecht.",
                dogruCevap: "yanlis"
            },
            {
                id: "14-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie trinken Cola.",
                dogruCevap: "yanlis"
            },
            {
                id: "14-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo machen sie das Picknick?",
                secenekler: ["Im Garten", "Im Wald", "Im Park", "Am Strand"],
                dogruIndex: 2
            },
            {
                id: "14-cs-2",
                tip: "coktan-secmeli",
                soru: "Was ist im Korb?",
                secenekler: ["Nur Äpfel", "Äpfel, Bananen, Brot und Käse", "Fleisch und Fisch", "Kuchen und Schokolade"],
                dogruIndex: 1
            },
            {
                id: "14-cs-3",
                tip: "coktan-secmeli",
                soru: "Was spielt Max?",
                secenekler: ["Klavier", "Fußball", "Tennis", "Gitarre"],
                dogruIndex: 3
            },
            {
                id: "14-cs-4",
                tip: "coktan-secmeli",
                soru: "Was trinken sie?",
                secenekler: ["Wasser", "Apfelsaft", "Orangensaft", "Milch"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 15,
        seviye: "kolay",
        baslik: "Mein Zimmer",
        metin: "Das ist mein Zimmer. Es ist klein, aber gemütlich. Das Bett ist links an der Wand. Rechts steht mein Schreibtisch. Auf dem Schreibtisch steht mein Computer. Ich habe auch einen blauen Teppich auf dem Boden. Das Fenster ist groß.",
        sorular: [
            {
                id: "15-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Zimmer ist groß.",
                dogruCevap: "yanlis"
            },
            {
                id: "15-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Schreibtisch steht rechts.",
                dogruCevap: "dogru"
            },
            {
                id: "15-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Fenster ist klein.",
                dogruCevap: "yanlis"
            },
            {
                id: "15-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie ist das Zimmer?",
                secenekler: ["Groß und dunkel", "Kalt", "Klein aber gemütlich", "Sehr laut"],
                dogruIndex: 2
            },
            {
                id: "15-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo ist das Bett?",
                secenekler: ["Rechts", "Links an der Wand", "In der Mitte", "Auf dem Teppich"],
                dogruIndex: 1
            },
            {
                id: "15-cs-3",
                tip: "coktan-secmeli",
                soru: "Was steht auf dem Schreibtisch?",
                secenekler: ["Bücher", "Eine Lampe", "Der Computer", "Ein Fernseher"],
                dogruIndex: 2
            },
            {
                id: "15-cs-4",
                tip: "coktan-secmeli",
                soru: "Welche Farbe hat der Teppich?",
                secenekler: ["Blau", "Rot", "Grün", "Gelb"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 16,
        seviye: "kolay",
        baslik: "Beim Arzt",
        metin: "Thomas ist krank. Er hat Kopfschmerzen und Fieber. Er geht heute Morgen zum Arzt. Der Arzt heißt Doktor Müller. Doktor Müller sagt: Du musst viel Wasser trinken und im Bett bleiben. Thomas kauft Medikamente in der Apotheke. Dann geht er nach Hause und schläft.",
        sorular: [
            {
                id: "16-dy-1",
                tip: "dogru-yanlis",
                soru: "Thomas ist gesund.",
                dogruCevap: "yanlis"
            },
            {
                id: "16-dy-2",
                tip: "dogru-yanlis",
                soru: "Thomas geht am Nachmittag zum Arzt.",
                dogruCevap: "yanlis"
            },
            {
                id: "16-dy-3",
                tip: "dogru-yanlis",
                soru: "Er kauft Medikamente in der Apotheke.",
                dogruCevap: "dogru"
            },
            {
                id: "16-cs-1",
                tip: "coktan-secmeli",
                soru: "Was hat Thomas?",
                secenekler: ["Kopfschmerzen und Fieber", "Bauchschmerzen", "Zahnschmerzen", "Keine Schmerzen"],
                dogruIndex: 0
            },
            {
                id: "16-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie heißt der Arzt?",
                secenekler: ["Doktor Braun", "Doktor Schmidt", "Doktor Müller", "Doktor Meier"],
                dogruIndex: 2
            },
            {
                id: "16-cs-3",
                tip: "coktan-secmeli",
                soru: "Was sagt der Arzt?",
                secenekler: ["Er muss arbeiten", "Er muss viel Wasser trinken", "Er muss Sport machen", "Er muss essen"],
                dogruIndex: 1
            },
            {
                id: "16-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo kauft Thomas Medikamente?",
                secenekler: ["Im Supermarkt", "In der Apotheke", "Im Krankenhaus", "Im Internet"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 17,
        seviye: "kolay",
        baslik: "Die Familie",
        metin: "Das ist Familie Weber. Der Vater heißt Michael und die Mutter heißt Sabine. Sie haben zwei Kinder, einen Sohn und eine Tochter. Der Sohn heißt Leon und ist acht Jahre alt. Die Tochter heißt Mia und ist fünf Jahre alt. Sie haben auch eine Katze. Die Katze ist schwarz und weiß.",
        sorular: [
            {
                id: "17-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Mutter heißt Sabine.",
                dogruCevap: "dogru"
            },
            {
                id: "17-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie haben drei Kinder.",
                dogruCevap: "yanlis"
            },
            {
                id: "17-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Katze ist braun.",
                dogruCevap: "yanlis"
            },
            {
                id: "17-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie heißt der Vater?",
                secenekler: ["Thomas", "Michael", "Leon", "Max"],
                dogruIndex: 1
            },
            {
                id: "17-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie alt ist Leon?",
                secenekler: ["Fünf Jahre", "Sechs Jahre", "Acht Jahre", "Zehn Jahre"],
                dogruIndex: 2
            },
            {
                id: "17-cs-3",
                tip: "coktan-secmeli",
                soru: "Wer ist Mia?",
                secenekler: ["Die Mutter", "Die Oma", "Die Tochter", "Die Katze"],
                dogruIndex: 2
            },
            {
                id: "17-cs-4",
                tip: "coktan-secmeli",
                soru: "Welches Haustier hat die Familie?",
                secenekler: ["Einen Hund", "Eine Katze", "Einen Fisch", "Einen Vogel"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 18,
        seviye: "kolay",
        baslik: "Am Bahnhof",
        metin: "Frau Wagner steht am Bahnhof. Sie wartet auf den Zug nach Frankfurt. Der Zug hat leider Verspätung. Er kommt zwanzig Minuten später. Frau Wagner kauft sich einen Kaffee am Kiosk. Sie liest eine Zeitung auf der Bank. Endlich kommt der Zug.",
        sorular: [
            {
                id: "18-dy-1",
                tip: "dogru-yanlis",
                soru: "Frau Wagner wartet auf den Bus.",
                dogruCevap: "yanlis"
            },
            {
                id: "18-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Zug fährt nach Frankfurt.",
                dogruCevap: "dogru"
            },
            {
                id: "18-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Zug ist pünktlich.",
                dogruCevap: "yanlis"
            },
            {
                id: "18-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo ist Frau Wagner?",
                secenekler: ["Am Flughafen", "An der Bushaltestelle", "Im Büro", "Am Bahnhof"],
                dogruIndex: 3
            },
            {
                id: "18-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viel Verspätung hat der Zug?",
                secenekler: ["10 Minuten", "15 Minuten", "20 Minuten", "30 Minuten"],
                dogruIndex: 2
            },
            {
                id: "18-cs-3",
                tip: "coktan-secmeli",
                soru: "Was kauft Frau Wagner?",
                secenekler: ["Ein Wasser", "Einen Kaffee", "Ein Brötchen", "Einen Tee"],
                dogruIndex: 1
            },
            {
                id: "18-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht sie auf der Bank?",
                secenekler: ["Sie telefoniert", "Sie isst", "Sie liest eine Zeitung", "Sie schläft"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 19,
        seviye: "kolay",
        baslik: "Der Sportverein",
        metin: "Peter mag Sport. Er ist in einem Sportverein. Am Dienstag und Donnerstag spielt er Tennis. Das Training dauert eine Stunde. Am Wochenende spielt er auch manchmal mit seinem Bruder. Peter hat neue Tennisschuhe. Sie sind weiß und sehr teuer.",
        sorular: [
            {
                id: "19-dy-1",
                tip: "dogru-yanlis",
                soru: "Peter mag keinen Sport.",
                dogruCevap: "yanlis"
            },
            {
                id: "19-dy-2",
                tip: "dogru-yanlis",
                soru: "Peter spielt am Dienstag und Donnerstag Tennis.",
                dogruCevap: "dogru"
            },
            {
                id: "19-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Training dauert zwei Stunden.",
                dogruCevap: "yanlis"
            },
            {
                id: "19-cs-1",
                tip: "coktan-secmeli",
                soru: "In welchem Verein ist Peter?",
                secenekler: ["In einem Fußballverein", "In einem Schwimmverein", "In einem Sportverein", "In einem Musikverein"],
                dogruIndex: 2
            },
            {
                id: "19-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert das Training?",
                secenekler: ["Eine halbe Stunde", "Eine Stunde", "Zwei Stunden", "Drei Stunden"],
                dogruIndex: 1
            },
            {
                id: "19-cs-3",
                tip: "coktan-secmeli",
                soru: "Mit wem spielt er am Wochenende?",
                secenekler: ["Mit seinem Vater", "Mit seinem Freund", "Mit seiner Schwester", "Mit seinem Bruder"],
                dogruIndex: 3
            },
            {
                id: "19-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie sind die neuen Tennisschuhe?",
                secenekler: ["Weiß und teuer", "Rot und billig", "Schwarz und alt", "Blau und neu"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 20,
        seviye: "kolay",
        baslik: "Mein Wochenende",
        metin: "Mein Wochenende ist immer entspannt. Am Samstag schlafe ich bis zehn Uhr. Dann mache ich ein langes Frühstück. Am Nachmittag treffe ich meine Freunde im Café. Wir reden und trinken Cappuccino. Am Sonntag bleibe ich zu Hause. Ich putze die Wohnung und koche das Mittagessen.",
        sorular: [
            {
                id: "20-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Wochenende ist entspannt.",
                dogruCevap: "dogru"
            },
            {
                id: "20-dy-2",
                tip: "dogru-yanlis",
                soru: "Am Samstag steht die Person um sechs Uhr auf.",
                dogruCevap: "yanlis"
            },
            {
                id: "20-dy-3",
                tip: "dogru-yanlis",
                soru: "Am Sonntag bleibt die Person zu Hause.",
                dogruCevap: "dogru"
            },
            {
                id: "20-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie lange schläft die Person am Samstag?",
                secenekler: ["Bis acht Uhr", "Bis neun Uhr", "Bis zehn Uhr", "Bis elf Uhr"],
                dogruIndex: 2
            },
            {
                id: "20-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo trifft sie ihre Freunde?",
                secenekler: ["Im Park", "Im Kino", "Im Restaurant", "Im Café"],
                dogruIndex: 3
            },
            {
                id: "20-cs-3",
                tip: "coktan-secmeli",
                soru: "Was trinken sie im Café?",
                secenekler: ["Wasser", "Cappuccino", "Cola", "Tee"],
                dogruIndex: 1
            },
            {
                id: "20-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht die Person am Sonntag?",
                secenekler: ["Sie geht einkaufen", "Sie putzt die Wohnung", "Sie besucht die Oma", "Sie arbeitet"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 21,
        seviye: "kolay",
        baslik: "Im Restaurant",
        metin: "Herr und Frau Schulz gehen am Abend in ein italienisches Restaurant. Der Kellner bringt die Speisekarte. Herr Schulz bestellt eine Pizza mit Salami. Frau Schulz möchte Spaghetti mit Tomatensoße. Sie trinken eine Flasche Rotwein. Das Essen schmeckt sehr gut. Sie geben dem Kellner Trinkgeld.",
        sorular: [
            {
                id: "21-dy-1",
                tip: "dogru-yanlis",
                soru: "Sie gehen in ein spanisches Restaurant.",
                dogruCevap: "yanlis"
            },
            {
                id: "21-dy-2",
                tip: "dogru-yanlis",
                soru: "Frau Schulz bestellt Spaghetti.",
                dogruCevap: "dogru"
            },
            {
                id: "21-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Essen schmeckt nicht gut.",
                dogruCevap: "yanlis"
            },
            {
                id: "21-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann gehen sie ins Restaurant?",
                secenekler: ["Am Morgen", "Am Mittag", "Am Nachmittag", "Am Abend"],
                dogruIndex: 3
            },
            {
                id: "21-cs-2",
                tip: "coktan-secmeli",
                soru: "Wer bringt die Speisekarte?",
                secenekler: ["Der Koch", "Der Kellner", "Der Manager", "Der Gast"],
                dogruIndex: 1
            },
            {
                id: "21-cs-3",
                tip: "coktan-secmeli",
                soru: "Was isst Herr Schulz?",
                secenekler: ["Einen Salat", "Pizza mit Salami", "Fisch", "Lasagne"],
                dogruIndex: 1
            },
            {
                id: "21-cs-4",
                tip: "coktan-secmeli",
                soru: "Was trinken sie?",
                secenekler: ["Wasser", "Bier", "Rotwein", "Apfelsaft"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 22,
        seviye: "kolay",
        baslik: "Der Winter",
        metin: "Es ist Dezember und der Winter ist da. Das Wetter ist sehr kalt. Es schneit oft. Die Straßen sind weiß. Die Kinder freuen sich sehr. Sie spielen draußen im Schnee und bauen einen Schneemann. Meine Hände sind kalt, deshalb trage ich Handschuhe und eine warme Mütze.",
        sorular: [
            {
                id: "22-dy-1",
                tip: "dogru-yanlis",
                soru: "Es ist Sommer.",
                dogruCevap: "yanlis"
            },
            {
                id: "22-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Wetter ist sehr kalt.",
                dogruCevap: "dogru"
            },
            {
                id: "22-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Kinder weinen.",
                dogruCevap: "yanlis"
            },
            {
                id: "22-cs-1",
                tip: "coktan-secmeli",
                soru: "Welcher Monat ist es?",
                secenekler: ["Januar", "Februar", "November", "Dezember"],
                dogruIndex: 3
            },
            {
                id: "22-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wetter?",
                secenekler: ["Warm", "Heiß", "Sehr kalt", "Regnerisch"],
                dogruIndex: 2
            },
            {
                id: "22-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machen die Kinder?",
                secenekler: ["Sie bauen einen Schneemann", "Sie machen Hausaufgaben", "Sie schlafen", "Sie essen Eis"],
                dogruIndex: 0
            },
            {
                id: "22-cs-4",
                tip: "coktan-secmeli",
                soru: "Was trägt die Person?",
                secenekler: ["Ein T-Shirt", "Einen Badeanzug", "Eine Sonnenbrille", "Handschuhe und eine Mütze"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 23,
        seviye: "kolay",
        baslik: "Die Geburtstagseinladung",
        metin: "Liebe Lisa, ich lade dich zu meinem Geburtstag ein. Die Party ist am Freitag um 19 Uhr. Ich feiere bei mir zu Hause in der Gartenstraße 5. Bitte sag mir bis Mittwoch Bescheid, ob du kommst. Ich freue mich auf dich! Deine Sarah.",
        sorular: [
            {
                id: "23-dy-1",
                tip: "dogru-yanlis",
                soru: "Lisa lädt Sarah ein.",
                dogruCevap: "yanlis"
            },
            {
                id: "23-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Party ist am Freitag.",
                dogruCevap: "dogru"
            },
            {
                id: "23-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Party ist um 19 Uhr.",
                dogruCevap: "dogru"
            },
            {
                id: "23-cs-1",
                tip: "coktan-secmeli",
                soru: "Wer hat Geburtstag?",
                secenekler: ["Lisa", "Sarah", "Anna", "Maria"],
                dogruIndex: 1
            },
            {
                id: "23-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo ist die Party?",
                secenekler: ["Im Café", "Bei Sarah zu Hause", "Im Park", "In der Schule"],
                dogruIndex: 1
            },
            {
                id: "23-cs-3",
                tip: "coktan-secmeli",
                soru: "In welcher Straße wohnt Sarah?",
                secenekler: ["Blumenstraße", "Hauptstraße", "Gartenstraße", "Bahnhofstraße"],
                dogruIndex: 2
            },
            {
                id: "23-cs-4",
                tip: "coktan-secmeli",
                soru: "Bis wann muss Lisa Bescheid sagen?",
                secenekler: ["Bis Montag", "Bis Dienstag", "Bis Mittwoch", "Bis Donnerstag"],
                dogruIndex: 2
            }
        ]
    },{
        id: 24,
        seviye: "kolay",
        baslik: "Auf dem Markt",
        metin: "Frau Bauer geht auf den Markt. Der Markt ist im Zentrum. Sie kauft frisches Obst und Gemüse. Sie braucht ein Kilo Äpfel, Tomaten und Kartoffeln. Der Verkäufer ist sehr freundlich. Das Gemüse kostet nicht viel. Frau Bauer packt alles in ihre Tasche.",
        sorular: [
            {
                id: "24-dy-1",
                tip: "dogru-yanlis",
                soru: "Frau Bauer geht in den Supermarkt.",
                dogruCevap: "yanlis"
            },
            {
                id: "24-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Markt ist im Zentrum.",
                dogruCevap: "dogru"
            },
            {
                id: "24-dy-3",
                tip: "dogru-yanlis",
                soru: "Frau Bauer kauft Fleisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "24-cs-1",
                tip: "coktan-secmeli",
                soru: "Was kauft Frau Bauer?",
                secenekler: ["Obst und Gemüse", "Kleidung", "Bücher", "Schuhe"],
                dogruIndex: 0
            },
            {
                id: "24-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viel Äpfel braucht sie?",
                secenekler: ["Zwei Kilo", "Ein Kilo", "Drei Kilo", "Ein halbes Kilo"],
                dogruIndex: 1
            },
            {
                id: "24-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist der Verkäufer?",
                secenekler: ["Böse", "Freundlich", "Traurig", "Müde"],
                dogruIndex: 1
            },
            {
                id: "24-cs-4",
                tip: "coktan-secmeli",
                soru: "Wohin packt sie das Gemüse?",
                secenekler: ["In das Auto", "In den Rucksack", "In die Tasche", "In die Box"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 25,
        seviye: "kolay",
        baslik: "Mein Tag",
        metin: "Mein Name ist Tobias. Ich stehe jeden Tag um sieben Uhr auf. Zuerst dusche ich und dann trinke ich einen Kaffee. Um acht Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite in einer Bank. Um siebzehn Uhr fahre ich nach Hause. Am Abend sehe ich fern.",
        sorular: [
            {
                id: "25-dy-1",
                tip: "dogru-yanlis",
                soru: "Tobias steht um sieben Uhr auf.",
                dogruCevap: "dogru"
            },
            {
                id: "25-dy-2",
                tip: "dogru-yanlis",
                soru: "Er trinkt am Morgen Tee.",
                dogruCevap: "yanlis"
            },
            {
                id: "25-dy-3",
                tip: "dogru-yanlis",
                soru: "Er arbeitet in einer Schule.",
                dogruCevap: "yanlis"
            },
            {
                id: "25-cs-1",
                tip: "coktan-secmeli",
                soru: "Was macht Tobias zuerst?",
                secenekler: ["Er isst", "Er duscht", "Er schläft", "Er liest"],
                dogruIndex: 1
            },
            {
                id: "25-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie fährt er zur Arbeit?",
                secenekler: ["Mit dem Auto", "Mit dem Zug", "Mit dem Bus", "Mit dem Fahrrad"],
                dogruIndex: 2
            },
            {
                id: "25-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo arbeitet Tobias?",
                secenekler: ["In einem Krankenhaus", "In einem Supermarkt", "In einer Bank", "In einem Restaurant"],
                dogruIndex: 2
            },
            {
                id: "25-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann fährt er nach Hause?",
                secenekler: ["Um 15 Uhr", "Um 16 Uhr", "Um 17 Uhr", "Um 18 Uhr"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 26,
        seviye: "kolay",
        baslik: "Meine Katze",
        metin: "Ich habe eine Katze. Sie heißt Mimi. Mimi ist klein und grau. Sie schläft gerne auf dem Sofa im Wohnzimmer. Am Morgen hat sie Hunger. Ich gebe ihr Katzenfutter und Milch. Danach spielt sie mit einem kleinen Ball. Mimi ist sehr süß.",
        sorular: [
            {
                id: "26-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Katze heißt Mimi.",
                dogruCevap: "dogru"
            },
            {
                id: "26-dy-2",
                tip: "dogru-yanlis",
                soru: "Mimi ist groß und schwarz.",
                dogruCevap: "yanlis"
            },
            {
                id: "26-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie schläft auf dem Sofa.",
                dogruCevap: "dogru"
            },
            {
                id: "26-cs-1",
                tip: "coktan-secmeli",
                soru: "Welche Farbe hat Mimi?",
                secenekler: ["Weiß", "Schwarz", "Grau", "Braun"],
                dogruIndex: 2
            },
            {
                id: "26-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo schläft Mimi?",
                secenekler: ["Im Schlafzimmer", "In der Küche", "Im Wohnzimmer", "Im Bad"],
                dogruIndex: 2
            },
            {
                id: "26-cs-3",
                tip: "coktan-secmeli",
                soru: "Was isst Mimi am Morgen?",
                secenekler: ["Fisch", "Katzenfutter", "Brot", "Käse"],
                dogruIndex: 1
            },
            {
                id: "26-cs-4",
                tip: "coktan-secmeli",
                soru: "Womit spielt die Katze?",
                secenekler: ["Mit einem Schuh", "Mit einem Buch", "Mit einem Ball", "Mit einem Stift"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 27,
        seviye: "kolay",
        baslik: "Ein neues Auto",
        metin: "Herr Schmidt kauft heute ein neues Auto. Sein altes Auto ist kaputt. Das neue Auto ist ein Volkswagen und es ist rot. Es ist sehr schnell und modern. Herr Schmidt fährt sofort zu seiner Frau. Sie machen zusammen einen Ausflug ans Meer.",
        sorular: [
            {
                id: "27-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Schmidt kauft ein Fahrrad.",
                dogruCevap: "yanlis"
            },
            {
                id: "27-dy-2",
                tip: "dogru-yanlis",
                soru: "Das altes Auto ist kaputt.",
                dogruCevap: "dogru"
            },
            {
                id: "27-dy-3",
                tip: "dogru-yanlis",
                soru: "Das neue Auto ist blau.",
                dogruCevap: "yanlis"
            },
            {
                id: "27-cs-1",
                tip: "coktan-secmeli",
                soru: "Welche Farbe hat das neue Auto?",
                secenekler: ["Rot", "Blau", "Schwarz", "Weiß"],
                dogruIndex: 0
            },
            {
                id: "27-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie ist das neue Auto?",
                secenekler: ["Langsam und alt", "Schnell und modern", "Klein und kaputt", "Groß und teuer"],
                dogruIndex: 1
            },
            {
                id: "27-cs-3",
                tip: "coktan-secmeli",
                soru: "Zu wem fährt Herr Schmidt sofort?",
                secenekler: ["Zu seinem Freund", "Zu seiner Mutter", "Zu seiner Frau", "Zu seinem Bruder"],
                dogruIndex: 2
            },
            {
                id: "27-cs-4",
                tip: "coktan-secmeli",
                soru: "Wohin machen sie einen Ausflug?",
                secenekler: ["In die Stadt", "In die Berge", "In den Wald", "Ans Meer"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 28,
        seviye: "kolay",
        baslik: "Kochen mit Freunden",
        metin: "Am Samstagabend kommen Freunde zu Besuch. Wir kochen zusammen das Abendessen. Wir machen Nudeln mit Tomatensoße und einen großen Salat. Stefan schneidet die Tomaten und Julia wäscht den Salat. Später essen wir alle zusammen am großen Tisch. Es ist sehr lecker.",
        sorular: [
            {
                id: "28-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Freunde kommen am Sonntag.",
                dogruCevap: "yanlis"
            },
            {
                id: "28-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie machen Nudeln mit Tomatensoße.",
                dogruCevap: "dogru"
            },
            {
                id: "28-dy-3",
                tip: "dogru-yanlis",
                soru: "Stefan schneidet die Kartoffeln.",
                dogruCevap: "yanlis"
            },
            {
                id: "28-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann kommen die Freunde?",
                secenekler: ["Am Freitagmorgen", "Am Samstagabend", "Am Sonntagnachmittag", "Am Montagabend"],
                dogruIndex: 1
            },
            {
                id: "28-cs-2",
                tip: "coktan-secmeli",
                soru: "Was machen sie zusammen?",
                secenekler: ["Spielen", "Fernsehen", "Kochen", "Schlafen"],
                dogruIndex: 2
            },
            {
                id: "28-cs-3",
                tip: "coktan-secmeli",
                soru: "Wer wäscht den Salat?",
                secenekler: ["Stefan", "Julia", "Maria", "Max"],
                dogruIndex: 1
            },
            {
                id: "28-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo essen sie?",
                secenekler: ["Auf dem Sofa", "Auf dem Balkon", "Im Garten", "Am großen Tisch"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 29,
        seviye: "kolay",
        baslik: "In der Bibliothek",
        metin: "Lisa ist Studentin und lernt für ihre Prüfung. Sie geht jeden Tag in die Bibliothek. Dort ist es sehr ruhig. Sie hat einen Laptop und viele Bücher auf dem Tisch. Um eins geht sie in die Mensa und isst zu Mittag. Danach lernt sie weiter.",
        sorular: [
            {
                id: "29-dy-1",
                tip: "dogru-yanlis",
                soru: "Lisa ist Lehrerin.",
                dogruCevap: "yanlis"
            },
            {
                id: "29-dy-2",
                tip: "dogru-yanlis",
                soru: "In der Bibliothek ist es ruhig.",
                dogruCevap: "dogru"
            },
            {
                id: "29-dy-3",
                tip: "dogru-yanlis",
                soru: "Lisa hat einen Laptop auf dem Tisch.",
                dogruCevap: "dogru"
            },
            {
                id: "29-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum geht Lisa in die Bibliothek?",
                secenekler: ["Sie liest Romane", "Sie trifft Freunde", "Sie lernt für eine Prüfung", "Sie schläft"],
                dogruIndex: 2
            },
            {
                id: "29-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie oft geht sie in die Bibliothek?",
                secenekler: ["Einmal pro Woche", "Jeden Tag", "Am Wochenende", "Nie"],
                dogruIndex: 1
            },
            {
                id: "29-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo isst sie zu Mittag?",
                secenekler: ["Im Restaurant", "Im Café", "Zu Hause", "In der Mensa"],
                dogruIndex: 3
            },
            {
                id: "29-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann isst sie zu Mittag?",
                secenekler: ["Um zwölf", "Um eins", "Um zwei", "Um drei"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 30,
        seviye: "kolay",
        baslik: "Das Wetter heute",
        metin: "Heute ist das Wetter nicht gut. Der Himmel ist grau und es regnet stark. Man braucht einen Regenschirm. Zum Glück ist es nicht sehr kalt. Am Nachmittag bleibt Familie Meier zu Hause. Sie spielen ein Brettspiel im Wohnzimmer und trinken warmen Kakao.",
        sorular: [
            {
                id: "30-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Wetter ist heute sehr gut.",
                dogruCevap: "yanlis"
            },
            {
                id: "30-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Himmel ist grau.",
                dogruCevap: "dogru"
            },
            {
                id: "30-dy-3",
                tip: "dogru-yanlis",
                soru: "Es ist sehr kalt.",
                dogruCevap: "yanlis"
            },
            {
                id: "30-cs-1",
                tip: "coktan-secmeli",
                soru: "Was macht das Wetter?",
                secenekler: ["Es schneit", "Es ist sonnig", "Es regnet stark", "Es ist windig"],
                dogruIndex: 2
            },
            {
                id: "30-cs-2",
                tip: "coktan-secmeli",
                soru: "Was braucht man heute?",
                secenekler: ["Eine Sonnenbrille", "Einen Regenschirm", "Einen Badeanzug", "Ein Fahrrad"],
                dogruIndex: 1
            },
            {
                id: "30-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo bleibt Familie Meier am Nachmittag?",
                secenekler: ["Im Park", "Im Kino", "Zu Hause", "Im Supermarkt"],
                dogruIndex: 2
            },
            {
                id: "30-cs-4",
                tip: "coktan-secmeli",
                soru: "Was trinken sie?",
                secenekler: ["Kaffee", "Tee", "Kakao", "Cola"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 31,
        seviye: "kolay",
        baslik: "Die neue Wohnung",
        metin: "Maria und Paul haben eine neue Wohnung. Die Wohnung liegt im dritten Stock. Es gibt leider keinen Aufzug. Sie müssen die Treppe laufen. Die Wohnung hat vier Zimmer und einen großen Balkon. Die Wände sind weiß. Am Wochenende kaufen sie neue Möbel.",
        sorular: [
            {
                id: "31-dy-1",
                tip: "dogru-yanlis",
                soru: "Die neue Wohnung liegt im ersten Stock.",
                dogruCevap: "yanlis"
            },
            {
                id: "31-dy-2",
                tip: "dogru-yanlis",
                soru: "Es gibt einen Aufzug.",
                dogruCevap: "yanlis"
            },
            {
                id: "31-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Wohnung hat vier Zimmer.",
                dogruCevap: "dogru"
            },
            {
                id: "31-cs-1",
                tip: "coktan-secmeli",
                soru: "In welchem Stock liegt die Wohnung?",
                secenekler: ["Im ersten Stock", "Im zweiten Stock", "Im dritten Stock", "Im vierten Stock"],
                dogruIndex: 2
            },
            {
                id: "31-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie laufen sie nach oben?",
                secenekler: ["Mit dem Aufzug", "Mit der Rolltreppe", "Über die Treppe", "Sie fliegen"],
                dogruIndex: 2
            },
            {
                id: "31-cs-3",
                tip: "coktan-secmeli",
                soru: "Welche Farbe haben die Wände?",
                secenekler: ["Rot", "Grün", "Weiß", "Blau"],
                dogruIndex: 2
            },
            {
                id: "31-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen sie am Wochenende?",
                secenekler: ["Sie machen Urlaub", "Sie putzen die Fenster", "Sie kaufen neue Möbel", "Sie gehen spazieren"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 32,
        seviye: "kolay",
        baslik: "Beim Bäcker",
        metin: "Jeden Morgen geht Herr Klein zum Bäcker. Der Bäcker ist direkt an der Ecke. Herr Klein kauft fünf frische Brötchen und ein Stück Kuchen für seine Frau. Der Bäcker sagt immer freundlich „Guten Morgen!“. Das Brot riecht sehr gut. Dann geht Herr Klein nach Hause zum Frühstück.",
        sorular: [
            {
                id: "32-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Klein geht jeden Morgen zum Supermarkt.",
                dogruCevap: "yanlis"
            },
            {
                id: "32-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Bäcker ist an der Ecke.",
                dogruCevap: "dogru"
            },
            {
                id: "32-dy-3",
                tip: "dogru-yanlis",
                soru: "Herr Klein kauft sechs Brötchen.",
                dogruCevap: "yanlis"
            },
            {
                id: "32-cs-1",
                tip: "coktan-secmeli",
                soru: "Wer geht jeden Morgen zum Bäcker?",
                secenekler: ["Frau Klein", "Der Nachbar", "Herr Klein", "Das Kind"],
                dogruIndex: 2
            },
            {
                id: "32-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viele Brötchen kauft Herr Klein?",
                secenekler: ["Drei", "Vier", "Fünf", "Sechs"],
                dogruIndex: 2
            },
            {
                id: "32-cs-3",
                tip: "coktan-secmeli",
                soru: "Was kauft er für seine Frau?",
                secenekler: ["Einen Kaffee", "Ein Stück Kuchen", "Eine Brezel", "Ein Brot"],
                dogruIndex: 1
            },
            {
                id: "32-cs-4",
                tip: "coktan-secmeli",
                soru: "Was sagt der Bäcker immer?",
                secenekler: ["Hallo", "Guten Morgen", "Auf Wiedersehen", "Gute Nacht"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 33,
        seviye: "kolay",
        baslik: "Mein Freund Lukas",
        metin: "Mein bester Freund heißt Lukas. Er ist zwanzig Jahre alt und studiert Medizin. Lukas kommt aus Österreich, aber er lebt jetzt in Berlin. Er ist sehr groß und hat braune Haare. Wir spielen oft zusammen Basketball im Park. Lukas ist ein lustiger Mensch.",
        sorular: [
            {
                id: "33-dy-1",
                tip: "dogru-yanlis",
                soru: "Lukas ist neunzehn Jahre alt.",
                dogruCevap: "yanlis"
            },
            {
                id: "33-dy-2",
                tip: "dogru-yanlis",
                soru: "Lukas studiert Medizin.",
                dogruCevap: "dogru"
            },
            {
                id: "33-dy-3",
                tip: "dogru-yanlis",
                soru: "Lukas hat blonde Haare.",
                dogruCevap: "yanlis"
            },
            {
                id: "33-cs-1",
                tip: "coktan-secmeli",
                soru: "Woher kommt Lukas?",
                secenekler: ["Aus der Schweiz", "Aus Deutschland", "Aus Österreich", "Aus Italien"],
                dogruIndex: 2
            },
            {
                id: "33-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo lebt Lukas jetzt?",
                secenekler: ["In Wien", "In Berlin", "In München", "In Hamburg"],
                dogruIndex: 1
            },
            {
                id: "33-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie sieht Lukas aus?",
                secenekler: ["Klein mit blonden Haaren", "Groß mit schwarzen Haaren", "Groß mit braunen Haaren", "Klein mit roten Haaren"],
                dogruIndex: 2
            },
            {
                id: "33-cs-4",
                tip: "coktan-secmeli",
                soru: "Welchen Sport machen sie zusammen?",
                secenekler: ["Fußball", "Tennis", "Schwimmen", "Basketball"],
                dogruIndex: 3
            }
        ]
    },{
        id: 34,
        seviye: "kolay",
        baslik: "Der Wintermantel",
        metin: "Es ist kalt. Julia braucht einen warmen Wintermantel. Sie geht in die Stadt. Im Schaufenster sieht sie einen roten Mantel. Er ist sehr schön, aber teuer. Julia probiert den Mantel an. Er passt perfekt. Sie kauft den Mantel und einen warmen Schal.",
        sorular: [
            {
                id: "34-dy-1",
                tip: "dogru-yanlis",
                soru: "Julia braucht einen Wintermantel.",
                dogruCevap: "dogru"
            },
            {
                id: "34-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Mantel ist billig.",
                dogruCevap: "yanlis"
            },
            {
                id: "34-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Mantel passt perfekt.",
                dogruCevap: "dogru"
            },
            {
                id: "34-cs-1",
                tip: "coktan-secmeli",
                soru: "Welche Farbe hat der Mantel?",
                secenekler: ["Rot", "Grün", "Blau", "Schwarz"],
                dogruIndex: 0
            },
            {
                id: "34-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo sieht sie den Mantel?",
                secenekler: ["Im Internet", "Im Schaufenster", "Bei einer Freundin", "Im Katalog"],
                dogruIndex: 1
            },
            {
                id: "34-cs-3",
                tip: "coktan-secmeli",
                soru: "Was kauft sie noch?",
                secenekler: ["Handschuhe", "Eine Mütze", "Einen warmen Schal", "Schuhe"],
                dogruIndex: 2
            },
            {
                id: "34-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wetter?",
                secenekler: ["Warm", "Kalt", "Heiß", "Sonnig"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 35,
        seviye: "kolay",
        baslik: "Im Wald",
        metin: "Herr Müller hat einen großen Hund. Der Hund heißt Rex. Jeden Nachmittag gehen sie zusammen in den Wald. Rex rennt schnell und spielt mit Stöcken. Manchmal sehen sie andere Hunde. Herr Müller wirft einen Ball und Rex bringt ihn zurück. Beide sind nach dem Spaziergang müde.",
        sorular: [
            {
                id: "35-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Müller hat eine Katze.",
                dogruCevap: "yanlis"
            },
            {
                id: "35-dy-2",
                tip: "dogru-yanlis",
                soru: "Rex ist groß.",
                dogruCevap: "dogru"
            },
            {
                id: "35-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie gehen jeden Morgen in den Wald.",
                dogruCevap: "yanlis"
            },
            {
                id: "35-cs-1",
                tip: "coktan-secmeli",
                soru: "Wohin gehen sie?",
                secenekler: ["In den Park", "In die Stadt", "An den Strand", "In den Wald"],
                dogruIndex: 3
            },
            {
                id: "35-cs-2",
                tip: "coktan-secmeli",
                soru: "Womit spielt Rex?",
                secenekler: ["Mit einem Ball und Stöcken", "Mit einem Schuh", "Mit einem Knochen", "Mit einem anderen Hund"],
                dogruIndex: 0
            },
            {
                id: "35-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie rennt Rex?",
                secenekler: ["Langsam", "Schnell", "Nicht gern", "Leise"],
                dogruIndex: 1
            },
            {
                id: "35-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie sind sie nach dem Spaziergang?",
                secenekler: ["Glücklich", "Müde", "Hungrig", "Traurig"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 36,
        seviye: "kolay",
        baslik: "Der Schulbus",
        metin: "Emma geht in die vierte Klasse. Jeden Morgen wartet sie an der Bushaltestelle. Der Schulbus kommt pünktlich um sieben Uhr dreißig. Emma steigt ein und sucht einen Platz. Sie sitzt neben ihrer Freundin Mia. Sie sprechen über die Hausaufgaben. Nach zwanzig Minuten sind sie an der Schule.",
        sorular: [
            {
                id: "36-dy-1",
                tip: "dogru-yanlis",
                soru: "Emma geht in die fünfte Klasse.",
                dogruCevap: "yanlis"
            },
            {
                id: "36-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Schulbus ist pünktlich.",
                dogruCevap: "dogru"
            },
            {
                id: "36-dy-3",
                tip: "dogru-yanlis",
                soru: "Emma sitzt neben Mia.",
                dogruCevap: "dogru"
            },
            {
                id: "36-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann kommt der Bus?",
                secenekler: ["Um 7:00 Uhr", "Um 7:15 Uhr", "Um 7:30 Uhr", "Um 8:00 Uhr"],
                dogruIndex: 2
            },
            {
                id: "36-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo wartet Emma?",
                secenekler: ["Zu Hause", "An der Bushaltestelle", "In der Schule", "Im Park"],
                dogruIndex: 1
            },
            {
                id: "36-cs-3",
                tip: "coktan-secmeli",
                soru: "Worüber sprechen die Freundinnen?",
                secenekler: ["Über den Film", "Über das Wochenende", "Über die Hausaufgaben", "Über das Wetter"],
                dogruIndex: 2
            },
            {
                id: "36-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Fahrt?",
                secenekler: ["10 Minuten", "20 Minuten", "30 Minuten", "40 Minuten"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 37,
        seviye: "kolay",
        baslik: "Hausarbeit",
        metin: "Am Samstag hat Familie Schmidt viel zu tun. Der Vater saugt das Wohnzimmer und wäscht das Auto. Die Mutter putzt das Badezimmer und wäscht die Kleidung. Die Kinder helfen auch. Sie räumen ihre Zimmer auf und bringen den Müll raus. Am Abend ist das Haus sauber und alle sind zufrieden.",
        sorular: [
            {
                id: "37-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Familie arbeitet am Samstag.",
                dogruCevap: "dogru"
            },
            {
                id: "37-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Mutter saugt das Wohnzimmer.",
                dogruCevap: "yanlis"
            },
            {
                id: "37-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Kinder helfen nicht.",
                dogruCevap: "yanlis"
            },
            {
                id: "37-cs-1",
                tip: "coktan-secmeli",
                soru: "Was macht der Vater?",
                secenekler: ["Er kocht das Essen", "Er wäscht das Auto und saugt", "Er putzt das Bad", "Er schläft"],
                dogruIndex: 1
            },
            {
                id: "37-cs-2",
                tip: "coktan-secmeli",
                soru: "Wer putzt das Badezimmer?",
                secenekler: ["Die Mutter", "Der Vater", "Die Kinder", "Die Oma"],
                dogruIndex: 0
            },
            {
                id: "37-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machen die Kinder?",
                secenekler: ["Sie waschen das Auto", "Sie saugen", "Sie bringen den Müll raus", "Sie putzen das Bad"],
                dogruIndex: 2
            },
            {
                id: "37-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie ist das Haus am Abend?",
                secenekler: ["Schmutzig", "Sauber", "Kalt", "Dunkel"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 38,
        seviye: "kolay",
        baslik: "Die Bäckerei",
        metin: "Neben meinem Haus gibt es eine kleine Bäckerei. Es riecht dort immer nach frischem Brot. Ich gehe am Sonntagmorgen dorthin. Ich kaufe drei Croissants, zwei Brötchen und ein Stück Kuchen. Die Bäckersfrau ist sehr nett und gibt mir oft ein kleines Plätzchen geschenkt.",
        sorular: [
            {
                id: "38-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Bäckerei ist groß.",
                dogruCevap: "yanlis"
            },
            {
                id: "38-dy-2",
                tip: "dogru-yanlis",
                soru: "Ich gehe am Sonntagmorgen in die Bäckerei.",
                dogruCevap: "dogru"
            },
            {
                id: "38-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Bäckersfrau ist nett.",
                dogruCevap: "dogru"
            },
            {
                id: "38-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo ist die Bäckerei?",
                secenekler: ["Im Zentrum", "Neben meinem Haus", "Weit weg", "Im Supermarkt"],
                dogruIndex: 1
            },
            {
                id: "38-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viele Croissants kaufe ich?",
                secenekler: ["Zwei", "Drei", "Vier", "Fünf"],
                dogruIndex: 1
            },
            {
                id: "38-cs-3",
                tip: "coktan-secmeli",
                soru: "Nach was riecht es in der Bäckerei?",
                secenekler: ["Nach Kaffee", "Nach Schokolade", "Nach frischem Brot", "Nach Käse"],
                dogruIndex: 2
            },
            {
                id: "38-cs-4",
                tip: "coktan-secmeli",
                soru: "Was gibt die Bäckersfrau mir oft geschenkt?",
                secenekler: ["Einen Kaffee", "Ein Brötchen", "Ein kleines Plätzchen", "Ein Stück Kuchen"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 39,
        seviye: "kolay",
        baslik: "Der Ausflug",
        metin: "Das Wetter ist sonnig und warm. Tom und seine Freunde machen einen Ausflug an den See. Sie fahren mit ihren Fahrrädern. Die Fahrt dauert eine halbe Stunde. Am See schwimmen sie im kalten Wasser und spielen Volleyball. Später grillen sie Würstchen und essen Kartoffelsalat.",
        sorular: [
            {
                id: "39-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Wetter ist schlecht.",
                dogruCevap: "yanlis"
            },
            {
                id: "39-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie fahren mit dem Auto.",
                dogruCevap: "yanlis"
            },
            {
                id: "39-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie grillen Würstchen.",
                dogruCevap: "dogru"
            },
            {
                id: "39-cs-1",
                tip: "coktan-secmeli",
                soru: "Wohin machen sie einen Ausflug?",
                secenekler: ["In die Berge", "An den See", "In den Wald", "In die Stadt"],
                dogruIndex: 1
            },
            {
                id: "39-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Fahrt?",
                secenekler: ["Eine Stunde", "Eine halbe Stunde", "Zehn Minuten", "Zwei Stunden"],
                dogruIndex: 1
            },
            {
                id: "39-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wasser?",
                secenekler: ["Warm", "Heiß", "Kalt", "Schmutzig"],
                dogruIndex: 2
            },
            {
                id: "39-cs-4",
                tip: "coktan-secmeli",
                soru: "Was essen sie zum Würstchen?",
                secenekler: ["Nudeln", "Pommes", "Kartoffelsalat", "Brot"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 40,
        seviye: "kolay",
        baslik: "Ein ruhiger Abend",
        metin: "Es ist acht Uhr am Abend. Sarah ist allein zu Hause. Sie macht das Licht aus und zündet eine Kerze an. Sie hört leise Musik und trinkt eine Tasse Kamillentee. Auf dem Sofa liest sie ein spannendes Buch. Um zehn Uhr ist sie müde und geht ins Bett.",
        sorular: [
            {
                id: "40-dy-1",
                tip: "dogru-yanlis",
                soru: "Sarah ist mit Freunden zu Hause.",
                dogruCevap: "yanlis"
            },
            {
                id: "40-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie trinkt Kaffee.",
                dogruCevap: "yanlis"
            },
            {
                id: "40-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Buch ist spannend.",
                dogruCevap: "dogru"
            },
            {
                id: "40-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie spät ist es?",
                secenekler: ["Sieben Uhr", "Acht Uhr", "Neun Uhr", "Zehn Uhr"],
                dogruIndex: 1
            },
            {
                id: "40-cs-2",
                tip: "coktan-secmeli",
                soru: "Was zündet Sarah an?",
                secenekler: ["Den Kamin", "Eine Zigarette", "Eine Kerze", "Das Licht"],
                dogruIndex: 2
            },
            {
                id: "40-cs-3",
                tip: "coktan-secmeli",
                soru: "Was liest sie?",
                secenekler: ["Eine Zeitung", "Ein Magazin", "Einen Brief", "Ein Buch"],
                dogruIndex: 3
            },
            {
                id: "40-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann geht sie ins Bett?",
                secenekler: ["Um acht Uhr", "Um neun Uhr", "Um zehn Uhr", "Um elf Uhr"],
                dogruIndex: 2
            }
        ]
    },{
        id: 104,
        seviye: "orta",
        baslik: "Ein Wochenende in den Bergen",
        metin: "Familie Wagner fährt am Wochenende in die Berge. Sie nehmen den Zug, weil es bequemer ist. Die Fahrt dauert drei Stunden. In den Bergen wandern sie viel und machen ein Picknick. Am Abend sind sie sehr müde, aber glücklich. Sie übernachten in einer kleinen Hütte.",
        sorular: [
            {
                id: "104-dy-1",
                tip: "dogru-yanlis",
                soru: "Familie Wagner fährt mit dem Auto in die Berge.",
                dogruCevap: "yanlis"
            },
            {
                id: "104-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Zugfahrt dauert drei Stunden.",
                dogruCevap: "dogru"
            },
            {
                id: "104-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie schlafen in einem großen Hotel.",
                dogruCevap: "yanlis"
            },
            {
                id: "104-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum nehmen sie den Zug?",
                secenekler: ["Weil es schneller ist", "Weil sie kein Auto haben", "Weil es bequemer ist", "Weil es billig ist"],
                dogruIndex: 2
            },
            {
                id: "104-cs-2",
                tip: "coktan-secmeli",
                soru: "Was machen sie in den Bergen?",
                secenekler: ["Sie wandern und machen ein Picknick", "Sie schwimmen im See", "Sie fahren Ski", "Sie gehen einkaufen"],
                dogruIndex: 0
            },
            {
                id: "104-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie fühlen sie sich am Abend?",
                secenekler: ["Traurig", "Müde, aber glücklich", "Krank und gestresst", "Wütend"],
                dogruIndex: 1
            },
            {
                id: "104-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo übernachten sie?",
                secenekler: ["In einem Zelt", "Im Zug", "In einer kleinen Hütte", "Bei Freunden"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 105,
        seviye: "orta",
        baslik: "Der Sprachkurs",
        metin: "Maria besucht einen Spanischkurs an der Universität. Der Kurs findet zweimal pro Woche statt, am Dienstag und am Donnerstag. Es gibt fünfzehn Studenten in der Klasse. Der Lehrer kommt aus Madrid und erklärt die Grammatik sehr gut. Nach dem Unterricht trinken die Studenten oft zusammen einen Kaffee.",
        sorular: [
            {
                id: "105-dy-1",
                tip: "dogru-yanlis",
                soru: "Maria lernt Englisch an der Universität.",
                dogruCevap: "yanlis"
            },
            {
                id: "105-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Kurs ist am Dienstag und am Donnerstag.",
                dogruCevap: "dogru"
            },
            {
                id: "105-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Lehrer kommt aus Deutschland.",
                dogruCevap: "yanlis"
            },
            {
                id: "105-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie oft findet der Kurs statt?",
                secenekler: ["Jeden Tag", "Einmal pro Woche", "Zweimal pro Woche", "Am Wochenende"],
                dogruIndex: 2
            },
            {
                id: "105-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viele Studenten sind in der Klasse?",
                secenekler: ["Zehn", "Fünfzehn", "Zwanzig", "Fünfundzwanzig"],
                dogruIndex: 1
            },
            {
                id: "105-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht der Lehrer sehr gut?",
                secenekler: ["Er singt Lieder", "Er kocht spanisches Essen", "Er erklärt die Grammatik", "Er gibt viele Hausaufgaben"],
                dogruIndex: 2
            },
            {
                id: "105-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen die Studenten nach dem Unterricht?",
                secenekler: ["Sie trinken oft einen Kaffee", "Sie gehen sofort nach Hause", "Sie schreiben einen Test", "Sie arbeiten in der Bibliothek"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 106,
        seviye: "orta",
        baslik: "Ein Tag im Zoo",
        metin: "Heute ist ein wunderschöner Tag. Max und sein Vater gehen in den Zoo. Sie sehen viele Tiere: Elefanten, Tiger, Affen und Bären. Max mag die Affen am liebsten, weil sie so lustig sind. Zu Mittag essen sie Pommes mit Ketchup. Um sechzehn Uhr fahren sie mit dem Bus zurück.",
        sorular: [
            {
                id: "106-dy-1",
                tip: "dogru-yanlis",
                soru: "Max geht mit seiner Mutter in den Zoo.",
                dogruCevap: "yanlis"
            },
            {
                id: "106-dy-2",
                tip: "dogru-yanlis",
                soru: "Max findet die Affen am besten.",
                dogruCevap: "dogru"
            },
            {
                id: "106-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie fahren um sechzehn Uhr mit dem Zug zurück.",
                dogruCevap: "yanlis"
            },
            {
                id: "106-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wetter heute?",
                secenekler: ["Es regnet", "Es ist kalt", "Es ist ein wunderschöner Tag", "Es schneit"],
                dogruIndex: 2
            },
            {
                id: "106-cs-2",
                tip: "coktan-secmeli",
                soru: "Welche Tiere sehen sie?",
                secenekler: ["Nur Vögel und Fische", "Elefanten, Tiger, Affen und Bären", "Hunde und Katzen", "Pferde und Kühe"],
                dogruIndex: 1
            },
            {
                id: "106-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum mag Max die Affen?",
                secenekler: ["Weil sie gefährlich sind", "Weil sie so lustig sind", "Weil sie groß sind", "Weil sie schlafen"],
                dogruIndex: 1
            },
            {
                id: "106-cs-4",
                tip: "coktan-secmeli",
                soru: "Was essen sie zu Mittag?",
                secenekler: ["Pizza", "Ein Sandwich", "Pommes mit Ketchup", "Fisch"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 107,
        seviye: "orta",
        baslik: "Die neue Kollegin",
        metin: "Im Büro gibt es eine neue Kollegin. Sie heißt Sarah und kommt aus der Schweiz. Sarah arbeitet in der IT-Abteilung. Sie ist sehr freundlich und hilft allen bei Computerproblemen. In der Mittagspause isst sie oft mit den anderen Kollegen in der Kantine. Sie isst gerne vegetarisch.",
        sorular: [
            {
                id: "107-dy-1",
                tip: "dogru-yanlis",
                soru: "Die neue Kollegin heißt Sarah.",
                dogruCevap: "dogru"
            },
            {
                id: "107-dy-2",
                tip: "dogru-yanlis",
                soru: "Sarah kommt aus Österreich.",
                dogruCevap: "yanlis"
            },
            {
                id: "107-dy-3",
                tip: "dogru-yanlis",
                soru: "Sarah isst oft Fleisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "107-cs-1",
                tip: "coktan-secmeli",
                soru: "In welcher Abteilung arbeitet Sarah?",
                secenekler: ["Im Marketing", "In der Personalabteilung", "In der IT-Abteilung", "Im Verkauf"],
                dogruIndex: 2
            },
            {
                id: "107-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie ist Sarah?",
                secenekler: ["Sehr freundlich", "Oft müde", "Ziemlich laut", "Sehr unfreundlich"],
                dogruIndex: 0
            },
            {
                id: "107-cs-3",
                tip: "coktan-secmeli",
                soru: "Wobei hilft sie den anderen?",
                secenekler: ["Beim Aufräumen", "Bei Computerproblemen", "Beim Kochen", "Beim Übersetzen"],
                dogruIndex: 1
            },
            {
                id: "107-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo isst sie in der Mittagspause?",
                secenekler: ["Im Restaurant", "Im Park", "An ihrem Schreibtisch", "In der Kantine"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 108,
        seviye: "orta",
        baslik: "Ein Abend im Theater",
        metin: "Herr und Frau Müller haben heute einen besonderen Abend. Sie gehen ins Theater. Das Stück beginnt um 20 Uhr. Frau Müller trägt ein schönes, blaues Kleid und Herr Müller einen schwarzen Anzug. Das Theaterstück ist sehr interessant und dauert zwei Stunden. Danach trinken sie noch ein Glas Wein.",
        sorular: [
            {
                id: "108-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr und Frau Müller gehen heute ins Kino.",
                dogruCevap: "yanlis"
            },
            {
                id: "108-dy-2",
                tip: "dogru-yanlis",
                soru: "Frau Müller trägt ein blaues Kleid.",
                dogruCevap: "dogru"
            },
            {
                id: "108-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Theaterstück ist langweilig.",
                dogruCevap: "yanlis"
            },
            {
                id: "108-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann beginnt das Stück?",
                secenekler: ["Um 18 Uhr", "Um 19 Uhr", "Um 20 Uhr", "Um 21 Uhr"],
                dogruIndex: 2
            },
            {
                id: "108-cs-2",
                tip: "coktan-secmeli",
                soru: "Was trägt Herr Müller?",
                secenekler: ["Jeans und T-Shirt", "Einen schwarzen Anzug", "Einen braunen Mantel", "Eine kurze Hose"],
                dogruIndex: 1
            },
            {
                id: "108-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert das Theaterstück?",
                secenekler: ["Eine Stunde", "Zwei Stunden", "Drei Stunden", "Vier Stunden"],
                dogruIndex: 1
            },
            {
                id: "108-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen sie nach dem Theater?",
                secenekler: ["Sie essen Pizza", "Sie gehen sofort schlafen", "Sie trinken noch ein Glas Wein", "Sie spazieren im Park"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 109,
        seviye: "orta",
        baslik: "Der Umzug",
        metin: "Paul zieht heute um. Er hat eine neue Wohnung im Stadtzentrum gefunden. Seine Freunde helfen ihm beim Umzug. Sie tragen viele Kartons und Möbel in den zweiten Stock. Es ist sehr anstrengend. Am Ende bestellen sie Pizza, weil alle großen Hunger haben. Paul freut sich über seine neue Wohnung.",
        sorular: [
            {
                id: "109-dy-1",
                tip: "dogru-yanlis",
                soru: "Paul zieht auf das Land.",
                dogruCevap: "yanlis"
            },
            {
                id: "109-dy-2",
                tip: "dogru-yanlis",
                soru: "Seine Freunde helfen ihm.",
                dogruCevap: "dogru"
            },
            {
                id: "109-dy-3",
                tip: "dogru-yanlis",
                soru: "Die neue Wohnung ist im ersten Stock.",
                dogruCevap: "yanlis"
            },
            {
                id: "109-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo ist die neue Wohnung?",
                secenekler: ["In einem Dorf", "Im Stadtzentrum", "Am Stadtrand", "Im Ausland"],
                dogruIndex: 1
            },
            {
                id: "109-cs-2",
                tip: "coktan-secmeli",
                soru: "Was tragen die Freunde?",
                secenekler: ["Bücher und Kleidung", "Viele Kartons und Möbel", "Nur die Pizza", "Das Auto"],
                dogruIndex: 1
            },
            {
                id: "109-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist der Umzug?",
                secenekler: ["Sehr anstrengend", "Sehr einfach", "Ziemlich langweilig", "Sehr leise"],
                dogruIndex: 0
            },
            {
                id: "109-cs-4",
                tip: "coktan-secmeli",
                soru: "Warum bestellen sie Pizza?",
                secenekler: ["Weil sie keine Küche haben", "Weil Pizza billig ist", "Weil alle großen Hunger haben", "Weil heute Samstag ist"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 110,
        seviye: "orta",
        baslik: "Ein kranker Tag",
        metin: "Lena fühlt sich heute nicht gut. Sie hat Halsschmerzen und hustet viel. Deshalb geht sie nicht zur Arbeit. Sie ruft ihren Chef an und meldet sich krank. Dann macht sie sich einen heißen Tee mit Honig und legt sich wieder ins Bett. Sie hofft, dass sie morgen wieder gesund ist.",
        sorular: [
            {
                id: "110-dy-1",
                tip: "dogru-yanlis",
                soru: "Lena geht heute zur Arbeit.",
                dogruCevap: "yanlis"
            },
            {
                id: "110-dy-2",
                tip: "dogru-yanlis",
                soru: "Lena ruft ihren Chef an.",
                dogruCevap: "dogru"
            },
            {
                id: "110-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie trinkt Kaffee mit Milch.",
                dogruCevap: "yanlis"
            },
            {
                id: "110-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie fühlt sich Lena?",
                secenekler: ["Sehr gut", "Ein bisschen müde", "Sie fühlt sich nicht gut", "Sie ist sehr glücklich"],
                dogruIndex: 2
            },
            {
                id: "110-cs-2",
                tip: "coktan-secmeli",
                soru: "Welche Schmerzen hat Lena?",
                secenekler: ["Kopfschmerzen", "Halsschmerzen", "Bauchschmerzen", "Rückenschmerzen"],
                dogruIndex: 1
            },
            {
                id: "110-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht sie mit dem Tee?",
                secenekler: ["Sie tut Zitrone hinein", "Sie trinkt ihn kalt", "Sie tut Honig hinein", "Sie gibt ihn dem Chef"],
                dogruIndex: 2
            },
            {
                id: "110-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hofft Lena?",
                secenekler: ["Dass sie nicht arbeiten muss", "Dass sie morgen wieder gesund ist", "Dass sie Urlaub bekommt", "Dass der Tee schmeckt"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 111,
        seviye: "orta",
        baslik: "Einkaufen im Einkaufszentrum",
        metin: "Es regnet, also fahren Lisa und ihre Schwester ins Einkaufszentrum. Sie möchten neue Schuhe kaufen. In einem großen Schuhgeschäft probiert Lisa viele Paare an. Schließlich kauft sie braune Stiefel für den Winter. Danach essen sie ein Eis und schauen sich noch andere Geschäfte an.",
        sorular: [
            {
                id: "111-dy-1",
                tip: "dogru-yanlis",
                soru: "Es ist heute sehr sonnig.",
                dogruCevap: "yanlis"
            },
            {
                id: "111-dy-2",
                tip: "dogru-yanlis",
                soru: "Lisa und ihre Schwester möchten Schuhe kaufen.",
                dogruCevap: "dogru"
            },
            {
                id: "111-dy-3",
                tip: "dogru-yanlis",
                soru: "Lisa kauft schwarze Turnschuhe.",
                dogruCevap: "yanlis"
            },
            {
                id: "111-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum fahren sie ins Einkaufszentrum?",
                secenekler: ["Weil sie Hunger haben", "Weil es regnet", "Weil sie arbeiten müssen", "Weil sie einen Film sehen wollen"],
                dogruIndex: 1
            },
            {
                id: "111-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht Lisa im Schuhgeschäft?",
                secenekler: ["Sie probiert viele Paare an", "Sie spricht mit dem Verkäufer", "Sie liest ein Buch", "Sie kauft sofort das erste Paar"],
                dogruIndex: 0
            },
            {
                id: "111-cs-3",
                tip: "coktan-secmeli",
                soru: "Was für Stiefel kauft Lisa?",
                secenekler: ["Rote Stiefel", "Weiße Stiefel", "Braune Stiefel", "Graue Stiefel"],
                dogruIndex: 2
            },
            {
                id: "111-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen sie nach dem Schuhkauf?",
                secenekler: ["Sie fahren nach Hause", "Sie essen ein Eis", "Sie trinken Kaffee", "Sie gehen ins Kino"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 112,
        seviye: "orta",
        baslik: "Das Fitnessstudio",
        metin: "Jens möchte fit bleiben. Er geht dreimal in der Woche ins Fitnessstudio. Zuerst läuft er 20 Minuten auf dem Laufband zum Aufwärmen. Danach macht er Krafttraining. Das Training ist schwer, aber es macht ihm Spaß. Nach dem Sport duscht er sich und fährt zufrieden nach Hause.",
        sorular: [
            {
                id: "112-dy-1",
                tip: "dogru-yanlis",
                soru: "Jens geht jeden Tag ins Fitnessstudio.",
                dogruCevap: "yanlis"
            },
            {
                id: "112-dy-2",
                tip: "dogru-yanlis",
                soru: "Er läuft 20 Minuten auf dem Laufband.",
                dogruCevap: "dogru"
            },
            {
                id: "112-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Training ist sehr leicht für ihn.",
                dogruCevap: "yanlis"
            },
            {
                id: "112-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum geht Jens ins Fitnessstudio?",
                secenekler: ["Um Freunde zu treffen", "Um fit zu bleiben", "Um dort zu arbeiten", "Um zu duschen"],
                dogruIndex: 1
            },
            {
                id: "112-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht er zum Aufwärmen?",
                secenekler: ["Er schwimmt", "Er fährt Fahrrad", "Er läuft auf dem Laufband", "Er schläft"],
                dogruIndex: 2
            },
            {
                id: "112-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht er nach dem Aufwärmen?",
                secenekler: ["Er geht nach Hause", "Er macht Krafttraining", "Er isst etwas", "Er telefoniert"],
                dogruIndex: 1
            },
            {
                id: "112-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie fährt er nach Hause?",
                secenekler: ["Sehr müde und traurig", "Wütend", "Zufrieden", "Krank"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 113,
        seviye: "orta",
        baslik: "Die Autopanne",
        metin: "Herr Klein fährt zur Arbeit, aber plötzlich stoppt sein Auto. Er hat eine Autopanne auf der Landstraße. Er ruft den Mechaniker an. Der Mechaniker kommt nach 30 Minuten und repariert das Auto. Herr Klein kommt leider zu spät zur Arbeit. Sein Chef ist nicht glücklich, aber er versteht das Problem.",
        sorular: [
            {
                id: "113-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Auto von Herrn Klein ist kaputt.",
                dogruCevap: "dogru"
            },
            {
                id: "113-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Mechaniker kommt nach zwei Stunden.",
                dogruCevap: "yanlis"
            },
            {
                id: "113-dy-3",
                tip: "dogru-yanlis",
                soru: "Herr Klein ist pünktlich auf der Arbeit.",
                dogruCevap: "yanlis"
            },
            {
                id: "113-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo passiert die Autopanne?",
                secenekler: ["Im Stadtzentrum", "Vor seinem Haus", "Auf der Autobahn", "Auf der Landstraße"],
                dogruIndex: 3
            },
            {
                id: "113-cs-2",
                tip: "coktan-secmeli",
                soru: "Wen ruft Herr Klein an?",
                secenekler: ["Die Polizei", "Den Mechaniker", "Seine Frau", "Einen Freund"],
                dogruIndex: 1
            },
            {
                id: "113-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange wartet er auf den Mechaniker?",
                secenekler: ["10 Minuten", "20 Minuten", "30 Minuten", "Eine Stunde"],
                dogruIndex: 2
            },
            {
                id: "113-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie reagiert der Chef?",
                secenekler: ["Er ist sehr glücklich", "Er ist nicht glücklich, aber versteht das Problem", "Er feuert Herrn Klein", "Er lacht laut"],
                dogruIndex: 1
            }
        ]
    },{
        id: 114,
        seviye: "orta",
        baslik: "Das neue Restaurant",
        metin: "In der Stadt gibt es ein neues italienisches Restaurant. Anna und Tom gehen am Freitagabend dorthin. Das Restaurant ist sehr gemütlich und die Kellner sind nett. Tom bestellt eine Pizza mit Pilzen und Anna nimmt Spaghetti. Zum Nachtisch essen sie ein großes Eis. Alles schmeckt fantastisch.",
        sorular: [
            {
                id: "114-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Restaurant ist spanisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "114-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie gehen am Freitagabend dorthin.",
                dogruCevap: "dogru"
            },
            {
                id: "114-dy-3",
                tip: "dogru-yanlis",
                soru: "Tom bestellt Spaghetti.",
                dogruCevap: "yanlis"
            },
            {
                id: "114-cs-1",
                tip: "coktan-secmeli",
                soru: "Was für ein Restaurant ist neu in der Stadt?",
                secenekler: ["Ein deutsches Restaurant", "Ein italienisches Restaurant", "Ein türkisches Restaurant", "Ein französisches Restaurant"],
                dogruIndex: 1
            },
            {
                id: "114-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie ist das Restaurant?",
                secenekler: ["Sehr laut", "Zu teuer", "Sehr dunkel", "Sehr gemütlich"],
                dogruIndex: 3
            },
            {
                id: "114-cs-3",
                tip: "coktan-secmeli",
                soru: "Was bestellt Anna?",
                secenekler: ["Einen Salat", "Spaghetti", "Pizza mit Pilzen", "Fisch"],
                dogruIndex: 1
            },
            {
                id: "114-cs-4",
                tip: "coktan-secmeli",
                soru: "Was essen sie zum Nachtisch?",
                secenekler: ["Einen Kuchen", "Ein großes Eis", "Obst", "Schokolade"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 115,
        seviye: "orta",
        baslik: "Ein Geschenk für Oma",
        metin: "Omas Geburtstag ist nächste Woche. Klara möchte ein schönes Geschenk für sie kaufen. Sie geht in die Buchhandlung, weil Oma gerne liest. Klara findet einen spannenden Roman über einen Garten. Sie kauft auch eine schöne Karte und schreibt einen lieben Text. Oma wird sich sicher sehr freuen.",
        sorular: [
            {
                id: "115-dy-1",
                tip: "dogru-yanlis",
                soru: "Oma hat nächste Woche Geburtstag.",
                dogruCevap: "dogru"
            },
            {
                id: "115-dy-2",
                tip: "dogru-yanlis",
                soru: "Klara geht in den Supermarkt.",
                dogruCevap: "yanlis"
            },
            {
                id: "115-dy-3",
                tip: "dogru-yanlis",
                soru: "Oma liest gerne.",
                dogruCevap: "dogru"
            },
            {
                id: "115-cs-1",
                tip: "coktan-secmeli",
                soru: "Was sucht Klara?",
                secenekler: ["Ein neues Auto", "Einen neuen Mantel", "Ein Geschenk für Oma", "Ein Buch für sich selbst"],
                dogruIndex: 2
            },
            {
                id: "115-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum geht sie in die Buchhandlung?",
                secenekler: ["Weil sie dort arbeitet", "Weil Bücher billig sind", "Weil sie den Verkäufer kennt", "Weil Oma gerne liest"],
                dogruIndex: 3
            },
            {
                id: "115-cs-3",
                tip: "coktan-secmeli",
                soru: "Welches Buch kauft Klara?",
                secenekler: ["Ein Kochbuch", "Ein Geschichtsbuch", "Einen spannenden Roman", "Einen Reiseführer"],
                dogruIndex: 2
            },
            {
                id: "115-cs-4",
                tip: "coktan-secmeli",
                soru: "Was kauft sie noch?",
                secenekler: ["Blumen", "Eine schöne Karte", "Pralinen", "Tee"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 116,
        seviye: "orta",
        baslik: "Der verlorene Schlüssel",
        metin: "Herr Weber steht vor seiner Wohnung und findet seinen Schlüssel nicht. Er sucht in seiner Jacke und in seiner Tasche. Der Schlüssel ist weg! Er ruft seine Frau an, aber sie ist noch im Büro. Er muss eine Stunde im Treppenhaus warten. Endlich kommt seine Frau und öffnet die Tür.",
        sorular: [
            {
                id: "116-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Weber findet seinen Schlüssel nicht.",
                dogruCevap: "dogru"
            },
            {
                id: "116-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Schlüssel ist in seiner Jacke.",
                dogruCevap: "yanlis"
            },
            {
                id: "116-dy-3",
                tip: "dogru-yanlis",
                soru: "Seine Frau ist noch im Büro.",
                dogruCevap: "dogru"
            },
            {
                id: "116-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo steht Herr Weber?",
                secenekler: ["Vor der Arbeit", "Im Garten", "Vor seiner Wohnung", "An der Bushaltestelle"],
                dogruIndex: 2
            },
            {
                id: "116-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo sucht er den Schlüssel?",
                secenekler: ["Im Auto", "In seiner Jacke und Tasche", "Beim Nachbarn", "Auf dem Boden"],
                dogruIndex: 1
            },
            {
                id: "116-cs-3",
                tip: "coktan-secmeli",
                soru: "Wen ruft er an?",
                secenekler: ["Den Schlüsseldienst", "Die Polizei", "Seinen Chef", "Seine Frau"],
                dogruIndex: 3
            },
            {
                id: "116-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange muss er im Treppenhaus warten?",
                secenekler: ["Zehn Minuten", "Eine halbe Stunde", "Eine Stunde", "Zwei Stunden"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 117,
        seviye: "orta",
        baslik: "Urlaub in Italien",
        metin: "Letztes Jahr war Laura in Italien. Sie war für zwei Wochen in Rom. Sie hat viele Museen besucht und alte Gebäude gesehen. Das Wetter war jeden Tag heiß. Laura hat viel Pizza und Pasta gegessen. Sie hat auch viele Fotos gemacht und möchte nächstes Jahr wieder dorthin reisen.",
        sorular: [
            {
                id: "117-dy-1",
                tip: "dogru-yanlis",
                soru: "Laura war in Spanien.",
                dogruCevap: "yanlis"
            },
            {
                id: "117-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie war für zwei Wochen in Rom.",
                dogruCevap: "dogru"
            },
            {
                id: "117-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Wetter war sehr kalt.",
                dogruCevap: "yanlis"
            },
            {
                id: "117-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo war Laura letztes Jahr?",
                secenekler: ["In Frankreich", "In Italien", "In Deutschland", "In der Schweiz"],
                dogruIndex: 1
            },
            {
                id: "117-cs-2",
                tip: "coktan-secmeli",
                soru: "Was hat sie in Rom besucht?",
                secenekler: ["Strände", "Parks", "Museen und alte Gebäude", "Kinos"],
                dogruIndex: 2
            },
            {
                id: "117-cs-3",
                tip: "coktan-secmeli",
                soru: "Was hat sie viel gegessen?",
                secenekler: ["Pizza und Pasta", "Hamburger", "Fisch", "Suppe"],
                dogruIndex: 0
            },
            {
                id: "117-cs-4",
                tip: "coktan-secmeli",
                soru: "Was möchte sie nächstes Jahr machen?",
                secenekler: ["Zu Hause bleiben", "Wieder dorthin reisen", "Ein Auto kaufen", "Ein neues Haus suchen"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 118,
        seviye: "orta",
        baslik: "Ein Spaziergang im Schnee",
        metin: "Im Winter liegt viel Schnee im Park. David zieht seine warme Jacke und seine Mütze an. Er macht einen langen Spaziergang. Alles ist weiß und sehr ruhig. Er sieht Kinder, die mit einem Schlitten fahren. Nach dem Spaziergang geht er in ein Café und trinkt heiße Schokolade, um sich aufzuwärmen.",
        sorular: [
            {
                id: "118-dy-1",
                tip: "dogru-yanlis",
                soru: "Im Park liegt viel Schnee.",
                dogruCevap: "dogru"
            },
            {
                id: "118-dy-2",
                tip: "dogru-yanlis",
                soru: "David zieht eine kurze Hose an.",
                dogruCevap: "yanlis"
            },
            {
                id: "118-dy-3",
                tip: "dogru-yanlis",
                soru: "Im Park ist es sehr laut.",
                dogruCevap: "yanlis"
            },
            {
                id: "118-cs-1",
                tip: "coktan-secmeli",
                soru: "Was zieht David an?",
                secenekler: ["Einen Badeanzug", "Nur ein T-Shirt", "Warme Jacke und Mütze", "Einen Anzug"],
                dogruIndex: 2
            },
            {
                id: "118-cs-2",
                tip: "coktan-secmeli",
                soru: "Was sieht David im Park?",
                secenekler: ["Viele Hunde", "Kinder mit einem Schlitten", "Viele Autos", "Einen Bären"],
                dogruIndex: 1
            },
            {
                id: "118-cs-3",
                tip: "coktan-secmeli",
                soru: "Wohin geht er nach dem Spaziergang?",
                secenekler: ["In ein Café", "In den Supermarkt", "In die Schule", "Ins Kino"],
                dogruIndex: 0
            },
            {
                id: "118-cs-4",
                tip: "coktan-secmeli",
                soru: "Was trinkt David im Café?",
                secenekler: ["Kaltes Wasser", "Bier", "Heiße Schokolade", "Kaffee"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 119,
        seviye: "orta",
        baslik: "Ein neues Smartphone",
        metin: "Michaels altes Smartphone funktioniert nicht mehr richtig. Er kauft sich ein neues Modell im Elektronikmarkt. Das neue Smartphone hat einen großen Bildschirm und eine sehr gute Kamera. Michael macht sofort ein paar Fotos von seinem Hund. Am Abend lädt er seine Lieblings-Apps herunter und richtet das Telefon ein.",
        sorular: [
            {
                id: "119-dy-1",
                tip: "dogru-yanlis",
                soru: "Michaels altes Smartphone ist kaputt.",
                dogruCevap: "dogru"
            },
            {
                id: "119-dy-2",
                tip: "dogru-yanlis",
                soru: "Das neue Smartphone hat einen kleinen Bildschirm.",
                dogruCevap: "yanlis"
            },
            {
                id: "119-dy-3",
                tip: "dogru-yanlis",
                soru: "Michael macht sofort Fotos von seiner Katze.",
                dogruCevap: "yanlis"
            },
            {
                id: "119-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo kauft Michael das neue Smartphone?",
                secenekler: ["Im Supermarkt", "Im Elektronikmarkt", "Im Internet", "Von einem Freund"],
                dogruIndex: 1
            },
            {
                id: "119-cs-2",
                tip: "coktan-secmeli",
                soru: "Was ist besonders gut an dem neuen Handy?",
                secenekler: ["Die Kamera", "Der Preis", "Die Farbe", "Die Größe"],
                dogruIndex: 0
            },
            {
                id: "119-cs-3",
                tip: "coktan-secmeli",
                soru: "Wovon macht er Fotos?",
                secenekler: ["Von seinem Garten", "Von seiner Frau", "Von seinem Hund", "Von seinem Auto"],
                dogruIndex: 2
            },
            {
                id: "119-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht er am Abend?",
                secenekler: ["Er geht schlafen", "Er ruft jemanden an", "Er lädt seine Lieblings-Apps herunter", "Er bringt das Telefon zurück"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 120,
        seviye: "orta",
        baslik: "Besuch im Kunstmuseum",
        metin: "Am Sonntagvormittag besucht Herr Hoffmann das Kunstmuseum in der Stadt. Es gibt eine neue Ausstellung mit modernen Gemälden. Er findet die Farben sehr interessant. Er liest die Informationen zu den Bildern genau durch. Danach kauft er im Museumsshop eine Postkarte als Erinnerung. Der Besuch hat sich gelohnt.",
        sorular: [
            {
                id: "120-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Hoffmann geht am Sonntagabend ins Museum.",
                dogruCevap: "yanlis"
            },
            {
                id: "120-dy-2",
                tip: "dogru-yanlis",
                soru: "Es gibt eine neue Ausstellung.",
                dogruCevap: "dogru"
            },
            {
                id: "120-dy-3",
                tip: "dogru-yanlis",
                soru: "Er kauft ein großes Gemälde.",
                dogruCevap: "yanlis"
            },
            {
                id: "120-cs-1",
                tip: "coktan-secmeli",
                soru: "Welches Museum besucht er?",
                secenekler: ["Das Naturkundemuseum", "Das Kunstmuseum", "Das Technikmuseum", "Das Historische Museum"],
                dogruIndex: 1
            },
            {
                id: "120-cs-2",
                tip: "coktan-secmeli",
                soru: "Was findet er an den Bildern interessant?",
                secenekler: ["Die Größe", "Die Farben", "Die Tiere darauf", "Die Menschen darauf"],
                dogruIndex: 1
            },
            {
                id: "120-cs-3",
                tip: "coktan-secmeli",
                soru: "Was liest er genau durch?",
                secenekler: ["Die Zeitung", "Die Informationen zu den Bildern", "Die Preise", "Einen Brief"],
                dogruIndex: 1
            },
            {
                id: "120-cs-4",
                tip: "coktan-secmeli",
                soru: "Was kauft er im Museumsshop?",
                secenekler: ["Ein Buch", "Einen Stift", "Eine Postkarte", "Ein Poster"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 121,
        seviye: "orta",
        baslik: "Der Termin beim Zahnarzt",
        metin: "Sabine hat heute Nachmittag einen Termin beim Zahnarzt. Sie hat leichte Zahnschmerzen auf der rechten Seite. Im Wartezimmer liest sie eine Zeitschrift, weil sie etwas nervös ist. Der Zahnarzt untersucht den Zahn und macht eine kleine Füllung. Es dauert nur zwanzig Minuten. Sabine ist froh, dass es vorbei ist.",
        sorular: [
            {
                id: "121-dy-1",
                tip: "dogru-yanlis",
                soru: "Sabine hat einen Termin am Morgen.",
                dogruCevap: "yanlis"
            },
            {
                id: "121-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie hat starke Kopfschmerzen.",
                dogruCevap: "yanlis"
            },
            {
                id: "121-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Zahnarzt macht eine kleine Füllung.",
                dogruCevap: "dogru"
            },
            {
                id: "121-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo hat Sabine Schmerzen?",
                secenekler: ["Im Bauch", "Am Bein", "Am Zahn auf der rechten Seite", "Am Zahn auf der linken Seite"],
                dogruIndex: 2
            },
            {
                id: "121-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum liest sie eine Zeitschrift im Wartezimmer?",
                secenekler: ["Weil sie Zeit hat", "Weil sie nervös ist", "Weil sie müde ist", "Weil sie lesen lernen will"],
                dogruIndex: 1
            },
            {
                id: "121-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht der Zahnarzt?",
                secenekler: ["Er zieht den Zahn", "Er gibt ihr Tabletten", "Er macht eine kleine Füllung", "Er macht gar nichts"],
                dogruIndex: 2
            },
            {
                id: "121-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Behandlung?",
                secenekler: ["Fünf Minuten", "Zehn Minuten", "Zwanzig Minuten", "Eine Stunde"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 122,
        seviye: "orta",
        baslik: "Das Fußballspiel am Abend",
        metin: "Heute Abend läuft ein wichtiges Fußballspiel im Fernsehen. Felix hat drei Freunde zu sich nach Hause eingeladen. Sie bestellen zwei große Pizzen und trinken Limonade. Das Spiel ist sehr spannend. In der letzten Minute schießt ihre Lieblingsmannschaft ein Tor. Die Freunde jubeln laut und feiern den Sieg.",
        sorular: [
            {
                id: "122-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Fußballspiel läuft im Radio.",
                dogruCevap: "yanlis"
            },
            {
                id: "122-dy-2",
                tip: "dogru-yanlis",
                soru: "Felix hat drei Freunde eingeladen.",
                dogruCevap: "dogru"
            },
            {
                id: "122-dy-3",
                tip: "dogru-yanlis",
                soru: "Ihre Lieblingsmannschaft verliert das Spiel.",
                dogruCevap: "yanlis"
            },
            {
                id: "122-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo schauen sie das Spiel?",
                secenekler: ["Im Stadion", "In einer Bar", "Im Fernsehen bei Felix zu Hause", "Im Internet"],
                dogruIndex: 2
            },
            {
                id: "122-cs-2",
                tip: "coktan-secmeli",
                soru: "Was bestellen die Freunde?",
                secenekler: ["Burger", "Zwei große Pizzen", "Chinesisches Essen", "Salat"],
                dogruIndex: 1
            },
            {
                id: "122-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist das Spiel?",
                secenekler: ["Langweilig", "Sehr spannend", "Zu laut", "Sehr kurz"],
                dogruIndex: 1
            },
            {
                id: "122-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann fällt das Tor?",
                secenekler: ["In der ersten Minute", "Vor der Pause", "In der letzten Minute", "Nach dem Spiel"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 123,
        seviye: "orta",
        baslik: "Der erste Arbeitstag",
        metin: "Heute ist Annas erster Tag im neuen Job. Sie arbeitet jetzt in einer großen Bäckerei. Sie ist ein bisschen nervös, aber ihre neuen Kollegen sind sehr hilfsbereit. Der Chef zeigt ihr, wie man die Kaffeemaschine bedient und wo das Brot liegt. Anna lernt schnell. Um fünfzehn Uhr darf sie nach Hause gehen.",
        sorular: [
            {
                id: "123-dy-1",
                tip: "dogru-yanlis",
                soru: "Anna hat heute ihren letzten Arbeitstag.",
                dogruCevap: "yanlis"
            },
            {
                id: "123-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie arbeitet jetzt in einer Bäckerei.",
                dogruCevap: "dogru"
            },
            {
                id: "123-dy-3",
                tip: "dogru-yanlis",
                soru: "Ihre neuen Kollegen sind unfreundlich.",
                dogruCevap: "yanlis"
            },
            {
                id: "123-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie fühlt sich Anna am Anfang?",
                secenekler: ["Sehr wütend", "Traurig", "Ein bisschen nervös", "Müde"],
                dogruIndex: 2
            },
            {
                id: "123-cs-2",
                tip: "coktan-secmeli",
                soru: "Wer zeigt ihr die Kaffeemaschine?",
                secenekler: ["Ein Kunde", "Eine Kollegin", "Der Chef", "Ihr Freund"],
                dogruIndex: 2
            },
            {
                id: "123-cs-3",
                tip: "coktan-secmeli",
                soru: "Was lernt sie noch?",
                secenekler: ["Wie man Kuchen backt", "Wo das Brot liegt", "Wie man den Boden putzt", "Wo die Toilette ist"],
                dogruIndex: 1
            },
            {
                id: "123-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann darf sie nach Hause gehen?",
                secenekler: ["Um vierzehn Uhr", "Um fünfzehn Uhr", "Um sechzehn Uhr", "Um achtzehn Uhr"],
                dogruIndex: 1
            }
        ]
    },{
        id: 124,
        seviye: "orta",
        baslik: "Ein Ausflug mit dem Fahrrad",
        metin: "Am Samstag machen Lisa und ihr Bruder Jonas eine Fahrradtour. Das Wetter ist perfekt: Die Sonne scheint und es ist nicht zu heiß. Sie fahren am Fluss entlang bis zu einem kleinen Dorf. Dort machen sie eine Pause und essen ein Eis. Nach drei Stunden sind sie wieder zu Hause. Ihre Beine sind sehr müde, aber der Ausflug war toll.",
        sorular: [
            {
                id: "124-dy-1",
                tip: "dogru-yanlis",
                soru: "Lisa und Jonas machen am Sonntag eine Fahrradtour.",
                dogruCevap: "yanlis"
            },
            {
                id: "124-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie fahren am Fluss entlang.",
                dogruCevap: "dogru"
            },
            {
                id: "124-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie sind nach drei Stunden wieder zu Hause.",
                dogruCevap: "dogru"
            },
            {
                id: "124-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wetter?",
                secenekler: ["Es regnet stark", "Es ist perfekt", "Es ist viel zu heiß", "Es schneit"],
                dogruIndex: 1
            },
            {
                id: "124-cs-2",
                tip: "coktan-secmeli",
                soru: "Wohin fahren sie?",
                secenekler: ["In den Wald", "Zu einem Berg", "In die große Stadt", "Zu einem kleinen Dorf"],
                dogruIndex: 3
            },
            {
                id: "124-cs-3",
                tip: "coktan-secmeli",
                soru: "Was essen sie in der Pause?",
                secenekler: ["Ein Eis", "Einen Apfel", "Eine Pizza", "Ein Brot"],
                dogruIndex: 0
            },
            {
                id: "124-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie fühlen sie sich nach dem Ausflug?",
                secenekler: ["Krank", "Müde", "Hungrig", "Wütend"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 125,
        seviye: "orta",
        baslik: "Ein neues Haustier",
        metin: "Familie Schmidt hat seit gestern ein neues Haustier. Es ist ein kleiner Hund aus dem Tierheim. Der Hund heißt Max und hat braune Augen. Die Kinder spielen den ganzen Nachmittag mit ihm im Garten. Am Abend bekommt Max sein Futter und schläft schnell in seinem Korb ein. Alle sind sehr glücklich über den neuen Freund.",
        sorular: [
            {
                id: "125-dy-1",
                tip: "dogru-yanlis",
                soru: "Familie Schmidt hat eine neue Katze.",
                dogruCevap: "yanlis"
            },
            {
                id: "125-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Hund kommt aus dem Tierheim.",
                dogruCevap: "dogru"
            },
            {
                id: "125-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Hund heißt Max.",
                dogruCevap: "dogru"
            },
            {
                id: "125-cs-1",
                tip: "coktan-secmeli",
                soru: "Welche Augenfarbe hat Max?",
                secenekler: ["Blau", "Grün", "Schwarz", "Braun"],
                dogruIndex: 3
            },
            {
                id: "125-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo spielen die Kinder mit Max?",
                secenekler: ["Im Park", "Im Garten", "Im Wohnzimmer", "Auf der Straße"],
                dogruIndex: 1
            },
            {
                id: "125-cs-3",
                tip: "coktan-secmeli",
                soru: "Was bekommt Max am Abend?",
                secenekler: ["Sein Futter", "Ein neues Spielzeug", "Ein Bad", "Einen Knochen"],
                dogruIndex: 0
            },
            {
                id: "125-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo schläft der Hund ein?",
                secenekler: ["Auf dem Sofa", "Im Bett der Kinder", "In seinem Korb", "Auf dem Teppich"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 126,
        seviye: "orta",
        baslik: "Ein Wochenende in Berlin",
        metin: "Markus fährt für ein Wochenende nach Berlin. Er nimmt den Zug am Freitagmorgen. In Berlin trifft er einen alten Freund aus der Schulzeit. Sie besuchen das Brandenburger Tor und gehen abends in ein bekanntes Restaurant. Markus findet die Stadt sehr groß und etwas laut, aber auch sehr spannend. Am Sonntagabend fährt er zurück nach München.",
        sorular: [
            {
                id: "126-dy-1",
                tip: "dogru-yanlis",
                soru: "Markus fährt am Montag nach Berlin.",
                dogruCevap: "yanlis"
            },
            {
                id: "126-dy-2",
                tip: "dogru-yanlis",
                soru: "Er trifft einen alten Freund in Berlin.",
                dogruCevap: "dogru"
            },
            {
                id: "126-dy-3",
                tip: "dogru-yanlis",
                soru: "Er findet die Stadt sehr ruhig.",
                dogruCevap: "yanlis"
            },
            {
                id: "126-cs-1",
                tip: "coktan-secmeli",
                soru: "Womit fährt Markus nach Berlin?",
                secenekler: ["Mit dem Auto", "Mit dem Flugzeug", "Mit dem Zug", "Mit dem Bus"],
                dogruIndex: 2
            },
            {
                id: "126-cs-2",
                tip: "coktan-secmeli",
                soru: "Was besuchen die Freunde?",
                secenekler: ["Ein Museum", "Das Brandenburger Tor", "Einen Park", "Einen Zoo"],
                dogruIndex: 1
            },
            {
                id: "126-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie findet Markus die Stadt?",
                secenekler: ["Groß, laut und spannend", "Klein und langweilig", "Schmutzig und dunkel", "Sehr teuer"],
                dogruIndex: 0
            },
            {
                id: "126-cs-4",
                tip: "coktan-secmeli",
                soru: "Wohin fährt Markus am Sonntagabend zurück?",
                secenekler: ["Nach Hamburg", "Nach Frankfurt", "Nach München", "Nach Stuttgart"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 127,
        seviye: "orta",
        baslik: "Kochen für die Familie",
        metin: "Heute ist Muttertag und der Vater möchte für die Familie kochen. Er bereitet einen großen Braten mit Kartoffeln und Gemüse vor. Die Kinder helfen ihm und decken den Tisch schön. Um dreizehn Uhr ist das Essen fertig. Die Mutter freut sich sehr über die Überraschung. Das Essen schmeckt allen wunderbar.",
        sorular: [
            {
                id: "127-dy-1",
                tip: "dogru-yanlis",
                soru: "Heute ist Vatertag.",
                dogruCevap: "yanlis"
            },
            {
                id: "127-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Kinder decken den Tisch.",
                dogruCevap: "dogru"
            },
            {
                id: "127-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Essen ist um dreizehn Uhr fertig.",
                dogruCevap: "dogru"
            },
            {
                id: "127-cs-1",
                tip: "coktan-secmeli",
                soru: "Wer kocht das Essen?",
                secenekler: ["Die Mutter", "Der Vater", "Die Kinder", "Die Oma"],
                dogruIndex: 1
            },
            {
                id: "127-cs-2",
                tip: "coktan-secmeli",
                soru: "Was gibt es zu essen?",
                secenekler: ["Pizza und Salat", "Einen Braten mit Kartoffeln und Gemüse", "Fisch mit Reis", "Suppe"],
                dogruIndex: 1
            },
            {
                id: "127-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie findet die Mutter die Überraschung?",
                secenekler: ["Sie ist wütend", "Sie freut sich sehr", "Sie bemerkt es nicht", "Sie kocht lieber selbst"],
                dogruIndex: 1
            },
            {
                id: "127-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie schmeckt das Essen?",
                secenekler: ["Gar nicht gut", "Zu salzig", "Wunderbar", "Kalt"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 128,
        seviye: "orta",
        baslik: "Der Computerkurs",
        metin: "Herr Bauer ist sechzig Jahre alt und möchte besser mit dem Computer umgehen. Er besucht deshalb einen Kurs in der Volkshochschule. Der Kurs ist jeden Mittwochabend. Er lernt, wie man E-Mails schreibt und im Internet sucht. Die Lehrerin ist sehr geduldig und erklärt alles genau. Herr Bauer hat schon viel gelernt.",
        sorular: [
            {
                id: "128-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Bauer besucht einen Kochkurs.",
                dogruCevap: "yanlis"
            },
            {
                id: "128-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Kurs findet in der Volkshochschule statt.",
                dogruCevap: "dogru"
            },
            {
                id: "128-dy-3",
                tip: "dogru-yanlis",
                soru: "Herr Bauer lernt, wie man E-Mails schreibt.",
                dogruCevap: "dogru"
            },
            {
                id: "128-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie alt ist Herr Bauer?",
                secenekler: ["Fünfzig Jahre", "Sechzig Jahre", "Siebzig Jahre", "Achtzig Jahre"],
                dogruIndex: 1
            },
            {
                id: "128-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann ist der Kurs?",
                secenekler: ["Jeden Montagmorgen", "Jeden Mittwochabend", "Jeden Samstag", "Jeden Freitagnachmittag"],
                dogruIndex: 1
            },
            {
                id: "128-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist die Lehrerin?",
                secenekler: ["Sehr ungeduldig", "Böse", "Sehr geduldig", "Sehr schnell"],
                dogruIndex: 2
            },
            {
                id: "128-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht Herr Bauer im Internet?",
                secenekler: ["Er sucht nach Informationen", "Er spielt Spiele", "Er schaut Filme", "Er kauft Kleidung"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 129,
        seviye: "orta",
        baslik: "Probleme mit dem Internet",
        metin: "Seit zwei Tagen funktioniert das Internet in Julias Wohnung nicht. Sie kann keine E-Mails lesen und keine Filme schauen. Das ist ein großes Problem, weil sie oft im Homeoffice arbeitet. Sie ruft die Service-Hotline an. Ein Techniker kommt am nächsten Tag und repariert den Router in nur fünfzehn Minuten.",
        sorular: [
            {
                id: "129-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Internet funktioniert seit zwei Wochen nicht.",
                dogruCevap: "yanlis"
            },
            {
                id: "129-dy-2",
                tip: "dogru-yanlis",
                soru: "Julia arbeitet oft im Homeoffice.",
                dogruCevap: "dogru"
            },
            {
                id: "129-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Techniker repariert den Fernseher.",
                dogruCevap: "yanlis"
            },
            {
                id: "129-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum ist das kaputte Internet ein Problem?",
                secenekler: ["Weil sie E-Mails lesen muss", "Weil sie arbeiten muss", "Weil sie Musik hören will", "Weil sie chatten will"],
                dogruIndex: 1
            },
            {
                id: "129-cs-2",
                tip: "coktan-secmeli",
                soru: "Wen ruft Julia an?",
                secenekler: ["Ihren Freund", "Die Polizei", "Die Service-Hotline", "Den Vermieter"],
                dogruIndex: 2
            },
            {
                id: "129-cs-3",
                tip: "coktan-secmeli",
                soru: "Wann kommt der Techniker?",
                secenekler: ["In einer Stunde", "Am nächsten Tag", "Am Wochenende", "Nächste Woche"],
                dogruIndex: 1
            },
            {
                id: "129-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Reparatur?",
                secenekler: ["Zehn Minuten", "Fünfzehn Minuten", "Eine Stunde", "Zwei Stunden"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 130,
        seviye: "orta",
        baslik: "Ein Geschenk für den Freund",
        metin: "Thomas hat bald Geburtstag und seine Freundin Sarah sucht ein passendes Geschenk. Thomas liebt Musik und spielt gerne Gitarre. Sarah geht in ein Musikgeschäft im Stadtzentrum. Dort kauft sie zwei Konzertkarten für seine Lieblingsband. Die Karten waren nicht billig, aber sie weiß, dass Thomas sich riesig freuen wird.",
        sorular: [
            {
                id: "130-dy-1",
                tip: "dogru-yanlis",
                soru: "Sarah hat bald Geburtstag.",
                dogruCevap: "yanlis"
            },
            {
                id: "130-dy-2",
                tip: "dogru-yanlis",
                soru: "Thomas spielt gerne Gitarre.",
                dogruCevap: "dogru"
            },
            {
                id: "130-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Konzertkarten waren sehr billig.",
                dogruCevap: "yanlis"
            },
            {
                id: "130-cs-1",
                tip: "coktan-secmeli",
                soru: "Was sucht Sarah?",
                secenekler: ["Ein Auto", "Ein passendes Geschenk", "Eine neue Wohnung", "Einen Job"],
                dogruIndex: 1
            },
            {
                id: "130-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo kauft sie das Geschenk?",
                secenekler: ["Im Internet", "In einem Supermarkt", "In einem Buchladen", "In einem Musikgeschäft"],
                dogruIndex: 3
            },
            {
                id: "130-cs-3",
                tip: "coktan-secmeli",
                soru: "Was kauft sie?",
                secenekler: ["Eine neue Gitarre", "Eine CD", "Zwei Konzertkarten", "Kopfhörer"],
                dogruIndex: 2
            },
            {
                id: "130-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie wird Thomas reagieren?",
                secenekler: ["Er wird sich riesig freuen", "Er wird wütend sein", "Er wird traurig sein", "Er wird das Geschenk umtauschen"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 131,
        seviye: "orta",
        baslik: "Der Flohmarkt",
        metin: "Am Sonntagmorgen gehen Maria und ihr Bruder auf den Flohmarkt. Es gibt dort viele alte Dinge zu kaufen: Bücher, Kleidung, Möbel und Spielzeug. Maria findet eine schöne, alte Lampe für ihr Wohnzimmer. Ihr Bruder kauft drei gebrauchte Bücher für nur fünf Euro. Nach dem Einkaufen trinken sie noch einen Kaffee.",
        sorular: [
            {
                id: "131-dy-1",
                tip: "dogru-yanlis",
                soru: "Maria und ihr Bruder gehen in ein Einkaufszentrum.",
                dogruCevap: "yanlis"
            },
            {
                id: "131-dy-2",
                tip: "dogru-yanlis",
                soru: "Maria findet eine Lampe.",
                dogruCevap: "dogru"
            },
            {
                id: "131-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Bücher kosten fünfzig Euro.",
                dogruCevap: "yanlis"
            },
            {
                id: "131-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann gehen sie auf den Flohmarkt?",
                secenekler: ["Am Freitag", "Am Samstagnachmittag", "Am Sonntagmorgen", "Am Sonntagabend"],
                dogruIndex: 2
            },
            {
                id: "131-cs-2",
                tip: "coktan-secmeli",
                soru: "Was kann man auf dem Flohmarkt kaufen?",
                secenekler: ["Nur neue Dinge", "Alte Dinge wie Bücher und Möbel", "Autos und Motorräder", "Lebensmittel"],
                dogruIndex: 1
            },
            {
                id: "131-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie viele Bücher kauft der Bruder?",
                secenekler: ["Zwei", "Drei", "Vier", "Fünf"],
                dogruIndex: 1
            },
            {
                id: "131-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen sie nach dem Einkaufen?",
                secenekler: ["Sie fahren sofort nach Hause", "Sie gehen essen", "Sie trinken einen Kaffee", "Sie gehen ins Kino"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 132,
        seviye: "orta",
        baslik: "Im Supermarkt arbeiten",
        metin: "Kevin ist Student und braucht Geld für sein Studium. Er arbeitet deshalb am Wochenende in einem Supermarkt. Seine Schicht beginnt um acht Uhr morgens. Er muss Regale einräumen und manchmal an der Kasse sitzen. Die Arbeit ist anstrengend, weil er viel stehen muss. Aber die Kollegen sind nett.",
        sorular: [
            {
                id: "132-dy-1",
                tip: "dogru-yanlis",
                soru: "Kevin arbeitet in einer Schule.",
                dogruCevap: "yanlis"
            },
            {
                id: "132-dy-2",
                tip: "dogru-yanlis",
                soru: "Kevins Schicht beginnt um 8 Uhr.",
                dogruCevap: "dogru"
            },
            {
                id: "132-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Kollegen von Kevin sind unfreundlich.",
                dogruCevap: "yanlis"
            },
            {
                id: "132-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum arbeitet Kevin?",
                secenekler: ["Weil er Geld für sein Studium braucht", "Weil er viel Freizeit hat", "Weil er Supermärkte mag", "Weil es sein Hobby ist"],
                dogruIndex: 0
            },
            {
                id: "132-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann arbeitet Kevin?",
                secenekler: ["Jeden Tag", "Nur am Abend", "Am Wochenende", "In den Ferien"],
                dogruIndex: 2
            },
            {
                id: "132-cs-3",
                tip: "coktan-secmeli",
                soru: "Was sind seine Aufgaben?",
                secenekler: ["Er putzt den Boden", "Er räumt Regale ein und sitzt an der Kasse", "Er kocht für die Mitarbeiter", "Er fährt einen LKW"],
                dogruIndex: 1
            },
            {
                id: "132-cs-4",
                tip: "coktan-secmeli",
                soru: "Warum ist die Arbeit anstrengend?",
                secenekler: ["Weil er viel stehen muss", "Weil er viel laufen muss", "Weil er schwer heben muss", "Weil es sehr kalt ist"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 133,
        seviye: "orta",
        baslik: "Die Renovierung",
        metin: "Familie Wagner renoviert ihr Wohnzimmer. Sie streichen die Wände in einer hellen Farbe, nämlich hellblau. Der Vater kauft auch einen neuen, weichen Teppich. Die Kinder helfen dabei, die alten Möbel aus dem Zimmer zu tragen. Es gibt viel Staub und Arbeit, aber nach zwei Tagen ist alles fertig.",
        sorular: [
            {
                id: "133-dy-1",
                tip: "dogru-yanlis",
                soru: "Familie Wagner renoviert die Küche.",
                dogruCevap: "yanlis"
            },
            {
                id: "133-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Wände werden hellblau gestrichen.",
                dogruCevap: "dogru"
            },
            {
                id: "133-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Renovierung dauert eine Woche.",
                dogruCevap: "yanlis"
            },
            {
                id: "133-cs-1",
                tip: "coktan-secmeli",
                soru: "Was kauft der Vater?",
                secenekler: ["Einen neuen Fernseher", "Ein neues Sofa", "Einen neuen, weichen Teppich", "Eine Lampe"],
                dogruIndex: 2
            },
            {
                id: "133-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie helfen die Kinder?",
                secenekler: ["Sie streichen die Wände", "Sie tragen die alten Möbel hinaus", "Sie kaufen Farbe", "Sie putzen den Teppich"],
                dogruIndex: 1
            },
            {
                id: "133-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Renovierung?",
                secenekler: ["Einen Tag", "Zwei Tage", "Drei Tage", "Vier Tage"],
                dogruIndex: 1
            },
            {
                id: "133-cs-4",
                tip: "coktan-secmeli",
                soru: "Was gibt es bei der Arbeit viel?",
                secenekler: ["Lärm und Spaß", "Geld", "Staub und Arbeit", "Hunger"],
                dogruIndex: 2
            }
        ]
    },{
        id: 134,
        seviye: "orta",
        baslik: "Ein spannender Film",
        metin: "Heute Abend gehen Lukas und seine Freundin ins Kino. Sie sehen einen neuen Actionfilm. Lukas kauft die Tickets online, damit sie nicht warten müssen. Im Kino kaufen sie Popcorn und zwei große Colas. Der Film ist sehr spannend, aber ein bisschen laut. Nach dem Film gehen sie noch kurz spazieren und sprechen über die Schauspieler.",
        sorular: [
            {
                id: "134-dy-1",
                tip: "dogru-yanlis",
                soru: "Lukas und seine Freundin gehen ins Theater.",
                dogruCevap: "yanlis"
            },
            {
                id: "134-dy-2",
                tip: "dogru-yanlis",
                soru: "Lukas kauft die Tickets online.",
                dogruCevap: "dogru"
            },
            {
                id: "134-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Film ist sehr langweilig.",
                dogruCevap: "yanlis"
            },
            {
                id: "134-cs-1",
                tip: "coktan-secmeli",
                soru: "Was für einen Film sehen sie?",
                secenekler: ["Einen Liebesfilm", "Einen Actionfilm", "Einen Horrorfilm", "Einen alten Film"],
                dogruIndex: 1
            },
            {
                id: "134-cs-2",
                tip: "coktan-secmeli",
                soru: "Was kaufen sie im Kino?",
                secenekler: ["Pizza und Wasser", "Chips und Bier", "Popcorn und Cola", "Eis und Kaffee"],
                dogruIndex: 2
            },
            {
                id: "134-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist der Film?",
                secenekler: ["Spannend, aber ein bisschen laut", "Langweilig und leise", "Sehr kurz", "Nicht gut"],
                dogruIndex: 0
            },
            {
                id: "134-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen sie nach dem Film?",
                secenekler: ["Sie gehen sofort schlafen", "Sie gehen in ein Restaurant", "Sie gehen kurz spazieren", "Sie fahren mit dem Bus"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 135,
        seviye: "orta",
        baslik: "Beim Augenarzt",
        metin: "Herr Fischer kann nicht mehr gut lesen. Die Buchstaben sind unscharf. Er macht einen Termin beim Augenarzt. Der Arzt untersucht seine Augen mit einer speziellen Maschine. Er sagt: 'Sie brauchen eine Brille zum Lesen.' Herr Fischer geht danach zum Optiker und sucht eine moderne Brille aus. Sie ist blau und steht ihm sehr gut.",
        sorular: [
            {
                id: "135-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Fischer kann nicht mehr gut hören.",
                dogruCevap: "yanlis"
            },
            {
                id: "135-dy-2",
                tip: "dogru-yanlis",
                soru: "Er braucht eine Brille.",
                dogruCevap: "dogru"
            },
            {
                id: "135-dy-3",
                tip: "dogru-yanlis",
                soru: "Herr Fischer kauft eine rote Brille.",
                dogruCevap: "yanlis"
            },
            {
                id: "135-cs-1",
                tip: "coktan-secmeli",
                soru: "Welches Problem hat Herr Fischer?",
                secenekler: ["Er hat Kopfschmerzen", "Er kann nicht gut laufen", "Er kann nicht mehr gut lesen", "Er hat Zahnschmerzen"],
                dogruIndex: 2
            },
            {
                id: "135-cs-2",
                tip: "coktan-secmeli",
                soru: "Zu welchem Arzt geht er?",
                secenekler: ["Zum Zahnarzt", "Zum Augenarzt", "Zum Kinderarzt", "Zum Tierarzt"],
                dogruIndex: 1
            },
            {
                id: "135-cs-3",
                tip: "coktan-secmeli",
                soru: "Wohin geht er nach dem Arzt?",
                secenekler: ["Zum Bäcker", "Nach Hause", "Zum Optiker", "Zur Apotheke"],
                dogruIndex: 2
            },
            {
                id: "135-cs-4",
                tip: "coktan-secmeli",
                soru: "Welche Farbe hat die neue Brille?",
                secenekler: ["Blau", "Schwarz", "Grau", "Grün"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 136,
        seviye: "orta",
        baslik: "Das Hotel am Strand",
        metin: "Familie Berger verbringt ihren Urlaub in Spanien. Sie wohnen in einem schönen Hotel direkt am Strand. Ihr Zimmer ist im fünften Stock und hat einen Balkon mit Meerblick. Das Frühstücksbuffet ist riesig. Es gibt frisches Obst, Brötchen, Eier und Kaffee. Jeden Morgen essen sie viel, bevor sie ans Meer gehen.",
        sorular: [
            {
                id: "136-dy-1",
                tip: "dogru-yanlis",
                soru: "Familie Berger macht Urlaub in Italien.",
                dogruCevap: "yanlis"
            },
            {
                id: "136-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Hotel liegt direkt am Strand.",
                dogruCevap: "dogru"
            },
            {
                id: "136-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Zimmer hat einen Balkon.",
                dogruCevap: "dogru"
            },
            {
                id: "136-cs-1",
                tip: "coktan-secmeli",
                soru: "In welchem Stock ist das Zimmer?",
                secenekler: ["Im ersten Stock", "Im dritten Stock", "Im fünften Stock", "Im zehnten Stock"],
                dogruIndex: 2
            },
            {
                id: "136-cs-2",
                tip: "coktan-secmeli",
                soru: "Was für eine Aussicht hat das Zimmer?",
                secenekler: ["Auf die Berge", "Meerblick", "Auf die Stadt", "Auf den Garten"],
                dogruIndex: 1
            },
            {
                id: "136-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist das Frühstücksbuffet?",
                secenekler: ["Riesig", "Sehr klein", "Nicht gut", "Ziemlich teuer"],
                dogruIndex: 0
            },
            {
                id: "136-cs-4",
                tip: "coktan-secmeli",
                soru: "Was essen sie zum Frühstück?",
                secenekler: ["Pizza und Pasta", "Suppe", "Obst, Brötchen und Eier", "Fisch"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 137,
        seviye: "orta",
        baslik: "Die Geburtstagsparty",
        metin: "Morgen wird Julian fünfundzwanzig Jahre alt. Er plant eine große Party in seinem Garten. Er kauft Getränke, Fleisch für den Grill und viele Snacks. Seine Schwester hilft ihm beim Dekorieren. Sie hängen bunte Lampions in die Bäume. Am Abend kommen zwanzig Gäste. Sie bringen Geschenke mit und feiern bis spät in die Nacht.",
        sorular: [
            {
                id: "137-dy-1",
                tip: "dogru-yanlis",
                soru: "Julian wird dreißig Jahre alt.",
                dogruCevap: "yanlis"
            },
            {
                id: "137-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Party findet im Garten statt.",
                dogruCevap: "dogru"
            },
            {
                id: "137-dy-3",
                tip: "dogru-yanlis",
                soru: "Seine Schwester hilft ihm beim Dekorieren.",
                dogruCevap: "dogru"
            },
            {
                id: "137-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie alt wird Julian?",
                secenekler: ["20", "22", "25", "28"],
                dogruIndex: 2
            },
            {
                id: "137-cs-2",
                tip: "coktan-secmeli",
                soru: "Was kauft er für die Party?",
                secenekler: ["Eine Torte", "Getränke, Fleisch und Snacks", "Nur Wasser", "Neue Möbel"],
                dogruIndex: 1
            },
            {
                id: "137-cs-3",
                tip: "coktan-secmeli",
                soru: "Was hängen sie in die Bäume?",
                secenekler: ["Bilder", "Jacken", "Bunte Lampions", "Kleine Lampen"],
                dogruIndex: 2
            },
            {
                id: "137-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie viele Gäste kommen am Abend?",
                secenekler: ["Zehn", "Fünfzehn", "Zwanzig", "Fünfundzwanzig"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 138,
        seviye: "orta",
        baslik: "Der Weg zur Arbeit",
        metin: "Jeden Morgen fährt Claudia mit der U-Bahn zur Arbeit. Sie muss um sieben Uhr das Haus verlassen. An der Station kauft sie schnell eine Zeitung. Die Fahrt dauert zwanzig Minuten. In der U-Bahn liest sie die Nachrichten oder hört Musik. Sie steigt am Hauptbahnhof aus und läuft noch fünf Minuten bis zum Büro.",
        sorular: [
            {
                id: "138-dy-1",
                tip: "dogru-yanlis",
                soru: "Claudia fährt mit dem Auto zur Arbeit.",
                dogruCevap: "yanlis"
            },
            {
                id: "138-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie kauft an der Station eine Zeitung.",
                dogruCevap: "dogru"
            },
            {
                id: "138-dy-3",
                tip: "dogru-yanlis",
                soru: "Die U-Bahn-Fahrt dauert eine Stunde.",
                dogruCevap: "yanlis"
            },
            {
                id: "138-cs-1",
                tip: "coktan-secmeli",
                soru: "Um wie viel Uhr verlässt sie das Haus?",
                secenekler: ["Um sechs Uhr", "Um halb sieben", "Um sieben Uhr", "Um acht Uhr"],
                dogruIndex: 2
            },
            {
                id: "138-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Fahrt mit der U-Bahn?",
                secenekler: ["Zehn Minuten", "Zwanzig Minuten", "Dreißig Minuten", "Vierzig Minuten"],
                dogruIndex: 1
            },
            {
                id: "138-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht Claudia in der U-Bahn?",
                secenekler: ["Sie schläft", "Sie isst Frühstück", "Sie liest die Nachrichten oder hört Musik", "Sie telefoniert"],
                dogruIndex: 2
            },
            {
                id: "138-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo steigt sie aus?",
                secenekler: ["Am Flughafen", "Am Hauptbahnhof", "Im Park", "An der Schule"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 139,
        seviye: "orta",
        baslik: "Die Sprachschule",
        metin: "Max möchte nächstes Jahr nach Frankreich reisen. Deshalb lernt er jetzt Französisch. Er besucht einen Kurs in einer Sprachschule. Der Kurs findet zweimal pro Woche abends statt. Die Grammatik ist schwer, aber Max lernt jeden Tag neue Vokabeln. Er hört auch oft französische Lieder, um die Aussprache zu üben.",
        sorular: [
            {
                id: "139-dy-1",
                tip: "dogru-yanlis",
                soru: "Max möchte nach Italien reisen.",
                dogruCevap: "yanlis"
            },
            {
                id: "139-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Kurs findet zweimal pro Woche statt.",
                dogruCevap: "dogru"
            },
            {
                id: "139-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Grammatik ist sehr leicht.",
                dogruCevap: "yanlis"
            },
            {
                id: "139-cs-1",
                tip: "coktan-secmeli",
                soru: "Welche Sprache lernt Max?",
                secenekler: ["Englisch", "Spanisch", "Deutsch", "Französisch"],
                dogruIndex: 3
            },
            {
                id: "139-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann findet der Kurs statt?",
                secenekler: ["Morgens", "Abends", "Am Wochenende", "Mittags"],
                dogruIndex: 1
            },
            {
                id: "139-cs-3",
                tip: "coktan-secmeli",
                soru: "Was ist schwer in der Sprache?",
                secenekler: ["Das Lesen", "Die Vokabeln", "Die Grammatik", "Das Schreiben"],
                dogruIndex: 2
            },
            {
                id: "139-cs-4",
                tip: "coktan-secmeli",
                soru: "Warum hört Max oft Lieder?",
                secenekler: ["Weil er Musik mag", "Um die Aussprache zu üben", "Weil er tanzen will", "Um besser zu schlafen"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 140,
        seviye: "orta",
        baslik: "Ein leckerer Kuchen",
        metin: "Am Sonntag backt Oma Maria einen Apfelkuchen. Das ist das Lieblingsessen von ihrem Enkel Tim. Sie braucht Äpfel, Mehl, Zucker, Eier und Butter. Zuerst schneidet sie die Äpfel in kleine Stücke. Dann mischt sie den Teig und legt die Äpfel darauf. Der Kuchen backt eine Stunde im Ofen. Das ganze Haus riecht wunderbar süß.",
        sorular: [
            {
                id: "140-dy-1",
                tip: "dogru-yanlis",
                soru: "Oma Maria backt eine Pizza.",
                dogruCevap: "yanlis"
            },
            {
                id: "140-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Enkel heißt Tim.",
                dogruCevap: "dogru"
            },
            {
                id: "140-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Kuchen backt zwei Stunden im Ofen.",
                dogruCevap: "yanlis"
            },
            {
                id: "140-cs-1",
                tip: "coktan-secmeli",
                soru: "Was für einen Kuchen backt Oma?",
                secenekler: ["Einen Schokoladenkuchen", "Einen Apfelkuchen", "Einen Zitronenkuchen", "Einen Käsekuchen"],
                dogruIndex: 1
            },
            {
                id: "140-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht sie zuerst?",
                secenekler: ["Sie mischt den Teig", "Sie schneidet die Äpfel in kleine Stücke", "Sie schaltet den Ofen an", "Sie kauft Mehl"],
                dogruIndex: 1
            },
            {
                id: "140-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange backt der Kuchen?",
                secenekler: ["Eine halbe Stunde", "Eine Stunde", "Anderthalb Stunden", "Zwei Stunden"],
                dogruIndex: 1
            },
            {
                id: "140-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie riecht das Haus am Ende?",
                secenekler: ["Nach Käse", "Schlecht", "Wunderbar süß", "Nach Kaffee"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 141,
        seviye: "orta",
        baslik: "Der heiße Sommertag",
        metin: "Heute ist es extrem heiß. Das Thermometer zeigt vierunddreißig Grad. Niemand möchte draußen arbeiten. Die Kinder spielen im Garten mit Wasser, um sich abzukühlen. Die Eltern sitzen im Schatten und trinken eiskalte Limonade. Am Abend gibt es ein Sommergewitter. Danach ist die Luft endlich wieder frisch und angenehm.",
        sorular: [
            {
                id: "141-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Wetter ist heute sehr kalt.",
                dogruCevap: "yanlis"
            },
            {
                id: "141-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Kinder spielen mit Wasser.",
                dogruCevap: "dogru"
            },
            {
                id: "141-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Eltern trinken heißen Kaffee.",
                dogruCevap: "yanlis"
            },
            {
                id: "141-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie viel Grad zeigt das Thermometer?",
                secenekler: ["24 Grad", "30 Grad", "34 Grad", "40 Grad"],
                dogruIndex: 2
            },
            {
                id: "141-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo sitzen die Eltern?",
                secenekler: ["In der Sonne", "Im Haus", "Im Schatten", "Im Auto"],
                dogruIndex: 2
            },
            {
                id: "141-cs-3",
                tip: "coktan-secmeli",
                soru: "Was trinken die Eltern?",
                secenekler: ["Warmen Tee", "Bier", "Wasser", "Eiskalte Limonade"],
                dogruIndex: 3
            },
            {
                id: "141-cs-4",
                tip: "coktan-secmeli",
                soru: "Was passiert am Abend?",
                secenekler: ["Es schneit", "Es gibt ein Sommergewitter", "Es wird noch heißer", "Ein Film fängt an"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 142,
        seviye: "orta",
        baslik: "Ein neues Kleid",
        metin: "Sophie ist auf eine Hochzeit eingeladen. Sie braucht unbedingt ein neues Kleid. Sie geht mit ihrer besten Freundin ins Einkaufszentrum. Sie probiert viele Kleider an: rote, grüne und blaue. Schließlich kauft sie ein langes, dunkelblaues Kleid. Es sieht sehr elegant aus. Dazu kauft sie noch passende silberne Schuhe.",
        sorular: [
            {
                id: "142-dy-1",
                tip: "dogru-yanlis",
                soru: "Sophie ist auf einen Geburtstag eingeladen.",
                dogruCevap: "yanlis"
            },
            {
                id: "142-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie geht mit ihrer besten Freundin einkaufen.",
                dogruCevap: "dogru"
            },
            {
                id: "142-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie kauft goldene Schuhe.",
                dogruCevap: "yanlis"
            },
            {
                id: "142-cs-1",
                tip: "coktan-secmeli",
                soru: "Was braucht Sophie?",
                secenekler: ["Einen Mantel", "Eine Hose", "Ein neues Kleid", "Einen Hut"],
                dogruIndex: 2
            },
            {
                id: "142-cs-2",
                tip: "coktan-secmeli",
                soru: "Welche Farbe hat das Kleid, das sie kauft?",
                secenekler: ["Rot", "Grün", "Hellblau", "Dunkelblau"],
                dogruIndex: 3
            },
            {
                id: "142-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie sieht das neue Kleid aus?",
                secenekler: ["Sehr sportlich", "Sehr kurz", "Sehr elegant", "Sehr alt"],
                dogruIndex: 2
            },
            {
                id: "142-cs-4",
                tip: "coktan-secmeli",
                soru: "Was kauft sie noch zum Kleid?",
                secenekler: ["Eine Tasche", "Passende silberne Schuhe", "Eine Halskette", "Eine Jacke"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 143,
        seviye: "orta",
        baslik: "Ein gemütlicher Abend",
        metin: "Nach einem langen Arbeitstag kommt Herr Schulz müde nach Hause. Er duscht heiß und zieht bequeme Kleidung an. Er kocht sich eine schnelle Suppe zum Abendessen. Danach setzt er sich auf das Sofa und schaltet den Fernseher ein. Er schaut eine Dokumentation über Tiere in Afrika. Dabei schläft er langsam ein.",
        sorular: [
            {
                id: "143-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Schulz kommt sehr energisch nach Hause.",
                dogruCevap: "yanlis"
            },
            {
                id: "143-dy-2",
                tip: "dogru-yanlis",
                soru: "Er zieht bequeme Kleidung an.",
                dogruCevap: "dogru"
            },
            {
                id: "143-dy-3",
                tip: "dogru-yanlis",
                soru: "Er schaut eine Komödie.",
                dogruCevap: "yanlis"
            },
            {
                id: "143-cs-1",
                tip: "coktan-secmeli",
                soru: "Was macht er nach der Arbeit zuerst?",
                secenekler: ["Er isst etwas", "Er duscht heiß", "Er geht schlafen", "Er ruft Freunde an"],
                dogruIndex: 1
            },
            {
                id: "143-cs-2",
                tip: "coktan-secmeli",
                soru: "Was kocht er sich zum Abendessen?",
                secenekler: ["Eine schnelle Suppe", "Nudeln", "Einen Braten", "Pizza"],
                dogruIndex: 0
            },
            {
                id: "143-cs-3",
                tip: "coktan-secmeli",
                soru: "Worüber ist die Dokumentation im Fernsehen?",
                secenekler: ["Über schnelle Autos", "Über die Geschichte", "Über Tiere in Afrika", "Über das Weltall"],
                dogruIndex: 2
            },
            {
                id: "143-cs-4",
                tip: "coktan-secmeli",
                soru: "Was passiert am Ende?",
                secenekler: ["Er geht aus", "Er liest ein Buch", "Er schläft langsam ein", "Er schaltet den Fernseher aus"],
                dogruIndex: 2
            }
        ]
    },{
        id: 144,
        seviye: "orta",
        baslik: "Der verlorene Koffer",
        metin: "Thomas reist nach Paris. Am Flughafen wartet er auf seinen Koffer. Aber der Koffer kommt nicht. Er geht zum Informationsschalter. Die Frau dort ist freundlich und sucht im Computer. Sein Koffer ist leider noch in München. Thomas bekommt ihn am nächsten Tag ins Hotel geliefert.",
        sorular: [
            {
                id: "144-dy-1",
                tip: "dogru-yanlis",
                soru: "Thomas reist nach Paris.",
                dogruCevap: "dogru"
            },
            {
                id: "144-dy-2",
                tip: "dogru-yanlis",
                soru: "Er findet seinen Koffer sofort.",
                dogruCevap: "yanlis"
            },
            {
                id: "144-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Koffer ist noch in München.",
                dogruCevap: "dogru"
            },
            {
                id: "144-cs-1",
                tip: "coktan-secmeli",
                soru: "Worauf wartet Thomas am Flughafen?",
                secenekler: ["Auf ein Taxi", "Auf seinen Freund", "Auf seinen Koffer", "Auf einen Kaffee"],
                dogruIndex: 2
            },
            {
                id: "144-cs-2",
                tip: "coktan-secmeli",
                soru: "Wohin geht er?",
                secenekler: ["Zum Informationsschalter", "Ins Restaurant", "Zur Toilette", "Nach Hause"],
                dogruIndex: 0
            },
            {
                id: "144-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist die Frau am Schalter?",
                secenekler: ["Böse", "Müde", "Freundlich", "Traurig"],
                dogruIndex: 2
            },
            {
                id: "144-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann bekommt Thomas den Koffer?",
                secenekler: ["In einer Stunde", "Am nächsten Tag", "Nächste Woche", "Nie"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 145,
        seviye: "orta",
        baslik: "Ein neuer Haarschnitt",
        metin: "Katja möchte eine Veränderung. Sie geht am Nachmittag zum Friseur. Ihre Haare sind sehr lang, aber sie möchte einen kurzen Haarschnitt. Der Friseur wäscht und schneidet ihre Haare. Danach föhnt er sie. Katja sieht in den Spiegel und ist begeistert. Die neue Frisur sieht toll aus und kostet vierzig Euro.",
        sorular: [
            {
                id: "145-dy-1",
                tip: "dogru-yanlis",
                soru: "Katja geht am Morgen zum Friseur.",
                dogruCevap: "yanlis"
            },
            {
                id: "145-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie möchte einen kurzen Haarschnitt.",
                dogruCevap: "dogru"
            },
            {
                id: "145-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Frisur kostet fünfzig Euro.",
                dogruCevap: "yanlis"
            },
            {
                id: "145-cs-1",
                tip: "coktan-secmeli",
                soru: "Was möchte Katja?",
                secenekler: ["Ein neues Auto", "Eine Veränderung", "Ein neues Kleid", "Einen Kaffee"],
                dogruIndex: 1
            },
            {
                id: "145-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht der Friseur?",
                secenekler: ["Er wäscht und schneidet die Haare", "Er kocht Tee", "Er liest eine Zeitung", "Er spricht viel"],
                dogruIndex: 0
            },
            {
                id: "145-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie findet Katja die neue Frisur?",
                secenekler: ["Schrecklich", "Zu kurz", "Langweilig", "Toll"],
                dogruIndex: 3
            },
            {
                id: "145-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie viel bezahlt sie?",
                secenekler: ["Zwanzig Euro", "Dreißig Euro", "Vierzig Euro", "Fünfzig Euro"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 146,
        seviye: "orta",
        baslik: "Die Grillparty",
        metin: "Im Sommer macht Familie Weber eine Grillparty im Garten. Sie laden ihre Nachbarn ein. Herr Weber grillt Steaks und Würstchen. Frau Weber macht einen großen Kartoffelsalat. Die Kinder spielen Fußball auf der Wiese. Am Abend essen alle zusammen am großen Tisch. Es ist sehr gemütlich.",
        sorular: [
            {
                id: "146-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Party ist im Haus.",
                dogruCevap: "yanlis"
            },
            {
                id: "146-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie laden die Nachbarn ein.",
                dogruCevap: "dogru"
            },
            {
                id: "146-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Kinder spielen Basketball.",
                dogruCevap: "yanlis"
            },
            {
                id: "146-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann macht die Familie die Grillparty?",
                secenekler: ["Im Winter", "Im Herbst", "Im Frühling", "Im Sommer"],
                dogruIndex: 3
            },
            {
                id: "146-cs-2",
                tip: "coktan-secmeli",
                soru: "Was grillt Herr Weber?",
                secenekler: ["Fisch", "Steaks und Würstchen", "Gemüse", "Käse"],
                dogruIndex: 1
            },
            {
                id: "146-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht Frau Weber?",
                secenekler: ["Einen Kuchen", "Eine Suppe", "Einen großen Kartoffelsalat", "Nudeln"],
                dogruIndex: 2
            },
            {
                id: "146-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo essen sie?",
                secenekler: ["Im Wohnzimmer", "In der Küche", "Auf dem Sofa", "Am großen Tisch im Garten"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 147,
        seviye: "orta",
        baslik: "Der Bankbesuch",
        metin: "Herr Meier muss heute zur Bank gehen. Er möchte Geld abheben und eine Rechnung bezahlen. Die Bank ist direkt neben der Post. Er wartet fünf Minuten in der Schlange. Die Bankangestellte hilft ihm bei der Überweisung. Danach geht Herr Meier noch schnell in die Bäckerei, um Brot zu kaufen.",
        sorular: [
            {
                id: "147-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Meier muss zur Bank gehen.",
                dogruCevap: "dogru"
            },
            {
                id: "147-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Bank ist neben der Schule.",
                dogruCevap: "yanlis"
            },
            {
                id: "147-dy-3",
                tip: "dogru-yanlis",
                soru: "Er wartet fünf Minuten in der Schlange.",
                dogruCevap: "dogru"
            },
            {
                id: "147-cs-1",
                tip: "coktan-secmeli",
                soru: "Was möchte Herr Meier auf der Bank machen?",
                secenekler: ["Arbeiten", "Geld abheben und eine Rechnung bezahlen", "Einen Kaffee trinken", "Jemanden treffen"],
                dogruIndex: 1
            },
            {
                id: "147-cs-2",
                tip: "coktan-secmeli",
                soru: "Wer hilft ihm?",
                secenekler: ["Der Bäcker", "Ein Freund", "Die Bankangestellte", "Die Polizei"],
                dogruIndex: 2
            },
            {
                id: "147-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht er bei der Bank?",
                secenekler: ["Eine Überweisung", "Er liest ein Buch", "Er putzt", "Er schläft"],
                dogruIndex: 0
            },
            {
                id: "147-cs-4",
                tip: "coktan-secmeli",
                soru: "Wohin geht er danach?",
                secenekler: ["In den Supermarkt", "In die Bäckerei", "Nach Hause", "Zur Post"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 148,
        seviye: "orta",
        baslik: "Ein schlechter Morgen",
        metin: "Heute hat Jan keinen guten Morgen. Der Wecker klingelt nicht und er steht zu spät auf. Er trinkt schnell einen Kaffee, aber er verbrennt sich die Zunge. Dann läuft er zur Bushaltestelle. Leider fährt der Bus genau vor seiner Nase weg. Jan muss zwanzig Minuten auf den nächsten Bus warten.",
        sorular: [
            {
                id: "148-dy-1",
                tip: "dogru-yanlis",
                soru: "Jan hat einen guten Morgen.",
                dogruCevap: "yanlis"
            },
            {
                id: "148-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Wecker klingelt nicht.",
                dogruCevap: "dogru"
            },
            {
                id: "148-dy-3",
                tip: "dogru-yanlis",
                soru: "Jan wartet zehn Minuten auf den Bus.",
                dogruCevap: "yanlis"
            },
            {
                id: "148-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum steht Jan zu spät auf?",
                secenekler: ["Er ist krank", "Er ist müde", "Der Wecker klingelt nicht", "Er hat Urlaub"],
                dogruIndex: 2
            },
            {
                id: "148-cs-2",
                tip: "coktan-secmeli",
                soru: "Was passiert beim Kaffeetrinken?",
                secenekler: ["Der Kaffee ist kalt", "Er verbrennt sich die Zunge", "Er verschüttet den Kaffee", "Der Kaffee schmeckt nicht"],
                dogruIndex: 1
            },
            {
                id: "148-cs-3",
                tip: "coktan-secmeli",
                soru: "Was passiert an der Haltestelle?",
                secenekler: ["Der Bus ist pünktlich", "Es gibt keinen Bus", "Der Bus fährt vor seiner Nase weg", "Er trifft einen Freund"],
                dogruIndex: 2
            },
            {
                id: "148-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange muss er warten?",
                secenekler: ["Fünf Minuten", "Zehn Minuten", "Zwanzig Minuten", "Eine Stunde"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 149,
        seviye: "orta",
        baslik: "Das Konzert",
        metin: "Am Freitagabend gehen Mia und Leon auf ein Konzert. Ihre Lieblingsband spielt in der Stadthalle. Es sind sehr viele Menschen dort. Die Musik ist laut, aber fantastisch. Mia und Leon tanzen und singen alle Lieder mit. Nach zwei Stunden ist das Konzert zu Ende. Beide haben keine Stimme mehr, aber sie sind glücklich.",
        sorular: [
            {
                id: "149-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Konzert ist am Freitagmorgen.",
                dogruCevap: "yanlis"
            },
            {
                id: "149-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Musik ist leise.",
                dogruCevap: "yanlis"
            },
            {
                id: "149-dy-3",
                tip: "dogru-yanlis",
                soru: "Mia und Leon singen mit.",
                dogruCevap: "dogru"
            },
            {
                id: "149-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo spielt die Band?",
                secenekler: ["Im Stadion", "Im Park", "In der Stadthalle", "Im Fernsehen"],
                dogruIndex: 2
            },
            {
                id: "149-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viele Menschen sind dort?",
                secenekler: ["Niemand", "Sehr wenige", "Sehr viele Menschen", "Nur zehn Personen"],
                dogruIndex: 2
            },
            {
                id: "149-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert das Konzert?",
                secenekler: ["Eine Stunde", "Zwei Stunden", "Drei Stunden", "Vier Stunden"],
                dogruIndex: 1
            },
            {
                id: "149-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie fühlen sie sich am Ende?",
                secenekler: ["Glücklich", "Traurig", "Wütend", "Krank"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 150,
        seviye: "orta",
        baslik: "Die Autowäsche",
        metin: "Das Auto von Herrn Schmidt ist sehr schmutzig. Er fährt am Samstagmorgen zur Tankstelle. Dort gibt es eine automatische Waschanlage. Herr Schmidt bezahlt zehn Euro. Er bleibt im Auto sitzen, während die Bürsten das Auto waschen. Nach fünf Minuten ist das Auto wieder sauber und glänzt in der Sonne.",
        sorular: [
            {
                id: "150-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Auto ist vor dem Waschen sauber.",
                dogruCevap: "yanlis"
            },
            {
                id: "150-dy-2",
                tip: "dogru-yanlis",
                soru: "Herr Schmidt fährt zur Tankstelle.",
                dogruCevap: "dogru"
            },
            {
                id: "150-dy-3",
                tip: "dogru-yanlis",
                soru: "Er bezahlt zwanzig Euro.",
                dogruCevap: "yanlis"
            },
            {
                id: "150-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann wäscht er das Auto?",
                secenekler: ["Am Freitag", "Am Samstagmorgen", "Am Sonntag", "Am Abend"],
                dogruIndex: 1
            },
            {
                id: "150-cs-2",
                tip: "coktan-secmeli",
                soru: "Was für eine Anlage ist das?",
                secenekler: ["Eine Handwäsche", "Eine automatische Waschanlage", "Ein Schwimmbad", "Eine Garage"],
                dogruIndex: 1
            },
            {
                id: "150-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo ist Herr Schmidt beim Waschen?",
                secenekler: ["Im Café", "Er putzt draußen", "Er bleibt im Auto sitzen", "Er geht spazieren"],
                dogruIndex: 2
            },
            {
                id: "150-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert das Waschen?",
                secenekler: ["Zwei Minuten", "Fünf Minuten", "Zehn Minuten", "Eine Stunde"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 151,
        seviye: "orta",
        baslik: "Ein Brief von der Freundin",
        metin: "Lisa freut sich sehr. Sie hat einen Brief von ihrer Freundin Anna bekommen. Anna macht gerade ein Auslandssemester in Spanien. Im Brief erzählt sie von der Universität, den netten Leuten und dem leckeren Essen in Barcelona. Lisa holt sofort Briefpapier und schreibt eine lange Antwort an Anna.",
        sorular: [
            {
                id: "151-dy-1",
                tip: "dogru-yanlis",
                soru: "Lisa bekommt eine E-Mail.",
                dogruCevap: "yanlis"
            },
            {
                id: "151-dy-2",
                tip: "dogru-yanlis",
                soru: "Anna ist in Spanien.",
                dogruCevap: "dogru"
            },
            {
                id: "151-dy-3",
                tip: "dogru-yanlis",
                soru: "Lisa schreibt eine Antwort.",
                dogruCevap: "dogru"
            },
            {
                id: "151-cs-1",
                tip: "coktan-secmeli",
                soru: "Von wem ist der Brief?",
                secenekler: ["Von ihrer Mutter", "Von ihrem Lehrer", "Von ihrer Freundin Anna", "Von ihrem Chef"],
                dogruIndex: 2
            },
            {
                id: "151-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht Anna in Spanien?",
                secenekler: ["Urlaub", "Ein Auslandssemester", "Sie arbeitet", "Sie sucht ein Haus"],
                dogruIndex: 1
            },
            {
                id: "151-cs-3",
                tip: "coktan-secmeli",
                soru: "In welcher Stadt ist Anna?",
                secenekler: ["Madrid", "Sevilla", "Valencia", "Barcelona"],
                dogruIndex: 3
            },
            {
                id: "151-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht Lisa sofort?",
                secenekler: ["Sie ruft an", "Sie schreibt eine Antwort", "Sie geht schlafen", "Sie isst"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 152,
        seviye: "orta",
        baslik: "Der kaputte Fernseher",
        metin: "Familie Braun möchte am Abend einen Film sehen. Der Vater schaltet den Fernseher ein, aber das Bild bleibt schwarz. Auch der Ton funktioniert nicht. Der Fernseher ist kaputt! Die Kinder sind traurig. Aber die Mutter hat eine gute Idee. Sie holt ein Brettspiel aus dem Schrank. Die Familie spielt zusammen und hat viel Spaß.",
        sorular: [
            {
                id: "152-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Familie möchte einen Film sehen.",
                dogruCevap: "dogru"
            },
            {
                id: "152-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Fernseher funktioniert sehr gut.",
                dogruCevap: "yanlis"
            },
            {
                id: "152-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Mutter hat eine gute Idee.",
                dogruCevap: "dogru"
            },
            {
                id: "152-cs-1",
                tip: "coktan-secmeli",
                soru: "Was bleibt schwarz?",
                secenekler: ["Das Fenster", "Das Bild vom Fernseher", "Der Schrank", "Die Tür"],
                dogruIndex: 1
            },
            {
                id: "152-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie fühlen sich die Kinder zuerst?",
                secenekler: ["Glücklich", "Müde", "Traurig", "Wütend"],
                dogruIndex: 2
            },
            {
                id: "152-cs-3",
                tip: "coktan-secmeli",
                soru: "Was holt die Mutter?",
                secenekler: ["Einen Kuchen", "Ein Buch", "Ein Brettspiel", "Ein neues Radio"],
                dogruIndex: 2
            },
            {
                id: "152-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht die Familie am Ende?",
                secenekler: ["Sie geht schlafen", "Sie liest", "Sie spielt zusammen", "Sie geht ins Kino"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 153,
        seviye: "orta",
        baslik: "Yoga am Morgen",
        metin: "Sandra macht jeden Morgen Yoga. Sie steht um sechs Uhr auf und rollt ihre Matte im Wohnzimmer aus. Sie macht verschiedene Übungen für den Rücken und die Beine. Das dauert etwa eine halbe Stunde. Danach fühlt sie sich entspannt und fit für den Tag. Dann frühstückt sie in Ruhe.",
        sorular: [
            {
                id: "153-dy-1",
                tip: "dogru-yanlis",
                soru: "Sandra macht Yoga am Abend.",
                dogruCevap: "yanlis"
            },
            {
                id: "153-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie steht um sechs Uhr auf.",
                dogruCevap: "dogru"
            },
            {
                id: "153-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Yoga dauert eine halbe Stunde.",
                dogruCevap: "dogru"
            },
            {
                id: "153-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo macht sie Yoga?",
                secenekler: ["Im Garten", "Im Fitnessstudio", "Im Wohnzimmer", "Im Park"],
                dogruIndex: 2
            },
            {
                id: "153-cs-2",
                tip: "coktan-secmeli",
                soru: "Wofür sind die Übungen?",
                secenekler: ["Für die Arme", "Für den Rücken und die Beine", "Nur für den Bauch", "Für die Füße"],
                dogruIndex: 1
            },
            {
                id: "153-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie fühlt sie sich danach?",
                secenekler: ["Sehr müde", "Krank", "Entspannt und fit", "Traurig"],
                dogruIndex: 2
            },
            {
                id: "153-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht sie nach dem Yoga?",
                secenekler: ["Sie frühstückt in Ruhe", "Sie geht sofort arbeiten", "Sie duscht kalt", "Sie schläft wieder"],
                dogruIndex: 0
            }
        ]
    },{
        id: 154,
        seviye: "orta",
        baslik: "Der große Einkauf",
        metin: "Am Freitag fährt Herr Becker zum Supermarkt. Er braucht viele Lebensmittel für das Wochenende, weil seine Eltern zu Besuch kommen. Er kauft Fleisch, Kartoffeln, frisches Gemüse und zwei Flaschen Wein. An der Kasse ist eine lange Schlange. Er wartet fünfzehn Minuten. Danach fährt er schnell nach Hause und räumt alles in den Kühlschrank.",
        sorular: [
            {
                id: "154-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Becker geht am Samstag einkaufen.",
                dogruCevap: "yanlis"
            },
            {
                id: "154-dy-2",
                tip: "dogru-yanlis",
                soru: "Seine Eltern kommen zu Besuch.",
                dogruCevap: "dogru"
            },
            {
                id: "154-dy-3",
                tip: "dogru-yanlis",
                soru: "An der Kasse gibt es keine Schlange.",
                dogruCevap: "yanlis"
            },
            {
                id: "154-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum kauft er viele Lebensmittel?",
                secenekler: ["Weil er eine Party macht", "Weil seine Eltern zu Besuch kommen", "Weil er viel isst", "Weil das Essen billig ist"],
                dogruIndex: 1
            },
            {
                id: "154-cs-2",
                tip: "coktan-secmeli",
                soru: "Was kauft er?",
                secenekler: ["Nur Brot", "Fleisch, Kartoffeln, Gemüse und Wein", "Kleidung und Schuhe", "Ein neues Auto"],
                dogruIndex: 1
            },
            {
                id: "154-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange wartet er an der Kasse?",
                secenekler: ["Fünf Minuten", "Zehn Minuten", "Fünfzehn Minuten", "Zwanzig Minuten"],
                dogruIndex: 2
            },
            {
                id: "154-cs-4",
                tip: "coktan-secmeli",
                soru: "Wohin räumt er das Essen?",
                secenekler: ["In den Schrank", "In den Kühlschrank", "Auf den Tisch", "In den Keller"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 155,
        seviye: "orta",
        baslik: "Ein Tag am See",
        metin: "Das Wetter ist heute wunderbar. Clara und ihre Freunde fahren mit dem Bus zum See. Das Wasser ist sehr klar, aber noch ein bisschen kalt. Clara schwimmt nur zehn Minuten. Danach liegen sie in der Sonne und lesen Bücher. Am Nachmittag mieten sie ein kleines Boot und fahren über den See. Es ist ein perfekter Tag.",
        sorular: [
            {
                id: "155-dy-1",
                tip: "dogru-yanlis",
                soru: "Clara fährt mit dem Auto zum See.",
                dogruCevap: "yanlis"
            },
            {
                id: "155-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Wasser ist sehr heiß.",
                dogruCevap: "yanlis"
            },
            {
                id: "155-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie mieten am Nachmittag ein Boot.",
                dogruCevap: "dogru"
            },
            {
                id: "155-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie fahren sie zum See?",
                secenekler: ["Mit dem Zug", "Mit dem Bus", "Mit dem Fahrrad", "Zu Fuß"],
                dogruIndex: 1
            },
            {
                id: "155-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie ist das Wasser?",
                secenekler: ["Heiß", "Klar und ein bisschen kalt", "Schmutzig", "Sehr warm"],
                dogruIndex: 1
            },
            {
                id: "155-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machen sie in der Sonne?",
                secenekler: ["Sie schlafen", "Sie essen", "Sie lesen Bücher", "Sie arbeiten"],
                dogruIndex: 2
            },
            {
                id: "155-cs-4",
                tip: "coktan-secmeli",
                soru: "Was mieten sie am Nachmittag?",
                secenekler: ["Ein Auto", "Ein kleines Boot", "Ein Fahrrad", "Ein Zimmer"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 156,
        seviye: "orta",
        baslik: "Der Schwimmkurs",
        metin: "Tim ist sechs Jahre alt und lernt schwimmen. Jeden Samstagmorgen geht er mit seinem Vater ins Schwimmbad. Die Schwimmlehrerin heißt Frau Keller und ist sehr nett. Zuerst hat Tim ein bisschen Angst vor dem tiefen Wasser. Aber mit einem Schwimmring klappt es sehr gut. Nach dem Kurs essen Tim und sein Vater ein großes Eis.",
        sorular: [
            {
                id: "156-dy-1",
                tip: "dogru-yanlis",
                soru: "Tim ist sieben Jahre alt.",
                dogruCevap: "yanlis"
            },
            {
                id: "156-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Kurs ist jeden Samstagmorgen.",
                dogruCevap: "dogru"
            },
            {
                id: "156-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Schwimmlehrerin ist sehr nett.",
                dogruCevap: "dogru"
            },
            {
                id: "156-cs-1",
                tip: "coktan-secmeli",
                soru: "Mit wem geht Tim ins Schwimmbad?",
                secenekler: ["Mit seiner Mutter", "Mit seinem Bruder", "Mit seinem Vater", "Allein"],
                dogruIndex: 2
            },
            {
                id: "156-cs-2",
                tip: "coktan-secmeli",
                soru: "Wovor hat Tim zuerst Angst?",
                secenekler: ["Vor dem Lehrer", "Vor dem tiefen Wasser", "Vor anderen Kindern", "Vor Hunden"],
                dogruIndex: 1
            },
            {
                id: "156-cs-3",
                tip: "coktan-secmeli",
                soru: "Was hilft Tim beim Schwimmen?",
                secenekler: ["Ein Boot", "Ein Schwimmring", "Eine Brille", "Ein Ball"],
                dogruIndex: 1
            },
            {
                id: "156-cs-4",
                tip: "coktan-secmeli",
                soru: "Was essen sie nach dem Kurs?",
                secenekler: ["Eine Pizza", "Ein großes Eis", "Einen Apfel", "Einen Kuchen"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 157,
        seviye: "orta",
        baslik: "Reise nach Wien",
        metin: "Nächste Woche macht Frau Bauer eine Geschäftsreise nach Wien. Sie muss dort an einer wichtigen Konferenz teilnehmen. Sie bucht ein schönes Hotelzimmer im Zentrum der Stadt. Die Konferenz dauert zwei Tage. Am dritten Tag hat sie Freizeit. Sie möchte das Schloss Schönbrunn besuchen und ein Stück Sachertorte essen.",
        sorular: [
            {
                id: "157-dy-1",
                tip: "dogru-yanlis",
                soru: "Frau Bauer reist nach Wien.",
                dogruCevap: "dogru"
            },
            {
                id: "157-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie macht dort Urlaub.",
                dogruCevap: "yanlis"
            },
            {
                id: "157-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Konferenz dauert drei Tage.",
                dogruCevap: "yanlis"
            },
            {
                id: "157-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum fährt sie nach Wien?",
                secenekler: ["Für einen Urlaub", "Für eine Geschäftsreise", "Um Familie zu besuchen", "Zum Studieren"],
                dogruIndex: 1
            },
            {
                id: "157-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo bucht sie ein Hotelzimmer?",
                secenekler: ["Am Flughafen", "Außerhalb der Stadt", "Im Zentrum", "In einem Dorf"],
                dogruIndex: 2
            },
            {
                id: "157-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Konferenz?",
                secenekler: ["Einen Tag", "Zwei Tage", "Drei Tage", "Vier Tage"],
                dogruIndex: 1
            },
            {
                id: "157-cs-4",
                tip: "coktan-secmeli",
                soru: "Was möchte sie in ihrer Freizeit machen?",
                secenekler: ["Nur schlafen", "Ins Kino gehen", "Das Schloss Schönbrunn besuchen", "Schwimmen gehen"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 158,
        seviye: "orta",
        baslik: "Die neue Kamera",
        metin: "Jonas fotografiert sehr gerne. Das ist sein größtes Hobby. Zu seinem Geburtstag wünscht er sich eine neue Kamera. Seine Eltern kaufen ihm eine tolle, professionelle Kamera in Schwarz. Jonas freut sich riesig. Er geht sofort in den Wald und macht Fotos von Vögeln und Bäumen. Die Bilder sind gestochen scharf.",
        sorular: [
            {
                id: "158-dy-1",
                tip: "dogru-yanlis",
                soru: "Jonas fotografiert gerne.",
                dogruCevap: "dogru"
            },
            {
                id: "158-dy-2",
                tip: "dogru-yanlis",
                soru: "Er bekommt einen Laptop zum Geburtstag.",
                dogruCevap: "yanlis"
            },
            {
                id: "158-dy-3",
                tip: "dogru-yanlis",
                soru: "Die neue Kamera ist schwarz.",
                dogruCevap: "dogru"
            },
            {
                id: "158-cs-1",
                tip: "coktan-secmeli",
                soru: "Was ist das größte Hobby von Jonas?",
                secenekler: ["Fußball spielen", "Malen", "Fotografieren", "Kochen"],
                dogruIndex: 2
            },
            {
                id: "158-cs-2",
                tip: "coktan-secmeli",
                soru: "Von wem bekommt er die Kamera?",
                secenekler: ["Von seinem Bruder", "Von seiner Freundin", "Von seinen Eltern", "Von seinem Onkel"],
                dogruIndex: 2
            },
            {
                id: "158-cs-3",
                tip: "coktan-secmeli",
                soru: "Wohin geht er sofort?",
                secenekler: ["In den Park", "In die Stadt", "In den Wald", "Ans Meer"],
                dogruIndex: 2
            },
            {
                id: "158-cs-4",
                tip: "coktan-secmeli",
                soru: "Wovon macht er Fotos?",
                secenekler: ["Von Vögeln und Bäumen", "Von Autos", "Von Häusern", "Von seiner Familie"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 159,
        seviye: "orta",
        baslik: "In der Apotheke",
        metin: "Frau Lehmann hat starke Kopfschmerzen und ihr Hals tut weh. Sie geht in die Apotheke an der Ecke. Der Apotheker fragt: 'Wie kann ich Ihnen helfen?' Frau Lehmann erklärt ihre Schmerzen. Der Apotheker gibt ihr Schmerztabletten und einen Hustensirup. Er sagt: 'Bitte trinken Sie viel Tee und ruhen Sie sich aus.' Frau Lehmann bedankt sich und bezahlt.",
        sorular: [
            {
                id: "159-dy-1",
                tip: "dogru-yanlis",
                soru: "Frau Lehmann hat Bauchschmerzen.",
                dogruCevap: "yanlis"
            },
            {
                id: "159-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie geht in die Apotheke an der Ecke.",
                dogruCevap: "dogru"
            },
            {
                id: "159-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Apotheker gibt ihr Schmerztabletten und Hustensirup.",
                dogruCevap: "dogru"
            },
            {
                id: "159-cs-1",
                tip: "coktan-secmeli",
                soru: "Was tut Frau Lehmann weh?",
                secenekler: ["Der Rücken und das Bein", "Der Kopf und der Hals", "Der Arm", "Der Zahn"],
                dogruIndex: 1
            },
            {
                id: "159-cs-2",
                tip: "coktan-secmeli",
                soru: "Wer hilft ihr in der Apotheke?",
                secenekler: ["Der Arzt", "Eine Krankenschwester", "Der Apotheker", "Ihr Mann"],
                dogruIndex: 2
            },
            {
                id: "159-cs-3",
                tip: "coktan-secmeli",
                soru: "Was soll sie laut Apotheker tun?",
                secenekler: ["Sport machen", "Viel Tee trinken und sich ausruhen", "Arbeiten gehen", "Kaffee trinken"],
                dogruIndex: 1
            },
            {
                id: "159-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht sie am Ende?",
                secenekler: ["Sie weint", "Sie geht zum Arzt", "Sie bedankt sich und bezahlt", "Sie kauft noch etwas"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 160,
        seviye: "orta",
        baslik: "Das verlorene Handy",
        metin: "Martin sucht sein Handy. Er kann es nirgends finden. Er schaut in seiner Tasche, auf dem Tisch und sogar im Kühlschrank nach. Nichts! Dann ruft seine Mutter von ihrem Telefon aus seine Nummer an. Plötzlich hört Martin ein Klingeln unter dem Sofa. Das Handy ist heruntergefallen. Martin ist sehr erleichtert.",
        sorular: [
            {
                id: "160-dy-1",
                tip: "dogru-yanlis",
                soru: "Martin sucht seinen Schlüssel.",
                dogruCevap: "yanlis"
            },
            {
                id: "160-dy-2",
                tip: "dogru-yanlis",
                soru: "Er findet das Handy im Kühlschrank.",
                dogruCevap: "yanlis"
            },
            {
                id: "160-dy-3",
                tip: "dogru-yanlis",
                soru: "Seine Mutter ruft seine Nummer an.",
                dogruCevap: "dogru"
            },
            {
                id: "160-cs-1",
                tip: "coktan-secmeli",
                soru: "Was sucht Martin?",
                secenekler: ["Sein Buch", "Sein Handy", "Sein Portemonnaie", "Sein Auto"],
                dogruIndex: 1
            },
            {
                id: "160-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo sucht er NICHT?",
                secenekler: ["In der Tasche", "Auf dem Tisch", "Im Kühlschrank", "Im Garten"],
                dogruIndex: 3
            },
            {
                id: "160-cs-3",
                tip: "coktan-secmeli",
                soru: "Wer ruft Martins Nummer an?",
                secenekler: ["Sein Vater", "Seine Mutter", "Sein Chef", "Seine Schwester"],
                dogruIndex: 1
            },
            {
                id: "160-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo war das Handy?",
                secenekler: ["Unter dem Bett", "Unter dem Sofa", "Auf dem Schrank", "In der Küche"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 161,
        seviye: "orta",
        baslik: "Das Schulkonzert",
        metin: "Heute Abend gibt es ein großes Konzert in der Schule. Mia spielt Klavier und ihr Bruder Leo spielt Geige. Sie haben viele Wochen dafür geübt. Die Aula der Schule ist voll. Ihre Eltern sitzen in der ersten Reihe. Als das Konzert beginnt, sind Mia und Leo sehr nervös. Aber sie spielen fehlerfrei und das Publikum klatscht laut.",
        sorular: [
            {
                id: "161-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Konzert ist am Morgen.",
                dogruCevap: "yanlis"
            },
            {
                id: "161-dy-2",
                tip: "dogru-yanlis",
                soru: "Leo spielt Geige.",
                dogruCevap: "dogru"
            },
            {
                id: "161-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Eltern sitzen in der letzten Reihe.",
                dogruCevap: "yanlis"
            },
            {
                id: "161-cs-1",
                tip: "coktan-secmeli",
                soru: "Was spielt Mia?",
                secenekler: ["Gitarre", "Flöte", "Klavier", "Schlagzeug"],
                dogruIndex: 2
            },
            {
                id: "161-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange haben sie geübt?",
                secenekler: ["Einen Tag", "Eine Woche", "Viele Wochen", "Ein Jahr"],
                dogruIndex: 2
            },
            {
                id: "161-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo sitzen die Eltern?",
                secenekler: ["Zuhause", "In der ersten Reihe", "Im Auto", "In der letzten Reihe"],
                dogruIndex: 1
            },
            {
                id: "161-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie spielen Mia und Leo?",
                secenekler: ["Sehr schlecht", "Sie machen viele Fehler", "Sie spielen fehlerfrei", "Sie hören sofort auf"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 162,
        seviye: "orta",
        baslik: "Der neue Nachbar",
        metin: "Im Haus von Familie Müller gibt es einen neuen Nachbarn. Er heißt Herr Yoshida und kommt aus Japan. Am Sonntag lädt er Familie Müller zum Tee ein. Er hat grünen Tee und kleine japanische Süßigkeiten vorbereitet. Herr Yoshida erzählt von seiner Heimat und Familie Müller lernt viel Neues. Sie finden den neuen Nachbarn sehr sympathisch.",
        sorular: [
            {
                id: "162-dy-1",
                tip: "dogru-yanlis",
                soru: "Der neue Nachbar kommt aus China.",
                dogruCevap: "yanlis"
            },
            {
                id: "162-dy-2",
                tip: "dogru-yanlis",
                soru: "Er lädt die Familie am Sonntag ein.",
                dogruCevap: "dogru"
            },
            {
                id: "162-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Familie findet ihn sehr unsympathisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "162-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie heißt der neue Nachbar?",
                secenekler: ["Herr Müller", "Herr Yoshida", "Herr Schmidt", "Herr Wagner"],
                dogruIndex: 1
            },
            {
                id: "162-cs-2",
                tip: "coktan-secmeli",
                soru: "Was hat Herr Yoshida vorbereitet?",
                secenekler: ["Kaffee und Kuchen", "Grünen Tee und Süßigkeiten", "Pizza", "Sushi"],
                dogruIndex: 1
            },
            {
                id: "162-cs-3",
                tip: "coktan-secmeli",
                soru: "Worüber erzählt Herr Yoshida?",
                secenekler: ["Über seine Arbeit", "Über seine Heimat", "Über Autos", "Über Sport"],
                dogruIndex: 1
            },
            {
                id: "162-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie findet Familie Müller den Nachbarn?",
                secenekler: ["Sehr langweilig", "Sehr laut", "Sehr sympathisch", "Sehr böse"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 163,
        seviye: "orta",
        baslik: "Die Bibliothekskarte",
        metin: "Laura liest sehr gerne. Sie möchte Bücher ausleihen und geht in die Stadtbibliothek. Dort spricht sie mit einer Bibliothekarin. Laura muss ein Formular ausfüllen und ihren Personalausweis zeigen. Nach zehn Minuten bekommt sie ihre eigene Bibliothekskarte. Sie leiht sofort drei Romane und einen Reiseführer aus. Sie ist glücklich.",
        sorular: [
            {
                id: "163-dy-1",
                tip: "dogru-yanlis",
                soru: "Laura geht in die Stadtbibliothek.",
                dogruCevap: "dogru"
            },
            {
                id: "163-dy-2",
                tip: "dogru-yanlis",
                soru: "Laura kauft Bücher im Geschäft.",
                dogruCevap: "yanlis"
            },
            {
                id: "163-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie bekommt die Karte nach zehn Minuten.",
                dogruCevap: "dogru"
            },
            {
                id: "163-cs-1",
                tip: "coktan-secmeli",
                soru: "Was möchte Laura machen?",
                secenekler: ["Bücher kaufen", "Bücher ausleihen", "Arbeiten", "Kaffee trinken"],
                dogruIndex: 1
            },
            {
                id: "163-cs-2",
                tip: "coktan-secmeli",
                soru: "Was muss sie zeigen?",
                secenekler: ["Ihren Führerschein", "Ihren Reisepass", "Ihren Personalausweis", "Ihr Zeugnis"],
                dogruIndex: 2
            },
            {
                id: "163-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert es, die Karte zu bekommen?",
                secenekler: ["Eine Stunde", "Zehn Minuten", "Fünf Minuten", "Einen Tag"],
                dogruIndex: 1
            },
            {
                id: "163-cs-4",
                tip: "coktan-secmeli",
                soru: "Was leiht sie sofort aus?",
                secenekler: ["Zwei Zeitungen", "Drei Romane und einen Reiseführer", "Ein Wörterbuch", "Nichts"],
                dogruIndex: 1
            }
        ]
    },{
        id: 164,
        seviye: "orta",
        baslik: "Ein Besuch im Freizeitpark",
        metin: "Familie Kurz fährt am Samstag in einen großen Freizeitpark. Die Fahrt dauert eine Stunde. Im Park gibt es viele Achterbahnen und Karussells. Der kleine Max fährt lieber mit dem langsamen Zug, aber seine Schwester Julia liebt die schnellen Achterbahnen. Zu Mittag essen sie Hotdogs und Pommes. Am späten Nachmittag fahren sie glücklich nach Hause.",
        sorular: [
            {
                id: "164-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Familie fährt am Sonntag in den Freizeitpark.",
                dogruCevap: "yanlis"
            },
            {
                id: "164-dy-2",
                tip: "dogru-yanlis",
                soru: "Max fährt gerne mit der schnellen Achterbahn.",
                dogruCevap: "yanlis"
            },
            {
                id: "164-dy-3",
                tip: "dogru-yanlis",
                soru: "Zu Mittag essen sie Hotdogs und Pommes.",
                dogruCevap: "dogru"
            },
            {
                id: "164-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie lange dauert die Fahrt zum Park?",
                secenekler: ["Eine Stunde", "Zwei Stunden", "Drei Stunden", "Zehn Minuten"],
                dogruIndex: 0
            },
            {
                id: "164-cs-2",
                tip: "coktan-secmeli",
                soru: "Was liebt Julia?",
                secenekler: ["Den langsamen Zug", "Die schnellen Achterbahnen", "Hotdogs", "Karussells"],
                dogruIndex: 1
            },
            {
                id: "164-cs-3",
                tip: "coktan-secmeli",
                soru: "Was essen sie zu Mittag?",
                secenekler: ["Pizza", "Hotdogs und Pommes", "Fisch", "Kuchen"],
                dogruIndex: 1
            },
            {
                id: "164-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann fahren sie nach Hause?",
                secenekler: ["Am Morgen", "Am Mittag", "Am späten Nachmittag", "In der Nacht"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 165,
        seviye: "orta",
        baslik: "Das neue Möbelstück",
        metin: "Lisa braucht einen neuen Schreibtisch für ihr Arbeitszimmer. Sie fährt in ein großes Möbelhaus. Dort findet sie einen schönen, weißen Tisch aus Holz. Der Tisch kostet neunzig Euro. Lisa kauft ihn und nimmt das große Paket im Auto mit nach Hause. Am Abend baut sie den Schreibtisch mit ihrem Freund zusammen auf.",
        sorular: [
            {
                id: "165-dy-1",
                tip: "dogru-yanlis",
                soru: "Lisa braucht ein neues Bett.",
                dogruCevap: "yanlis"
            },
            {
                id: "165-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Tisch ist weiß und aus Holz.",
                dogruCevap: "dogru"
            },
            {
                id: "165-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie baut den Tisch alleine auf.",
                dogruCevap: "yanlis"
            },
            {
                id: "165-cs-1",
                tip: "coktan-secmeli",
                soru: "Wohin fährt Lisa?",
                secenekler: ["In einen Supermarkt", "In eine Bibliothek", "In ein Möbelhaus", "In den Wald"],
                dogruIndex: 2
            },
            {
                id: "165-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viel kostet der Tisch?",
                secenekler: ["80 Euro", "90 Euro", "100 Euro", "190 Euro"],
                dogruIndex: 1
            },
            {
                id: "165-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie nimmt sie das Paket mit?",
                secenekler: ["Mit dem Bus", "Mit dem Zug", "Auf dem Fahrrad", "Im Auto"],
                dogruIndex: 3
            },
            {
                id: "165-cs-4",
                tip: "coktan-secmeli",
                soru: "Mit wem baut sie den Tisch auf?",
                secenekler: ["Mit ihrem Vater", "Mit ihrem Freund", "Mit ihrem Bruder", "Mit dem Verkäufer"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 166,
        seviye: "orta",
        baslik: "Im Reisebüro",
        metin: "Herr und Frau Wagner möchten im August Urlaub machen. Sie gehen ins Reisebüro, um eine Reise zu buchen. Der Reisebürokaufmann zeigt ihnen viele Kataloge. Sie entscheiden sich für eine Reise nach Griechenland. Das Hotel hat vier Sterne und einen großen Pool. Sie fliegen am zehnten August für zwei Wochen dorthin.",
        sorular: [
            {
                id: "166-dy-1",
                tip: "dogru-yanlis",
                soru: "Sie möchten im September Urlaub machen.",
                dogruCevap: "yanlis"
            },
            {
                id: "166-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie buchen eine Reise nach Spanien.",
                dogruCevap: "yanlis"
            },
            {
                id: "166-dy-3",
                tip: "dogru-yanlis",
                soru: "Das Hotel hat einen großen Pool.",
                dogruCevap: "dogru"
            },
            {
                id: "166-cs-1",
                tip: "coktan-secmeli",
                soru: "Wohin gehen sie, um zu buchen?",
                secenekler: ["Ins Internet", "Ins Reisebüro", "An den Flughafen", "Zum Bahnhof"],
                dogruIndex: 1
            },
            {
                id: "166-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie viele Sterne hat das Hotel?",
                secenekler: ["Zwei", "Drei", "Vier", "Fünf"],
                dogruIndex: 2
            },
            {
                id: "166-cs-3",
                tip: "coktan-secmeli",
                soru: "Wohin reisen sie?",
                secenekler: ["Nach Italien", "Nach Griechenland", "In die Türkei", "Nach Spanien"],
                dogruIndex: 1
            },
            {
                id: "166-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange bleiben sie dort?",
                secenekler: ["Eine Woche", "Zwei Wochen", "Drei Wochen", "Einen Monat"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 167,
        seviye: "orta",
        baslik: "Das verlorene Portemonnaie",
        metin: "Lukas steht an der Kasse im Supermarkt und möchte bezahlen. Plötzlich merkt er, dass sein Portemonnaie weg ist. Er sucht in allen Taschen, aber findet es nicht. Er geht schnell zurück zum Auto. Zum Glück liegt das Portemonnaie dort auf dem Beifahrersitz. Er rennt zurück in den Supermarkt und bezahlt seinen Einkauf.",
        sorular: [
            {
                id: "167-dy-1",
                tip: "dogru-yanlis",
                soru: "Lukas hat sein Portemonnaie verloren.",
                dogruCevap: "dogru"
            },
            {
                id: "167-dy-2",
                tip: "dogru-yanlis",
                soru: "Er findet es in seiner Jacke.",
                dogruCevap: "yanlis"
            },
            {
                id: "167-dy-3",
                tip: "dogru-yanlis",
                soru: "Er geht nie wieder in den Supermarkt zurück.",
                dogruCevap: "yanlis"
            },
            {
                id: "167-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo ist Lukas am Anfang?",
                secenekler: ["Im Kino", "An der Kasse im Supermarkt", "Im Auto", "Zu Hause"],
                dogruIndex: 1
            },
            {
                id: "167-cs-2",
                tip: "coktan-secmeli",
                soru: "Was sucht er?",
                secenekler: ["Seinen Schlüssel", "Sein Portemonnaie", "Sein Handy", "Seine Brille"],
                dogruIndex: 1
            },
            {
                id: "167-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo findet er es?",
                secenekler: ["Auf der Straße", "Im Supermarkt", "Auf dem Beifahrersitz im Auto", "In der Tasche"],
                dogruIndex: 2
            },
            {
                id: "167-cs-4",
                tip: "coktan-secmeli",
                soru: "Was macht er am Ende?",
                secenekler: ["Er geht weinend nach Hause", "Er bezahlt seinen Einkauf", "Er ruft die Polizei", "Er kauft ein neues Auto"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 168,
        seviye: "orta",
        baslik: "Ein Tag im Homeoffice",
        metin: "Heute arbeitet Herr Neumann von zu Hause aus. Sein Schreibtisch steht im Wohnzimmer. Er beginnt um acht Uhr mit seiner Arbeit und liest zuerst seine E-Mails. Um zehn Uhr hat er eine Videokonferenz mit seinen Kollegen. Mittags kocht er sich schnell ein paar Nudeln. Das Homeoffice ist praktisch, weil er nicht mit dem Auto fahren muss.",
        sorular: [
            {
                id: "168-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Neumann arbeitet heute im Büro.",
                dogruCevap: "yanlis"
            },
            {
                id: "168-dy-2",
                tip: "dogru-yanlis",
                soru: "Sein Schreibtisch steht im Wohnzimmer.",
                dogruCevap: "dogru"
            },
            {
                id: "168-dy-3",
                tip: "dogru-yanlis",
                soru: "Er kocht mittags eine große Suppe.",
                dogruCevap: "yanlis"
            },
            {
                id: "168-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann beginnt er mit der Arbeit?",
                secenekler: ["Um sieben Uhr", "Um acht Uhr", "Um neun Uhr", "Um zehn Uhr"],
                dogruIndex: 1
            },
            {
                id: "168-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht er um zehn Uhr?",
                secenekler: ["Er kocht Nudeln", "Er liest E-Mails", "Er hat eine Videokonferenz", "Er geht spazieren"],
                dogruIndex: 2
            },
            {
                id: "168-cs-3",
                tip: "coktan-secmeli",
                soru: "Was kocht er mittags?",
                secenekler: ["Pizza", "Kartoffeln", "Nudeln", "Fisch"],
                dogruIndex: 2
            },
            {
                id: "168-cs-4",
                tip: "coktan-secmeli",
                soru: "Warum ist das Homeoffice praktisch?",
                secenekler: ["Weil er mehr Geld bekommt", "Weil er schlafen kann", "Weil er nicht mit dem Auto fahren muss", "Weil die Kollegen nicht da sind"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 169,
        seviye: "orta",
        baslik: "Der erste Schnee",
        metin: "Als Emma am Morgen aus dem Fenster schaut, ist alles weiß. Es hat in der Nacht geschneit! Es ist der erste Schnee in diesem Jahr. Emma zieht sich schnell warm an. Sie weckt ihren kleinen Bruder und sie laufen sofort in den Garten. Sie bauen einen lustigen Schneemann mit einer Karotte als Nase.",
        sorular: [
            {
                id: "169-dy-1",
                tip: "dogru-yanlis",
                soru: "Es hat am Nachmittag geschneit.",
                dogruCevap: "yanlis"
            },
            {
                id: "169-dy-2",
                tip: "dogru-yanlis",
                soru: "Es ist der erste Schnee in diesem Jahr.",
                dogruCevap: "dogru"
            },
            {
                id: "169-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Schneemann hat eine Karotte als Nase.",
                dogruCevap: "dogru"
            },
            {
                id: "169-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann sieht Emma den Schnee?",
                secenekler: ["Am Abend", "Am Morgen", "Am Mittag", "In der Nacht"],
                dogruIndex: 1
            },
            {
                id: "169-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie sieht alles draußen aus?",
                secenekler: ["Grau", "Grün", "Weiß", "Schwarz"],
                dogruIndex: 2
            },
            {
                id: "169-cs-3",
                tip: "coktan-secmeli",
                soru: "Wen weckt Emma?",
                secenekler: ["Ihre Mutter", "Ihren Vater", "Ihren kleinen Bruder", "Ihre Schwester"],
                dogruIndex: 2
            },
            {
                id: "169-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machen sie im Garten?",
                secenekler: ["Sie spielen Fußball", "Sie bauen ein Haus", "Sie bauen einen Schneemann", "Sie trinken Tee"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 170,
        seviye: "orta",
        baslik: "Vorbereitung auf die Prüfung",
        metin: "Nächste Woche hat Tobias eine wichtige Prüfung in Mathematik. Er muss noch viel lernen. Jeden Nachmittag geht er in die Bibliothek, weil es dort ruhig ist. Er übt die Formeln und löst alte Aufgaben. Seine Freundin Anna hilft ihm manchmal, wenn er etwas nicht versteht. Tobias hofft, dass er eine gute Note bekommt.",
        sorular: [
            {
                id: "170-dy-1",
                tip: "dogru-yanlis",
                soru: "Tobias hat eine Prüfung in Englisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "170-dy-2",
                tip: "dogru-yanlis",
                soru: "Er lernt jeden Nachmittag in der Bibliothek.",
                dogruCevap: "dogru"
            },
            {
                id: "170-dy-3",
                tip: "dogru-yanlis",
                soru: "Tobias lernt ganz alleine.",
                dogruCevap: "yanlis"
            },
            {
                id: "170-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann ist die Prüfung?",
                secenekler: ["Morgen", "Nächste Woche", "Nächsten Monat", "Heute"],
                dogruIndex: 1
            },
            {
                id: "170-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum geht er in die Bibliothek?",
                secenekler: ["Weil es dort Kaffee gibt", "Weil er dort arbeitet", "Weil es dort ruhig ist", "Weil es billig ist"],
                dogruIndex: 2
            },
            {
                id: "170-cs-3",
                tip: "coktan-secmeli",
                soru: "Wer hilft ihm beim Lernen?",
                secenekler: ["Sein Lehrer", "Sein Vater", "Seine Freundin Anna", "Sein Bruder"],
                dogruIndex: 2
            },
            {
                id: "170-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hofft Tobias?",
                secenekler: ["Dass die Prüfung schwer ist", "Dass er nicht hingehen muss", "Dass er eine gute Note bekommt", "Dass der Lehrer krank ist"],
                dogruIndex: 2
            }
        ]
    },{
        id: 204,
        seviye: "zor",
        baslik: "Ein Unfall auf der Straße",
        metin: "Gestern gab es einen kleinen Unfall auf der Hauptstraße. Ein Auto hat an der Ampel nicht rechtzeitig gebremst und ist gegen ein anderes Auto gefahren. Zum Glück wurde niemand verletzt, aber beide Autos waren leicht kaputt. Die Fahrer sind ausgestiegen und haben die Polizei gerufen. Die Polizisten haben Fragen gestellt und alles notiert.",
        sorular: [
            {
                id: "204-dy-1",
                tip: "dogru-yanlis",
                soru: "Der Unfall ist heute passiert.",
                dogruCevap: "yanlis"
            },
            {
                id: "204-dy-2",
                tip: "dogru-yanlis",
                soru: "Jemand wurde schwer verletzt.",
                dogruCevap: "yanlis"
            },
            {
                id: "204-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Fahrer haben die Polizei gerufen.",
                dogruCevap: "dogru"
            },
            {
                id: "204-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo gab es den Unfall?",
                secenekler: ["Auf der Autobahn", "Im Parkhaus", "Auf der Hauptstraße", "In einer kleinen Straße"],
                dogruIndex: 2
            },
            {
                id: "204-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum gab es den Unfall?",
                secenekler: ["Das Auto war zu schnell", "Ein Auto hat an der Ampel nicht gebremst", "Der Fahrer hat geschlafen", "Ein Tier war auf der Straße"],
                dogruIndex: 1
            },
            {
                id: "204-cs-3",
                tip: "coktan-secmeli",
                soru: "Was war mit den Autos?",
                secenekler: ["Sie waren komplett kaputt", "Sie hatten keine Kratzer", "Sie waren leicht kaputt", "Sie sind explodiert"],
                dogruIndex: 2
            },
            {
                id: "204-cs-4",
                tip: "coktan-secmeli",
                soru: "Was haben die Polizisten gemacht?",
                secenekler: ["Sie haben die Autos repariert", "Sie haben Fragen gestellt und alles notiert", "Sie haben die Fahrer ins Krankenhaus gebracht", "Sie sind schnell weggefahren"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 205,
        seviye: "zor",
        baslik: "Das Bewerbungsgespräch",
        metin: "Herr Becker hatte gestern ein wichtiges Bewerbungsgespräch bei einer großen IT-Firma. Er war sehr nervös, weil er den Job unbedingt haben möchte. Er hat einen dunklen Anzug und eine blaue Krawatte getragen. Der Manager hat viele Fragen über seine Erfahrungen gestellt. Herr Becker hat ruhig geantwortet. Am Ende hat der Manager gesagt, dass sie sich nächste Woche melden.",
        sorular: [
            {
                id: "205-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Becker hatte ein Bewerbungsgespräch.",
                dogruCevap: "dogru"
            },
            {
                id: "205-dy-2",
                tip: "dogru-yanlis",
                soru: "Er hat eine rote Krawatte getragen.",
                dogruCevap: "yanlis"
            },
            {
                id: "205-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Manager hat sofort gesagt, dass er den Job hat.",
                dogruCevap: "yanlis"
            },
            {
                id: "205-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie hat sich Herr Becker gefühlt?",
                secenekler: ["Er war sehr müde", "Er war sehr glücklich", "Er war sehr wütend", "Er war sehr nervös"],
                dogruIndex: 3
            },
            {
                id: "205-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo war das Gespräch?",
                secenekler: ["In einer Bank", "Bei einer IT-Firma", "In einem Restaurant", "In einer Schule"],
                dogruIndex: 1
            },
            {
                id: "205-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie hat Herr Becker auf die Fragen geantwortet?",
                secenekler: ["Laut", "Schnell", "Ruhig", "Böse"],
                dogruIndex: 2
            },
            {
                id: "205-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann meldet sich die Firma?",
                secenekler: ["Am Abend", "Morgen", "Nächste Woche", "Nächsten Monat"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 206,
        seviye: "zor",
        baslik: "Die Reiseplanung",
        metin: "Maria und ihr Freund planen ihren Sommerurlaub. Maria möchte ans Meer fahren, weil sie gerne schwimmt. Ihr Freund möchte lieber in die Berge, weil er gerne wandert. Am Ende entscheiden sie sich für einen Urlaub in Spanien. Sie haben gestern Abend die Flüge und ein Hotelzimmer mit Balkon gebucht. Sie hoffen, dass das Wetter sonnig wird.",
        sorular: [
            {
                id: "206-dy-1",
                tip: "dogru-yanlis",
                soru: "Maria möchte in die Berge fahren.",
                dogruCevap: "yanlis"
            },
            {
                id: "206-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie reisen nach Spanien.",
                dogruCevap: "dogru"
            },
            {
                id: "206-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie haben die Flüge noch nicht gebucht.",
                dogruCevap: "yanlis"
            },
            {
                id: "206-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum möchte Maria ans Meer?",
                secenekler: ["Weil sie wandern will", "Weil sie gerne schwimmt", "Weil sie gerne in der Sonne liegt", "Weil es dort billig ist"],
                dogruIndex: 1
            },
            {
                id: "206-cs-2",
                tip: "coktan-secmeli",
                soru: "Was macht der Freund gerne?",
                secenekler: ["Er wandert gerne", "Er fährt gerne Ski", "Er fotografiert gerne", "Er schwimmt gerne"],
                dogruIndex: 0
            },
            {
                id: "206-cs-3",
                tip: "coktan-secmeli",
                soru: "Was hat das Hotelzimmer?",
                secenekler: ["Eine Küche", "Zwei Betten", "Einen Balkon", "Einen Pool"],
                dogruIndex: 2
            },
            {
                id: "206-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hoffen sie?",
                secenekler: ["Dass das Essen gut schmeckt", "Dass das Hotel ruhig ist", "Dass das Wetter sonnig wird", "Dass der Flug kurz ist"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 207,
        seviye: "zor",
        baslik: "Probleme mit dem Nachbarn",
        metin: "Am Samstagabend gab es ein Problem im Haus. Der neue Nachbar im zweiten Stock hat eine Party gemacht und die Musik war viel zu laut. Frau Müller konnte nicht schlafen. Sie ist um Mitternacht nach oben gegangen und hat an die Tür geklopft. Sie hat gesagt, dass er die Musik leiser machen soll. Der Nachbar hat sich entschuldigt.",
        sorular: [
            {
                id: "207-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Party war am Freitagabend.",
                dogruCevap: "yanlis"
            },
            {
                id: "207-dy-2",
                tip: "dogru-yanlis",
                soru: "Frau Müller konnte wegen der Musik nicht schlafen.",
                dogruCevap: "dogru"
            },
            {
                id: "207-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Nachbar war sehr wütend.",
                dogruCevap: "yanlis"
            },
            {
                id: "207-cs-1",
                tip: "coktan-secmeli",
                soru: "Wer hat eine Party gemacht?",
                secenekler: ["Frau Müller", "Der neue Nachbar", "Ein Freund", "Die Kinder"],
                dogruIndex: 1
            },
            {
                id: "207-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann ist Frau Müller nach oben gegangen?",
                secenekler: ["Am Nachmittag", "Um acht Uhr", "Um Mitternacht", "Am Morgen"],
                dogruIndex: 2
            },
            {
                id: "207-cs-3",
                tip: "coktan-secmeli",
                soru: "Was hat Frau Müller verlangt?",
                secenekler: ["Dass die Party zu Ende ist", "Dass der Nachbar umzieht", "Dass sie mitfeiern darf", "Dass er die Musik leiser macht"],
                dogruIndex: 3
            },
            {
                id: "207-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie hat der Nachbar reagiert?",
                secenekler: ["Er hat sich entschuldigt", "Er hat die Tür geschlossen", "Er hat die Polizei gerufen", "Er hat weitergetanzt"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 208,
        seviye: "zor",
        baslik: "Das kranke Kind",
        metin: "Der kleine Lukas ist heute nicht in der Schule, weil er krank ist. Er hat hohes Fieber und Husten. Seine Mutter ist mit ihm zum Kinderarzt gegangen. Der Arzt hat gesagt, dass Lukas eine Woche im Bett bleiben muss. Er hat auch Medizin verschrieben, die Lukas dreimal am Tag nehmen soll. Die Mutter hat eine warme Suppe gekocht.",
        sorular: [
            {
                id: "208-dy-1",
                tip: "dogru-yanlis",
                soru: "Lukas ist heute in der Schule.",
                dogruCevap: "yanlis"
            },
            {
                id: "208-dy-2",
                tip: "dogru-yanlis",
                soru: "Er hat Kopfschmerzen und Bauchweh.",
                dogruCevap: "yanlis"
            },
            {
                id: "208-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Mutter hat eine warme Suppe gekocht.",
                dogruCevap: "dogru"
            },
            {
                id: "208-cs-1",
                tip: "coktan-secmeli",
                soru: "Wohin ist die Mutter mit Lukas gegangen?",
                secenekler: ["Ins Krankenhaus", "Zum Zahnarzt", "Zum Kinderarzt", "In die Apotheke"],
                dogruIndex: 2
            },
            {
                id: "208-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange muss Lukas im Bett bleiben?",
                secenekler: ["Zwei Tage", "Eine Woche", "Zwei Wochen", "Einen Monat"],
                dogruIndex: 1
            },
            {
                id: "208-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie oft soll er die Medizin nehmen?",
                secenekler: ["Einmal am Tag", "Zweimal am Tag", "Dreimal am Tag", "Nur am Abend"],
                dogruIndex: 2
            },
            {
                id: "208-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hat Lukas?",
                secenekler: ["Hohes Fieber und Husten", "Zahnschmerzen", "Nur Fieber", "Ein gebrochenes Bein"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 209,
        seviye: "zor",
        baslik: "Die Hochzeit der Schwester",
        metin: "Letztes Wochenende hat Saras ältere Schwester geheiratet. Die Hochzeit war wunderschön. Die Braut hat ein langes, weißes Kleid getragen und der Bräutigam einen eleganten schwarzen Anzug. Nach der Kirche sind alle Gäste in ein großes Restaurant gefahren. Es gab viel leckeres Essen und Live-Musik. Die Gäste haben bis tief in die Nacht getanzt.",
        sorular: [
            {
                id: "209-dy-1",
                tip: "dogru-yanlis",
                soru: "Saras kleine Schwester hat geheiratet.",
                dogruCevap: "yanlis"
            },
            {
                id: "209-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Braut hat ein rotes Kleid getragen.",
                dogruCevap: "yanlis"
            },
            {
                id: "209-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Hochzeit war letztes Wochenende.",
                dogruCevap: "dogru"
            },
            {
                id: "209-cs-1",
                tip: "coktan-secmeli",
                soru: "Was hat der Bräutigam getragen?",
                secenekler: ["Ein blaues Hemd", "Einen eleganten schwarzen Anzug", "Eine Jeans", "Einen braunen Pullover"],
                dogruIndex: 1
            },
            {
                id: "209-cs-2",
                tip: "coktan-secmeli",
                soru: "Wohin sind die Gäste nach der Kirche gefahren?",
                secenekler: ["Ins Hotel", "In einen Park", "In ein großes Restaurant", "An den Strand"],
                dogruIndex: 2
            },
            {
                id: "209-cs-3",
                tip: "coktan-secmeli",
                soru: "Was gab es im Restaurant?",
                secenekler: ["Nur Getränke", "Leckeres Essen und Live-Musik", "Einen langweiligen Film", "Eine Rede vom Bürgermeister"],
                dogruIndex: 1
            },
            {
                id: "209-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange haben die Leute getanzt?",
                secenekler: ["Nur eine Stunde", "Bis um acht Uhr", "Bis tief in die Nacht", "Sie haben nicht getanzt"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 210,
        seviye: "zor",
        baslik: "Ein neues Hobby",
        metin: "Seit einem Monat hat Felix ein neues Hobby. Er lernt Spanisch, weil er nächstes Jahr nach Südamerika reisen möchte. Er besucht einen Sprachkurs am Dienstag- und Donnerstagabend. Zuerst fand er die Grammatik sehr schwer, aber jetzt versteht er schon viel. Er liest spanische Texte und hört oft Podcasts, wenn er mit dem Zug fährt.",
        sorular: [
            {
                id: "210-dy-1",
                tip: "dogru-yanlis",
                soru: "Felix lernt seit einem Jahr Spanisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "210-dy-2",
                tip: "dogru-yanlis",
                soru: "Er reist nächstes Jahr nach Südamerika.",
                dogruCevap: "dogru"
            },
            {
                id: "210-dy-3",
                tip: "dogru-yanlis",
                soru: "Er findet die Grammatik immer noch unmöglich.",
                dogruCevap: "yanlis"
            },
            {
                id: "210-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann besucht er den Sprachkurs?",
                secenekler: ["Am Wochenende", "Jeden Morgen", "Am Dienstag- und Donnerstagabend", "Nur am Freitag"],
                dogruIndex: 2
            },
            {
                id: "210-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum lernt er Spanisch?",
                secenekler: ["Für seine Arbeit", "Weil seine Freundin Spanierin ist", "Weil er nach Südamerika reisen möchte", "Weil es sein Lieblingsfach ist"],
                dogruIndex: 2
            },
            {
                id: "210-cs-3",
                tip: "coktan-secmeli",
                soru: "Was macht er im Zug?",
                secenekler: ["Er schläft", "Er liest die Zeitung", "Er spricht mit Leuten", "Er hört Podcasts"],
                dogruIndex: 3
            },
            {
                id: "210-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie war die Grammatik für ihn am Anfang?",
                secenekler: ["Sehr leicht", "Sehr schwer", "Etwas langweilig", "Lustig"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 211,
        seviye: "zor",
        baslik: "Das kaputte Auto",
        metin: "Heute Morgen wollte Herr Wagner zur Arbeit fahren, aber sein Auto ist nicht angesprungen. Er hat versucht, den Motor noch einmal zu starten, aber nichts ist passiert. Er musste einen Mechaniker anrufen. Der Mechaniker hat gesagt, dass die Batterie leer ist. Herr Wagner hat ein Taxi genommen, damit er nicht zu spät ins Büro kommt.",
        sorular: [
            {
                id: "211-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Wagner wollte zur Arbeit fahren.",
                dogruCevap: "dogru"
            },
            {
                id: "211-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Motor hat laut gebrannt.",
                dogruCevap: "yanlis"
            },
            {
                id: "211-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Batterie des Autos war leer.",
                dogruCevap: "dogru"
            },
            {
                id: "211-cs-1",
                tip: "coktan-secmeli",
                soru: "Was ist heute Morgen passiert?",
                secenekler: ["Das Auto war gestohlen", "Das Auto ist nicht angesprungen", "Es gab einen Unfall", "Das Benzin war leer"],
                dogruIndex: 1
            },
            {
                id: "211-cs-2",
                tip: "coktan-secmeli",
                soru: "Wen hat Herr Wagner angerufen?",
                secenekler: ["Die Polizei", "Seine Frau", "Einen Mechaniker", "Seinen Chef"],
                dogruIndex: 2
            },
            {
                id: "211-cs-3",
                tip: "coktan-secmeli",
                soru: "Was war das Problem mit dem Auto?",
                secenekler: ["Der Reifen war kaputt", "Das Licht war an", "Die Tür ging nicht auf", "Die Batterie war leer"],
                dogruIndex: 3
            },
            {
                id: "211-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie ist er zur Arbeit gefahren?",
                secenekler: ["Mit dem Bus", "Er ist gelaufen", "Mit einem Taxi", "Mit dem Fahrrad"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 212,
        seviye: "zor",
        baslik: "Ein Abendessen mit Freunden",
        metin: "Am Freitag haben sich vier Freunde in einem neuen Restaurant getroffen. Das Essen war sehr gut, aber der Service war leider extrem langsam. Sie haben fast eine Stunde auf ihre Pizza gewartet. Als der Kellner das Essen gebracht hat, war eine Pizza kalt. Der Kellner hat sich sofort entschuldigt und ihnen danach ein kostenloses Dessert angeboten.",
        sorular: [
            {
                id: "212-dy-1",
                tip: "dogru-yanlis",
                soru: "Fünf Freunde haben sich getroffen.",
                dogruCevap: "yanlis"
            },
            {
                id: "212-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Essen war sehr schlecht.",
                dogruCevap: "yanlis"
            },
            {
                id: "212-dy-3",
                tip: "dogru-yanlis",
                soru: "Eine Pizza war kalt.",
                dogruCevap: "dogru"
            },
            {
                id: "212-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann haben sich die Freunde getroffen?",
                secenekler: ["Am Montag", "Am Mittwoch", "Am Freitag", "Am Wochenende"],
                dogruIndex: 2
            },
            {
                id: "212-cs-2",
                tip: "coktan-secmeli",
                soru: "Was war das Problem in dem Restaurant?",
                secenekler: ["Es war zu teuer", "Der Service war extrem langsam", "Die Musik war zu laut", "Der Kellner war böse"],
                dogruIndex: 1
            },
            {
                id: "212-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie lange haben sie auf das Essen gewartet?",
                secenekler: ["Zehn Minuten", "Eine halbe Stunde", "Fast eine Stunde", "Zwei Stunden"],
                dogruIndex: 2
            },
            {
                id: "212-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hat der Kellner als Entschuldigung gemacht?",
                secenekler: ["Er hat die Rechnung bezahlt", "Er hat ein kostenloses Dessert angeboten", "Er hat eine neue Pizza gebracht", "Er hat nichts gemacht"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 213,
        seviye: "zor",
        baslik: "Der Umzugstag",
        metin: "Heute ist ein anstrengender Tag für Julia. Sie zieht in eine andere Stadt um, weil sie dort einen neuen Job gefunden hat. Sie hat schon alle ihre Sachen in große Kartons gepackt. Zwei Freunde sind gekommen, um ihr beim Tragen zu helfen. Sie haben einen kleinen LKW gemietet. Julia ist traurig, dass sie umzieht, aber auch glücklich über den neuen Job.",
        sorular: [
            {
                id: "213-dy-1",
                tip: "dogru-yanlis",
                soru: "Julia zieht in ein anderes Land um.",
                dogruCevap: "yanlis"
            },
            {
                id: "213-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie zieht wegen eines neuen Jobs um.",
                dogruCevap: "dogru"
            },
            {
                id: "213-dy-3",
                tip: "dogru-yanlis",
                soru: "Julia hat die Kartons noch nicht gepackt.",
                dogruCevap: "yanlis"
            },
            {
                id: "213-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie ist der Tag für Julia?",
                secenekler: ["Sehr langweilig", "Ein anstrengender Tag", "Ein kurzer Tag", "Ein ruhiger Tag"],
                dogruIndex: 1
            },
            {
                id: "213-cs-2",
                tip: "coktan-secmeli",
                soru: "Wer hilft ihr beim Tragen?",
                secenekler: ["Ihre Eltern", "Zwei Freunde", "Ihr Bruder", "Ihre Nachbarn"],
                dogruIndex: 1
            },
            {
                id: "213-cs-3",
                tip: "coktan-secmeli",
                soru: "Was haben sie gemietet?",
                secenekler: ["Einen Wohnwagen", "Einen kleinen LKW", "Ein großes Auto", "Einen Bus"],
                dogruIndex: 1
            },
            {
                id: "213-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie fühlt sich Julia?",
                secenekler: ["Nur wütend", "Traurig, aber auch glücklich", "Nur glücklich", "Gar nicht traurig"],
                dogruIndex: 1
            }
        ]
    },{
        id: 214,
        seviye: "zor",
        baslik: "Der Flug nach London",
        metin: "Gestern ist Herr Schmidt nach London geflogen, weil er dort ein wichtiges Meeting hatte. Der Flug war leider sehr anstrengend, weil es stark geregnet hat und es viele Turbulenzen gab. Am Flughafen musste er eine Stunde auf sein Gepäck warten. Danach hat er ein Taxi genommen, das ihn direkt zu seinem Hotel gebracht hat. Am Abend war er so müde, dass er sofort eingeschlafen ist.",
        sorular: [
            {
                id: "214-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Schmidt ist nach Paris geflogen.",
                dogruCevap: "yanlis"
            },
            {
                id: "214-dy-2",
                tip: "dogru-yanlis",
                soru: "Er musste eine Stunde auf sein Gepäck warten.",
                dogruCevap: "dogru"
            },
            {
                id: "214-dy-3",
                tip: "dogru-yanlis",
                soru: "Am Abend ist er noch spazieren gegangen.",
                dogruCevap: "yanlis"
            },
            {
                id: "214-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum ist Herr Schmidt nach London geflogen?",
                secenekler: ["Er wollte Urlaub machen", "Er hatte dort ein wichtiges Meeting", "Er hat seine Familie besucht", "Er wollte einkaufen"],
                dogruIndex: 1
            },
            {
                id: "214-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum war der Flug anstrengend?",
                secenekler: ["Weil es stark geregnet hat", "Weil er neben einem Baby saß", "Weil der Flug zu lang war", "Weil das Essen schlecht war"],
                dogruIndex: 0
            },
            {
                id: "214-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist er zum Hotel gefahren?",
                secenekler: ["Mit dem Bus", "Mit dem Zug", "Mit einem Taxi", "Zu Fuß"],
                dogruIndex: 2
            },
            {
                id: "214-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hat er am Abend gemacht?",
                secenekler: ["Er hat gegessen", "Er hat gearbeitet", "Er hat ferngesehen", "Er ist sofort eingeschlafen"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 215,
        seviye: "zor",
        baslik: "Eine neue Sprache lernen",
        metin: "Anna hat sich entschieden, Japanisch zu lernen. Sie findet die Sprache sehr faszinierend, obwohl die Schriftzeichen ziemlich schwer sind. Jeden Tag übt sie mindestens eine Stunde mit einer App auf ihrem Smartphone. Wenn sie etwas nicht versteht, fragt sie ihren Sprachlehrer im Internet. Sie hofft, dass sie nächstes Jahr nach Tokio reisen kann.",
        sorular: [
            {
                id: "215-dy-1",
                tip: "dogru-yanlis",
                soru: "Anna lernt Chinesisch.",
                dogruCevap: "yanlis"
            },
            {
                id: "215-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Schriftzeichen findet sie schwer.",
                dogruCevap: "dogru"
            },
            {
                id: "215-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie übt einmal pro Woche.",
                dogruCevap: "yanlis"
            },
            {
                id: "215-cs-1",
                tip: "coktan-secmeli",
                soru: "Was findet Anna an der Sprache?",
                secenekler: ["Sie ist langweilig", "Sie ist sehr faszinierend", "Sie ist zu laut", "Sie ist uninteressant"],
                dogruIndex: 1
            },
            {
                id: "215-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lernt Anna jeden Tag?",
                secenekler: ["Mit einem Buch", "Mit einer App auf dem Smartphone", "In einer Schule", "Mit einer Zeitung"],
                dogruIndex: 1
            },
            {
                id: "215-cs-3",
                tip: "coktan-secmeli",
                soru: "Wen fragt sie, wenn sie Probleme hat?",
                secenekler: ["Ihre Mutter", "Ihren Sprachlehrer im Internet", "Ihren Freund", "Ihren Chef"],
                dogruIndex: 1
            },
            {
                id: "215-cs-4",
                tip: "coktan-secmeli",
                soru: "Wohin möchte sie nächstes Jahr reisen?",
                secenekler: ["Nach Peking", "Nach Osaka", "Nach Tokio", "Nach Seoul"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 216,
        seviye: "zor",
        baslik: "Das verlorene Haustier",
        metin: "Letzte Woche war die Katze von Familie Klein plötzlich verschwunden. Die Kinder haben im ganzen Haus und im Garten gesucht, aber sie war nirgends zu finden. Sie haben sogar Plakate in der Nachbarschaft aufgehängt. Nach zwei Tagen hat ein Nachbar angerufen und gesagt, dass die Katze in seiner Garage eingesperrt war. Alle waren sehr erleichtert.",
        sorular: [
            {
                id: "216-dy-1",
                tip: "dogru-yanlis",
                soru: "Der Hund von Familie Klein war verschwunden.",
                dogruCevap: "yanlis"
            },
            {
                id: "216-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Kinder haben Plakate aufgehängt.",
                dogruCevap: "dogru"
            },
            {
                id: "216-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Katze war im Keller eingesperrt.",
                dogruCevap: "yanlis"
            },
            {
                id: "216-cs-1",
                tip: "coktan-secmeli",
                soru: "Wer war plötzlich verschwunden?",
                secenekler: ["Der Hund", "Das Kaninchen", "Die Katze", "Der Vogel"],
                dogruIndex: 2
            },
            {
                id: "216-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo haben die Kinder zuerst gesucht?",
                secenekler: ["Im Park", "Im ganzen Haus und im Garten", "Im Wald", "Auf der Straße"],
                dogruIndex: 1
            },
            {
                id: "216-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie viele Tage war die Katze weg?",
                secenekler: ["Einen Tag", "Zwei Tage", "Drei Tage", "Eine Woche"],
                dogruIndex: 1
            },
            {
                id: "216-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo hat der Nachbar das Tier gefunden?",
                secenekler: ["In seinem Haus", "Auf dem Baum", "In seinem Auto", "In seiner Garage"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 217,
        seviye: "zor",
        baslik: "Der Autounfall im Winter",
        metin: "Im Winter müssen Autofahrer besonders vorsichtig sein. Gestern Morgen war die Straße sehr glatt, weil es in der Nacht geschneit hat. Ein junger Mann ist mit seinem Auto ins Schleudern geraten und gegen einen Baum gefahren. Der Fahrer blieb zum Glück unverletzt, aber das Auto musste abgeschleppt werden. Die Polizei hat die Straße für eine Stunde gesperrt.",
        sorular: [
            {
                id: "217-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Straße war sehr glatt.",
                dogruCevap: "dogru"
            },
            {
                id: "217-dy-2",
                tip: "dogru-yanlis",
                soru: "Der junge Mann wurde schwer verletzt.",
                dogruCevap: "yanlis"
            },
            {
                id: "217-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Polizei hat die Straße gesperrt.",
                dogruCevap: "dogru"
            },
            {
                id: "217-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum war die Straße glatt?",
                secenekler: ["Weil es geregnet hat", "Weil es geschneit hat", "Weil es Öl gab", "Weil es dunkel war"],
                dogruIndex: 1
            },
            {
                id: "217-cs-2",
                tip: "coktan-secmeli",
                soru: "Wogegen ist das Auto gefahren?",
                secenekler: ["Gegen ein anderes Auto", "Gegen eine Mauer", "Gegen einen Baum", "Gegen ein Haus"],
                dogruIndex: 2
            },
            {
                id: "217-cs-3",
                tip: "coktan-secmeli",
                soru: "Was passierte mit dem Fahrer?",
                secenekler: ["Er blieb unverletzt", "Er musste ins Krankenhaus", "Er ist weggelaufen", "Er hat geweint"],
                dogruIndex: 0
            },
            {
                id: "217-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange war die Straße gesperrt?",
                secenekler: ["Einen Tag", "Eine halbe Stunde", "Eine Stunde", "Zwei Stunden"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 218,
        seviye: "zor",
        baslik: "Ein Besuch im Krankenhaus",
        metin: "Toms Großvater liegt im Krankenhaus, weil er sich das Bein gebrochen hat. Tom besucht ihn am Sonntagnachmittag und bringt ihm frisches Obst und eine neue Zeitschrift mit. Der Großvater freut sich sehr über den Besuch. Er erzählt, dass die Ärzte freundlich sind, aber das Essen im Krankenhaus leider nicht gut schmeckt. Nächste Woche darf er wieder nach Hause.",
        sorular: [
            {
                id: "218-dy-1",
                tip: "dogru-yanlis",
                soru: "Toms Großvater hat sich den Arm gebrochen.",
                dogruCevap: "yanlis"
            },
            {
                id: "218-dy-2",
                tip: "dogru-yanlis",
                soru: "Tom bringt ihm Obst und eine Zeitschrift mit.",
                dogruCevap: "dogru"
            },
            {
                id: "218-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Großvater findet das Essen sehr lecker.",
                dogruCevap: "yanlis"
            },
            {
                id: "218-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum liegt der Großvater im Krankenhaus?",
                secenekler: ["Er hat eine Krankheit", "Er hat sich das Bein gebrochen", "Er hat Kopfschmerzen", "Er braucht eine Operation am Herz"],
                dogruIndex: 1
            },
            {
                id: "218-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann besucht Tom ihn?",
                secenekler: ["Am Montagmorgen", "Am Samstagabend", "Am Sonntagnachmittag", "Am Mittwoch"],
                dogruIndex: 2
            },
            {
                id: "218-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie sind die Ärzte?",
                secenekler: ["Sie sind böse", "Sie sind freundlich", "Sie sind ungeduldig", "Sie sind laut"],
                dogruIndex: 1
            },
            {
                id: "218-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann darf der Großvater nach Hause gehen?",
                secenekler: ["Heute", "Morgen", "Nächste Woche", "Nächsten Monat"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 219,
        seviye: "zor",
        baslik: "Eine Wohnung mieten",
        metin: "Sarah sucht schon lange eine neue Wohnung im Zentrum. Gestern hat sie endlich eine schöne Dreizimmerwohnung besichtigt. Die Wohnung ist hell, modern und hat sogar einen großen Balkon. Der einzige Nachteil ist, dass die Miete ziemlich hoch ist. Trotzdem hat Sarah den Mietvertrag unterschrieben, weil die Lage einfach perfekt ist. Im nächsten Monat wird sie umziehen.",
        sorular: [
            {
                id: "219-dy-1",
                tip: "dogru-yanlis",
                soru: "Sarah sucht eine Wohnung auf dem Land.",
                dogruCevap: "yanlis"
            },
            {
                id: "219-dy-2",
                tip: "dogru-yanlis",
                soru: "Die neue Wohnung hat drei Zimmer.",
                dogruCevap: "dogru"
            },
            {
                id: "219-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Miete ist sehr niedrig.",
                dogruCevap: "yanlis"
            },
            {
                id: "219-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo sucht Sarah eine Wohnung?",
                secenekler: ["Im Zentrum", "Im Dorf", "Am Stadtrand", "In einer anderen Stadt"],
                dogruIndex: 0
            },
            {
                id: "219-cs-2",
                tip: "coktan-secmeli",
                soru: "Was hat die Wohnung auch?",
                secenekler: ["Einen Garten", "Einen großen Balkon", "Einen Pool", "Einen Kamin"],
                dogruIndex: 1
            },
            {
                id: "219-cs-3",
                tip: "coktan-secmeli",
                soru: "Was ist der Nachteil an der Wohnung?",
                secenekler: ["Sie ist dunkel", "Sie ist zu klein", "Die Miete ist ziemlich hoch", "Die Nachbarn sind laut"],
                dogruIndex: 2
            },
            {
                id: "219-cs-4",
                tip: "coktan-secmeli",
                soru: "Warum hat sie den Vertrag unterschrieben?",
                secenekler: ["Weil die Lage perfekt ist", "Weil es billig ist", "Weil sie muss", "Weil ihr Freund das will"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 220,
        seviye: "zor",
        baslik: "Der Marathonlauf",
        metin: "Max hat sechs Monate lang für den Stadtmarathon trainiert. Er ist jeden Morgen um fünf Uhr aufgestanden, um zu joggen. Am Sonntag war endlich der große Tag. Das Wetter war kühl und ideal zum Laufen. Obwohl die letzten fünf Kilometer sehr schwer waren, hat er das Ziel erreicht. Seine Familie hat ihn am Ende lautstark angefeuert.",
        sorular: [
            {
                id: "220-dy-1",
                tip: "dogru-yanlis",
                soru: "Max hat ein Jahr lang trainiert.",
                dogruCevap: "yanlis"
            },
            {
                id: "220-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Wetter war ideal zum Laufen.",
                dogruCevap: "dogru"
            },
            {
                id: "220-dy-3",
                tip: "dogru-yanlis",
                soru: "Max hat das Ziel nicht erreicht.",
                dogruCevap: "yanlis"
            },
            {
                id: "220-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie lange hat Max trainiert?",
                secenekler: ["Drei Monate", "Sechs Monate", "Neun Monate", "Ein Jahr"],
                dogruIndex: 1
            },
            {
                id: "220-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann ist er immer aufgestanden?",
                secenekler: ["Um vier Uhr", "Um fünf Uhr", "Um sechs Uhr", "Um sieben Uhr"],
                dogruIndex: 1
            },
            {
                id: "220-cs-3",
                tip: "coktan-secmeli",
                soru: "Welcher Teil war besonders schwer?",
                secenekler: ["Der Anfang", "Die Mitte", "Die letzten fünf Kilometer", "Das Stehen"],
                dogruIndex: 2
            },
            {
                id: "220-cs-4",
                tip: "coktan-secmeli",
                soru: "Wer hat ihn angefeuert?",
                secenekler: ["Sein Chef", "Seine Familie", "Niemand", "Die Polizei"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 221,
        seviye: "zor",
        baslik: "Der Kochkurs",
        metin: "Laura kocht nicht sehr gerne, weil ihr Essen oft anbrennt. Deshalb hat ihr Freund ihr einen Kochkurs für italienische Küche geschenkt. Der Kurs fand am Wochenende statt. Zuerst hat der Koch gezeigt, wie man frische Pasta macht. Danach haben alle zusammen ein köstliches Tiramisu zubereitet. Laura hat gelernt, dass Kochen eigentlich viel Spaß machen kann.",
        sorular: [
            {
                id: "221-dy-1",
                tip: "dogru-yanlis",
                soru: "Laura ist normalerweise eine gute Köchin.",
                dogruCevap: "yanlis"
            },
            {
                id: "221-dy-2",
                tip: "dogru-yanlis",
                soru: "Ihr Freund hat ihr einen Kochkurs geschenkt.",
                dogruCevap: "dogru"
            },
            {
                id: "221-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie haben einen Kuchen gebacken.",
                dogruCevap: "yanlis"
            },
            {
                id: "221-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum kocht Laura nicht gerne?",
                secenekler: ["Weil sie keine Zeit hat", "Weil sie Gemüse hasst", "Weil ihr Essen oft anbrennt", "Weil es teuer ist"],
                dogruIndex: 2
            },
            {
                id: "221-cs-2",
                tip: "coktan-secmeli",
                soru: "Was für ein Kurs war es?",
                secenekler: ["Ein Backkurs", "Ein Kurs für italienische Küche", "Ein Kurs für spanische Küche", "Ein Fleischkurs"],
                dogruIndex: 1
            },
            {
                id: "221-cs-3",
                tip: "coktan-secmeli",
                soru: "Was haben sie als Nachtisch zubereitet?",
                secenekler: ["Eiscreme", "Schokolade", "Kekse", "Tiramisu"],
                dogruIndex: 3
            },
            {
                id: "221-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hat Laura gelernt?",
                secenekler: ["Dass Kochen Spaß machen kann", "Dass Kochen schwer ist", "Dass sie lieber ins Restaurant geht", "Dass Pasta ungesund ist"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 222,
        seviye: "zor",
        baslik: "Die kaputte Heizung",
        metin: "Es ist Januar und draußen friert es. Als Herr Weber am Abend nach Hause kam, war seine Wohnung eiskalt. Die Heizung war kaputt! Er hat sofort seinen Vermieter angerufen, aber niemand ist ans Telefon gegangen. Herr Weber musste die Nacht in einem dicken Schlafsack verbringen. Am nächsten Morgen kam endlich ein Handwerker und reparierte das Gerät.",
        sorular: [
            {
                id: "222-dy-1",
                tip: "dogru-yanlis",
                soru: "Es war Sommer und sehr heiß.",
                dogruCevap: "yanlis"
            },
            {
                id: "222-dy-2",
                tip: "dogru-yanlis",
                soru: "Herr Weber hat den Vermieter angerufen.",
                dogruCevap: "dogru"
            },
            {
                id: "222-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Handwerker kam noch in der Nacht.",
                dogruCevap: "yanlis"
            },
            {
                id: "222-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie war die Wohnung, als er nach Hause kam?",
                secenekler: ["Sehr heiß", "Angenehm warm", "Eiskalt", "Dunkel"],
                dogruIndex: 2
            },
            {
                id: "222-cs-2",
                tip: "coktan-secmeli",
                soru: "Was war kaputt?",
                secenekler: ["Der Fernseher", "Die Tür", "Der Ofen", "Die Heizung"],
                dogruIndex: 3
            },
            {
                id: "222-cs-3",
                tip: "coktan-secmeli",
                soru: "Worin hat Herr Weber geschlafen?",
                secenekler: ["In seinem normalen Bett", "Auf dem Boden", "In einem dicken Schlafsack", "Im Hotel"],
                dogruIndex: 2
            },
            {
                id: "222-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann kam der Handwerker?",
                secenekler: ["Am selben Abend", "Am nächsten Morgen", "Nach zwei Tagen", "Gar nicht"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 223,
        seviye: "zor",
        baslik: "Ein Ausflug ins Museum",
        metin: "Die Schulklasse von Frau Müller hat gestern einen Ausflug ins Naturkundemuseum gemacht. Die Schüler haben ein großes Dinosaurier-Skelett gesehen und viel über die Geschichte der Erde gelernt. Am interessantesten fanden sie die Ausstellung über gefährliche Insekten. Nach dem Museumsbesuch durften die Kinder noch ein kleines Souvenir im Museumsshop kaufen, bevor der Bus sie zur Schule zurückbrachte.",
        sorular: [
            {
                id: "223-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Klasse war im Kunstmuseum.",
                dogruCevap: "yanlis"
            },
            {
                id: "223-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie haben ein Dinosaurier-Skelett gesehen.",
                dogruCevap: "dogru"
            },
            {
                id: "223-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Kinder haben nichts gekauft.",
                dogruCevap: "yanlis"
            },
            {
                id: "223-cs-1",
                tip: "coktan-secmeli",
                soru: "Welches Museum hat die Klasse besucht?",
                secenekler: ["Das Technikmuseum", "Das Kunstmuseum", "Das Naturkundemuseum", "Das historische Museum"],
                dogruIndex: 2
            },
            {
                id: "223-cs-2",
                tip: "coktan-secmeli",
                soru: "Worüber haben sie viel gelernt?",
                secenekler: ["Über die Sterne", "Über die Geschichte der Erde", "Über Computer", "Über moderne Kunst"],
                dogruIndex: 1
            },
            {
                id: "223-cs-3",
                tip: "coktan-secmeli",
                soru: "Welche Ausstellung fanden sie am interessantesten?",
                secenekler: ["Gefährliche Insekten", "Alte Autos", "Seltene Vögel", "Schöne Pflanzen"],
                dogruIndex: 0
            },
            {
                id: "223-cs-4",
                tip: "coktan-secmeli",
                soru: "Was passierte nach dem Besuch?",
                secenekler: ["Sie sind sofort nach Hause gegangen", "Sie haben im Shop ein Souvenir gekauft", "Sie haben im Restaurant gegessen", "Sie haben einen Film geschaut"],
                dogruIndex: 1
            }
        ]
    },{
        id: 224,
        seviye: "zor",
        baslik: "Ein Ausflug nach München",
        metin: "Letztes Wochenende sind wir nach München gefahren, weil wir das Oktoberfest besuchen wollten. Obwohl das Wetter schlecht war, hatten wir viel Spaß. Wir haben große Brezeln gegessen und traditionelle Musik gehört. Als wir am Abend zurückfahren wollten, haben wir leider unseren Zug verpasst. Wir mussten eine Stunde warten, bis der nächste Zug kam.",
        sorular: [
            {
                id: "224-dy-1",
                tip: "dogru-yanlis",
                soru: "Das Wetter war sehr gut.",
                dogruCevap: "yanlis"
            },
            {
                id: "224-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie haben traditionelle Musik gehört.",
                dogruCevap: "dogru"
            },
            {
                id: "224-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie haben ihren Zug verpasst.",
                dogruCevap: "dogru"
            },
            {
                id: "224-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum sind sie nach München gefahren?",
                secenekler: ["Um zu arbeiten", "Weil sie das Oktoberfest besuchen wollten", "Um ein Auto zu kaufen", "Weil sie dort wohnen"],
                dogruIndex: 1
            },
            {
                id: "224-cs-2",
                tip: "coktan-secmeli",
                soru: "Was haben sie gegessen?",
                secenekler: ["Große Brezeln", "Pizza", "Schokolade", "Fisch"],
                dogruIndex: 0
            },
            {
                id: "224-cs-3",
                tip: "coktan-secmeli",
                soru: "Was passierte am Abend?",
                secenekler: ["Sie sind sofort eingeschlafen", "Sie haben den Zug verpasst", "Sie sind ins Kino gegangen", "Sie haben ein Taxi genommen"],
                dogruIndex: 1
            },
            {
                id: "224-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie lange mussten sie auf den nächsten Zug warten?",
                secenekler: ["Zehn Minuten", "Eine halbe Stunde", "Eine Stunde", "Zwei Stunden"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 225,
        seviye: "zor",
        baslik: "Der verlorene Reisepass",
        metin: "Herr Müller war sehr nervös, weil er am Flughafen seinen Reisepass nicht finden konnte. Er hat in seinem Koffer gesucht, aber da war nichts. Plötzlich erinnerte er sich, dass er ihn im Taxi gelassen hatte. Er rannte sofort nach draußen, aber das Taxi war schon weg. Zum Glück rief der Taxifahrer wenig später an und brachte den Pass zurück.",
        sorular: [
            {
                id: "225-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Müller war sehr entspannt am Flughafen.",
                dogruCevap: "yanlis"
            },
            {
                id: "225-dy-2",
                tip: "dogru-yanlis",
                soru: "Er hat seinen Reisepass im Koffer gefunden.",
                dogruCevap: "yanlis"
            },
            {
                id: "225-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Taxifahrer hat den Pass zurückgebracht.",
                dogruCevap: "dogru"
            },
            {
                id: "225-cs-1",
                tip: "coktan-secmeli",
                soru: "Was konnte Herr Müller nicht finden?",
                secenekler: ["Sein Flugticket", "Seinen Koffer", "Seinen Reisepass", "Sein Portemonnaie"],
                dogruIndex: 2
            },
            {
                id: "225-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo hatte er den Pass gelassen?",
                secenekler: ["Im Restaurant", "Im Taxi", "Zu Hause auf dem Tisch", "Im Flugzeug"],
                dogruIndex: 1
            },
            {
                id: "225-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machte er, als er sich erinnerte?",
                secenekler: ["Er rief die Polizei", "Er rannte nach draußen", "Er weinte laut", "Er kaufte ein neues Ticket"],
                dogruIndex: 1
            },
            {
                id: "225-cs-4",
                tip: "coktan-secmeli",
                soru: "Wer hat angerufen?",
                secenekler: ["Seine Frau", "Der Pilot", "Die Polizei", "Der Taxifahrer"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 226,
        seviye: "zor",
        baslik: "Die Überraschungsparty",
        metin: "Lisa hat eine Überraschungsparty für ihren besten Freund Max organisiert, weil er dreißig Jahre alt wurde. Sie hat alle seine Freunde eingeladen und eine große Schokoladentorte gebacken. Als Max am Abend nach Hause kam, war das Haus ganz dunkel. Plötzlich ging das Licht an und alle riefen 'Überraschung!'. Er war so glücklich, dass er fast geweint hat.",
        sorular: [
            {
                id: "226-dy-1",
                tip: "dogru-yanlis",
                soru: "Max hat eine Party für Lisa organisiert.",
                dogruCevap: "yanlis"
            },
            {
                id: "226-dy-2",
                tip: "dogru-yanlis",
                soru: "Lisa hat eine Schokoladentorte gebacken.",
                dogruCevap: "dogru"
            },
            {
                id: "226-dy-3",
                tip: "dogru-yanlis",
                soru: "Max war sehr glücklich über die Party.",
                dogruCevap: "dogru"
            },
            {
                id: "226-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum gab es eine Party?",
                secenekler: ["Weil Max einen neuen Job hatte", "Weil Max dreißig Jahre alt wurde", "Weil Lisa Geburtstag hatte", "Weil es Wochenende war"],
                dogruIndex: 1
            },
            {
                id: "226-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie war das Haus, als Max ankam?",
                secenekler: ["Sehr laut", "Ganz dunkel", "Sehr hell", "Zerstört"],
                dogruIndex: 1
            },
            {
                id: "226-cs-3",
                tip: "coktan-secmeli",
                soru: "Was haben die Freunde gerufen?",
                secenekler: ["Guten Abend!", "Herzlichen Glückwunsch!", "Überraschung!", "Hallo Max!"],
                dogruIndex: 2
            },
            {
                id: "226-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie hat Max reagiert?",
                secenekler: ["Er war wütend", "Er ist wieder gegangen", "Er war so glücklich, dass er fast geweint hat", "Er hat laut gelacht"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 227,
        seviye: "zor",
        baslik: "Probleme am Arbeitsplatz",
        metin: "Gestern war ein sehr stressiger Tag im Büro. Der Computer von Frau Wagner funktionierte nicht, weil es keinen Strom gab. Sie musste wichtige E-Mails schreiben, aber das war unmöglich. Erst nach zwei Stunden kam ein Techniker, der das Problem löste. Obwohl sie viel Zeit verloren hatte, konnte sie alle Aufgaben bis zum Abend erledigen.",
        sorular: [
            {
                id: "227-dy-1",
                tip: "dogru-yanlis",
                soru: "Der Tag im Büro war sehr ruhig.",
                dogruCevap: "yanlis"
            },
            {
                id: "227-dy-2",
                tip: "dogru-yanlis",
                soru: "Frau Wagner musste wichtige E-Mails schreiben.",
                dogruCevap: "dogru"
            },
            {
                id: "227-dy-3",
                tip: "dogru-yanlis",
                soru: "Frau Wagner konnte ihre Arbeit nicht beenden.",
                dogruCevap: "yanlis"
            },
            {
                id: "227-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum funktionierte der Computer nicht?",
                secenekler: ["Weil er kaputt war", "Weil es keinen Strom gab", "Weil sie das Passwort vergessen hatte", "Weil es kein Internet gab"],
                dogruIndex: 1
            },
            {
                id: "227-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann kam der Techniker?",
                secenekler: ["Sofort", "Nach einer halben Stunde", "Nach zwei Stunden", "Gar nicht"],
                dogruIndex: 2
            },
            {
                id: "227-cs-3",
                tip: "coktan-secmeli",
                soru: "Was hat der Techniker gemacht?",
                secenekler: ["Er hat einen neuen Computer gebracht", "Er hat das Problem gelöst", "Er hat Kaffee getrunken", "Er hat gesagt, sie soll nach Hause gehen"],
                dogruIndex: 1
            },
            {
                id: "227-cs-4",
                tip: "coktan-secmeli",
                soru: "Was passierte bis zum Abend?",
                secenekler: ["Sie konnte alle Aufgaben erledigen", "Sie ging früh nach Hause", "Der Strom fiel wieder aus", "Sie weinte im Büro"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 228,
        seviye: "zor",
        baslik: "Das Konzert im Regen",
        metin: "Am Samstagabend waren Julia und Tom auf einem Open-Air-Konzert. Die Band war fantastisch, aber nach einer Stunde fing es an zu regnen. Obwohl sie komplett nass wurden, sind sie geblieben. Sie haben im Regen getanzt und laut mitgesungen. Am nächsten Tag war Tom leider krank, weil er sich stark erkältet hatte.",
        sorular: [
            {
                id: "228-dy-1",
                tip: "dogru-yanlis",
                soru: "Julia und Tom waren im Kino.",
                dogruCevap: "yanlis"
            },
            {
                id: "228-dy-2",
                tip: "dogru-yanlis",
                soru: "Es hat nach einer Stunde angefangen zu regnen.",
                dogruCevap: "dogru"
            },
            {
                id: "228-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie sind sofort nach Hause gegangen.",
                dogruCevap: "yanlis"
            },
            {
                id: "228-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie war die Band?",
                secenekler: ["Sehr schlecht", "Langweilig", "Fantastisch", "Zu laut"],
                dogruIndex: 2
            },
            {
                id: "228-cs-2",
                tip: "coktan-secmeli",
                soru: "Was haben sie gemacht, als es regnete?",
                secenekler: ["Sie haben im Regen getanzt", "Sie haben sich versteckt", "Sie sind ins Auto gerannt", "Sie haben einen Regenschirm gekauft"],
                dogruIndex: 0
            },
            {
                id: "228-cs-3",
                tip: "coktan-secmeli",
                soru: "Wer wurde krank?",
                secenekler: ["Julia", "Tom", "Die Sängerin", "Beide"],
                dogruIndex: 1
            },
            {
                id: "228-cs-4",
                tip: "coktan-secmeli",
                soru: "Warum war er krank?",
                secenekler: ["Weil das Essen schlecht war", "Weil er zu viel getanzt hat", "Weil er sich stark erkältet hatte", "Weil er nicht geschlafen hat"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 229,
        seviye: "zor",
        baslik: "Der falsche Koffer",
        metin: "Nach einem langen Flug aus Spanien kam Frau Berger endlich im Hotel an. Als sie ihren Koffer öffnete, sah sie fremde Kleidung. Sie war geschockt, weil sie den falschen Koffer vom Flughafen mitgenommen hatte. Sie rief sofort am Flughafen an. Ein Mitarbeiter erklärte, dass ihr echter Koffer dort gefunden wurde. Am Nachmittag konnte sie die Koffer tauschen.",
        sorular: [
            {
                id: "229-dy-1",
                tip: "dogru-yanlis",
                soru: "Frau Berger kam aus Italien.",
                dogruCevap: "yanlis"
            },
            {
                id: "229-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie hat den falschen Koffer mitgenommen.",
                dogruCevap: "dogru"
            },
            {
                id: "229-dy-3",
                tip: "dogru-yanlis",
                soru: "Ihr echter Koffer war komplett verschwunden.",
                dogruCevap: "yanlis"
            },
            {
                id: "229-cs-1",
                tip: "coktan-secmeli",
                soru: "Was sah sie, als sie den Koffer öffnete?",
                secenekler: ["Ihre eigene Kleidung", "Fremde Kleidung", "Bücher", "Nichts, er war leer"],
                dogruIndex: 1
            },
            {
                id: "229-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum war sie geschockt?",
                secenekler: ["Weil alles nass war", "Weil sie bestohlen wurde", "Weil sie den falschen Koffer hatte", "Weil der Koffer kaputt war"],
                dogruIndex: 2
            },
            {
                id: "229-cs-3",
                tip: "coktan-secmeli",
                soru: "Wen hat sie angerufen?",
                secenekler: ["Die Polizei", "Das Hotel", "Das Reisebüro", "Den Flughafen"],
                dogruIndex: 3
            },
            {
                id: "229-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann konnte sie die Koffer tauschen?",
                secenekler: ["Sofort", "Am Nachmittag", "Am nächsten Tag", "Eine Woche später"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 230,
        seviye: "zor",
        baslik: "Ein enttäuschter Besucher",
        metin: "Am Sonntagnachmittag wollte Leon ins Technikmuseum gehen. Er freute sich auf die große Ausstellung über alte Züge. Als er dort ankam, sah er ein großes Schild an der Tür. Das Museum war leider geschlossen, weil das Gebäude renoviert wurde. Leon war sehr enttäuscht, aber er entschied sich, stattdessen in einen Park zu gehen und ein Buch zu lesen.",
        sorular: [
            {
                id: "230-dy-1",
                tip: "dogru-yanlis",
                soru: "Leon wollte ins Kunstmuseum gehen.",
                dogruCevap: "yanlis"
            },
            {
                id: "230-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Museum war geschlossen.",
                dogruCevap: "dogru"
            },
            {
                id: "230-dy-3",
                tip: "dogru-yanlis",
                soru: "Leon ist danach traurig nach Hause gegangen.",
                dogruCevap: "yanlis"
            },
            {
                id: "230-cs-1",
                tip: "coktan-secmeli",
                soru: "Worauf freute sich Leon?",
                secenekler: ["Auf die alten Flugzeuge", "Auf die Ausstellung über alte Züge", "Auf das Museumsrestaurant", "Auf einen Film"],
                dogruIndex: 1
            },
            {
                id: "230-cs-2",
                tip: "coktan-secmeli",
                soru: "Was sah er an der Tür?",
                secenekler: ["Einen Hund", "Einen Mitarbeiter", "Ein großes Schild", "Ein Schloss"],
                dogruIndex: 2
            },
            {
                id: "230-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum war das Museum geschlossen?",
                secenekler: ["Weil es Sonntag war", "Weil sie das Gebäude renovierten", "Weil es brannte", "Weil der Direktor krank war"],
                dogruIndex: 1
            },
            {
                id: "230-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hat Leon stattdessen gemacht?",
                secenekler: ["Er ist in einen Park gegangen und hat ein Buch gelesen", "Er ist ins Kino gegangen", "Er hat Kaffee getrunken", "Er ist einkaufen gegangen"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 231,
        seviye: "zor",
        baslik: "Das kaputte Geschenk",
        metin: "Vor einer Woche hat Klaus eine teure Uhr für seine Frau gekauft. Sie sollte ein Geschenk zu ihrem Hochzeitstag sein. Als er die Uhr zu Hause verstecken wollte, fiel sie leider auf den Boden. Das Glas war sofort kaputt! Klaus war sehr traurig und fuhr am nächsten Tag zurück zum Geschäft. Der Verkäufer war sehr nett und hat die Uhr kostenlos repariert.",
        sorular: [
            {
                id: "231-dy-1",
                tip: "dogru-yanlis",
                soru: "Klaus hat eine Kette für seine Frau gekauft.",
                dogruCevap: "yanlis"
            },
            {
                id: "231-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Uhr ist auf den Boden gefallen.",
                dogruCevap: "dogru"
            },
            {
                id: "231-dy-3",
                tip: "dogru-yanlis",
                soru: "Klaus musste viel Geld für die Reparatur bezahlen.",
                dogruCevap: "yanlis"
            },
            {
                id: "231-cs-1",
                tip: "coktan-secmeli",
                soru: "Für welches Ereignis war das Geschenk?",
                secenekler: ["Für einen Geburtstag", "Für Weihnachten", "Für den Hochzeitstag", "Für Muttertag"],
                dogruIndex: 2
            },
            {
                id: "231-cs-2",
                tip: "coktan-secmeli",
                soru: "Was passierte, als er die Uhr verstecken wollte?",
                secenekler: ["Seine Frau hat sie gesehen", "Er hat sie verloren", "Ein Hund hat sie gefressen", "Sie fiel auf den Boden"],
                dogruIndex: 3
            },
            {
                id: "231-cs-3",
                tip: "coktan-secmeli",
                soru: "Was war an der Uhr kaputt?",
                secenekler: ["Das Band", "Die Batterie", "Das Glas", "Der Zeiger"],
                dogruIndex: 2
            },
            {
                id: "231-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie war der Verkäufer im Geschäft?",
                secenekler: ["Er war böse", "Er war sehr nett und hat sie kostenlos repariert", "Er wollte nicht helfen", "Er hat die Uhr weggeworfen"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 232,
        seviye: "zor",
        baslik: "Ein unerwarteter Gast",
        metin: "Am Freitagabend saß Familie Braun beim Abendessen, als es plötzlich an der Tür klingelte. Draußen stand Onkel Heinz aus Berlin. Niemand wusste, dass er zu Besuch kommt, weil er sein Handy verloren hatte und nicht anrufen konnte. Die Familie freute sich sehr über die Überraschung. Die Mutter holte schnell einen weiteren Teller aus der Küche und alle aßen zusammen.",
        sorular: [
            {
                id: "232-dy-1",
                tip: "dogru-yanlis",
                soru: "Familie Braun saß beim Frühstück.",
                dogruCevap: "yanlis"
            },
            {
                id: "232-dy-2",
                tip: "dogru-yanlis",
                soru: "Onkel Heinz kam unerwartet zu Besuch.",
                dogruCevap: "dogru"
            },
            {
                id: "232-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Familie war nicht glücklich über den Besuch.",
                dogruCevap: "yanlis"
            },
            {
                id: "232-cs-1",
                tip: "coktan-secmeli",
                soru: "Woher kam Onkel Heinz?",
                secenekler: ["Aus Hamburg", "Aus München", "Aus Berlin", "Aus Köln"],
                dogruIndex: 2
            },
            {
                id: "232-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum wusste niemand, dass er kommt?",
                secenekler: ["Weil es ein Geheimnis war", "Weil er sein Handy verloren hatte", "Weil er keine Lust zum Telefonieren hatte", "Weil das Telefon kaputt war"],
                dogruIndex: 1
            },
            {
                id: "232-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie reagierte die Familie?",
                secenekler: ["Sie waren wütend", "Sie waren geschockt und böse", "Sie freuten sich sehr", "Sie öffneten die Tür nicht"],
                dogruIndex: 2
            },
            {
                id: "232-cs-4",
                tip: "coktan-secmeli",
                soru: "Was holte die Mutter aus der Küche?",
                secenekler: ["Einen weiteren Teller", "Einen Topf", "Ein Glas Wein", "Eine neue Pfanne"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 233,
        seviye: "zor",
        baslik: "Das spannende Finale",
        metin: "Die Schulmannschaft hat am Samstag an einem großen Fußballturnier teilgenommen. Im Finale spielten sie gegen eine sehr starke Mannschaft aus der Nachbarstadt. Obwohl es am Ende 1:1 stand, haben sie das Spiel im Elfmeterschießen gewonnen. Der Kapitän der Mannschaft war so glücklich, dass er den Pokal hoch in die Luft hob. Die Eltern klatschten stolz auf der Tribüne.",
        sorular: [
            {
                id: "233-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Mannschaft hat an einem Basketballturnier teilgenommen.",
                dogruCevap: "yanlis"
            },
            {
                id: "233-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Finale war gegen ein starkes Team.",
                dogruCevap: "dogru"
            },
            {
                id: "233-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie haben das Spiel verloren.",
                dogruCevap: "yanlis"
            },
            {
                id: "233-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie stand es am Ende der normalen Spielzeit?",
                secenekler: ["0:0", "1:0", "1:1", "2:2"],
                dogruIndex: 2
            },
            {
                id: "233-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie haben sie das Spiel gewonnen?",
                secenekler: ["Durch ein normales Tor", "Durch einen Fehler des Schiedsrichters", "Im Elfmeterschießen", "Sie haben nicht gewonnen"],
                dogruIndex: 2
            },
            {
                id: "233-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machte der Kapitän?",
                secenekler: ["Er weinte", "Er hob den Pokal hoch in die Luft", "Er lief vom Platz", "Er sprach mit dem Schiedsrichter"],
                dogruIndex: 1
            },
            {
                id: "233-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo waren die Eltern?",
                secenekler: ["Zu Hause", "Im Auto", "Im Café", "Auf der Tribüne"],
                dogruIndex: 3
            }
        ]
    },{
        id: 234,
        seviye: "zor",
        baslik: "Der ehrliche Finder",
        metin: "Letzten Freitag hatte Herr Müller einen wirklich schlechten Tag. Nachdem er im großen Supermarkt eingekauft hatte, bemerkte er plötzlich auf dem Parkplatz, dass sein Portemonnaie fehlte. Er suchte in allen Taschen seiner Jacke und sogar im Kofferraum, aber es war weg. Er war sehr verzweifelt, weil seine Kreditkarte und viel Bargeld darin waren. Zwei Stunden später klingelte es an seiner Haustür. Ein junger Mann stand dort und lächelte freundlich. Er hatte das Portemonnaie auf dem Parkplatz gefunden und die Adresse auf dem Ausweis gelesen. Herr Müller war so glücklich und dankbar, dass er dem jungen Mann sofort fünfzig Euro als Belohnung gab.",
        sorular: [
            {
                id: "234-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Müller hat sein Portemonnaie im Supermarkt vergessen.",
                dogruCevap: "yanlis"
            },
            {
                id: "234-dy-2",
                tip: "dogru-yanlis",
                soru: "Im Portemonnaie waren eine Kreditkarte und viel Bargeld.",
                dogruCevap: "dogru"
            },
            {
                id: "234-dy-3",
                tip: "dogru-yanlis",
                soru: "Der junge Mann wollte das Geld stehlen.",
                dogruCevap: "yanlis"
            },
            {
                id: "234-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo bemerkte Herr Müller, dass das Portemonnaie fehlte?",
                secenekler: ["Im Supermarkt", "An der Kasse", "Auf dem Parkplatz", "Zu Hause"],
                dogruIndex: 2
            },
            {
                id: "234-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann klingelte es an seiner Haustür?",
                secenekler: ["Eine Stunde später", "Zwei Stunden später", "Am nächsten Tag", "Am Abend"],
                dogruIndex: 1
            },
            {
                id: "234-cs-3",
                tip: "coktan-secmeli",
                soru: "Woher wusste der junge Mann, wo Herr Müller wohnt?",
                secenekler: ["Er kannte ihn", "Er hat im Telefonbuch gesucht", "Er hat die Adresse auf dem Ausweis gelesen", "Die Polizei hat es ihm gesagt"],
                dogruIndex: 2
            },
            {
                id: "234-cs-4",
                tip: "coktan-secmeli",
                soru: "Was gab Herr Müller dem jungen Mann?",
                secenekler: ["Einen Kaffee", "Einen Kuchen", "Fünfzig Euro als Belohnung", "Hundert Euro"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 235,
        seviye: "zor",
        baslik: "Das Wochenende am See",
        metin: "Familie Schmidt plante schon seit einem Monat einen Ausflug an den großen See. Als sie am Samstagmorgen endlich losfuhren, regnete es leider sehr stark. Die Kinder waren traurig auf dem Rücksitz, weil sie unbedingt im Wasser spielen und schwimmen wollten. Aber als sie nach zwei Stunden am See ankamen, kam plötzlich die Sonne heraus und die Wolken verschwanden. Das Wetter wurde wunderschön und sehr warm. Der Vater baute sofort das Zelt auf, während die Mutter ein leckeres Picknick vorbereitete. Am Nachmittag mieteten sie ein kleines Boot und fuhren weit auf das Wasser hinaus. Am Abend grillten sie Würstchen und sangen Lieder am Lagerfeuer.",
        sorular: [
            {
                id: "235-dy-1",
                tip: "dogru-yanlis",
                soru: "Es hat am Samstagmorgen stark geregnet.",
                dogruCevap: "dogru"
            },
            {
                id: "235-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Fahrt zum See dauerte drei Stunden.",
                dogruCevap: "yanlis"
            },
            {
                id: "235-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie haben am Nachmittag ein Boot gemietet.",
                dogruCevap: "dogru"
            },
            {
                id: "235-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum waren die Kinder zuerst traurig?",
                secenekler: ["Weil sie keine Lust hatten", "Weil es sehr stark regnete", "Weil das Auto kaputt war", "Weil sie wandern mussten"],
                dogruIndex: 1
            },
            {
                id: "235-cs-2",
                tip: "coktan-secmeli",
                soru: "Was passierte, als sie am See ankamen?",
                secenekler: ["Es regnete noch mehr", "Sie fuhren wieder nach Hause", "Die Sonne kam heraus", "Es wurde sehr kalt"],
                dogruIndex: 2
            },
            {
                id: "235-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machte der Vater?",
                secenekler: ["Er kochte Suppe", "Er schlief im Auto", "Er baute das Zelt auf", "Er schwamm im See"],
                dogruIndex: 2
            },
            {
                id: "235-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machten sie am Abend?",
                secenekler: ["Sie grillten Würstchen und sangen Lieder", "Sie gingen in ein Restaurant", "Sie fuhren nach Hause", "Sie sahen einen Film"],
                dogruIndex: 0
            }
        ]
    },
    {
        id: 236,
        seviye: "zor",
        baslik: "Das erfolgreiche Vorstellungsgespräch",
        metin: "Laura war extrem nervös, weil sie am Vormittag ein wichtiges Vorstellungsgespräch bei einer großen internationalen Firma hatte. Sie ist extra um sechs Uhr aufgestanden, um sich gut vorzubereiten und in Ruhe zu frühstücken. Sie hat einen eleganten schwarzen Anzug und eine weiße Bluse angezogen. Obwohl es auf der Autobahn viel Verkehr gab, kam sie zwanzig Minuten zu früh im Büro an. Der Manager war sehr freundlich und stellte viele Fragen über ihre bisherige Arbeitserfahrung und ihre Computerkenntnisse. Laura antwortete ruhig und sicher auf alle Fragen. Am nächsten Tag rief die Firma an und sagte, dass sie den Job bekommen hat. Sie feierte den Erfolg mit ihren Freunden.",
        sorular: [
            {
                id: "236-dy-1",
                tip: "dogru-yanlis",
                soru: "Laura ist um sechs Uhr aufgestanden.",
                dogruCevap: "dogru"
            },
            {
                id: "236-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie kam zu spät zum Gespräch, weil es viel Verkehr gab.",
                dogruCevap: "yanlis"
            },
            {
                id: "236-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Firma hat am selben Tag angerufen.",
                dogruCevap: "yanlis"
            },
            {
                id: "236-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum war Laura nervös?",
                secenekler: ["Weil sie eine Prüfung hatte", "Weil sie ein wichtiges Vorstellungsgespräch hatte", "Weil sie krank war", "Weil sie fliegen musste"],
                dogruIndex: 1
            },
            {
                id: "236-cs-2",
                tip: "coktan-secmeli",
                soru: "Was hat Laura getragen?",
                secenekler: ["Ein rotes Kleid", "Eine blaue Jeans", "Einen eleganten schwarzen Anzug", "Einen grauen Pullover"],
                dogruIndex: 2
            },
            {
                id: "236-cs-3",
                tip: "coktan-secmeli",
                soru: "Worüber hat der Manager Fragen gestellt?",
                secenekler: ["Über ihre Hobbys", "Über ihre Familie", "Über ihre Arbeitserfahrung und Computerkenntnisse", "Über ihren Urlaub"],
                dogruIndex: 2
            },
            {
                id: "236-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie endete die Geschichte?",
                secenekler: ["Sie bekam den Job nicht", "Sie bekam den Job und feierte mit Freunden", "Sie weinte", "Sie suchte eine andere Firma"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 237,
        seviye: "zor",
        baslik: "Der anstrengende Umzug",
        metin: "Letztes Wochenende musste Thomas in eine neue Wohnung ziehen, weil sein alter Vermieter das Haus verkaufen wollte. Er hat schon am Donnerstagabend angefangen, alle seine vielen Bücher, Kleidung und Geschirr in große, braune Kartons zu packen. Am Samstagmorgen kamen drei gute Freunde, um ihm beim Tragen zu helfen. Sie haben extra einen großen LKW gemietet, weil Thomas viele schwere Möbel wie ein Bett und einen Schrank hatte. Der Umzug war sehr anstrengend, weil die neue Wohnung im dritten Stock ohne Aufzug liegt. Am Abend waren alle extrem müde, aber Thomas bestellte drei große Pizzen als Dankeschön. Jetzt freut er sich auf sein neues Zuhause.",
        sorular: [
            {
                id: "237-dy-1",
                tip: "dogru-yanlis",
                soru: "Thomas musste umziehen, weil sein Vermieter das Haus verkaufen wollte.",
                dogruCevap: "dogru"
            },
            {
                id: "237-dy-2",
                tip: "dogru-yanlis",
                soru: "Vier gute Freunde haben ihm geholfen.",
                dogruCevap: "yanlis"
            },
            {
                id: "237-dy-3",
                tip: "dogru-yanlis",
                soru: "Die neue Wohnung hat keinen Aufzug.",
                dogruCevap: "dogru"
            },
            {
                id: "237-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann hat Thomas angefangen zu packen?",
                secenekler: ["Am Freitagmorgen", "Am Donnerstagabend", "Am Samstag", "Am Sonntag"],
                dogruIndex: 1
            },
            {
                id: "237-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum haben sie einen LKW gemietet?",
                secenekler: ["Weil es geregnet hat", "Weil Thomas keine Freunde hatte", "Weil Thomas viele schwere Möbel hatte", "Weil es billiger war"],
                dogruIndex: 2
            },
            {
                id: "237-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum war der Umzug so anstrengend?",
                secenekler: ["Weil das Auto kaputt war", "Weil die Wohnung im 3. Stock ohne Aufzug liegt", "Weil Thomas krank war", "Weil die Freunde nicht gekommen sind"],
                dogruIndex: 1
            },
            {
                id: "237-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machte Thomas als Dankeschön?",
                secenekler: ["Er gab ihnen Geld", "Er kaufte Geschenke", "Er bestellte drei große Pizzen", "Er lud sie ins Kino ein"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 238,
        seviye: "zor",
        baslik: "Das verbrannte Abendessen",
        metin: "Anna wollte gestern Abend ein ganz besonderes Essen für ihren neuen Freund kochen. Sie kaufte teures Fleisch, frisches Gemüse vom Markt und eine gute Flasche Rotwein. Zuerst lief alles perfekt nach Plan, aber dann klingelte plötzlich das Telefon. Es war ihre Mutter, die sehr lange über den nächsten Familienurlaub reden wollte. Während des Gesprächs vergaß Anna das Fleisch im heißen Ofen völlig. Als sie den schwarzen Rauch roch, war es leider schon zu spät. Das Essen war komplett verbrannt und die ganze Küche roch furchtbar. Als ihr Freund ankam, lachte er nur über das Chaos. Sie sind dann einfach zusammen in ein italienisches Restaurant gegangen.",
        sorular: [
            {
                id: "238-dy-1",
                tip: "dogru-yanlis",
                soru: "Anna wollte für ihre Mutter kochen.",
                dogruCevap: "yanlis"
            },
            {
                id: "238-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Telefon klingelte beim Kochen.",
                dogruCevap: "dogru"
            },
            {
                id: "238-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Freund war sehr wütend über das verbrannte Essen.",
                dogruCevap: "yanlis"
            },
            {
                id: "238-cs-1",
                tip: "coktan-secmeli",
                soru: "Was kaufte Anna für das Essen?",
                secenekler: ["Nur Nudeln und Tomatensoße", "Teures Fleisch, frisches Gemüse und Rotwein", "Fisch und Wasser", "Pizza und Cola"],
                dogruIndex: 1
            },
            {
                id: "238-cs-2",
                tip: "coktan-secmeli",
                soru: "Worüber wollte die Mutter am Telefon reden?",
                secenekler: ["Über das Wetter", "Über einen kranken Hund", "Über den nächsten Familienurlaub", "Über das Abendessen"],
                dogruIndex: 2
            },
            {
                id: "238-cs-3",
                tip: "coktan-secmeli",
                soru: "Was passierte mit dem Fleisch?",
                secenekler: ["Es schmeckte sehr gut", "Der Hund hat es gegessen", "Es war komplett verbrannt", "Es war noch roh"],
                dogruIndex: 2
            },
            {
                id: "238-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo haben sie am Ende gegessen?",
                secenekler: ["In der Küche", "Bei der Mutter", "In einem italienischen Restaurant", "Auf dem Balkon"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 239,
        seviye: "zor",
        baslik: "Verloren in den Bergen",
        metin: "Am Sonntag machten Felix und sein jüngerer Bruder eine lange, anstrengende Wanderung in den Alpen. Das Wetter war am Morgen perfekt, sehr sonnig und klar. Sie wanderten drei Stunden lang steil bergauf, bis sie eine kleine, gemütliche Hütte erreichten. Nach einer kurzen Pause gingen sie weiter, aber plötzlich kam sehr dichter Nebel auf. Sie konnten den kleinen Weg nicht mehr sehen und verirrten sich im tiefen Wald. Beide hatten ein bisschen Angst. Zum Glück hatte Felix eine digitale Wanderkarte auf seinem Handy gespeichert. Nach einer langen Stunde voller Sorgen fanden sie endlich den richtigen Weg zurück ins Tal. Sie waren extrem froh, als sie wieder sicher am Auto waren.",
        sorular: [
            {
                id: "239-dy-1",
                tip: "dogru-yanlis",
                soru: "Felix und sein Bruder wanderten in den Alpen.",
                dogruCevap: "dogru"
            },
            {
                id: "239-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Wetter war von Anfang an sehr schlecht.",
                dogruCevap: "yanlis"
            },
            {
                id: "239-dy-3",
                tip: "dogru-yanlis",
                soru: "Felix hatte eine Wanderkarte auf seinem Handy.",
                dogruCevap: "dogru"
            },
            {
                id: "239-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie lange wanderten sie bergauf bis zur Hütte?",
                secenekler: ["Eine Stunde", "Zwei Stunden", "Drei Stunden", "Vier Stunden"],
                dogruIndex: 2
            },
            {
                id: "239-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum konnten sie den Weg nicht mehr sehen?",
                secenekler: ["Weil es Nacht wurde", "Weil plötzlich dichter Nebel aufkam", "Weil sie ihre Brillen verloren hatten", "Weil es stark regnete"],
                dogruIndex: 1
            },
            {
                id: "239-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo verirrten sie sich?",
                secenekler: ["In der Stadt", "Im tiefen Wald", "Auf einer Wiese", "Am See"],
                dogruIndex: 1
            },
            {
                id: "239-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie fanden sie den Weg zurück ins Tal?",
                secenekler: ["Mit Hilfe von anderen Wanderern", "Sie riefen die Polizei", "Mit der digitalen Wanderkarte auf dem Handy", "Mit einem Hund"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 240,
        seviye: "zor",
        baslik: "Der neue Laptop",
        metin: "Da sein alter Laptop sehr langsam war und ständig abstürzte, entschied sich Markus, endlich einen neuen Computer zu kaufen. Er fuhr am Freitagnachmittag in ein großes Elektronikgeschäft direkt im Stadtzentrum. Ein freundlicher Verkäufer zeigte ihm viele verschiedene Modelle und erklärte geduldig alle technischen Details. Markus kaufte schließlich einen silbernen Laptop, der extrem leicht war und einen sehr großen Speicher hatte. Zu Hause packte er das neue Gerät sofort aus und installierte alle wichtigen Programme für seine Arbeit. Er war absolut begeistert, weil der neue Computer unglaublich schnell hochfuhr. Jetzt macht ihm das lange Arbeiten im Homeoffice wieder viel mehr Spaß.",
        sorular: [
            {
                id: "240-dy-1",
                tip: "dogru-yanlis",
                soru: "Markus alter Laptop war sehr schnell.",
                dogruCevap: "yanlis"
            },
            {
                id: "240-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Verkäufer im Geschäft war freundlich und geduldig.",
                dogruCevap: "dogru"
            },
            {
                id: "240-dy-3",
                tip: "dogru-yanlis",
                soru: "Markus nutzt den Laptop für seine Arbeit im Homeoffice.",
                dogruCevap: "dogru"
            },
            {
                id: "240-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum kaufte Markus einen neuen Laptop?",
                secenekler: ["Weil der alte gestohlen wurde", "Weil der alte sehr langsam war und abstürzte", "Weil er zu viel Geld hatte", "Weil er spielen wollte"],
                dogruIndex: 1
            },
            {
                id: "240-cs-2",
                tip: "coktan-secmeli",
                soru: "Wann fuhr er in das Elektronikgeschäft?",
                secenekler: ["Am Montagmorgen", "Am Freitagnachmittag", "Am Samstagabend", "Am Sonntag"],
                dogruIndex: 1
            },
            {
                id: "240-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie ist der neue Laptop?",
                secenekler: ["Schwer und schwarz", "Rot und teuer", "Silbern, leicht und mit großem Speicher", "Groß und langsam"],
                dogruIndex: 2
            },
            {
                id: "240-cs-4",
                tip: "coktan-secmeli",
                soru: "Was war der größte Vorteil zu Hause?",
                secenekler: ["Das Bild war schön", "Er fuhr unglaublich schnell hoch", "Er war sehr leise", "Die Tastatur war weich"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 241,
        seviye: "zor",
        baslik: "Der kranke Hund",
        metin: "Gestern Morgen bemerkte Frau Weber sofort, dass ihr Hund Bello sein Frühstück nicht fressen wollte. Er lag nur müde auf seinem Kissen in der Ecke und wollte nicht einmal im Garten spielen, was sehr ungewöhnlich war. Weil sie sich große Sorgen machte, fuhr sie sofort mit ihm in die Klinik zum Tierarzt. Die Praxis war voll, deshalb mussten sie fast eine ganze Stunde im lauten Wartezimmer sitzen. Der Arzt untersuchte Bello genau und erklärte, dass er nur eine leichte Mageninfektion hat. Er gab dem kleinen Hund eine Spritze und verschrieb spezielle Tropfen. Schon am nächsten Tag ging es Bello viel besser und er hatte wieder riesigen Hunger.",
        sorular: [
            {
                id: "241-dy-1",
                tip: "dogru-yanlis",
                soru: "Bello wollte am Morgen nicht im Garten spielen.",
                dogruCevap: "dogru"
            },
            {
                id: "241-dy-2",
                tip: "dogru-yanlis",
                soru: "Frau Weber musste nicht im Wartezimmer warten.",
                dogruCevap: "yanlis"
            },
            {
                id: "241-dy-3",
                tip: "dogru-yanlis",
                soru: "Bello hatte eine schwere Krankheit.",
                dogruCevap: "yanlis"
            },
            {
                id: "241-cs-1",
                tip: "coktan-secmeli",
                soru: "Was war das erste Zeichen, dass Bello krank war?",
                secenekler: ["Er weinte laut", "Er wollte sein Frühstück nicht fressen", "Er lief weg", "Er biss Frau Weber"],
                dogruIndex: 1
            },
            {
                id: "241-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum fuhren sie zum Tierarzt?",
                secenekler: ["Für eine normale Kontrolle", "Weil Frau Weber sich große Sorgen machte", "Weil Bello gebissen wurde", "Um Hundefutter zu kaufen"],
                dogruIndex: 1
            },
            {
                id: "241-cs-3",
                tip: "coktan-secmeli",
                soru: "Was sagte der Arzt nach der Untersuchung?",
                secenekler: ["Dass Bello eine Mageninfektion hat", "Dass Bello operiert werden muss", "Dass Bello völlig gesund ist", "Dass Bello im Krankenhaus bleiben muss"],
                dogruIndex: 0
            },
            {
                id: "241-cs-4",
                tip: "coktan-secmeli",
                soru: "Was bekam Bello vom Arzt?",
                secenekler: ["Einen Knochen", "Nur Tabletten", "Eine Spritze und spezielle Tropfen", "Einen Verband"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 242,
        seviye: "zor",
        baslik: "Ein extrem stressiger Arbeitstag",
        metin: "Herr Klein arbeitet als Projektmanager in einem großen, modernen Bürogebäude. Gestern war sein Tag von Anfang an besonders stressig. Zuerst hatte er verschlafen, weil sein Wecker aus irgendeinem Grund nicht geklingelt hat. Als er endlich im Büro ankam, funktionierte der Hauptfahrstuhl nicht und er musste mit schwerer Tasche in den siebten Stock laufen. Danach hatte er eine vierstündige, anstrengende Konferenz mit wichtigen Kunden aus dem Ausland. Er hatte nicht einmal Zeit, um in Ruhe eine Tasse Kaffee zu trinken oder richtig Mittag zu essen. Als er um neunzehn Uhr endlich nach Hause kam, legte er sich sofort mit seinen Kleidern auf das Sofa und schlief tief ein.",
        sorular: [
            {
                id: "242-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Klein war pünktlich im Büro.",
                dogruCevap: "yanlis"
            },
            {
                id: "242-dy-2",
                tip: "dogru-yanlis",
                soru: "Er musste in den siebten Stock laufen, weil der Fahrstuhl kaputt war.",
                dogruCevap: "dogru"
            },
            {
                id: "242-dy-3",
                tip: "dogru-yanlis",
                soru: "Herr Klein hat ein entspanntes Mittagessen gehabt.",
                dogruCevap: "yanlis"
            },
            {
                id: "242-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum hat Herr Klein verschlafen?",
                secenekler: ["Weil er müde war", "Weil sein Wecker nicht geklingelt hat", "Weil er zu spät ins Bett ging", "Weil das Telefon klingelte"],
                dogruIndex: 1
            },
            {
                id: "242-cs-2",
                tip: "coktan-secmeli",
                soru: "Was für eine Konferenz hatte er?",
                secenekler: ["Eine kurze Teambesprechung", "Eine vierstündige Konferenz mit Kunden aus dem Ausland", "Ein Interview mit dem Chef", "Ein Treffen mit Freunden"],
                dogruIndex: 1
            },
            {
                id: "242-cs-3",
                tip: "coktan-secmeli",
                soru: "Wofür hatte Herr Klein keine Zeit?",
                secenekler: ["Zum Reden", "Zum Arbeiten", "Für Kaffee oder ein richtiges Mittagessen", "Für das Internet"],
                dogruIndex: 2
            },
            {
                id: "242-cs-4",
                tip: "coktan-secmeli",
                soru: "Was passierte, als er um neunzehn Uhr nach Hause kam?",
                secenekler: ["Er ging joggen", "Er kochte Abendessen", "Er rief seine Mutter an", "Er legte sich auf das Sofa und schlief ein"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 243,
        seviye: "zor",
        baslik: "Die vergessenen Konzertkarten",
        metin: "Sarah hatte sich schon seit mehreren Monaten auf das große Konzert ihrer Lieblingsband gefreut. Die begehrten Tickets waren sehr teuer und schon nach einem Tag komplett ausverkauft gewesen. Als sie am Samstagabend endlich vor der großen Konzerthalle stand und in ihre Handtasche griff, bekam sie plötzlich einen riesigen Schreck. Die Tickets waren nicht da! Sie suchte überall, aber konnte sie nicht finden. In Panik rief sie sofort ihren Bruder an, der noch zu Hause war. Er fand die beiden Tickets zum Glück auf dem Küchentisch und fuhr so schnell wie möglich mit dem Auto zur Halle. Er kam gerade noch rechtzeitig an, fünf Minuten bevor das Konzert anfing. Sarah fiel ihm glücklich um den Hals.",
        sorular: [
            {
                id: "243-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Konzerttickets waren günstig und leicht zu kaufen.",
                dogruCevap: "yanlis"
            },
            {
                id: "243-dy-2",
                tip: "dogru-yanlis",
                soru: "Sarah bemerkte vor der Halle, dass die Tickets fehlen.",
                dogruCevap: "dogru"
            },
            {
                id: "243-dy-3",
                tip: "dogru-yanlis",
                soru: "Ihr Bruder brachte die Tickets zu spät zur Halle.",
                dogruCevap: "yanlis"
            },
            {
                id: "243-cs-1",
                tip: "coktan-secmeli",
                soru: "Wie lange hatte sich Sarah auf das Konzert gefreut?",
                secenekler: ["Seit einer Woche", "Seit mehreren Monaten", "Seit gestern", "Gar nicht"],
                dogruIndex: 1
            },
            {
                id: "243-cs-2",
                tip: "coktan-secmeli",
                soru: "Wen rief Sarah in Panik an?",
                secenekler: ["Die Polizei", "Ihre Mutter", "Ihren Bruder", "Ihren Freund"],
                dogruIndex: 2
            },
            {
                id: "243-cs-3",
                tip: "coktan-secmeli",
                soru: "Wo lagen die Tickets?",
                secenekler: ["Im Auto", "Unter dem Bett", "In der anderen Tasche", "Auf dem Küchentisch"],
                dogruIndex: 3
            },
            {
                id: "243-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann kam der Bruder an?",
                secenekler: ["Während des Konzerts", "Fünf Minuten bevor das Konzert anfing", "Nach dem Konzert", "Eine Stunde zu früh"],
                dogruIndex: 1
            }
        ]
    },{
        id: 244,
        seviye: "zor",
        baslik: "Der verpasste Zug",
        metin: "Gestern wollte Herr Fischer mit dem Zug nach Berlin fahren, um seinen alten Freund zu besuchen. Weil er am Morgen im Stau stand, kam er leider zehn Minuten zu spät am Bahnhof an. Der Zug war schon abgefahren! Er ging schnell zum Schalter, um ein neues Ticket zu kaufen. Obwohl der nächste Zug erst in zwei Stunden fuhr, blieb Herr Fischer ruhig. Er kaufte sich einen großen Kaffee, setzte sich auf eine Bank und las ein spannendes Buch, bis der Zug endlich kam.",
        sorular: [
            {
                id: "244-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Fischer kam pünktlich am Bahnhof an.",
                dogruCevap: "yanlis"
            },
            {
                id: "244-dy-2",
                tip: "dogru-yanlis",
                soru: "Er wollte nach Berlin fahren.",
                dogruCevap: "dogru"
            },
            {
                id: "244-dy-3",
                tip: "dogru-yanlis",
                soru: "Herr Fischer wurde sehr wütend und weinte.",
                dogruCevap: "yanlis"
            },
            {
                id: "244-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum kam Herr Fischer zu spät?",
                secenekler: ["Weil er verschlafen hat", "Weil er im Stau stand", "Weil er den Weg nicht wusste", "Weil sein Auto kaputt war"],
                dogruIndex: 1
            },
            {
                id: "244-cs-2",
                tip: "coktan-secmeli",
                soru: "Was passierte, als er am Bahnhof ankam?",
                secenekler: ["Der Zug war schon abgefahren", "Der Zug hatte Verspätung", "Der Bahnhof war geschlossen", "Sein Freund wartete auf ihn"],
                dogruIndex: 0
            },
            {
                id: "244-cs-3",
                tip: "coktan-secmeli",
                soru: "Wann fuhr der nächste Zug?",
                secenekler: ["In fünfzehn Minuten", "In einer halben Stunde", "In einer Stunde", "In zwei Stunden"],
                dogruIndex: 3
            },
            {
                id: "244-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machte er beim Warten?",
                secenekler: ["Er schlief auf der Bank", "Er trank Kaffee und las ein Buch", "Er aß ein Sandwich", "Er rief seinen Freund an"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 245,
        seviye: "zor",
        baslik: "Eine schwierige Reparatur",
        metin: "Am Wochenende war die Waschmaschine von Familie Weber plötzlich kaputt. Als die Mutter die Maschine einschaltete, gab es ein lautes Geräusch und Wasser lief auf den Boden. Der Vater versuchte zuerst, die Maschine selbst zu reparieren, obwohl er kein Handwerker ist. Nachdem er zwei Stunden gearbeitet hatte, gab er auf. Sie mussten einen professionellen Techniker rufen, der am Montagmorgen kam. Er fand den Fehler schnell und tauschte ein kleines Teil aus. Jetzt funktioniert alles wieder perfekt.",
        sorular: [
            {
                id: "245-dy-1",
                tip: "dogru-yanlis",
                soru: "Der Fernseher der Familie war kaputt.",
                dogruCevap: "yanlis"
            },
            {
                id: "245-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Vater konnte die Maschine selbst reparieren.",
                dogruCevap: "yanlis"
            },
            {
                id: "245-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Techniker kam am Montagmorgen.",
                dogruCevap: "dogru"
            },
            {
                id: "245-cs-1",
                tip: "coktan-secmeli",
                soru: "Was passierte, als die Mutter die Maschine einschaltete?",
                secenekler: ["Nichts passierte", "Es brannte", "Es gab ein lautes Geräusch und Wasser lief auf den Boden", "Die Maschine tanzte"],
                dogruIndex: 2
            },
            {
                id: "245-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange versuchte der Vater die Reparatur?",
                secenekler: ["Eine Stunde", "Zwei Stunden", "Drei Stunden", "Fünf Minuten"],
                dogruIndex: 1
            },
            {
                id: "245-cs-3",
                tip: "coktan-secmeli",
                soru: "Wen mussten sie am Ende rufen?",
                secenekler: ["Die Polizei", "Die Feuerwehr", "Einen professionellen Techniker", "Den Nachbarn"],
                dogruIndex: 2
            },
            {
                id: "245-cs-4",
                tip: "coktan-secmeli",
                soru: "Was hat der Techniker gemacht?",
                secenekler: ["Er hat eine neue Maschine verkauft", "Er hat ein kleines Teil ausgetauscht", "Er hat nur sauber gemacht", "Er konnte den Fehler nicht finden"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 246,
        seviye: "zor",
        baslik: "Das teure Abendessen",
        metin: "Letzten Freitag feierten Markus und seine Frau ihren zehnten Hochzeitstag in einem sehr teuren, französischen Restaurant. Sie bestellten ein fantastisches Menü mit drei Gängen und eine Flasche Champagner. Die Musik war leise und die Atmosphäre war sehr romantisch. Als Markus am Ende die Rechnung bezahlen wollte, bemerkte er geschockt, dass er seine Kreditkarte zu Hause vergessen hatte. Zum Glück hatte seine Frau genug Bargeld in ihrer Tasche, sodass sie das Problem schnell lösen konnten.",
        sorular: [
            {
                id: "246-dy-1",
                tip: "dogru-yanlis",
                soru: "Markus und seine Frau feierten einen Geburtstag.",
                dogruCevap: "yanlis"
            },
            {
                id: "246-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Restaurant war sehr günstig.",
                dogruCevap: "yanlis"
            },
            {
                id: "246-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Frau hatte genug Bargeld dabei.",
                dogruCevap: "dogru"
            },
            {
                id: "246-cs-1",
                tip: "coktan-secmeli",
                soru: "Was haben sie bestellt?",
                secenekler: ["Nur Pizza und Wasser", "Einen großen Salat", "Ein Menü mit drei Gängen und Champagner", "Zwei Kaffee"],
                dogruIndex: 2
            },
            {
                id: "246-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie war die Atmosphäre im Restaurant?",
                secenekler: ["Sehr laut", "Sehr romantisch", "Stressig", "Langweilig"],
                dogruIndex: 1
            },
            {
                id: "246-cs-3",
                tip: "coktan-secmeli",
                soru: "Was bemerkte Markus beim Bezahlen?",
                secenekler: ["Dass das Essen schlecht war", "Dass er seine Kreditkarte vergessen hatte", "Dass er keinen Hunger mehr hatte", "Dass die Rechnung falsch war"],
                dogruIndex: 1
            },
            {
                id: "246-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie haben sie das Problem gelöst?",
                secenekler: ["Sie mussten in der Küche arbeiten", "Markus lief nach Hause", "Die Frau bezahlte mit Bargeld", "Sie sind weggelaufen"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 247,
        seviye: "zor",
        baslik: "Ein unerwartetes Geschenk",
        metin: "Clara hatte am Dienstag einen ganz normalen Arbeitstag, bis der Postbote ein großes Paket für sie ins Büro brachte. Sie war sehr überrascht, weil sie im Internet nichts bestellt hatte. Als sie das Paket öffnete, fand sie eine wunderschöne Winterjacke und einen Brief von ihrer Tante aus der Schweiz. Die Tante schrieb, dass sie die Jacke im Schaufenster gesehen hatte und sofort an Clara denken musste. Clara zog die Jacke sofort an, weil sie perfekt passte und sehr warm war.",
        sorular: [
            {
                id: "247-dy-1",
                tip: "dogru-yanlis",
                soru: "Clara hatte selbst etwas im Internet bestellt.",
                dogruCevap: "yanlis"
            },
            {
                id: "247-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Paket kam ins Büro.",
                dogruCevap: "dogru"
            },
            {
                id: "247-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Winterjacke war zu groß für Clara.",
                dogruCevap: "yanlis"
            },
            {
                id: "247-cs-1",
                tip: "coktan-secmeli",
                soru: "Wer brachte das Paket?",
                secenekler: ["Claras Mutter", "Ein Freund", "Der Chef", "Der Postbote"],
                dogruIndex: 3
            },
            {
                id: "247-cs-2",
                tip: "coktan-secmeli",
                soru: "Was war im Paket?",
                secenekler: ["Viele Bücher", "Eine Winterjacke und ein Brief", "Schuhe", "Schokolade"],
                dogruIndex: 1
            },
            {
                id: "247-cs-3",
                tip: "coktan-secmeli",
                soru: "Von wem kam das Paket?",
                secenekler: ["Von ihrer Oma", "Von ihrem Bruder", "Von ihrer Tante aus der Schweiz", "Von einem unbekannten Mann"],
                dogruIndex: 2
            },
            {
                id: "247-cs-4",
                tip: "coktan-secmeli",
                soru: "Warum hat die Tante die Jacke gekauft?",
                secenekler: ["Weil Clara Geburtstag hatte", "Weil sie Clara eine Freude machen wollte", "Weil sie die Jacke nicht mehr wollte", "Weil sie im Angebot war"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 248,
        seviye: "zor",
        baslik: "Der erste Skiurlaub",
        metin: "Im Januar fuhr Paul zum ersten Mal in seinem Leben in den Skiurlaub. Er reiste mit drei Freunden in die Berge nach Österreich. Am ersten Tag nahm er an einem Skikurs für Anfänger teil. Obwohl er sehr oft in den Schnee fiel und seine Beine wehtaten, gab er nicht auf. Am dritten Tag konnte er schon ganz alleine einen kleinen Berg hinunterfahren. Am Abend waren sie alle extrem müde, aber sie hatten viel Spaß in einer kleinen Holzhütte.",
        sorular: [
            {
                id: "248-dy-1",
                tip: "dogru-yanlis",
                soru: "Paul ist ein sehr erfahrener Skifahrer.",
                dogruCevap: "yanlis"
            },
            {
                id: "248-dy-2",
                tip: "dogru-yanlis",
                soru: "Er reiste nach Österreich.",
                dogruCevap: "dogru"
            },
            {
                id: "248-dy-3",
                tip: "dogru-yanlis",
                soru: "Er gab am ersten Tag auf.",
                dogruCevap: "yanlis"
            },
            {
                id: "248-cs-1",
                tip: "coktan-secmeli",
                soru: "Mit wem fuhr Paul in den Urlaub?",
                secenekler: ["Mit seiner Frau", "Mit seinen Eltern", "Mit drei Freunden", "Alleine"],
                dogruIndex: 2
            },
            {
                id: "248-cs-2",
                tip: "coktan-secmeli",
                soru: "Was machte er am ersten Tag?",
                secenekler: ["Er schlief den ganzen Tag", "Er nahm an einem Skikurs für Anfänger teil", "Er fuhr den größten Berg hinunter", "Er ging spazieren"],
                dogruIndex: 1
            },
            {
                id: "248-cs-3",
                tip: "coktan-secmeli",
                soru: "Was konnte er am dritten Tag?",
                secenekler: ["Einen kleinen Berg alleine hinunterfahren", "Einen Schneemann bauen", "Aufhören zu fallen", "Ski reparieren"],
                dogruIndex: 0
            },
            {
                id: "248-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie waren sie am Abend?",
                secenekler: ["Voller Energie", "Traurig", "Krank", "Extrem müde, aber sie hatten Spaß"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 249,
        seviye: "zor",
        baslik: "Die verlorene Brille",
        metin: "Oma Else konnte am Sonntagmorgen ihre Lesebrille nirgends finden. Sie brauchte die Brille unbedingt, um die große Sonntagszeitung zu lesen. Sie suchte im Schlafzimmer, in der Küche und sogar im Badezimmer. Nachdem sie fast das ganze Haus durchsucht hatte, bat sie ihren Enkel um Hilfe. Der kleine Junge sah sie an und lachte laut. Die Brille lag nämlich nicht auf dem Tisch oder im Schrank, sondern Oma Else hatte sie die ganze Zeit auf dem Kopf! Sie lachte auch und konnte endlich ihre Zeitung lesen.",
        sorular: [
            {
                id: "249-dy-1",
                tip: "dogru-yanlis",
                soru: "Oma Else suchte ihren Schlüssel.",
                dogruCevap: "yanlis"
            },
            {
                id: "249-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie brauchte die Brille für die Zeitung.",
                dogruCevap: "dogru"
            },
            {
                id: "249-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Enkel fand die Brille im Badezimmer.",
                dogruCevap: "yanlis"
            },
            {
                id: "249-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann suchte Oma Else ihre Brille?",
                secenekler: ["Am Montagmorgen", "Am Samstagnachmittag", "Am Sonntagmorgen", "Am Freitagabend"],
                dogruIndex: 2
            },
            {
                id: "249-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo suchte sie?",
                secenekler: ["Nur im Wohnzimmer", "Im Garten", "Im Schlafzimmer, in der Küche und im Bad", "Im Auto"],
                dogruIndex: 2
            },
            {
                id: "249-cs-3",
                tip: "coktan-secmeli",
                soru: "Wen bat sie um Hilfe?",
                secenekler: ["Ihren Enkel", "Ihren Mann", "Die Nachbarin", "Ihren Arzt"],
                dogruIndex: 0
            },
            {
                id: "249-cs-4",
                tip: "coktan-secmeli",
                soru: "Wo war die Brille?",
                secenekler: ["Auf dem Tisch", "Unter dem Bett", "In ihrer Tasche", "Auf ihrem Kopf"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 250,
        seviye: "zor",
        baslik: "Ein neues Leben im Ausland",
        metin: "Vor einem Jahr hat Susanne beschlossen, ihr Leben komplett zu ändern. Sie hat ihre Wohnung in Deutschland gekündigt und ist nach Spanien ausgewandert, um dort in einem Hotel zu arbeiten. Am Anfang war es sehr schwer für sie, weil sie die Sprache noch nicht perfekt sprach und ihre Familie oft vermisste. Aber nach ein paar Monaten fand sie gute Freunde und lernte schnell fließend Spanisch. Heute ist sie sehr glücklich mit ihrer Entscheidung, weil sie ihre Arbeit liebt und jeden Tag die Sonne und das Meer genießen kann.",
        sorular: [
            {
                id: "250-dy-1",
                tip: "dogru-yanlis",
                soru: "Susanne ist nach Spanien ausgewandert.",
                dogruCevap: "dogru"
            },
            {
                id: "250-dy-2",
                tip: "dogru-yanlis",
                soru: "Am Anfang war alles extrem einfach für sie.",
                dogruCevap: "yanlis"
            },
            {
                id: "250-dy-3",
                tip: "dogru-yanlis",
                soru: "Heute ist sie glücklich mit ihrer Entscheidung.",
                dogruCevap: "dogru"
            },
            {
                id: "250-cs-1",
                tip: "coktan-secmeli",
                soru: "Wann hat Susanne beschlossen, ihr Leben zu ändern?",
                secenekler: ["Vor zwei Wochen", "Vor einem Monat", "Vor einem Jahr", "Vor zehn Jahren"],
                dogruIndex: 2
            },
            {
                id: "250-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum ist sie ausgewandert?",
                secenekler: ["Um dort zu studieren", "Um in einem Hotel zu arbeiten", "Um Urlaub zu machen", "Um zu heiraten"],
                dogruIndex: 1
            },
            {
                id: "250-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum war es am Anfang schwer?",
                secenekler: ["Weil das Essen schlecht war", "Weil sie das Klima nicht mochte", "Weil sie die Sprache nicht perfekt sprach", "Weil sie keine Arbeit fand"],
                dogruIndex: 2
            },
            {
                id: "250-cs-4",
                tip: "coktan-secmeli",
                soru: "Was genießt sie heute jeden Tag?",
                secenekler: ["Das Skifahren", "Die Sonne und das Meer", "Das deutsche Essen", "Das viele Schlafen"],
                dogruIndex: 1
            }
        ]
    },{
        id: 251,
        seviye: "zor",
        baslik: "Der plötzliche Stromausfall",
        metin: "Gestern Abend gab es in der ganzen Straße einen plötzlichen Stromausfall. Familie Müller saß gerade beim Abendessen, als das Licht komplett ausging. Weil es draußen schon dunkel und kalt war, mussten sie überall im Wohnzimmer Kerzen anzünden. Obwohl es am Anfang für die kleinen Kinder ein bisschen unheimlich war, fanden sie es bald sehr gemütlich. Der Vater erzählte spannende Geschichten im Dunkeln. Nach fast drei Stunden funktionierte der Strom endlich wieder. Alle waren froh, als die Heizung wieder warm wurde.",
        sorular: [
            {
                id: "251-dy-1",
                tip: "dogru-yanlis",
                soru: "Der Stromausfall war am Morgen.",
                dogruCevap: "yanlis"
            },
            {
                id: "251-dy-2",
                tip: "dogru-yanlis",
                soru: "Die Familie zündete Kerzen an.",
                dogruCevap: "dogru"
            },
            {
                id: "251-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Stromausfall dauerte fünf Stunden.",
                dogruCevap: "yanlis"
            },
            {
                id: "251-cs-1",
                tip: "coktan-secmeli",
                soru: "Was machte die Familie, als das Licht ausging?",
                secenekler: ["Sie schliefen", "Sie saßen beim Abendessen", "Sie sahen fern", "Sie waren im Garten"],
                dogruIndex: 1
            },
            {
                id: "251-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie fanden die Kinder es am Anfang?",
                secenekler: ["Sehr langweilig", "Sehr lustig", "Ein bisschen unheimlich", "Sehr heiß"],
                dogruIndex: 2
            },
            {
                id: "251-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machte der Vater im Dunkeln?",
                secenekler: ["Er reparierte das Licht", "Er schlief ein", "Er erzählte spannende Geschichten", "Er weinte"],
                dogruIndex: 2
            },
            {
                id: "251-cs-4",
                tip: "coktan-secmeli",
                soru: "Worüber waren alle am Ende froh?",
                secenekler: ["Dass es Pizza gab", "Dass die Heizung wieder warm wurde", "Dass der Vater schwieg", "Dass die Kerzen schön waren"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 252,
        seviye: "zor",
        baslik: "Ein unerwartetes Treffen",
        metin: "Als Julia am Samstagnachmittag im Supermarkt einkaufen war, passierte etwas Unglaubliches. Sie stand gerade an der Kasse, als sie eine bekannte Stimme hinter sich hörte. Es war ihre alte Schulfreundin Sarah, die sie seit über zehn Jahren nicht mehr gesehen hatte. Weil Sarah lange in Australien gelebt hatte, hatten sie den Kontakt verloren. Sie waren beide so aufgeregt, dass sie ihre Einkäufe schnell ins Auto brachten und sofort in ein Café gingen. Dort sprachen sie stundenlang über ihre Familien und ihre neuen Berufe.",
        sorular: [
            {
                id: "252-dy-1",
                tip: "dogru-yanlis",
                soru: "Julia traf ihre Schulfreundin im Park.",
                dogruCevap: "yanlis"
            },
            {
                id: "252-dy-2",
                tip: "dogru-yanlis",
                soru: "Sarah hatte lange in Australien gelebt.",
                dogruCevap: "dogru"
            },
            {
                id: "252-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie sprachen im Café stundenlang miteinander.",
                dogruCevap: "dogru"
            },
            {
                id: "252-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo war Julia am Samstagnachmittag?",
                secenekler: ["Im Kino", "In der Schule", "Im Supermarkt", "Am Bahnhof"],
                dogruIndex: 2
            },
            {
                id: "252-cs-2",
                tip: "coktan-secmeli",
                soru: "Wie lange hatten sie sich nicht gesehen?",
                secenekler: ["Ein Jahr", "Zwei Monate", "Fünf Jahre", "Über zehn Jahre"],
                dogruIndex: 3
            },
            {
                id: "252-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum hatten sie den Kontakt verloren?",
                secenekler: ["Weil sie gestritten hatten", "Weil Sarah in Australien gelebt hatte", "Weil Julia ihr Telefon verloren hatte", "Weil sie keine Zeit hatten"],
                dogruIndex: 1
            },
            {
                id: "252-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machten sie nach dem Einkaufen?",
                secenekler: ["Sie fuhren nach Hause", "Sie gingen in ein Café", "Sie gingen ins Kino", "Sie kauften Kleidung"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 253,
        seviye: "zor",
        baslik: "Eine wichtige Präsentation",
        metin: "Herr Schmidt hatte letzte Woche die wichtigste Präsentation seines Lebens. Er musste das neue Projekt vor dem Chef und vielen internationalen Kunden vorstellen. Weil er sehr gut vorbereitet sein wollte, hatte er am Wochenende überhaupt nicht geschlafen. Als er im Konferenzraum stand, funktionierte der Beamer plötzlich nicht. Obwohl Herr Schmidt kurz in Panik geriet, blieb er ruhig und erklärte alles ohne Bilder. Die Kunden waren von seinen Ideen so begeistert, dass sie den großen Vertrag sofort unterschrieben haben.",
        sorular: [
            {
                id: "253-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Schmidt hatte viel geschlafen am Wochenende.",
                dogruCevap: "yanlis"
            },
            {
                id: "253-dy-2",
                tip: "dogru-yanlis",
                soru: "Er musste das Projekt vor internationalen Kunden vorstellen.",
                dogruCevap: "dogru"
            },
            {
                id: "253-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Beamer funktionierte perfekt.",
                dogruCevap: "yanlis"
            },
            {
                id: "253-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum hatte er am Wochenende nicht geschlafen?",
                secenekler: ["Weil er krank war", "Weil er gut vorbereitet sein wollte", "Weil sein Baby weinte", "Weil er eine Party hatte"],
                dogruIndex: 1
            },
            {
                id: "253-cs-2",
                tip: "coktan-secmeli",
                soru: "Was passierte im Konferenzraum?",
                secenekler: ["Der Chef war nicht da", "Der Beamer funktionierte plötzlich nicht", "Der Strom fiel aus", "Er vergaß seinen Text"],
                dogruIndex: 1
            },
            {
                id: "253-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie reagierte Herr Schmidt?",
                secenekler: ["Er lief weinend weg", "Er rief einen Techniker und wartete", "Er blieb ruhig und erklärte alles ohne Bilder", "Er sagte das Meeting ab"],
                dogruIndex: 2
            },
            {
                id: "253-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie reagierten die Kunden am Ende?",
                secenekler: ["Sie waren wütend", "Sie waren gelangweilt", "Sie kauften nichts", "Sie waren begeistert und unterschrieben den Vertrag"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 254,
        seviye: "zor",
        baslik: "Ein teurer Fehler",
        metin: "Als Tom sein neues Auto parken wollte, war er leider einen Moment unaufmerksam. Er telefonierte gerade mit seiner Mutter und sah nicht, dass der Platz viel zu klein war. Plötzlich hörte er ein lautes Geräusch. Er war gegen das teure Auto seines Nachbarn gefahren. Tom stieg sofort aus und sah einen großen Kratzer an der Tür. Weil der Nachbar nicht zu Hause war, schrieb Tom einen Zettel mit seiner Telefonnummer. Die Reparatur kostete später über achthundert Euro, was Tom sehr ärgerte.",
        sorular: [
            {
                id: "254-dy-1",
                tip: "dogru-yanlis",
                soru: "Tom fuhr gegen das Auto seines Nachbarn.",
                dogruCevap: "dogru"
            },
            {
                id: "254-dy-2",
                tip: "dogru-yanlis",
                soru: "Der Nachbar stand direkt neben seinem Auto.",
                dogruCevap: "yanlis"
            },
            {
                id: "254-dy-3",
                tip: "dogru-yanlis",
                soru: "Tom schrieb einen Zettel mit seiner Nummer.",
                dogruCevap: "dogru"
            },
            {
                id: "254-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum war Tom unaufmerksam?",
                secenekler: ["Weil er müde war", "Weil er mit seiner Mutter telefonierte", "Weil er Radio hörte", "Weil er aß"],
                dogruIndex: 1
            },
            {
                id: "254-cs-2",
                tip: "coktan-secmeli",
                soru: "Was sah Tom, als er ausstieg?",
                secenekler: ["Ein kaputtes Fenster", "Einen kaputten Reifen", "Einen großen Kratzer an der Tür", "Kein Problem"],
                dogruIndex: 2
            },
            {
                id: "254-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machte er, weil der Nachbar nicht da war?",
                secenekler: ["Er fuhr einfach weg", "Er rief die Polizei", "Er schrieb einen Zettel", "Er reparierte es selbst"],
                dogruIndex: 2
            },
            {
                id: "254-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie viel kostete die Reparatur?",
                secenekler: ["Hundert Euro", "Zweihundert Euro", "Über achthundert Euro", "Tausend Euro"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 255,
        seviye: "zor",
        baslik: "Die falsche Haltestelle",
        metin: "Anna fuhr gestern Abend nach einem langen Arbeitstag mit dem Bus nach Hause. Da sie sehr müde war, schloss sie nur für einen kurzen Moment die Augen. Leider schlief sie tief ein und verpasste ihre Haltestelle. Als sie endlich aufwachte, war der Bus schon am Ende der Stadt. Weil es schon spät war, fuhren keine Busse mehr zurück. Anna musste ein teures Taxi rufen, um nach Hause zu kommen. Erst um Mitternacht lag sie erschöpft in ihrem Bett.",
        sorular: [
            {
                id: "255-dy-1",
                tip: "dogru-yanlis",
                soru: "Anna fuhr am Morgen zur Arbeit.",
                dogruCevap: "yanlis"
            },
            {
                id: "255-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie ist im Bus tief eingeschlafen.",
                dogruCevap: "dogru"
            },
            {
                id: "255-dy-3",
                tip: "dogru-yanlis",
                soru: "Sie fuhr mit einem anderen Bus zurück.",
                dogruCevap: "yanlis"
            },
            {
                id: "255-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum schloss Anna die Augen?",
                secenekler: ["Weil sie traurig war", "Weil sie sehr müde war", "Weil die Sonne blendete", "Weil sie nachdenken wollte"],
                dogruIndex: 1
            },
            {
                id: "255-cs-2",
                tip: "coktan-secmeli",
                soru: "Wo war der Bus, als sie aufwachte?",
                secenekler: ["An ihrer Haltestelle", "Vor ihrer Firma", "Am Ende der Stadt", "In einer anderen Stadt"],
                dogruIndex: 2
            },
            {
                id: "255-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie kam sie zurück nach Hause?",
                secenekler: ["Sie ist gelaufen", "Mit dem Zug", "Mit einem Taxi", "Ein Freund holte sie ab"],
                dogruIndex: 2
            },
            {
                id: "255-cs-4",
                tip: "coktan-secmeli",
                soru: "Wann lag sie endlich in ihrem Bett?",
                secenekler: ["Um zehn Uhr", "Um Mitternacht", "Am nächsten Morgen", "Um acht Uhr"],
                dogruIndex: 1
            }
        ]
    },
    {
        id: 256,
        seviye: "zor",
        baslik: "Das gerettete Kätzchen",
        metin: "Während Leon im Park spazieren ging, hörte er plötzlich ein leises Weinen aus einem hohen Baum. Als er genauer hinsah, bemerkte er ein kleines, schwarzes Kätzchen, das sich nicht mehr nach unten traute. Obwohl Leon ein bisschen Angst vor der Höhe hatte, kletterte er vorsichtig den dicken Stamm hinauf. Das Kätzchen zitterte vor Angst. Leon nahm es sanft in seine Jacke und brachte es sicher auf den Boden zurück. Ein kleines Mädchen kam weinend angelaufen und war überglücklich, ihre Katze wiederzuhaben.",
        sorular: [
            {
                id: "256-dy-1",
                tip: "dogru-yanlis",
                soru: "Leon hörte das Weinen aus einem Auto.",
                dogruCevap: "yanlis"
            },
            {
                id: "256-dy-2",
                tip: "dogru-yanlis",
                soru: "Das Kätzchen war schwarz.",
                dogruCevap: "dogru"
            },
            {
                id: "256-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Katze gehörte einem alten Mann.",
                dogruCevap: "yanlis"
            },
            {
                id: "256-cs-1",
                tip: "coktan-secmeli",
                soru: "Wo war Leon unterwegs?",
                secenekler: ["Im Wald", "In der Stadt", "Im Park", "Am Strand"],
                dogruIndex: 2
            },
            {
                id: "256-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum war es mutig von Leon zu klettern?",
                secenekler: ["Weil der Baum brannte", "Weil er ein bisschen Angst vor der Höhe hatte", "Weil es regnete", "Weil er keine Zeit hatte"],
                dogruIndex: 1
            },
            {
                id: "256-cs-3",
                tip: "coktan-secmeli",
                soru: "Wie transportierte er die Katze nach unten?",
                secenekler: ["In einem Rucksack", "In seiner Jacke", "Auf seinem Kopf", "In einer Tasche"],
                dogruIndex: 1
            },
            {
                id: "256-cs-4",
                tip: "coktan-secmeli",
                soru: "Wer kam weinend angelaufen?",
                secenekler: ["Die Polizei", "Ein kleiner Junge", "Ein kleines Mädchen", "Seine Mutter"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 257,
        seviye: "zor",
        baslik: "Ein Wochenende ohne Internet",
        metin: "Familie Wagner verbringt jedes Jahr ein Wochenende in einer kleinen Hütte im Wald. Das Besondere daran ist, dass es dort weder Fernsehen noch eine Internetverbindung gibt. Am ersten Tag fanden die beiden Kinder das extrem langweilig, weil sie nicht auf ihren Handys spielen konnten. Aber am zweiten Tag änderten sie ihre Meinung. Die Familie ging stundenlang wandern, sammelte Pilze und spielte am Abend gemeinsam lustige Brettspiele. Am Ende des Wochenendes sagten die Kinder sogar, dass es der beste Ausflug des Jahres war.",
        sorular: [
            {
                id: "257-dy-1",
                tip: "dogru-yanlis",
                soru: "Die Hütte der Familie liegt am Meer.",
                dogruCevap: "yanlis"
            },
            {
                id: "257-dy-2",
                tip: "dogru-yanlis",
                soru: "Es gab dort kein Internet.",
                dogruCevap: "dogru"
            },
            {
                id: "257-dy-3",
                tip: "dogru-yanlis",
                soru: "Die Kinder fanden es das ganze Wochenende schrecklich.",
                dogruCevap: "yanlis"
            },
            {
                id: "257-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum fanden die Kinder den ersten Tag langweilig?",
                secenekler: ["Weil es regnete", "Weil sie nicht auf ihren Handys spielen konnten", "Weil sie krank waren", "Weil das Essen schlecht war"],
                dogruIndex: 1
            },
            {
                id: "257-cs-2",
                tip: "coktan-secmeli",
                soru: "Was sammelte die Familie im Wald?",
                secenekler: ["Blumen", "Steine", "Pilze", "Holz"],
                dogruIndex: 2
            },
            {
                id: "257-cs-3",
                tip: "coktan-secmeli",
                soru: "Was machten sie am Abend?",
                secenekler: ["Sie schliefen früh", "Sie sahen fern", "Sie spielten lustige Brettspiele", "Sie stritten sich"],
                dogruIndex: 2
            },
            {
                id: "257-cs-4",
                tip: "coktan-secmeli",
                soru: "Was sagten die Kinder am Ende?",
                secenekler: ["Dass sie nie wieder mitkommen", "Dass sie Hunger haben", "Dass sie nach Hause wollen", "Dass es der beste Ausflug des Jahres war"],
                dogruIndex: 3
            }
        ]
    },
    {
        id: 258,
        seviye: "zor",
        baslik: "Das falsche Datum",
        metin: "Herr Weber hatte seit Wochen einen Termin beim Zahnarzt, weil sein Zahn stark wehtat. Am Dienstagmorgen nahm er extra frei, fuhr in die Stadt und betrat pünktlich um neun Uhr die Praxis. Die Assistentin sah jedoch verwirrt auf ihren Computer. 'Herr Weber', sagte sie, 'Ihr Termin ist nicht heute, sondern erst nächste Woche Dienstag.' Er hatte das Datum in seinem Kalender komplett falsch aufgeschrieben. Er war so verärgert über sich selbst, dass er zur Beruhigung einen großen Schokoladenkuchen beim Bäcker kaufte.",
        sorular: [
            {
                id: "258-dy-1",
                tip: "dogru-yanlis",
                soru: "Herr Weber hatte starke Zahnschmerzen.",
                dogruCevap: "dogru"
            },
            {
                id: "258-dy-2",
                tip: "dogru-yanlis",
                soru: "Sein Termin war am Dienstagmorgen.",
                dogruCevap: "yanlis"
            },
            {
                id: "258-dy-3",
                tip: "dogru-yanlis",
                soru: "Er war sehr verärgert über sich selbst.",
                dogruCevap: "dogru"
            },
            {
                id: "258-cs-1",
                tip: "coktan-secmeli",
                soru: "Warum ging Herr Weber zum Zahnarzt?",
                secenekler: ["Für eine Kontrolle", "Weil sein Zahn stark wehtat", "Weil er dort arbeitete", "Um seine Frau abzuholen"],
                dogruIndex: 1
            },
            {
                id: "258-cs-2",
                tip: "coktan-secmeli",
                soru: "Was sagte die Assistentin?",
                secenekler: ["Dass der Arzt krank ist", "Dass sein Termin erst nächste Woche ist", "Dass er zu spät ist", "Dass er sofort drankommt"],
                dogruIndex: 1
            },
            {
                id: "258-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum war er am falschen Tag dort?",
                secenekler: ["Weil die Praxis einen Fehler gemacht hat", "Weil er das Datum falsch aufgeschrieben hatte", "Weil er den Arzt besuchen wollte", "Weil er Zeit hatte"],
                dogruIndex: 1
            },
            {
                id: "258-cs-4",
                tip: "coktan-secmeli",
                soru: "Was machte er zur Beruhigung?",
                secenekler: ["Er schlief", "Er schrie laut", "Er kaufte einen Schokoladenkuchen", "Er trank einen Tee"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 259,
        seviye: "zor",
        baslik: "Die verbrannte Pizza",
        metin: "Lukas hatte großen Hunger, als er am Abend müde von der Universität nach Hause kam. Weil er keine Lust zum Kochen hatte, schob er einfach eine tiefgekühlte Pizza in den Ofen. Er stellte den Timer auf fünfzehn Minuten und setzte sich vor den Fernseher. Leider war der Film so extrem spannend, dass er den Wecker überhaupt nicht hörte. Erst als dunkler Rauch aus der Küche kam, rannte er los. Die Pizza war komplett schwarz und hart wie ein Stein. Lukas musste am Ende Brot mit Käse essen.",
        sorular: [
            {
                id: "259-dy-1",
                tip: "dogru-yanlis",
                soru: "Lukas hat aufwändig gekocht.",
                dogruCevap: "yanlis"
            },
            {
                id: "259-dy-2",
                tip: "dogru-yanlis",
                soru: "Er hat den Timer auf 15 Minuten gestellt.",
                dogruCevap: "dogru"
            },
            {
                id: "259-dy-3",
                tip: "dogru-yanlis",
                soru: "Er hat die schwarze Pizza trotzdem gegessen.",
                dogruCevap: "yanlis"
            },
            {
                id: "259-cs-1",
                tip: "coktan-secmeli",
                soru: "Woher kam Lukas am Abend?",
                secenekler: ["Von der Arbeit", "Von der Universität", "Vom Sport", "Aus dem Urlaub"],
                dogruIndex: 1
            },
            {
                id: "259-cs-2",
                tip: "coktan-secmeli",
                soru: "Warum hörte er den Wecker nicht?",
                secenekler: ["Weil er schlief", "Weil er Musik hörte", "Weil der Film extrem spannend war", "Weil der Wecker kaputt war"],
                dogruIndex: 2
            },
            {
                id: "259-cs-3",
                tip: "coktan-secmeli",
                soru: "Was bemerkte er plötzlich?",
                secenekler: ["Einen Dieb", "Dass es regnete", "Dunklen Rauch aus der Küche", "Dass sein Freund anrief"],
                dogruIndex: 2
            },
            {
                id: "259-cs-4",
                tip: "coktan-secmeli",
                soru: "Was musste er am Ende essen?",
                secenekler: ["Nudeln", "Die verbrannte Pizza", "Brot mit Käse", "Nichts"],
                dogruIndex: 2
            }
        ]
    },
    {
        id: 260,
        seviye: "zor",
        baslik: "Ein teures Taxi",
        metin: "Frau Braun war am Flughafen in Paris angekommen und suchte nach dem Bus ins Zentrum. Weil sie sehr viel schweres Gepäck hatte und es draußen stark regnete, entschied sie sich spontan für ein Taxi. Der Fahrer war sehr nett und erzählte ihr während der Fahrt viel über die Stadt. Als sie jedoch am Hotel ankamen und auf das Taxameter schaute, bekam sie einen Schock. Die Fahrt hatte über neunzig Euro gekostet, weil es einen langen Stau gab. Für die Rückreise plante sie sofort, definitiv den Zug zu nehmen.",
        sorular: [
            {
                id: "260-dy-1",
                tip: "dogru-yanlis",
                soru: "Frau Braun war in London angekommen.",
                dogruCevap: "yanlis"
            },
            {
                id: "260-dy-2",
                tip: "dogru-yanlis",
                soru: "Sie nahm ein Taxi, weil es regnete und sie viel Gepäck hatte.",
                dogruCevap: "dogru"
            },
            {
                id: "260-dy-3",
                tip: "dogru-yanlis",
                soru: "Der Taxifahrer war sehr unhöflich.",
                dogruCevap: "yanlis"
            },
            {
                id: "260-cs-1",
                tip: "coktan-secmeli",
                soru: "Was suchte sie zuerst am Flughafen?",
                secenekler: ["Ein Hotel", "Den Bus ins Zentrum", "Einen Mietwagen", "Ein Restaurant"],
                dogruIndex: 1
            },
            {
                id: "260-cs-2",
                tip: "coktan-secmeli",
                soru: "Was machte der Fahrer während der Fahrt?",
                secenekler: ["Er hörte laut Musik", "Er schwieg", "Er erzählte viel über die Stadt", "Er telefonierte"],
                dogruIndex: 2
            },
            {
                id: "260-cs-3",
                tip: "coktan-secmeli",
                soru: "Warum bekam sie am Hotel einen Schock?",
                secenekler: ["Weil das Hotel geschlossen war", "Weil die Fahrt über 90 Euro kostete", "Weil sie ihr Geld verloren hatte", "Weil der Fahrer wütend war"],
                dogruIndex: 1
            },
            {
                id: "260-cs-4",
                tip: "coktan-secmeli",
                soru: "Wie möchte sie für die Rückreise fahren?",
                secenekler: ["Wieder mit dem Taxi", "Sie möchte laufen", "Definitiv mit dem Zug", "Mit dem Flugzeug"],
                dogruIndex: 2
            }
        ]
    }
];
