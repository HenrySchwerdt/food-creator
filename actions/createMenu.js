const OpenAI = require("openai");
const { zodResponseFormat } = require("openai/helpers/zod");
const { z } = require("zod");

const products = require("./products.json");
const openai = new OpenAI();

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
        total: z.string(),
        items: z.array(z.object({
            name: z.string(),
            price: z.string(),
            quantity: z.string(),
            origin: z.string(),
        }))
    })
});


const getMenuFromOpenAI = async (products) => {
    const response = await openai.beta.chat.completions.parse({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Erstelle ein Menü für eine Woche mit italienischen und asiatischen Gerichten. Das gesamte Budget darf 30 Euro nicht überschreiten. Schreibe auch die Schritte zur Erstellung des Gerichts für das jeweilige Menü und die benötigten Zutaten auf. Achte dabei darauf das der Zutatname genau der aus dem 'name' Feld in dem JSON des Nutzers drin steht. Zuletzt erstelle eine Einkaufsliste mit allen Zutaten und der geforderten Menge. Achte darauf das ein Gericht immer für zwei Personen reichen soll." },
            { role: "user", content: `Hier sind die verfügbaren Produkte: ${JSON.stringify(products)}` },
        ],
        response_format: zodResponseFormat(Menu, "menu"),
    });

    return response.choices[0].message.parsed;
};

const createMenu = async () => {
    try {
        const menu = await getMenuFromOpenAI(products);
        fetch(process.env.REFRESH_PRODUCTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REFRESH_MENU_TOKEN}`,
            },
            body: JSON.stringify(menu),
        });
        console.log("Erstelltes Menü:", menu);
    } catch (error) {
        console.error("Fehler beim Erstellen des Menüs:", error);
    }
};

createMenu();