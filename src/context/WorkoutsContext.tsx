"use client"
import { IWorkout } from '@/types/workout.type';
import React, { createContext, useState } from 'react';


interface WorkoutsContextType {
  planWorkout: IWorkout[];
  setPlanWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveWorkout: IWorkout[];
  setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}
export const WorkoutsContext = createContext<WorkoutsContextType>({} as WorkoutsContextType)


const WorkoutsProvider = ({children}:{children:React.ReactNode}) => {
    const [planWorkout, setPlanWorkout] =useState<IWorkout[]>([])
    const [saveWorkout, setSaveWorkout] =useState<IWorkout[]>([])

    const sharedData = {
        planWorkout,
        setPlanWorkout,
        saveWorkout,
        setSaveWorkout
    }
    return (
        <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;