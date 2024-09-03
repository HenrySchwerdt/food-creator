import { type Product } from "~/server/domain/types"
import Image from 'next/image'
export const ProductCard = (product : Product) => {
    return <div className="rounded-lg bg-card shadow-lg">
      <Image src={product.img!} alt="Discounted Item" width={400} height={400} className="h-48 w-full rounded-t-lg object-contain" style={{ objectFit: 'contain' }} />
  
    <div className="p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-muted-foreground">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-lg font-bold">{product.price}</span>
          <span className="ml-2 text-sm text-muted-foreground line-through">{product.originalPrice}</span>
        </div>
      </div>
    </div>
  </div>
}