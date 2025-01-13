import React from 'react'
import CertCard from '@/components/CertCard'

const Certs = () => {
  return (
    <div><h1 className='block mt-4 text-3xl font-semibold text-gray-800 dark:text-white text-center'>Certifications</h1>
      <div>
        <CertCard
          name={'Google Professional Data Engineer'}
          link={'https://www.credly.com/badges/0d6e8e1e-e29f-496c-926a-b843c1bd4d92/public_url'}
          desc={'expertise in designing, building, and managing data pipelines on the Google Cloud Platform. My skills include leveraging core GCP services like BigQuery, Dataflow, and Pub/Sub to ingest, transform, and deliver data effectively. I am proficient in managing data security and privacy, optimizing data systems for performance and cost, and collaborating effectively with stakeholders to meet their data needs'}
          img={'pde'}
        />
        <CertCard
          name={'Google Marketing Platform Certificates - Google Ads, Google Analytics, DV360, CM360, Looker Studio, etc.'}
          link={'https://images.credential.net/embed/xq8emf7p.png'}
          desc={'These certifications demonstrate my ability to analyze data, manage digital marketing campaigns across various channels (including search, display, and video), leverage programmatic advertising, and effectively communicate data insights through compelling visualizations'}
          img={'gmp'}
        />
        <CertCard
          name={'Google Cloud Computing Fundamentals'}
          link={'https://www.cloudskillsboost.google/public_profiles/a79b8f5b-76b4-4e58-976c-c28d74a780b2/badges/2646155'}
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