import Link from "next/link";
import { Button } from "~/components/ui/button";
import { SignInButton } from "./_homePageComponents/signInButton";

export default async function Home() {

  return (
    <main className="w-full flex justify-center items-center px-4 py-16">
      <div className="w-full md:w-2/3 lg:w-3/5 flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold">Gym workout tracker</h1>
        <div className="flex flex-row gap-2 w-full">
          <Button asChild variant="link" className="pl-0">
            <Link href="https://github.com/Kellan-Anderson/Gym-Workout-Tracker">
              🔗 Check out the code
            </Link>
          </Button>
        </div>
        <article>
          <h2 className="text-2xl font-bold pb-1">The problem</h2>
          <p className="pb-3">
            When I go to the gym, I use Google sheets to keep track of my workouts. This works, but I have to keep 
            updating the sheets every time I want to add a new workout. Additionally, its hard for me to keep track of 
            extra details around my workouts like notes and dates. There are apps for this, but I want to try to make my 
            own. 
          </p>
          <h2 className="text-2xl font-bold pb-1">The solution</h2>
          <p className="pb-3">
            I want to make a web app to use at the gym to keep track of my progress. This way, I can view stats about 
            my workouts quickly from both my phone and my computer. 
          </p>
        </article>
        <h2 className="font-semibold">Sign in to get started</h2>
        <div className="flex flex-row gap-2 w-full" id="sign-in-buttons">
          <SignInButton provider="Google" />
          <SignInButton provider="Github" />
        </div>
      </div>
    </main>
  );
}
