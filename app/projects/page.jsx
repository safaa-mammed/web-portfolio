'use client'
import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'

export default function Projects() {
  return (
    <div className=''>
      <h1 className='block mt-4 text-3xl font-semibold text-gray-800 dark:text-white text-center '>My Projects</h1>
    <div className='py-5 grid gap-12 grid-cols-3 grid-rows-auto justify-center'>
    <ProjectsCard
        title={'Web Portfolio Builder'}
        type={'bank'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
        tech={'nextjs, tailwindcss, amplify'}
        link={'link'}
      />
    <ProjectsCard
        title={'Event Management System'}
        type={'mng'}
        desc={"INTIVENT is an event management system that tackles current booking problems that university's face such as double-booking, overbooking, lack of venue information, etc. The INTIVENT web-app inherits cloud computing characteristics, making it widely accessible, scalable, and high-performing."}
        tech={'gcp, php'}
        link={'link'}
      />
      <ProjectsCard
        title={"University Student Registry"}
        type={'API'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
        tech={'laravel'}
        link={'link'}
      />
       <ProjectsCard
        title={'Hospital Mobile Application'}
        type={'healthcare'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
        tech={'tech'}
        link={'link'}
      />
       <ProjectsCard
        title={'Online Bank System'}
        type={'bank'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
        tech={'tech'}
        link={'link'}
      />      
    </div>
    </div>
  )
}

// export default Projects