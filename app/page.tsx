"use client";

import { useEffect, useState } from "react"

export default function Timer(){
  const [currTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
    const timeoutVal = setInterval(()=>{
      setCurrentTime(new Date())
      return ()=>clearTimeout(timeoutVal)
    }, 1000)
  }, [])

  return <p suppressHydrationWarning>{currTime.toLocaleTimeString()}</p>
}