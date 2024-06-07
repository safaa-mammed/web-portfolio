'use client'
import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'

export default function Projects() {
  return (
    <div className=''>
      <h1 className='block mt-4 text-3xl font-semibold text-gray-800 dark:text-white text-center '>My Projects</h1>
    <div className='py-5 grid gap-12 md:grid-cols-3 grid-rows-auto justify-center grid-cols-1'>
    {/* <ProjectsCard
        title={'Web Portfolio Builder'}
        type={'bank'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
        tech={'nextjs, tailwindcss, amplify'}
        link={'link'}
      /> */}
    <ProjectsCard
        title={'Event Management System'}
        img={'intivent'}
        type={'mng'}
        desc={"INTIVENT is an event management system that tackles current booking problems that university's face such as double-booking, overbooking, lack of venue information, etc. The INTIVENT web-app inherits cloud computing characteristics, making it widely accessible, scalable, and high-performing."}
        tech={'gcp, php'}
        link={'https://tinyurl.com/5n6uks8z'}
      />
      <ProjectsCard
        title={'Hospital Mobile Application'}
        img={'kpj'}
        type={'healthcare'}
        desc={'An android application for KPJ Hospital to view information on KPJ doctors, vaccines, and to book vaccination appointments. Improves communication and management between hospital and patients, as well as increases awareness on types of vaccinations and diseases. '}
        tech={'android, java, sql'}
        link={'https://tinyurl.com/ymzmfczt'}
      />
      <ProjectsCard
        title={'Inventory Management System'}
        img={'sls'}
        type={'inventory'}
        desc={'The inventory management system for SLS Convenience store simplifies inventory and stock check by automating simple procedures and alerting staff for low stock items. It increases operational productivity as well as reduced physical labour.'}
        tech={'java, sql'}
        link={'https://tinyurl.com/java-inventorysystem'}
      /> 
      <ProjectsCard
        title={"SAU Student Registry"}
        img={'sau'}
        type={'API'}
        desc={'The South of Australia Student Registry is a RESTful API used by university staff to conduct student operations such as register, display, modify, delete. As well as batch operations by importing CSV files. This API uses Laravel Passport to authenticate and authorize each university staff to use the API.'}
        tech={'laravel'}
        link={'https://github.com/safaa-mammed/sau_registry'}
      />
       
       <ProjectsCard
        title={'Online Bank System'}
        img={'bank'}
        type={'bank'}
        desc={'World Bank is an online banking system that allows customers to transfer funds, pay bills, track their accounts/cards and print their bank statements. '}
        tech={'php, xampp'}
        link={'https://tinyurl.com/yzt89ytv'}
      />    
       
    </div>
    </div>
  )
}

// export default Projects