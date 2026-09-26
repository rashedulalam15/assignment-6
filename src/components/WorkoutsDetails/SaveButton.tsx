"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { saveWorkout, setSaveWorkout } = useContext(WorkoutsContext);

  const handleSaveWorkout = () => {
    const alreadySaved = saveWorkout.some(
      (item: IWorkout) => item.id === workout.id,
    );
    if (alreadySaved) {
      toast.warning(`${workout.name} is already saved!`);
      return;
    }
    setSaveWorkout([...saveWorkout, workout]);
    toast.success(`${workout.name} saved for later`);
  };
  return (
    <button
      className="btn flex items-center gap-2 text-[#E5E7EB]"
      onClick={() => handleSaveWorkout()}
    >
      <FiBookmark />
      Save for later
    </button>
  );
};

export default SaveButton;
