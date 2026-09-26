"use client"
import { WorkoutsContext } from '@/context/WorkoutsContext';
import React, { useContext } from 'react';

const NavbarCounts = () => {
      const { planWorkout, saveWorkout } = useContext(WorkoutsContext);

    return (
        <div className="navbar-end gap-1 sm:gap-2">
          <a className="btn btn-sm sm:btn-md rounded-2xl">
            Plan
            <span className="h-5 w-5 flex items-center justify-center rounded-full text-black bg-[#C2F800]">
              {planWorkout.length}
            </span>
          </a>
          <a className="btn btn-sm sm:btn-md rounded-2xl">
            Saved
            <span className="h-5 w-5 border border-gray-300 flex items-center justify-center rounded-full">
              {saveWorkout.length}
            </span>
          </a>
        </div>
    );
};

export default NavbarCounts;