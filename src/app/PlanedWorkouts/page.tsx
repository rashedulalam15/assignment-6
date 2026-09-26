"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import React, { useContext } from "react";
import { DiVim } from "react-icons/di";

const PlanedWorkoutPage = () => {
  const { planWorkout, saveWorkout } = useContext(WorkoutsContext);
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

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {planWorkout.length>0?
            planWorkout.map((workout:IWorkout)=>{

            } ): <div className="p-10 grid justify-center items-center text-center">
                <h2 className="font-oswald font-bold text-3xl">NOTHING HERE YET</h2>
                <p className="text-sm text-[#8A92A0] mt-2 mb-5">Browse the library and add a lift to get today moving.</p>
                <Link href="/"><button className="btn bg-[#C2F800] text-black rounded-3xl">Go to workouts</button></Link>
            </div>
          }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {saveWorkout.length>0?
            saveWorkout.map((workout:IWorkout)=>{

            } ): <div className="p-10 grid justify-center items-center text-center">
                <h2 className="font-oswald font-bold text-3xl">NOTHING HERE YET</h2>
                <p className="text-sm text-[#8A92A0] mt-2 mb-5">Browse the library and add a lift to get today moving.</p>
                <Link href="/"><button className="btn bg-[#C2F800] text-black rounded-3xl">Go to workouts</button></Link>
            </div>
          }
        </div>

        
      </div>
    </div>
  );
};

export default PlanedWorkoutPage;
