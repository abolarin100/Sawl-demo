import React from 'react'

import cb from '../images/course2.png'
import { IoIosCheckmark } from 'react-icons/io';
import Footer from './Footer';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Da = () => {
    return (
        <div className='bg-white pt-12 md:mt-0 lg:pt-12'>
            <div className='mt-12 px-12 lg:px-20'>
                <div className='py-2'>
                    <h2 className='text-3xl font-semibold'>Data Analysis</h2>
                </div>

                <div className='flex flex-col md:flex-row py-4 gap-40 md:gap-20 lg:gap-40'>
                    <div className='w-[90%] md:w-[]'>
                        <img src={cb} alt="" className='w-[100%]' />

                        <div className='hidden md:block pt-16'>
                            <h2 className='text-2xl font-semibold pb-3'>Course Overview</h2>
                            <p>Master the art of data analysis. From collecting and interpreting data to presenting actionable insights, this course equips you with the skills needed in data-driven decision-making. Real-world projects and interactive learning elevate your proficiency.</p>
                        </div>
                    </div>

                    <div className='border-t-2 border-black px-6 py-6 w-[100%] md:w-[67%] lg:w-[64%] xl:w-[60%] flex flex-col gap-5 shadow-lg -mt-28 md:-mt-0 '>
                        <div>
                            <h3 className='font-semibold'>Price</h3>
                            <div className='flex justify-between '>
                                <p> <span className='text-3xl relative bottom-1'>.</span> Outright payment</p>
                                <p className='text-new-blue font-bold'>£600</p>
                            </div>
                            <div className='flex justify-between '>
                                <p> <span className='text-3xl relative bottom-1'>.</span> Installment payment</p>
                                <p className='text-new-blue font-bold'>£650</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className='flex justify-between '>
                                <p className='font-semibold'>Duration</p>
                                <p>12 Weeks</p>
                            </div>
                            <p className='text-sm '> <span className='text-3xl relative bottom-1 '>.</span> 12 weeks hands on experience training</p>

                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='font-semibold'> Venue </p>
                            <p className='font-semibold'>Online</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='font-semibold'> Language </p>
                            <p className='font-semibold'>English</p>
                        </div>
                        <hr />
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-gray-400'>Next cohort start date</p>
                            <p>27th Febuary, 2024</p>
                        </div>

                        <button className='bg-new-blue text-white hover:scale-90'>Enroll Now</button>

                    </div>
                    <div className=' sm:block md:hidden  pt-2 -mt-28 mb-6'>
                        <h2 className='text-2xl font-semibold pb-3'>Course Overview</h2>
                        <p>Master the art of data analysis. From collecting and interpreting data to presenting actionable insights, this course equips you with the skills needed in data-driven decision-making. Real-world projects and interactive learning elevate your proficiency.</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row pb-4 justify-between '>
                    <div className='md:-mt-28 lg:-mt-16 xl:-mt-0 xl:mt-4'>


                        <div className='py-4 pt-10 md:mt-10 lg:mt-0'>
                            <h2 className='font-semibold text-xl'>Tools to Learn</h2>
                            <div className=' flex flex-col pt-2'>
                                <div className='md:hidden flex flex-col md:justify-start  md:gap-8'>
                                    <p className='text-sm'> <span className='text-3xl relative bottom-1'>.</span> Advanced Microsoft Excel</p>
                                    <p className='text-sm'> <span className='text-3xl relative bottom-1'>.</span>  SQL</p>
                                    <p className='text-sm'> <span className='text-3xl relative bottom-1'>.</span>  PowerBi</p>


                                </div>
                                <div className='hidden md:flex md:justify-start gap-2 md:gap-8'>
                                    <p className='text-sm'> <span className='text-3xl relative bottom-1'>.</span> Advanced Microsoft Excel</p>
                                    <p className='text-sm'> <span className='text-3xl relative bottom-1'>.</span>  SQL</p>
                                    <p className='text-sm'> <span className='text-3xl relative bottom-1'>.</span>  PowerBi</p>
                                </div>


                            </div>
                        </div>

                        <div className='pt-6'>
                            <h2 className='font-semibold text-xl'>Skills You Will Gain</h2>

                            <div className=' flex flex-col pt-4'>
                                <div className='flex justify-start gap-2'>
                                    <IoIosCheckmark className='text-3xl pb-2' />
                                    <p className='text-sm'>Portfolio Building</p>
                                </div>
                                <div className='flex justify-start gap-2'>
                                    <IoIosCheckmark className='text-3xl pb-2' />
                                    <p className='text-sm'>CV Writing</p>
                                </div>
                                <div className='flex justify-start gap-2'>
                                    <IoIosCheckmark className='text-3xl pb-2' />
                                    <p className='text-sm'>LinkedIn Optimization</p>
                                </div>
                                <div className='flex justify-start gap-2'>
                                    <IoIosCheckmark className='text-3xl pb-2' />
                                    <p className='text-sm'>Job Interview Coaching</p>
                                </div>




                            </div>


                        </div>
                        <div className='pt-6 md:pb-8'>
                            <h2 className='font-semibold text-xl'>Other Benefits Includes</h2>

                            <div className=' flex flex-col pt-4'>
                                <div className='flex justify-start gap-2'>
                                    <IoIosCheckmark className='text-3xl pb-2' />
                                    <p className='text-sm'>Access to watch recorded class videos</p>
                                </div>
                                
                                <div className='flex justify-start gap-2'>
                                    <IoIosCheckmark className='text-3xl pb-2' />
                                    <p className='text-sm'>On job support</p>
                                </div>
                                <div className='flex justify-start gap-2'>
                                    <IoIosCheckmark className='text-3xl pb-2' />
                                    <p className='text-sm'>Mentorship</p>
                                    <div>

                                    </div>
                                </div>



                            </div>


                        </div>

                    </div>

                    <div className='bg-white w-[100%] md:w-[40%] lg:w-[36%] h-[40%] border-2  shadow-lg flex flex-col px-8 py-4 gap-6 mt-6 md:mt-4 mb-8 md:mb-0 '>
                        <h2 className='font-semibold pt-2'>Contact Us</h2>
                        <p>+447778019210</p>
                        <p className='md:text-sm lg:text-base'>admin@smartapproaches.org</p>
                        <div className='flex justify-between px-2'>
                            <p className='bg-custom-blue rounded-full p-1.5 shadow-md shadow-gray-400 '> <FaFacebook /></p>
                            <p className='bg-custom-blue rounded-full p-1.5 shadow-md shadow-gray-400 '><FaInstagram /></p>
                            <p className='bg-custom-blue rounded-full p-1.5 shadow-md shadow-gray-400 '> <FaTwitter /></p>
                            <p className='bg-custom-blue rounded-full p-1.5 shadow-md shadow-gray-400 '><FaLinkedin /></p>
                        </div >
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Da
