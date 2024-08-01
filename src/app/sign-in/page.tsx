import { redirect } from "next/navigation";
import { SignInButton } from "~/components/signInButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { getServerAuthSession } from "~/server/auth";

type SignInPageProps = {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function SignInPage({ searchParams } : SignInPageProps) {
  const redirectTo = [searchParams.redirectTo].flat().at(0);
  const session = await getServerAuthSession();
  if(session) {
    if(redirectTo?.[0] === '/') {
      redirect(redirectTo);
    }
    redirect('/dashboard');
  }

  return (
    <main className="w-full h-screen flex justify-center items-center px-4 py-16">
      <Card className="w-full md:w-1/3">
        <CardHeader>
          <CardTitle className="text-3xl">Sign in to continue</CardTitle>
          <CardDescription>
            You must sign into the app to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <SignInButton provider="Google" />
          <SignInButton provider="Github" />
        </CardContent>
      </Card>
    </main>
  );
}