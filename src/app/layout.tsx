import "~/styles/globals.css";

import { type Metadata } from "next";
import { NavBar } from "./_components/NavBar";

export const metadata: Metadata = {
  title: "Food Creator",
  description: "Food Creator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <NavBar />
        {children}
        </body>
    </html>
  );
} 
