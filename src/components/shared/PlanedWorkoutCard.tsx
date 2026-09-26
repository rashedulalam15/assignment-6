import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {  CiClock2, CiStar } from 'react-icons/ci';
import { IoMdFlame } from 'react-icons/io';
import MarkAsDoneButton from '../PlanedWorkoutDetails/MarkAsDoneButton';
import RemoveButton from '../PlanedWorkoutDetails/RemoveButton';

const PlanedWorkoutCard = ({workout}:{workout:IWorkout}) => {
    return (
        
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 bg-[#15171d] p-4 rounded-md'>
            <div className='flex gap-3'>
            <Image 
            src={workout.image}
            width={100}
            height={60}
            alt={workout.name}
            className='rounded-md'
            />
            <div>
            <h2 className='font-oswald font-semibold text-xl'>{workout.name}</h2>
            <p className='text-sm text-[#8A92A0]'>{workout.equipment}</p>
            
            <div className="flex items-center gap-4 text-sm text-[#9CA3AF] mt-4">
                      <div className="flex items-center gap-1">
                        <CiClock2 className="text-base" />
                        <span>{workout.duration} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoMdFlame className="text-base" />
                        <span>{workout.caloriesBurned} kcal</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CiStar className="text-base" />
                        <span>{workout.rating}</span>
                      </div>
                    </div>
            </div>

            </div>
            <div className='flex flex-wrap gap-2'>
            <Link href={`/Workouts/${workout.id}`}><button className='btn rounded-3xl'>View Details</button></Link> 
             <MarkAsDoneButton workout={workout}></MarkAsDoneButton>
             <RemoveButton workout={workout} type="plan"></RemoveButton>
            </div>
                
        </div>

    );
};

export default PlanedWorkoutCard;