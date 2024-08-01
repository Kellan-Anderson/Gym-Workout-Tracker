import { protectRoute } from "~/lib/protectRoute";
import { AddExerciseButton } from "./_exercisesComponents/addExerciseButton";

export default async function ExercisesPage() {

  await protectRoute({ redirectTo: '/exercises' });

  return (
    <main className="flex flex-col items-center px-4 py-16">
      <div className="w-full md:w-2/3 lg:w-3/5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Your Exercises</h1>
        <AddExerciseButton />
      </div>
    </main>
  );
}