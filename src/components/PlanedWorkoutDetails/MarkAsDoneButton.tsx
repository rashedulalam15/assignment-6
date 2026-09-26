"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const MarkAsDoneButton = ({ workout }: { workout: IWorkout }) => {
  const { planWorkout, setPlanWorkout } = useContext(WorkoutsContext);

  const handleDoneWorkout = () => {
    const remainingWorkouts = planWorkout.filter(
      (item) => item.id !== workout.id,
    );
    setPlanWorkout(remainingWorkouts);
    toast.success(`${workout.name} is done!`);
  };
  return (
    <button
      onClick={handleDoneWorkout}
      className="btn bg-[#C2F800] text-black rounded-3xl"
    >
      <FaCheck />
      Mark as Done
    </button>
  );
};

export default MarkAsDoneButton;
