"use server";

import { auth } from "@clerk/nextjs/server";
import { Benefits } from "~/components/feature-landing/benefits";
import { Features } from "~/components/feature-landing/features";
import { Footer } from "~/components/feature-landing/footer";
import { Header } from "~/components/feature-landing/header";
import { Hero } from "~/components/feature-landing/hero";
import { SignUp } from "~/components/feature-landing/sign-up";
export default async function HomePage() {
  const { userId } = auth();

  console.log("isSignedIn", userId);
  console.log("user", userId);

  return <div>{userId ? "User is signed in" : "User is signed out"}</div>;
  // return (
  //   <div className="flex min-h-[100dvh] flex-col">
  //     <Header />
  //     <main className="flex-1">
  //       <Hero />
  //       <Features />
  //       <Benefits />
        
  //       <SignUp />
  //     </main>
  //     <Footer />
  //   </div>
  // );
}
