import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

type protectRouteProps = {
  redirectTo?: string
}

export async function protectRoute(props?: protectRouteProps) {
  const session = await getServerAuthSession();

  const redirectTo = props?.redirectTo

  if(!session) {
    const redirectParams = new URLSearchParams();
    if(redirectTo)
      redirectParams.set('redirectTo', redirectTo);
    const searchParams = redirectTo ? '?' + redirectParams.toString() : ''
    redirect(`/sign-in${searchParams}`)
  }

  return { session }
}