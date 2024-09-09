import { type Product } from "~/server/domain/types";

interface Props {
  product: Product;
}

export function DiscountCard({ product }: Props) {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={product.img!}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
            {product.name}
          </p>
          <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
            {product.price}
          </p>
          <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
            {product.originalPrice}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {product.description}
        </p>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {product.packaging}
        </p>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {product.availability}
        </p>
      </div>
    </div>
  );
}
