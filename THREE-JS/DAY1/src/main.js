
import './style.css'
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader, GLTFLoader } from 'three/examples/jsm/Addons.js';





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



// Rgbaloader

const envMap = new RGBELoader();

envMap.load('./envMap.hdr', (envMap)=>{
      envMap.mapping =  THREE.EquirectangularReflectionMapping;

      // scene.background = envMap;
      scene.environment = envMap;
} )


// gltf Loader

// const gltfLoader = new GLTFLoader();

// let mixer;

// gltfLoader.load("./robot.glb", (gltf)=>{
//   const model = gltf.scene;

//   model.position.y = -3;

//    mixer = new THREE.AnimationMixer(model);

//   const action = mixer.clipAction(gltf.animations[12]);

//   action.play();

//   console.log(gltf.animations);

//   scene.add(model);

// });

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

//  const directionalLight = new THREE.DirectionalLight("#ffffff" , 3 );

//  directionalLight.position.set(1,1,1);
// //  scene.add(directionalLight);

//  const directionLightHelper = new THREE.DirectionalLightHelper(directionalLight);
//  scene.add(directionLightHelper);


//  const pointLight = new THREE.PointLight("#ffffff", 5,2,1);
//  pointLight.position.set(0,2,0);
//  scene.add(pointLight);

//  const pointLightHelper = new THREE.PointLightHelper(pointLight);
//  scene.add(pointLightHelper);

// Mesh


const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({
  color: "red",
  metalness: 0.9 ,
  roughness: 0.01
});


const cube = new THREE.Mesh( geometry, material)

const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - ((e.clientY / window.innerHeight) * 2 - 1);

  console.log(mouse.x, mouse.y)
});





// cube.position.set(1.5,-2, -1.4);
// cube.rotation.x = Math.PI / 3;

 scene.add(cube);

window.addEventListener("click" , ()=>{

  raycaster.setFromCamera(mouse,camera);

  const intersect = raycaster.intersectObject(cube);
  
  if(intersect.length > 0){
    cube.material.color.set("green");
  }

})


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

  const newDelta = clock.getDelta();

  // cube.rotation.y = delta;


  // if(mixer){
  //   mixer.update(delta * 0.001);
  // }

  controls.update();
  renderer.render(scene, camera);

   requestAnimationFrame(animate);

};

animate();