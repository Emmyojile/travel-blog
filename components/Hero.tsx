import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py20 xl:flex-row border-2 border-red-500 '>
       <div className="hero-map"/>

       {/* LEFT */}

       <div className="relative">
        <Image
        src="/camp.svg"
        alt='camp'
        width={50}
        height={50}
        className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
       </div>
    </section>
  )
}

export default Hero