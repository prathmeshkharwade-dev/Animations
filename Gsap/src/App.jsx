import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

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
      <button onClick ={(contextSafe (()=>{
        gsap.to()
      })) }>Click me</button>
    </div>
  )
}

export default App
