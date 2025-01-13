'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="container px-6 py-10 mx-auto pt-20">
      <div className="mt-5 lg:-mx-0.5 lg:flex lg:items-center gap-20">
        <Image
          src={'/assets/images/profile.jpeg'}
          width={400}
          height={400}
          quality={100}
          className="object-cover w-400 h-400 rounded-full border border-gray"
        />
        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <h1 className="block mt-4 text-3xl font-semibold text-gray-800 dark:text-white">Hello World, My name is Safaa!</h1>
          <h1 className="block mt-4 text-xl font-light text-gray-800 dark:text-white">Certified Data Engineer | Software Developer specialized in Data-Driven Analytics | Specialized in Cloud Computing</h1>
          <br/>
          <p className="text-justify">Throughout my career, I had the opportunity to work with various clients that ranges from insurance to aviation, providing them with helpful analytical insights driving their business decisions as well as providing support to enhance their current implementation. <br/>Apart from that, I play an important role to automate internal business processes to optimize the current workflow by building applications to improve productivity and efficiency while reducing the completion time.<br/><br/>Aside from my technical skills, I'm an adaptable quick learner with strong leadership and communication skills, being able to analyze requirements and perform as necessary to meet the required deadlines, exceeding expectations.<br/>I'm passionate in constantly learning new technologies and improving my current skillset and expertise to help grow businesses and optimize their business processes.</p>
        <br/><br/>
        <button onClick={() => router.push('/about')} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-color1 rounded-lg hover:bg-color2 focus:outline-none focus:ring focus:ring-opacity-80">
          Learn more about me!
        </button>
        </div>
      </div>
    </div>
    
  );
}
