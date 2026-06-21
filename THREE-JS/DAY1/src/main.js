
import './style.css'
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const size = {
  width: window.innerWidth,
  height: window.innerHeight,

};


//Scene

const scene = new THREE.Scene();

const clock = new THREE.Clock();

// Texture Loader

const textureLoader = new THREE.TextureLoader();
 
const texture =  textureLoader.load(
  "https://images.unsplash.com/photo-1781824093311-803b9f9b7c5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ()=>{
    console.log("Texture Loaded")
  },
  ()=>{
    console.log("Texture is Loading .....")
  },
  ()=>{
    console.log("Some error is there")
  }
); 

  const texture2 = textureLoader.load(
    "https://images.unsplash.com/photo-1781661005898-b63714fe6eff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  )


// Camera

const camera = new THREE.PerspectiveCamera(
  75, 
  size.width / size.height, 
  0.01, 
  100
);

camera.position.z = 5;

// Lights

 const ambientLight = new THREE.AmbientLight("#ffffff",1.2);

 scene.add(ambientLight);

 const directionalLight = new THREE.DirectionalLight("#ffffff" , 3 );

 directionalLight.position.set(1,1,1);
//  scene.add(directionalLight);

 const directionLightHelper = new THREE.DirectionalLightHelper(directionalLight);
 scene.add(directionLightHelper);


 const pointLight = new THREE.PointLight("#ffffff", 5,2,1);
 pointLight.position.set(0,2,0);
 scene.add(pointLight);

 const pointLightHelper = new THREE.PointLightHelper(pointLight);
 scene.add(pointLightHelper);

// Mesh


const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({
  color: "red",
});


const cube = new THREE.Mesh( geometry, material)

// cube.position.set(1.5,-2, -1.4);
// cube.rotation.x = Math.PI / 3;

scene.add(cube);


// Canvas

const canvas = document.querySelector("canvas");


// Renderer 

const renderer = new THREE.WebGLRenderer({
  canvas,
});

const controls = new OrbitControls( camera, renderer.domElement );

controls.enableDamping = true;


renderer.setSize(size.width, size.height);

window.addEventListener('resize' ,()=> {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);

});


const animate = ()=>{

  const delta = clock.getElapsedTime();

  // cube.rotation.y = delta;

  controls.update();

  renderer.render(scene, camera);

  requestAnimationFrame(animate);

};

animate();