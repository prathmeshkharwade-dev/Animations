import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Flip } from "gsap/Flip";


import "./style.css";

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable , InertiaPlugin ,Flip);


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



// Draggable.create(".box" , {
//   bounds: "#app",
//   edgeResistance: 1,
//   inertia : true,
//   dragResistance: 0.2,

// });

const img = document.querySelector(".specialImage");
const img2 = document.querySelector(".specialImage2");



img.addEventListener('click', ()=> {

    const state = Flip.getState(img);
    const state2 = Flip.getState(img2);


    document.querySelector(".imageGallery").appendChild(img2);
    document.querySelector(".imageShow").appendChild(img);

    Flip.from(state, {
        duration: 1.3,
        ease: "power3.inOut",
        absolute: true,
        scale: true,
    });
    Flip.from(state2, {
        duration: 1.3,
        ease: "power3.inOut",
        absolute: true,
        scale: true,
    });
});