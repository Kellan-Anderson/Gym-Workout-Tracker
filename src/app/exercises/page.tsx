import { SignOutButton } from "~/components/signOutButton";
import { protectRoute } from "~/lib/protectRoute";

export default async function ExercisesPage() {

  await protectRoute({ redirectTo: '/exercises' });

  return (
    <div>
      Exercises
      <SignOutButton />
    </div>
  );
}