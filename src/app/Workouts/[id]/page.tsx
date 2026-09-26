import PlanButton from "@/components/WorkoutsDetails/PlanButton";
import SaveButton from "@/components/WorkoutsDetails/SaveButton";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import { FiBookmark, FiCalendar } from "react-icons/fi";

export interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workoutsData = await getWorkouts();

  const workout = workoutsData.find(
    (workout: IWorkout) => workout.id === Number(id)
  ) as IWorkout;

  return (
      <div className="container mx-auto grid gap-8 lg:grid-cols-2 mt-10 p-4">
        <div className="relative h-[350px] sm:h-[450px] lg:h-[700px] overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase font-oswald">
            {workout.name}
          </h1>
          <p className="mt-2 text-sm leading-6 text-[#9CA3AF]">
            {workout.description}
          </p>
          <div className="mt-4 flex gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
              >
                {group}
              </span>
            ))}
          </div>
          <div className="mt-5 overflow-hidden rounded-xl  bg-[#1E2330]">
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold uppercase text-[#9CA3AF]">
                Equipment
              </span>

              <span className="text-sm text-[#E5E7EB]">
                {workout.equipment}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold uppercase text-[#9CA3AF]">
                Difficulty
              </span>

              <span className="text-sm text-[#E5E7EB]">
                {workout.difficulty}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold uppercase text-[#9CA3AF]">
                Sets
              </span>
              <span className="text-sm text-[#E5E7EB]">
                {workout.sets}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold uppercase text-[#9CA3AF]">
                Reps
              </span>
              <span className="text-sm text-[#E5E7EB]">
                {workout.reps}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold uppercase text-[#9CA3AF]">
                Duration
              </span>
              <span className="text-sm text-[#E5E7EB]">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold uppercase text-[#9CA3AF]">
                Calories
              </span>
              <span className="text-sm text-[#E5E7EB]">
                {workout.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-xs font-semibold uppercase text-[#9CA3AF]">
                Rating
              </span>

              <span className="text-sm text-[#E5E7EB]">
                {workout.rating}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold uppercase ">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-3 text-sm leading-6 text-[#9CA3AF]"
                >
                  <span>
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <PlanButton workout={workout}></PlanButton>
            <SaveButton workout={workout}></SaveButton>
          </div>
        </div>
      </div>
  );
};

export default WorkoutDetailsPage;