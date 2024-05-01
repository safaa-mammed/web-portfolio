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
        title={"SAU Student Registry"}
        type={'API'}
        desc={'The South of Australia Student Registry is a RESTful API used by university staff to conduct student operations such as register, display, modify, delete. As well as batch operations by importing CSV files. This API uses Laravel Passport to authenticate and authorize each university staff to use the API.'}
        tech={'laravel'}
        link={'link'}
      />
       <ProjectsCard
        title={'Hospital Mobile Application'}
        type={'healthcare'}
        desc={'An android application for KPJ Hospital to view information on KPJ doctors, vaccines, and to book vaccination appointments '}
        tech={'android, java'}
        link={'link'}
      />
       <ProjectsCard
        title={'Online Bank System'}
        type={'bank'}
        desc={'World Bank is an online banking system that allows customers to transfer funds, pay bills, track their accounts/cards and print their bank statements. '}
        tech={'php, xampp'}
        link={'link'}
      />      
    </div>
    </div>
  )
}

// export default Projects