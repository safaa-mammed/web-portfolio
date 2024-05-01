"use client"
import Link from 'next/link'
import React from 'react'
import '@/styles/globals.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation';

const Nav = () => {
    var router = useRouter();
    var pathname = usePathname();
    const isActive = (href) => {
        // return useSelectedLayoutSegment() === href ? 'active' : '';
        console.log('current path:' + pathname)
        console.log('href:' + href)
        // return router.pathname === href
        return pathname === href
      };
      const [toggleDropdown, settoggleDropdown] = useState(false)
  return (
    <nav className='relative bg-white shadow dark:bg-gray-800'>
        <div className='sm:flex hidden'>
        <div className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
            <div className='flex items-center justify-between'>
            {/* <Image
                src={'/assets/icons/profile.jpg'}
                width={20}
                height={20}
                className="object-cover w-20 h-20 rounded-full"
            /> */}
                <Link href={'/'} className='w-auto h-6 sm:h-7'>Home</Link>
            </div>
            <div className='absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'>
                <div className='flex flex-col md:flex-row md:mx-6'>
                    <Link href={'/about'} className={'my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'}>About</Link>
                    <Link href={'/resume'} className={'my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'}>Experience</Link>
                    <Link href={'/projects'} className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'>Projects</Link>
                    <Link href={'/certs'} className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'>Certifications</Link>
                    <Link href={'/contact'} className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'>Contact</Link>
                </div>
            </div>
        </div>
        </div>
        {/* Mobile Nav */}
        <div className='sm:hidden flex relative'>
            <Image src='assets/icons/menu.svg'
                width={30}
                height={30}
                onClick={() => settoggleDropdown((prev) => !prev)}
                    
            />
            
            {toggleDropdown && (
                <div className='bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
                    <Link href={'/about'} className={'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}>About</Link>
                    <Link href={'/resume'} className={'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}>Experience</Link>
                    <Link href={'/projects'} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Projects</Link>
                    <Link href={'/certs'} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Certifications</Link>
                    <Link href={'/contact'} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Contact</Link>
                </div>
            )}            

        </div>
        
    </nav>
  )
}

export default Nav