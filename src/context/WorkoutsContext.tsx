"use client"
import React, { createContext, useState } from 'react';
export const WorkoutsContext = createContext({})
const WorkoutsProvider = ({children}) => {
    const [planWorkout, setPlanWorkout] =useState([])
    const [saveWorkout, setSaveWorkout] =useState([])

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