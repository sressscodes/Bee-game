import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, { useRef } from 'react'
import { useState } from 'react'

const App = () => {

  const randomX = gsap.utils.random(-500,100,20)
  const rotate = gsap.utils.random(-300,360,30)
  const randomY = gsap.utils.random(-200,200,20)

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [roti, setRoti] = useState(0)

  const beeRef = useRef()

  const {contextSafe} = useGSAP()

  const rotateBox = contextSafe(()=>{
    gsap.to(beeRef.current, {
      x:xValue,
      y:yValue,
      duration:0.5,
      rotate:roti
    })
  },{scope:"main",dependencies:[xValue,yValue,roti]})

  return (
    <main>
      <button onClick={()=>{
        rotateBox()
        setXValue(randomX)
        setYValue(randomY)
        setRoti(rotate)
      }}>Animate</button>
      <img ref={beeRef} src='https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-cute-yellow-bee-cartoon-illustration-png-image_6653635.png' alt=''/>
    </main>
  )
}

export default App