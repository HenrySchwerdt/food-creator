import { NextResponse } from 'next/server';
import puppeteer, { Page } from 'puppeteer';
import { insertProduct, removeAllProducts } from '~/server/repository/productRepository';

interface ProductData {
    [key: string]: string | Date | null | number;
    id: number;
    name: string | null;
    price: string | null;
    originalPrice: string | null;
    discount: string | null;
    description: string | null;
    img: string | null;
    dataOrigin: 'ALDI' | 'LIDL';
    packaging: string | null;
    availability: string | null;
}

const urls: string[] = [
    "https://www.aldi-sued.de/de/angebote/frischekracher.html",
    "https://www.aldi-sued.de/de/angebote/preisaktion.html",
    "https://www.lidl.de/c/billiger-montag/a10006065?channel=store&tabCode=Current_Sales_Week",
];

// Auto scroll function for Puppeteer
async function autoScroll(page: Page): Promise<void> {
    await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

// Function to scrape products
async function getItemsFromAldi(
    url: string, 
    extractor: () => ProductData[]
): Promise<ProductData[]> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });
    await autoScroll(page);

    if (url.includes("aldi")) {
        await page.waitForSelector(".item");
    } else if (url.includes("lidl")) {
        await page.waitForSelector(".ods-tile");
    }

    const products = await page.evaluate(extractor);
    const filteredProducts = products.filter((product) => product.price !== null);

    await browser.close();
    return filteredProducts;
}

// Data extractor for Aldi
function extractProductAldiData(): ProductData[] {
    const productElements = document.querySelectorAll(".item");
    const productsData: ProductData[] = [];

    productElements.forEach((product) => {
        const imgUrl = product.querySelector("img")?.getAttribute("data-src") || null;
        const discount = (product.querySelector("figcaption p b") as HTMLElement)?.innerText.trim() || null;
        const priceElement = product.querySelector(
            'figcaption p[style*="font-size: 25.0px;"]'
        );
        const price = priceElement?.childNodes[0]?.textContent?.trim() || null;
        const originalPrice = priceElement?.querySelector("s")?.textContent?.trim() || null;
        const productName = product.querySelector("h3")?.innerText.trim() || null;
        const additionalInfo = (product.querySelector('figcaption p[style*="font-size: 11.0px;"]') as HTMLElement)?.innerText.trim() || null;

        const formattedData: ProductData = {
            id: 0,
            name: productName,
            price: price,
            originalPrice: originalPrice,
            discount: discount,
            description: additionalInfo,
            img: imgUrl,
            availability: null,
            packaging: null,
            dataOrigin: "ALDI",
        };

        productsData.push(formattedData);
    });

    return productsData;
}

// Data extractor for Lidl
function extractProductLidlData(): ProductData[] {
    const productElements = document.querySelectorAll(".ods-tile");
    const productsData: ProductData[] = [];

    productElements.forEach((productElement) => {
        const productData: ProductData = {
            id: 0,
            name: (productElement.querySelector(".product-grid-box__title") as HTMLElement)?.innerText.trim() || null,
            price: (productElement.querySelector(".m-price__price") as HTMLElement)?.innerText.trim() || null,
            originalPrice: (productElement.querySelector(".strikethrough.m-price__rrp") as HTMLElement)?.innerText.trim() || null,
            discount: (productElement.querySelector(".m-price__label") as HTMLElement )?.innerText.trim() || null,
            description: (productElement.querySelector(".product-grid-box__desc") as HTMLElement)?.innerText.trim() || null,
            img: (productElement.querySelector(".ods-image-gallery__image") as HTMLElement)?.getAttribute("src") || null,
            packaging: (productElement.querySelector(".price-footer") as HTMLElement)?.innerText.trim().replace(/[\n\r]+/g, " ") || null,
            availability: (productElement.querySelector(".ods-badge__label") as HTMLElement)?.innerText.trim() || null,
            dataOrigin: "LIDL",
        };

        productsData.push(productData);
    });

    return productsData;
}

const GET = async (): Promise<NextResponse> => {
    const allProducts: ProductData[] = [];
    for (const url of urls) {
        let extractor = extractProductAldiData;
        if (url.includes("lidl")) {
            extractor = extractProductLidlData;
        }
        const products = await getItemsFromAldi(url, extractor);
        allProducts.push(...products);
    }
    console.log(allProducts);
    await removeAllProducts();
    allProducts.forEach((product) => {
        insertProduct(product);
    });
    console.log("Inserted all products");
    return NextResponse.json({ ok: true, products: allProducts });
}


export { GET };