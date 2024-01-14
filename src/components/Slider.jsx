"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Slider() {
    const [currenSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: 1,
            title: 'always fresh & always crispy & always hot',
            image: "/slide1.png"
        },
        {
            id: 2,
            title: 'We deliver your order wherever you are in NY',
            image: "/slide2.png"
        },
        {
            id: 3,
            title: 'the best pizza to share with your family',
            image: "/slide3.jpg"
        }
    ]

    useEffect(() => {
        const intervel = setInterval(() =>
            setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1)
            , 2000);
        return () => clearInterval(intervel)
    }, [])

    return (
        <section className='py-10'>
            <div className="container mx-auto mt-1 px-1 md:px-0">
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='md:w-1/2 flex items-start flex-col justify-center font-bold text-xl md:text-2xl gap-6'> {/* text container */}
                        <h1 className='text-orange-600 text-2xl md:text-4xl lg:text-7xl'>{data[currenSlide].title}</h1>
                        <button className='bg-orange-600 text-white px-3 py-2'>Order now</button>
                    </div>
                    <div className='md:w-1/2 p-2 sm:p-0'>
                        <Image src={data[currenSlide].image} alt="slide1" className='rounded-lg w-full' width={700} height={400} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Slider