import React from 'react'
import { Header, Hero, Technology } from './components';
function App() {
  return (
    <div className='dark:bg-gray-900'>
      <div className='max-w-4xl mx-auto '>
       <Header />
        <Hero />
        <Technology />
      </div>
    </div>
  )
}


export default App