import { IWorkout } from '@/types/workout.type';
import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';

const getWorkouts = async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data
}

const Workouts = async() => {
    const workoutsData = await getWorkouts()
    console.log(workoutsData)
    return (
        <div className='container mx-auto'>
            <div className='space-y-1'>
                <h2 className='font-bold text-3xl font-oswald'>THE LIBRARY</h2>
                <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-5'>
                {
                    workoutsData.map((workout:IWorkout, index:number)=>{
                        return <WorkoutCard key={index} workout={workout}></WorkoutCard>
                    })
                }
            </div>
        </div>
    );
};

export default Workouts;