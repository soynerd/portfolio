import React from 'react';
import { ChevronLast, FileUser } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
function Hero() {
  return (
    <div className='max-w-4xl mx-auto '>
      <section className="bg-white dark:bg-gray-900">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:gap-16 min-h-screen my-auto">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0H1aZiEZTS-lxKOd-4v-8XuaDe7MLImu-7A&s"
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]  max-h-72 rounded-full mb-8 object-cover shadow-lg"
                alt="Code on a screen"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src='https://placehold.co/600x400/1e293b/ffffff?text=My+Work';
                }}
                />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Hey, I'm Naveen
              </h1>
              <div className="flex flex-row mt-4  gap-6 items-center">
                <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400">
                  Fullstack Developer</p>
                  <div className="flex flex-row gap-2 text-3xl">
                    <a href="https://github.com/soynerd" className='text-black hover:text-indigo-700 dark:text-gray-300'>
                      <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/soynerd" className='text-black hover:text-indigo-700 dark:text-gray-300'>
                      <FaLinkedinIn />
                    </a>
                    <a href="https://instagram.com/soynerd" className='text-black hover:text-indigo-700 dark:text-gray-300'>
                      <FaInstagram />
                    </a>
                    <a href="https://instagram.com/soynerd" className='text-black hover:text-indigo-700 dark:text-gray-300'>
                      <MdOutlineContactPage />
                    </a>
                    
                    

                  </div>
                  
                
              </div>
              
              <p className="mt-6 max-w-lg text-lg text-gray-600 dark:text-gray-300">
                Building beautiful, responsive, and intuitive web experiences from my base in India. Passionate about clean code and great user interfaces.
              </p>
              
            </div>
            <div className="w-full lg:w-1/2 md:h-[500px] lg:h-[600px] flex flex-col items-center">
              <Spline scene="https://prod.spline.design/dvs1w-cITCPdSG-o/scene.splinecode" className="hidden md:block" />
              <div className="mt-4 md:mt-10 flex flex-col sm:flex-row items-center gap-4 mb-25">
                <img
                  src="https://static.beebom.com/wp-content/uploads/2024/05/Luffy-devil-fruit.jpg?w=1000&quality=75"
                  className="w-16 h-16 rounded-full shadow-lg ring-4 ring-white dark:ring-gray-800"
                  alt="Profile Picture"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src='https://placehold.co/128x128/6366f1/white?text=N';
                  }}
                  />
                <a
                  href="#about" // Link to an about section or another page
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 shadow-lg transition-transform transform hover:scale-105"
                  >
                  Learn more about me
                
                  <ChevronLast className='ml-2'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
