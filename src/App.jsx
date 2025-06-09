import React from 'react'
import { Header, Hero, Technology } from './components';
function App() {
  return (
    <div className='dark:bg-gray-900'>
      <div className='max-w-4xl mx-auto '>
       <Header />
       <div className='min-h-screen py-10'>
        <Hero />
        <Technology />
       </div>

      </div>
    </div>
  )
}


export default App