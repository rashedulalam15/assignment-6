"use client";
import PlanedWorkoutCard from "@/components/shared/PlanedWorkoutCard";
import SaveWorkoutCard from "@/components/shared/SaveWorkoutCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import React, { useContext, useState } from "react";

const PlanedWorkoutPage = () => {
  const { planWorkout, saveWorkout } = useContext(WorkoutsContext);
  const [sortBy, setSortBy] = useState<"duration"|"caloriesBurned"|"rating">("duration")

  const sortWorkouts=(workouts:IWorkout[])=>{
         const sortedWorkouts = [...workouts]
         if(sortBy==="duration"){
            sortedWorkouts.sort((a , b)=>b.duration - a.duration)
         }else if(sortBy==="caloriesBurned"){
            sortedWorkouts.sort((a,b)=>b.caloriesBurned - a.caloriesBurned)
         }else if(sortBy==="rating"){
            sortedWorkouts.sort((a,b)=>b.rating - a.rating)
         }
         return sortedWorkouts
  }
  const sortedPlanWorkout = sortWorkouts(planWorkout)
  const sortedSaveWorkout = sortWorkouts(saveWorkout)
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold text-4xl font-oswald">My plan</h2>
      <p className="text-sm text-[#8A92A0] mt-2">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="grid grid-cols-3 bg-[#222630] rounded-xl p-10 my-6">
        <div>
          <p className="text-sm text-[#8A92A0]">Exercises</p>
          <span className="text-4xl font-semibold mt-2">0</span>
        </div>
        <div>
          <p className="text-sm text-[#8A92A0]">Minutes</p>
          <span className="text-4xl font-semibold mt-2">0</span>
        </div>
        <div>
          <p className="text-sm text-[#8A92A0]">claories</p>
          <span className="text-4xl font-semibold mt-2">0</span>
        </div>
      </div>
<div className="tabs tabs-lift relative">

  <div className="absolute right-0 top-0 z-10 flex items-center gap-2">
    <span className="text-sm text-[#8A92A0] whitespace-nowrap">Sort By</span>

    <select
      value={sortBy}
      onChange={(e) =>
        setSortBy(
          e.target.value as "duration" | "caloriesBurned" | "rating"
        )
      }
      className="select select-sm"
    >
      <option value="duration">Duration</option>
      <option value="caloriesBurned">Calories</option>
      <option value="rating">Rating</option>
    </select>
  </div>
  </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift ">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-xl p-6 mt-4">
          {sortedPlanWorkout.length > 0 ? (
            <div className="space-y-4">
              {sortedPlanWorkout.map((workout: IWorkout) => {
                return <PlanedWorkoutCard key={workout.id} workout={workout} />;
              })}
            </div>
          ) : (
            <div className="p-10 grid justify-center items-center text-center">
              <h2 className="font-oswald font-bold text-3xl">
                NOTHING HERE YET
              </h2>
              <p className="text-sm text-[#8A92A0] mt-2 mb-5">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="btn bg-[#C2F800] text-black rounded-3xl">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
        </div>
        

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
        />
        
        <div className="tab-content bg-base-100 border-base-300 rounded-xl p-6 mt-4">
          {sortedSaveWorkout.length > 0 ? (
            <div className="space-y-4">
              {sortedSaveWorkout.map((workout: IWorkout) => {
                return <SaveWorkoutCard key={workout.id} workout={workout} />;
              })}
            </div>
          ) : (
            <div className="p-10 grid justify-center items-center text-center">
              <h2 className="font-oswald font-bold text-3xl">
                NOTHING HERE YET
              </h2>
              <p className="text-sm text-[#8A92A0] mt-2 mb-5">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="btn bg-[#C2F800] text-black rounded-3xl">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default PlanedWorkoutPage;
