import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { InertiaPlugin } from "gsap/InertiaPlugin";


import "./style.css";

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable , InertiaPlugin );


// const split = new SplitText('.title h1', {
//   type: "chars",
// });

// gsap.from(split.chars,{

//   yPercent:100,
//   opacity:0,
//   duration:1.2,
//   ease: 'expo.out',
//   stagger: {
//     each:0.09,
//     from: 'center'
//   }
// })



Draggable.create(".box" , {
  bounds: "#app",
  edgeResistance: 1,
  inertia : true,
  dragResistance: 0.2,

});