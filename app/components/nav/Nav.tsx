"use client"

import React, { useEffect, useState } from 'react'
import { HiMiniChevronDown } from "react-icons/hi2";
import Link from 'next/link';


const Nav = () => {

    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes();
          const ampm = hours >= 12 ? 'pm' : 'am';
          const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
          setTime(formattedTime);
        };
    
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
    
        return () => clearInterval(intervalId);
      }, []);


    
  return (
    <div className='bg-white py-[25px] px-[50px] flex justify-between items-center'>
        <img src="./images/Logo.svg" alt="" />
        <div>
            <span className='text-[#0C0C0C] font-[500]'>{time}</span>
            <span className='text-[#555555] mx-1'>Est</span>
            <span>⚡️</span>
            <span className='text-[#0073DD]'>Lagos, Nigeria</span>
        </div>
        <ul className='flex justify-between items-center gap-5 text-[#555]'>
            <li className='flex items-center gap-1'>
                <p>Services</p>
                <HiMiniChevronDown />
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                    Projects
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <p>Company</p>
                <HiMiniChevronDown />
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                    Blog
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                    Accelerator
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                    Contact Us
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav