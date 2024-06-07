import React from 'react'
import CertCard from '@/components/CertCard'

const Certs = () => {
  return (
    <div><h1 className='block mt-4 text-3xl font-semibold text-gray-800 dark:text-white text-center'>Certifications</h1>
      <div>
        <CertCard
          name={'Google Cloud Computing Fundamentals'}
          link={[]}
          desc={'Knowledge in overview of concepts central to cloud basics, big data,and machine learning, and where and how Google Cloud fits in.'}
          img={'gcp'}
        />
        <CertCard
          name={'AWS Cloud Computing Foundation'}
          link={[]}
          desc={'Knowledge on AWS cloud architecture, implementation of disaster & recovery, database storage, and dynamic web hosting, as well as security mechanisms.'}
          img={'aws'}
        />
        <CertCard
          name={'CISCO CCNAv7 Introduction to Networks:'}
          link={[]}
          desc={'Knowledge and practise in basic architecture, protocols, functions, components, and models of the internet and computer networks.'}
          img={'ccna'}
        />
      </div>
    </div>
  )
}

export default Certs