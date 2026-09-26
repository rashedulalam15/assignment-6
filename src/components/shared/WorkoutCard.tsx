import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock2, CiStar } from "react-icons/ci";
import { IoMdFlame } from "react-icons/io";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link href={`/Workouts/${workout.id}`}>
    <div className="overflow-hidden rounded-xl bg-[#15171d] shadow-sm">
      <div className="relative h-44 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex gap-2">
          {workout.muscleGroups.slice(0, 2).map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold uppercase font-oswald text-gray-100">
          {workout.name}
        </h2>
        <p className="mt-1 text-sm text-[#9CA3AF]">{workout.equipment}</p>
        <div className="divider"></div>
        <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
          <div className="flex items-center gap-1">
            <CiClock2 className="text-base" />
            <span>{workout.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <IoMdFlame className="text-base" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>
          <div className="flex items-center gap-1">
            <CiStar className="text-base" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutCard;
