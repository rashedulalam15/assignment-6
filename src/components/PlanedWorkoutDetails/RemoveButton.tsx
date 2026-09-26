"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { toast } from "react-toastify";

interface RemoveButtonProps {
  workout: IWorkout;
  type: "plan" | "save";
}
const RemoveButton = ({ workout, type }: RemoveButtonProps) => {
  const { saveWorkout, setSaveWorkout, planWorkout, setPlanWorkout } =
    useContext(WorkoutsContext);

  const handleRemoveWorkout = () => {
    if (type === "save") {
      const remainingWorkouts = saveWorkout.filter(
        (item) => item.id !== workout.id,
      );
      setSaveWorkout(remainingWorkouts);
      toast.info(`${workout.name} removed from saved!`);
    }
    if (type === "plan") {
      const remainingWorkouts = planWorkout.filter(
        (item) => item.id !== workout.id,
      );
      setPlanWorkout(remainingWorkouts);
      toast.info(`${workout.name} removed from today's plan!`);
    }
  };
  return (
    <button onClick={handleRemoveWorkout} className="text-2xl">
      <CiCircleRemove />
    </button>
  );
};

export default RemoveButton;
