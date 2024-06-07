'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="container px-6 py-10 mx-auto pt-20">
      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center gap-20">
        <Image
          src={'/assets/images/profile.jpg'}
          width={400}
          height={400}
          className="object-cover w-400 h-400 rounded-full"
        />
        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <h1 className="block mt-4 text-3xl font-semibold text-gray-800 dark:text-white">Hello World, My name is Safaa!</h1>
          <br/>
          <p className="text-justify">A Filipino native, freshly graduated from Computer Science (major in Cloud Computing) eager to kick-start my career in the tech industry. I am passionately working towards my career goal of becoming a full-stack developer whilst also pursuing my interest in cloud computing by deepening my knowledge in leading platforms like AWS, GCP, and Azure . . .</p><br/>
        <button onClick={() => router.push('/about')} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-color1 rounded-lg hover:bg-color2 focus:outline-none focus:ring focus:ring-opacity-80">
          Learn more about me!
        </button>
        </div>
      </div>
    </div>
    
  );
}
