"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const PlanButton = ({ workout }: { workout: IWorkout }) => {
  const { planWorkout, setPlanWorkout } = useContext(WorkoutsContext);
  const handlePlanWorkout = () => {
    const alreadyAdded = planWorkout.some(
      (item: IWorkout) => item.id === workout.id,
    );
    if (alreadyAdded) {
      toast.warning(`${workout.name} is already in today's plan!`);
      return;
    }
    setPlanWorkout([...planWorkout, workout]);
    toast.success(`${workout.name} added to today's plan`);
  };
  return (
    <button
      className="btn flex items-center gap-2 bg-[#C2F800] text-black "
      onClick={() => handlePlanWorkout()}
    >
      <FiCalendar />
      Add to today's plan
    </button>
  );
};

export default PlanButton;
