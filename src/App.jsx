import React from 'react'

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}


import Spline from '@splinetool/react-spline';
function Home() {
  return (
    <Spline scene="https://prod.spline.design/UKdycNayjFIJgiKb/scene.splinecode" />
  );
}



export default App