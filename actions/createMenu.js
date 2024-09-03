const OpenAI = require("openai");
const { zodResponseFormat } = require("openai/helpers/zod");
const { z } = require("zod");

const products = require("./products.json");
const openai = new OpenAI();

const weeklyCost = process.env.WEEKLY_COST;

const Menu = z.object({
    mon: z.object({
        lunch: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
        dinner: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
    }),
    tue: z.object({
        lunch: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
        dinner: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
    }),
    wen: z.object({
        lunch: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
        dinner: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
    }),
    thu: z.object({
        lunch: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
        dinner: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
    }),
    fri: z.object({
        lunch: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
        dinner: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
    }),
    sat: z.object({
        lunch: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
        dinner: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
    }),
    sun: z.object({
        lunch: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
        dinner: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        }),
    }),
    list: z.object({
        total: z.number(),
        items: z.array(z.object({
            name: z.string(),
            price: z.number(),
            quantity: z.string(),
            origin: z.string(),
        }))
    })
});


const getMenuFromOpenAI = async (products) => {
    const response = await openai.beta.chat.completions.parse({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Erstelle ein Menü für eine Woche mit italienischen und asiatischen Gerichten."+
                    "Das gesamte Budget darf" + weeklyCost + "Euro nicht überschreiten. Schreibe auch die Schritte zur Erstellung des "+
                    "Gerichts für das jeweilige Menü und die benötigten Zutaten auf. Achte dabei darauf das der Zutatname genau der aus dem 'name' Feld in dem JSON des Nutzers drin steht." +
                    "Zuletzt erstelle eine Einkaufsliste mit allen Zutaten und der geforderten Menge. Achte darauf das ein Gericht immer für zwei Personen reichen soll." +
                    "Sollten keine guten Beilagen gefunden werden kann immer Reis für 0,99 Euro oder Nudeln für 1,29 Euro pro Pakcung hinzugefügt werden. Achte darauf das bei dem Abendessen alle Fleisch oder Fischbeilagen aufgebruacht werden, wenn sie weiniger als 400 Gramm beinhalten." +
                    "Sollte die Gramm zahl nicht spezifiziert sein gehe davon aus, dass es aufgebraucht wird. Bitte achte auf eine gesunde Ernährung mit viel Protein und Gemüse." +
                    "Folgende Küchenwerkzeuge sind vorhanden: 3 Töpfe, 1 Pfanne, 1 Schneidebrett, 1 Messer, 1 Schüssel, 1 Sieb, 1 Schneebesen, 1 Pfannenwender, 1 Kochlöffel, 1 Schneidemesser, 1 Schneidebrett, 1 Schüssel, 1 Sieb, 1 Schneebesen, 1 Pfannenwender, 1 Kochlöffel, 1 Ofen, 1 Heißluftfritöse, 1 Mikrowelle, 1 Wasserkocher. Bitte nutze diese Ausstattung bei der Wahl der Rezepte und suche keine Rezepte aus bei denen man Sachen braucht, wie z.b. einen Smoothie weil es keinen Mixer gibt."
                },
            { role: "user", content: `Hier sind die verfügbaren Produkte: ${JSON.stringify(products)}` },
        ],
        response_format: zodResponseFormat(Menu, "menu"),
    });

    return response.choices[0].message.parsed;
};

const createMenu = async () => {
    try {
        const menu = await getMenuFromOpenAI(products);
        console.log("Erstelltes Menü:", JSON.stringify(menu, null, 2));
        fetch(process.env.REFRESH_PRODUCTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REFRESH_MENU_TOKEN}`,
            },
            body: JSON.stringify(menu),
        });
        
    } catch (error) {
        console.error("Fehler beim Erstellen des Menüs:", error);
    }
};

createMenu();