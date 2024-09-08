import { ClerkProvider } from '@clerk/nextjs'
import '~/styles/globals.css'
export const metadata = {
  title: 'Prep My Mealy',
  description: 'Prep My Mealy is a meal planning app that helps you plan your meals for the week.',

}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider polling={true}  >
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}