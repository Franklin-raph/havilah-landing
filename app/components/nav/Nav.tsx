"use client"

import React, { useEffect, useState } from 'react'
import { HiMiniChevronDown } from "react-icons/hi2";
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";




const Nav = () => {

    const [time, setTime] = useState<string>('');
    const [openNav, setOpenNav] = useState<boolean>(false)

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
    <nav className='shadow py-[25px] md:px-[50px] px-[20px] flex justify-between items-center fixed w-full z-[9999]'>
        <img src="./images/Logo.svg" alt="" className='cursor-pointer w-[200px]' onClick={() => window.location.assign('/')} />
        <div className='hidden xl:block text-[14px]'>
            <span className='text-[#0C0C0C] font-[500]'>{time}</span>
            <span className='text-[#8d8d8d] mx-1 font-[500]'>Est</span>
            <span>⚡️</span>
            <span className='text-[#0073DD] font-[300]'>Lagos, Nigeria</span>
        </div>
        <FiMenu onClick={() => setOpenNav(true)} className='cursor-pointer xl:hidden block text-[22px]'/>
        <ul className='xl:flex justify-between items-center gap-5 text-[#555] hidden text-[14px]'>
            <li className='flex items-center gap-1 cursor-pointer'>
                <p>Services</p>
                <HiMiniChevronDown />
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                    Projects
                </Link>
            </li>
            <li className='flex items-center gap-1 cursor-pointer'>
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
        {
            openNav &&
            <ul className='flex flex-col top-0 bg-[#F2F3F4] w-full left-0 justify-start items-center gap-12 text-[#555] z-[99] fixed pt-5 pb-10 px-9 h-full'>
                <div className='flex items-center justify-between w-full'>
                    <img src="./images/Logo.svg" alt="" />
                    <IoClose className='text-[25px] cursor-pointer' onClick={() => setOpenNav(false)}/>
                </div>
                <li className='flex items-center gap-1 cursor-pointer justify-between w-full border-b pb-3'>
                    <p>Services</p>
                    <HiMiniChevronDown className='text-[25px]'/>
                </li>
                <li className='flex items-center gap-1 justify-between w-full border-b pb-3'>
                    <Link href="/">
                        Projects
                    </Link>
                </li>
                <li className='flex items-center gap-1 cursor-pointer justify-between w-full border-b pb-3'>
                    <p>Company</p>
                    <HiMiniChevronDown className='text-[25px]'/>
                </li>
                <li className='flex items-center gap-1 justify-between w-full border-b pb-3'>
                    <Link href="/">
                        Blog
                    </Link>
                </li>
                <li className='flex items-center gap-1 justify-between w-full border-b pb-3'>
                    <Link href="/">
                        Accelerator
                    </Link>
                </li>
                <li className='flex items-center gap-1 justify-between w-full border-b pb-3'>
                    <Link href="/">
                        Contact Us
                    </Link>
                </li>
                <div className='absolute bottom-[2rem]'>
                    <span className='text-[#0C0C0C] font-[500]'>{time}</span>
                    <span className='text-[#555555] mx-1'>Est</span>
                    <span>⚡️</span>
                    <span className='text-[#0073DD]'>Lagos, Nigeria</span>
                </div>
            </ul>
        }
    </nav>
  )
}

export default Nav