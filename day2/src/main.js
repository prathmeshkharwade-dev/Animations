import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

// Ensure initial states are applied before ScrollTrigger measures
gsap.set(".imageDiv", { scale: 0.3 });
gsap.set(".content", { gap: "80rem" });

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -100%",
    scrub: true,
    pin: true,
  },
});

t1.to(
  ".imageDiv",
  {
    scale: 1,
    ease: "power4.out",
  },
).to(
  ".content",
  {
    gap: "7rem",
  },
  "<",
);

