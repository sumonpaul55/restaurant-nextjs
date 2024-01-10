import Image from 'next/image'
import React from 'react'
import slide1 from "../../public/slide1.png"

function Slider() {
    return (
        <section>
            <div className="container mx-auto mt-2">
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1 flex items-start flex-col justify-center font-bold text-xl md:text-2xl gap-6'> {/* text container */}
                        <h1 className='text-orange-600 text-2xl md:text-4xl lg:text-7xl'>test</h1>
                        <button className='bg-orange-600 text-white px-3 py-1'>Order now</button>
                    </div>
                    <div className='flex-1 p-3'>
                        <Image src={slide1} alt="slide1" className='rounded-lg' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Slider