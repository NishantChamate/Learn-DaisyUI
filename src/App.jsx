import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="divider"></div>
      <div className="flex justify-center flex-wrap gap-10">
        {[1,2,3,4].map((e)=>{
          return <Card key={e}/>
        })}
      </div>
      <Footer/>
      
    </>
  )
}

export default App
