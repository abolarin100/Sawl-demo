import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { useMediaQuery } from 'react-responsive';
import ha from '../images/hero1.png'
import hb from '../images/newhero.png'
import hc from '../images/herop.png'
import hd from '../images/hero2pr.png'
import Offers from './Offers';


const Hero = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const isLargeScreen = useMediaQuery({ minWidth: 768 });


    const slides = isSmallScreen
    ? [
        {
          url: hc,
          title: 'Salmon',
        },
        {
          url: hd,
          title: 'Salmon',
        },
      ]
    : isLargeScreen
    ? [
        {
          url: ha,
          title: 'Salmon',
        },
        {
          url: hb,
          title: 'Salmon',
        },
      ]
    : [];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='w-full py-16 h-[80vh] lg:h-[100vh] relative'>
            {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    className={`absolute w-full h-full  ${currentIndex === slideIndex ? '' : 'hidden'
                        }`}
                >
                    <img
                        className='w-full h-[80vh] md:h-full object-cover md:object-cover '
                        src={slide.url}
                        alt={slide.title}
                    />
                </div>
            ))}
            {/* <div className='bg-black/30 absolute top-12 left-0 w-full h-[70vh]' /> */}
            <div className='absolute top-40 w-full h-[70vh] flex flex-col justify-center text-white'>
                <div className='justify-center md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <p className='text-sm mb-4 text-white'>Unlock Your Potential</p>
                    <h1 className='font-bold text-3xl md:text-5xl drop-shadow-2xl'>
                        Welcome to
                    </h1>
                    <h1 className='font-bold mb-6 text-3xl md:text-5xl drop-shadow-2xl'>
                        Smart Approaches
                    </h1>
                    <button className='relative top-5 bg-blue-500 hover:text-white border-blue-500 transform transition-transform hover:scale-110'>
                        Get Started
                    </button>
                </div>
                <div className='flex absolute bottom-8 lg:-bottom-60 justify-center  pt-6 w-full'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-white' : 'text-gray-500'
                                }`}
                            onClick={() => goToSlide(slideIndex)}
                        >
                            <RxDotFilled className='relative bottom-8 xl:bottom-48' />
                        </div>
                    ))}
                </div>
            </div>



        </div>

    );
};

export default Hero;
