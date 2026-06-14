import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Component, useRef } from 'react'
import AnimateOnX from './components/AnimateOnX';

const App = () => {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  const {contextSafe} = useGSAP(() => {
       gsap.to(boxRef.current, {
        x:700,
        duration: 1,
        delay: 0.5, 
       })
    },{ scope: containerRef.current , dependencies: [] , revertOnUpdate: true},
  );

  return (
    <div ref={containerRef}>
    <div ref={boxRef} className="box"></div>
    
    <AnimateOnX>
       <div className="box"></div>
    </AnimateOnX>

    </div>
  )
}

export default App
