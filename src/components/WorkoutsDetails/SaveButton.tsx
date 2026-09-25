"use client"
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workout.type';
import React, { useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';

const SaveButton = ({workout}:{workout:IWorkout}) => {
    const {saveWorkout,setSaveWorkout} = useContext(WorkoutsContext)

    const handleSaveWorkout=()=>{
           setSaveWorkout([...saveWorkout, workout])
    }
    return (
        <button className="btn flex items-center gap-2 text-[#E5E7EB]" onClick={()=> handleSaveWorkout()}>
              <FiBookmark />
              Save for later
            </button>
    );
};

export default SaveButton;