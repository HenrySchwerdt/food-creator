import Image from 'next/image';
import Link from 'next/link';
export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 lg:px-20 md:px-6 max-w-[100%]">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] ">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Effortless Meal Planning with Food Creator
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the ultimate tool for saving time and money on your grocery shopping. Food Creator scours
                  the web for discounts at Aldi and Lidl, then creates personalized weekly menus and shopping lists
                  tailored to your preferences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              width={550}
              height={550}
            />
          </div>
        </div>
      </section>
    )
}