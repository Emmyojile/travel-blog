import { FEATURES } from '@/constants'
import Image from 'next/image'
import { features } from 'process'
import React from 'react'

const Features = () => {
  return (
    <section className='border-2 border-red-500 flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className="max-container padding-container relative w-full justify-end">
        {/* LEFT */}
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
          src="/phone.png"
          alt='phone'
          width={400}
          height={1000}
          className='feature-phone'
          />
        </div>

        {/* RIGHT */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
            src={'/camp.svg'}
            alt='camp-logo'
            width={50}
            height={50}
            className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul>
          {FEATURES.map((feature) =>(
            <FeatureItem 
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            variant={feature.variant}
            description={feature.description}
            />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
 title:string;
 icon:string;
 variant: string;
 description:string
}

const FeatureItem = ({title, icon, variant, description}:FeatureItem) => {
  return(
    <li className='flex w-full flex-1 flex-col items-start'>
      {title}
    </li>
  )
}

export default Features