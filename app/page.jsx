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
          <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
        <button onClick={() => router.push('/about')} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-color1 rounded-lg hover:bg-color2 focus:outline-none focus:ring focus:ring-opacity-80">
          About Me
        </button>
        </div>
      </div>
    </div>
    
  );
}
