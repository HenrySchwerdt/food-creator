import Link from "next/link";
import { type JSX, type SVGProps } from "react";
import { Separator } from "../ui/separator";

export function NavBar() {
  return (
    <div>
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link
          href="/menu"
          className="flex flex-row items-center justify-center"
          prefetch={false}
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="ml-4">FoodCreatorAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/menu"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Menu
          </Link>
          <Link
            href="/discounts"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Discounts
          </Link>
          <Link
            href="/list"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Einkaufsliste
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Settings
          </Link>
        </nav>
      </header>
      <Separator />
    </div>
  );
}

function ShoppingCartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
