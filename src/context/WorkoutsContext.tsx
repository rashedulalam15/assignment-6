"use client"
import React, { createContext, useState } from 'react';
export const WorkoutsContext = createContext({})
const WorkoutsProvider = ({children}) => {
    const [planWorkout, setPlanWorkout] =useState([])
    const [save, setSave] =useState([])

    const sharedData = {
        planWorkout,
        setPlanWorkout,
        save,
        setSave
    }
    return (
        <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;