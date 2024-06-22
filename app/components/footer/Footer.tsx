import Link from 'next/link'
import React from 'react'
import { IoLogoBehance } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import { HiMiniChevronDown } from 'react-icons/hi2'

const Footer = () => {
  return (
    <div className='p-[20px] md:px-[50px] pb-[3rem]'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-between mt-[10rem] gap-[2rem] w-full'>
        <div>
          <img src="./images/Logo.svg" alt="" className='mb-7'/>
          <p>
            Experience the power of blockchain firsthand with a complimentary prototype or POC developed by our experts. See how our solutions can transform your business and propel your success.
          </p>
        </div>
        <div>
          <p className='text[18px] font-[600] mb-7'>Our address</p>
          <p className='mb-7'>37, St Anthony Lodge, Ifite-Awka Anambra, Nigeria. 420112</p>
          <p>AT: 5252837088 Unikorns Sp. z o. o. Registred in Warsaw, Poland</p>
        </div>
        <div className='flex gap-[30px] sm:gap-[45px] md:gap-16'>
          <div>
            <p className='text[18px] font-[600] mb-7'>For You</p>
            <ul className='grid gap-2'>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='text[18px] font-[600] mb-7'>About Us</p>
            <ul className='grid gap-2'>
              <li>
                <Link href="/">Company</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='text[18px] font-[600] mb-7'>Connect</p>
            <ul className='grid gap-2'>
              <li>
                <Link href="/">Accelerator</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <ul className='grid grid-cols-1 sm:grid-cols-3 w-full md:grid-cols-3 justify-between items-center gap-5 text-[#555]  mt-[3rem]'>

              <li className='flex items-center gap-1 cursor-pointer justify-between w-full'>
                  <p>Services</p>
                  <HiMiniChevronDown className='text-[25px]'/>
              </li>
              <li className='flex items-center gap-1 cursor-pointer justify-between w-full'>
                  <p>Company</p>
                  <HiMiniChevronDown className='text-[25px]'/>
              </li>
              <li className='flex items-center gap-1'>
                  <Link href="/">
                      Projects
                  </Link>
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
          </ul> */}
      </div>
      <div className='flex md:items-center flex-col md:flex-row items-start justify-between mt-[4rem] md:gap-0 gap-[3rem]'>
        <p className='order-3 md:order-1 text-[13px]'>
          &copy; Havilah Blockchain Studio {new Date().getFullYear()}. All rights reserved
        </p>
        <ul className='flex justify-between items-center gap-5 text-[#555] order-1 md:order-2 text-[13px]'>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  Privacy Policy
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  Terms of use
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  Manage cookies
                </Link>
            </li>
        </ul>
        <ul className='flex text-[20px] items-center text-[#555] order-2 md:order-3 gap-[30px] md:gap-0]'>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  <IoLogoBehance />
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  <FaLinkedin />
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  <AiFillDribbbleCircle />
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  <AiFillInstagram />
                </Link>
            </li>
            <li className='flex items-center gap-1'>
                <Link href="/">
                  <BsGithub />
                </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer