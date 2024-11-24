import { siteConfig } from '@/config/site'
import { shimmer, toBase64 } from '@/lib/image'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-20'>
      <div className="px-4 pb-10 text-center">
        {/* <h1 className="text-4xl font-extrabold tracking-normal pb-0">
          About Sortbox
        </h1> */}
        <p className="mx-auto mt-4 max-w-3xl leading-[30px] text-base text-justify pt-">
          At Sortbox, we specialize in advanced battery power stations that provide reliable and sustainable energy solutions for your home or business.
          ur high-capacity battery systems store excess solar energy, ensuring you have power when you need it most—day or night. Designed for efficiency and ease of use, our battery power stations can be seamlessly integrated with your existing solar setup or used independently.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-[30px] text-base text-justify">
          With Sortbox, you can enjoy the freedom of energy independence, reduce your reliance on the grid,
          and lower your energy bills. Our products come equipped with smart technology for real-time monitoring,
          allowing you to track your energy usage and maximize your savings. Whether you’re preparing for an emergency,
          planning an outdoor adventure, or looking to power your everyday appliances, our battery power stations offer versatility and peace of mind.
        </p>
      </div>
      <div className='w-full h-[400px] relative'>
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(225, 280)
          )}`}
          src={'https://images.pexels.com/photos/9638474/pexels-photo-9638474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt={"about"}
          fill
          className="h-fit w-full object-contain"
        />
      </div>
      <div className="max-w-4xl mx-auto  pt-20 pb-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Mission & Vision</h2>

        <div className='flex flex-row gap-6'>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold mb-2">Mission Statement</h3>
            <p className="text-gray-700">
              At Sortbox, our mission is to empower individuals and businesses with reliable and sustainable energy solutions through innovative battery power stations. We are dedicated to promoting energy independence, reducing carbon footprints, and enhancing the quality of life by providing accessible, efficient, and high-quality energy storage solutions.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Vision Statement</h3>
            <p className="text-gray-700">
              Our vision is to lead the transition to a sustainable energy future where every home and business can harness the power of renewable energy through advanced battery technology. We strive to create a world where energy independence is achievable for all, contributing to a cleaner, greener planet for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About