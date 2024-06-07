import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Resume = () => {
  return (
    <div><h1 className='block mt-4 text-3xl font-semibold text-gray-800 dark:text-white text-center'>Experience</h1>
    <div className='flex mt-6 text-center justify-center items-center'><button className='px-6 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-color1 rounded-lg hover:bg-color2 focus:outline-none focus:ring focus:ring-opacity-80'><a href='/assets/file/Safaa_Kunhi_Mammed_Resume.pdf' download >Download Resume</a></button></div>
           
        <div className="container bg-white mx-auto flex h-screen">
           <div className="relative mt-5 text-left">
                
                <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                        <div className="font-bold italic">2024</div>
                        <div className="md:flex space-x-1 text-xs">
                            <div>Jan</div>
                            <div>-</div>
                            <div>Apr</div>
                        </div>                        
                    </div>
                    
                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                        <div className="font-bold">Software Developer Intern</div>
                        <div className="italic md:mb-4">
                          <Link  className='hover:underline hover:text-blue-600' href={'https://kumoteam.co/'} target="_blank">
                            GoCloud Technologies (M) Sdn Bhd
                          </Link>
                          </div>
                        <div className="mb-4 mt-2 md:hidden">
                            <div className="font-bold">2024</div>
                            <div className="text-xs">Jan - April</div>
                        </div>
                        <div className="mb-10">
                          <ul className='list-disc mx-5'>
                            <li>Contribute to the coding and maintenance of Angular & Laravel elements using JavaScript & PHP code</li>
                            <li>Collaborated with development team to create appealing and responsive layouts</li>
                            <li>Work closely with senior developers to develop and debug system codes.</li>
                          </ul>
                        </div>
                    </div>
                </div>



                
                <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                        <div className="font-bold italic">2022</div>
                        <div className="md:flex space-x-1 text-xs">
                            <div>Jul</div>
                            <div>-</div>
                            <div>Sept</div>
                        </div>                        
                    </div>
                    
                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                        <div className="font-bold">Digital Content Creator</div>
                        <div className="italic md:mb-4">
                          <Link className='hover:underline hover:text-blue-600' href={'https://www.instagram.com/kabaabish_nilai/'} target="_blank">Kababish Restaurant</Link>
                          </div>
                        <div className="mb-4 mt-2 md:hidden">
                            <div className="font-bold">2022</div>
                            <div className="text-xs">Jul - Sept</div>
                        </div>
                        <div className="mb-10">
                          <ul className='list-disc mx-5'>
                            <li>Manage social media presence and content production.</li>
                            <li>Provided marketing advise and solutions, working closely with the founders</li>
                            <li>Promoted content through social media pages such as Facebook Instagram, Google</li>
                          </ul>
                        </div>
                        </div>
                </div>



                
                <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                        <div className="font-bold italic">2021</div>
                        <div className="md:flex space-x-1 text-xs">
                            <div>Sept</div>
                            <div>-</div>
                            <div>Feb</div>
                        </div>                        
                    </div>
                    
                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                        <i className="fas fa-circle bottom-0 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                        <div className="font-bold">HITer</div>
                        <div className="italic md:mb-4">
                          <Link  className='hover:underline hover:text-blue-600' href={'https://www.isahit.com/'} target="_blank">
                          ISAHIT
                          </Link>
                          </div>
                        <div className="mb-4 mt-2 md:hidden">
                            <div className="font-bold">2021</div>
                            <div className="text-xs">Sept - Feb</div>
                        </div>
                        <div className="mb-10">
                          <ul className='list-disc mx-5'>
                            <li>Perform research on given companies to extract and update their information with accuracy.</li>
                            <li>Perform transcription of invoices used to train AI.</li>
                            <li>Earned Top 3 HITer (ISAHIT worker) for 2 months.</li>
                          </ul>
                        </div>
                      </div>
                </div>


            </div>
        </div>
        </div>
  )
}

export default Resume