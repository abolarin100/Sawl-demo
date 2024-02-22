import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import LG from '../images/Logo.png';
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setCoursesDropdown(false);
  };

  const openCoursesDropdown = () => {
    setCoursesDropdown(true);
  };

  const closeCoursesDropdown = () => {
    setCoursesDropdown(false);
  };

  const toggleCoursesDropdown = () => {
    setCoursesDropdown(!coursesDropdown);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Function to navigate to specific pages
  const navigateToPage = (path) => {
    navigate(path);
    setNav(false); // Close the menu after navigation
  };

  return (
    <div className={`bg-white z-50 fixed w-full flex justify-between py-2 sm:py-2 md:py-0 lg:py-0 px-2 sm:px-4 md:px-4 lg:px-16 items-center
    ${
        scrolling ? 'scrolled' : 'opacity-0 transition duration-1000 ease-out' // Apply a different class when scrolling
      }`}
    >
      <img src={LG} alt="" className='home__img' width='120' />

      {/* Visible on md and larger screens */}
      <div className='hidden lg:flex  flex-row justify-between  '>
        <ul className='flex flex-row mr-28 px-4 space-x-8  lg:mr-28 md:mr-16'>
          <li
            className='hover:text-blue-500 hover:cursor-pointer text-l text-black py-8 px-2'
            onClick={() => navigateToPage('/')}
          >
            Home
          </li>
          <li
            className='hover:text-blue-500  hover:cursor-pointer text-l py-8 px-2 flex'
            onClick={toggleCoursesDropdown}
            onMouseEnter={openCoursesDropdown}
            onMouseLeave={closeCoursesDropdown}
          >
            Courses
            <IoIosArrowDown
              className={`ion-ios-down text-l cursor-pointer relative top-1 left-2 ${
                coursesDropdown ? 'text-blue-500' : 'hover:text-blue-500'
              }`}
              onClick={toggleCoursesDropdown}
              onMouseEnter={openCoursesDropdown}
              onMouseLeave={closeCoursesDropdown}
            />
            {coursesDropdown && (
              <ul className='absolute top-16  mt-2 w-[14vw] space-y-2 bg-white p-2 shadow-md rounded-md '>
                <li
                  className='text-gray-700 ml-3 hover:text-blue-500 cursor-pointer'
                  onClick={() => navigateToPage('/business-analysis')}
                >
                  Business Analysis
                </li>
                <li
                  className='text-gray-700 ml-3 hover:text-blue-500 cursor-pointer'
                  onClick={() => navigateToPage('/data-analysis')}
                >
                  Data Analysis
                </li>
              </ul>
            )}
          </li>
          <li
            className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
            onClick={() => navigateToPage('/about-us')}
          >
            About Us
          </li>
          <li
            className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
            onClick={() => navigateToPage('/contact')}
          >
            Contact
          </li>
        </ul>
        <div className='relative right-9'>
          <IoIosSearch
            className='ion-ios-search text-2xl cursor-pointer relative top-9 '
            onClick={toggleSearch}
          />
          {searchOpen && (
            <div className='absolute top-16 left-0 sm:right-2   mt-6 px-2   flex justify-between bg-white w-[23vw]  '>
              <input
                type='text'
                placeholder='What do you want to learn?'
                className=' p-2  rounded relative bottom-0 md:text-sm w-full  '
              />
              <IoIosSearch
                className='ion-ios-search text-xl cursor-pointer absolute  top-2 right-6  text-gray-400'
                onClick={''}
              />
            </div>
          )}
        </div>
        <button
          className='bg-transparent my-6 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-l px-4 mx-2'
          onClick={() => navigateToPage('/login')}
        >
          Log in
        </button>
        <button
          className='bg-blue-500 my-6 border-blue-500 text-white text-l px-4 mx-2'
          onClick={() => navigateToPage('/register')}
        >
          Register
        </button>
      </div>

      {/* Toggleable menu for all screen sizes */}
      <HiMenuAlt3
        onClick={handleNav}
        className='z-20 text-gray-500 cursor-pointer lg:hidden' // Hide on md and larger screens
        size={25}
      />

      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <div className='relative top-8 left-0 mt-6 px-2 flex justify-between items-center w-full'>
          <input
            type='text'
            placeholder='What do you want to learn?'
            className='p-2 bg-gray-900 border-gray-700 rounded relative bottom-0 md:text-sm w-full'
          />
          <IoIosSearch
            className='ion-ios-search text-xl cursor-pointer absolute top-2 right-6 text-gray-400'
            onClick={''}
          />
        </div>
        <ul className='flex flex-col fixed w-full h-full space-y-4 items-center justify-start mt-12'>
          <li
            className='text-2xl p-8 mr-10 hover:text-blue-500 hover:cursor-pointer'
            onClick={() => navigateToPage('/')}
          >
            Home
          </li>
          <li
            className={`text-2xl p-8 mr-10 hover:text-blue-500 hover:cursor-pointer flex justify-between`}
            onClick={() => toggleAnswer(0)}
          >
            Courses
            {activeIndex === 0 ? (
              <IoIosArrowUp className='relative top-1 left-2' />
            ) : (
              <IoIosArrowDown className='relative top-1 left-2' />
            )}
          </li>
          <li
            className={` ${
              activeIndex === 0 ? 'block' : 'hidden'
            } text-2xl py-3 mr-32 relative bottom-10 hover:text-blue-500 hover:cursor-pointer`}
          >
            <ul className='flex flex-col fixed  w-full h-full space-y-5 '>
              <li
                className='text-white text-xl hover:text-blue-500 cursor-pointer hover:cursor-pointer'
                onClick={() => navigateToPage('/business-analysis')}
              >
                Business Analysis
              </li>
              <li
                className='text-white text-xl hover:text-blue-500 cursor-pointer hover:cursor-pointer'
                onClick={() => navigateToPage('/data-analysis')}
              >
                Data Analysis
              </li>
            </ul>
          </li>
          <li
            className='text-2xl p-8 mr-10 hover:text-blue-500 hover:cursor-pointer'
            onClick={() => navigateToPage('/about-us')}
          >
            About Us
          </li>
          <li
            className='text-2xl p-8 mr-10 hover:text-blue-500 hover:cursor-pointer'
            onClick={() => navigateToPage('/contact')}
          >
            Contact
          </li>

          <div className='mt-8'>
            <button
              className='bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-xl p-4 mx-2'
              onClick={() => navigateToPage('/login')}
            >
              Log in
            </button>
            <button
              className='bg-blue-500 m-4 border-blue-500 text-white text-xl p-4 mx-2'
              onClick={() => navigateToPage('/register')}
            >
              Register
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
