import Link from "next/link";

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-[100%] items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 lg:px-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            The Benefits of Using Food Creator
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Food Creator helps you save time and money on your grocery shopping,
            while also providing healthy, delicious meal options for you and
            your family.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
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
    </section>
  );
}
