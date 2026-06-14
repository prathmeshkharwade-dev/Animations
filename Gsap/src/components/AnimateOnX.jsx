import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimateOnX = ({ children }) => {
    const containerRef = useRef(null);

    useGSAP(()=>{
        gsap.to(children , {
            x: 700,
            duration: 1,
            delay:0.5,
        })
    })

  return (
    <div>
      {children}
    </div>
  )
}

export default AnimateOnX
