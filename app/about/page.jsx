'use client'
import AboutCard from '@/components/AboutCard'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const About = () => {
  return (
    <div><h1 className='block mt-4 text-3xl font-semibold text-gray-800 dark:text-white text-center'>Get to know more about me!</h1>
    <div className="container bg-white mx-auto flex h-screen">
    <div className="relative wrap overflow-hidden p-10 m-auto">
    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
    {/* <!-- right timeline --> */}
      <AboutCard
        title={'Background'}
        description={'I was born and raised in Kuwait, but my background is Filipino/Indian. Experiencing many different cultures has made me who I am today, but most importantly I rely on my religion that aligns with my values and morals.'}
        side={'right'}
    />
    

    {/* <!-- left timeline --> */}
    <AboutCard
        title={'Interests & Hobbies'}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        side={'left'}
    />
    
    {/* <!-- right timeline --> */}
    <AboutCard
        title={'How I got into Computer Science?'}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        side={'right'}
    />

    {/* left timeline */}
    <AboutCard
        title={'Extracurricular Activities'}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        side={'left'}
        handleClick={'true'}
    />

    {/* <!-- right timeline --> */}
    <AboutCard
        title={'Goals & Aspirations'}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        side={'right'}
    />
  </div> 
  </div>
  </div>
  )
}

export default About