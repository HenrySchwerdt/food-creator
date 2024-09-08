import { Benefits } from "~/components/feature-landing/benefits";
import { Features } from "~/components/feature-landing/features";
import { Footer } from "~/components/feature-landing/footer";
import { Header } from "~/components/feature-landing/header";
import { Hero } from "~/components/feature-landing/hero";
import { SignUp } from "~/components/feature-landing/sign-up";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Benefits />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}
