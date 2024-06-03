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
    <div className='px-[50px] pb-[3rem]'>
      <div className='flex items-start justify-between mt-[10rem] gap-[4rem] w-full'>
        <div className='w-[33%]'>
          <img src="./images/Logo.svg" alt="" className='mb-7'/>
          <p>
            Experience the power of blockchain firsthand with a complimentary prototype or POC developed by our experts. See how our solutions can transform your business and propel your success.
          </p>
        </div>
        <div className='w-[33%]'>
          <p className='text[18px] font-[600] mb-7'>Our address</p>
          <p className='mb-7'>37, St Anthony Lodge, Ifite-Awka Anambra, Nigeria. 420112</p>
          <p>AT: 5252837088 Unikorns Sp. z o. o. Registred in Warsaw, Poland</p>
        </div>
        <ul className='flex justify-between items-center gap-5 text-[#555] w-[33%] mt-[3rem]'>
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
          </ul>
      </div>
      <div className='flex items-center justify-between mt-[7rem]'>
        <p>
          &copy; Havilah Blockchain Studio {new Date().getFullYear()}. All rights reserved
        </p>
        <ul className='flex justify-between items-center gap-5 text-[#555] w-[33%]'>
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
        <ul className='flex justify-between items-center gap-5 text-[#555]'>
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