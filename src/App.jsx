import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    {text:"Dive into", text2:"What you love"},
    {text:"Indulge", text2:"Your passions"},
    {text:"Give in to ", text2:"Your passions"}
  ]

  const [heroCount, setHeroCOunt] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCOunt((count)=> {return count===2 ? 0 : count+1})
    },3000);
  },[])


  return (
    <>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar/>
     <Hero 
       setPlayStatus={setPlayStatus}
       heroData = {heroData[heroCount]}
       heroCount = {heroCount}
       setHeroCOunt = {setHeroCOunt }
       playStatus = {playStatus}
     />
    </>
  )
}

export default App
