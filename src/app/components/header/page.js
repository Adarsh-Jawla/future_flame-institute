"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
// import LoginFormContainer from '../pages/form/LoginFormContainer';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-sky-800 w-full p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            className="cursor-pointer border-none"
            width={40}
            height={40}
            alt="logo"
          />
          <span className="text-white text-2xl font-semibold">Future Flame</span>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-blue-200 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={30} className="" />
            ) : (
              <GiHamburgerMenu size={30}
                className="focus:border-none active:border-none"
              />
            )}
          </button>
        </div>

 
        <div
          className={`md:flex md:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'
            } mt-4 md:mt-2 mr-4`}>

          <ul className="flex flex-col md:flex-row items-center md:space-x-4 mr-3">
            <li className="relative mt-1 mr-3">
              <Link href="#" className="text-white hover:text-blue-200">
                <span className=''>HOME</span>
              </Link>
            </li>

            <li className="relative group">
              <Link href="#" className="text-white flex flex-row hover:text-blue-200 ">
                <span className='mt-1'>ABOUT US </span> <RiArrowDropDownFill className='text-3xl' />
              </Link>

              <ul className="absolute top-full left-0 bg-blue-500 p-2 text-sm space-y-2  md:block opacity-0 group-hover:opacity-100 transition-opacity ">
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    About US
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    Our Teachers
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link href="#" className="text-white hover:text-blue-200 flex flex-row">
                <span className='mt-1'>COURSES </span> <RiArrowDropDownFill className='text-3xl' />
              </Link>

              <ul className="absolute top-full left-0 bg-blue-500 p-2 space-y-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    Backend
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    Fullstack
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link href="#" className="text-white hover:text-blue-200 flex flex-row">
                <span className='mt-1'>SERVICES </span> <RiArrowDropDownFill className='text-3xl' />
              </Link>

              <ul className="absolute top-full left-0 bg-blue-500 p-2 space-y-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    About us
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link href="#" className="text-white hover:text-blue-200 flex flex-row">
                <span className='mt-1'>STUDENTS </span> <RiArrowDropDownFill className='text-3xl' />
              </Link>

              <ul className="absolute top-full left-0 bg-blue-500 p-2 space-y-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                <li>
                  <Link href="#" className="text-white hover:text-blue-200">
                    Verify Students
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative">
              <Link href="#" className="text-white hover:text-blue-200">
                CONTACT
              </Link>
            </li>
          </ul>
          <Link href='' className="text-white bg-sky-500 border-0 py-2 px-4 focus:outline-none hover:bg-sky-600 rounded">Sign In</Link>
        </div>

      </nav>
    </>
  )
}

export default Header;