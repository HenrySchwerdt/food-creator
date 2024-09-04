import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function SignUp() {
    return (<section id="signup" className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 max-w-[100%]">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Start Saving Time and Money Today
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up for Food Creator and let us handle your grocery shopping and meal planning, so you can focus on
              what matters most.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Sign up to get started with Food Creator.{" "}
              <Link href="#" className="underline underline-offset-2" prefetch={false}>
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>)
}