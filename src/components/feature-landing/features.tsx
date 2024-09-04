import Image from 'next/image';
export function Features() {
    return ( <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 lg:px-20 max-w-[100%]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover the Power of Food Creator</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Food Creator is designed to streamline your grocery shopping and meal planning, saving you time and
                money while ensuring you have access to healthy, delicious meals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width={550}
              height={310}
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Discount Scraper</h3>
                    <p className="text-muted-foreground">
                      Automatically find the best deals at Aldi and Lidl to save you money on your weekly groceries.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Personalized Meal Plans</h3>
                    <p className="text-muted-foreground">
                      Receive customized weekly meal plans based on your dietary preferences and household size.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Integrated Shopping Lists</h3>
                    <p className="text-muted-foreground">
                      Generate a shopping list for your weekly meals, complete with the exact quantities you need to
                      reduce food waste.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>)
}