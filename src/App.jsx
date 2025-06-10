import React from 'react'
import { Header, Hero, Technology, RecentProjects, Contact } from './components';
function App() {
  return (
    <div className='dark:bg-gray-900'>
      <div className='max-w-4xl mx-auto '>
       <Header />
        <Hero />
        <Technology />
        
      </div>
      <RecentProjects />
      <div className='max-w-4xl mx-auto py-20 mt-20'>
        <Contact />
      </div>
      <div className='max-w-4xl mx-auto text-center text-sm text-zinc-900 dark:text-zinc-100 py-2'>
        <p>
          © 2025 Naveen. All rights reserved. <span>Last Updated: June 10, 2025</span>

        </p>
      </div>
    </div>
  )
}


export default App