/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
const OpenAI = require("openai-api");
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
    list: z.array(z.object({
        name: z.string(),
        origin: z.string(),
    }))
});

const completion = await openai.beta.chat.completions.parse({
  model: "gpt-4o-2024-08-06",
  messages: [
    { role: "system", content: "Extract the event information." },
    { role: "user", content: "Alice and Bob are going to a science fair on Friday." },
  ],
  response_format: zodResponseFormat(Menu, "menu"),
});

const menu = completion.choices[0].message.parsed;