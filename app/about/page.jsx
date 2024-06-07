'use client'
import AboutCard from '@/components/AboutCard'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const About = () => {
  return (
    <div className=''><h1 className='block mt-4 text-3xl font-semibold text-gray-800 dark:text-white text-center'>Get to know more about me!</h1>
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
        description={"As a homebody, I have always enjoyed a cosy movie night with friends & family. Recently, I have started to look into being more active which is why I began to enjoy athletic activities such as Archery, Karting, and Golfing. Being consistent in these sports have helped me physically and mentally as it instils discipline in me."}
        side={'left'}
    />
    
    {/* <!-- right timeline --> */}
    <AboutCard
        title={'How I got into Computer Science?'}
        description={"I have to thank Dr. David J. Malan, the brilliant Harvard University Professor who taught me in the course CS50 and sparked my interest in development. This not only gave me an introduction to computer science, but taught me core concepts that have helped me throughout my university life. "}
        side={'right'}
    />

    {/* left timeline */}
    <AboutCard
        title={'Goals & Aspirations'}
        description={"My current goal is to accomplish becoming a successful full-stack developer, I would love being a part of a significant and impactful project. Apart from that, a long-term goal of mine to have a start-up with a unique idea or goal, and make that a successful business."}
        side={'left'}
        // handleClick={'true'}
    />

    {/* <!-- right timeline --> */}
    {/* <AboutCard
        title={'Goals & Aspirations'}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        side={'right'}
    /> */}
  </div> 
  </div>
  </div>
  )
}

export default About