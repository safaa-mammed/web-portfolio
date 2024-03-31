'use client'
import { useState } from "react";

const AboutCard = ({title, description, side, handleClick }) => {
    const [show, setShow] = useState(false);
    var classDesc = '';

    if(side == 'right')
        classDesc = 'mb-8 flex justify-between items-center w-full right-timeline'
    else
        classDesc = 'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'

    const handleClose = () => {
        setShow(false);
        console.log("Clicked Close!");
    }
    const handleShow = () => {
        setShow(true);
        console.log("Clicked Show!");
    }
  return (
    <div className={` ${classDesc}`}>
    <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">O</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{description} </p>
        {handleClick && (
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 cursor-pointer hover:underline" onClick={handleShow}>See more...</p>
        )}
      </div>
      {show && (
            <div className='x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            class="fixed inset-0 z-10 overflow-y-auto" 
            aria-labelledby="modal-title" role="dialog" aria-modal="true"' style={{position: 'absolute',
                left:'50%',
                top:'50%',
                transform:'translate(-50%,-50%)', zIndex:'100'}}>

            <div className='transition ease-in-out flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>

                    <div className="mt-2 text-center">
                        <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">Archive Project</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Aspernatur dolorum aliquam ea, ratione deleniti porro officia? Explicabo
                            maiores suscipit.
                        </p>
                    </div>
                </div>

                <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="text-sm text-blue-500 hover:underline">Learn more</a>

                    <div className="sm:flex sm:items-center ">
                        <button onClick={handleClose} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                            Cancel
                        </button>

                        <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                            Archive
                        </button>
                    </div>
                </div>
            </div>

            </div>
            </div>
        )}
      </div>
  )
}

export default AboutCard