import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='bg-[#0C0D10]'>
            <div className='container mx-auto flex justify-between items-center py-6'>
               <div className='flex gap-2'>
                <Image 
                src={logo}
                width={25}
                height={20}
                alt='footer logo'/>
                <h4 className='font-oswald text-medium'>FITLOG</h4>
               </div>
               <p className='text-sm text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;