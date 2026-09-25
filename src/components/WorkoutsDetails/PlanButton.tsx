"use client"
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workout.type';
import React, { useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';

const PlanButton = ({workout}:{workout:IWorkout}) => {
    const {planWorkout, setPlanWorkout} = useContext(WorkoutsContext)
    const handlePlanWorkout =()=>{
        console.log("plan btn clicked clicked", workout)
      setPlanWorkout([...planWorkout, workout])
    }
    return (
            <button className="btn flex items-center gap-2 bg-[#C2F800] text-black " onClick={()=>handlePlanWorkout()}>
              <FiCalendar />
              Add to today's plan
            </button>
    );
};

export default PlanButton;