import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold text-primary">FoodCreatorAI</h1>
          <p className="text-muted-foreground">Welcome back! Please sign in.</p>
        </div>
        <Card className="py-10">
          <form
            className="px-10"
            method="post"
            action="/api/auth/callback/credentials"
          >
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="username"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
