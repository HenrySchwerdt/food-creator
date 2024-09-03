export type Product = {
    [key: string]: string | Date | null | number;
    id: number,
    img: string | null,
    name: string | null,
    description: string | null,
    price: string | null,
    originalPrice: string | null, 
    discount: string | null,
    packaging: string | null,
    availability: string | null,
    dataOrigin: string | null,
}