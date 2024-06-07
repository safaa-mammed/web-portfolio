import React from 'react'
import Image from 'next/image'

const CertCard = ({name,link,desc,img}) => {
  return (
    <div>
        <div className="my-8 max-w-sm max-h-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-max sm:max-w-max hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg dark:bg-gray-800 hover:shadow-slate-500 transition duration-300 ease-in-out hover:scale-105">
        {img == "gcp" && 
        <Image className="object-cover rounded-t-lg md:h-auto md:w-auto sm:h-auto sm:w-auto md:rounded-none md:rounded-s-lg" width={200} height={200} quality={100} priority src="/assets/images/gcp.png" alt="image"/>
        }
        {img == "ccna" && 
        <Image className="object-cover rounded-t-lg md:h-auto md:w-auto sm:h-auto sm:w-auto md:rounded-none md:rounded-s-lg" width={200} height={200} quality={100} priority src="/assets/images/ccna.png" alt="image"/>
        }
        {img == "aws" && 
        <Image className="object-cover rounded-t-lg md:h-auto md:w-auto sm:h-auto sm:w-auto md:rounded-none md:rounded-s-lg" width={200} height={200} quality={100} priority src="/assets/images/aws.png" alt="image"/>
        }
        <div className='flex flex-col justify-between p-4 leading-normal md:max-w-3xl'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        
        </div>
        </div>
    </div>
  )
}

export default CertCard