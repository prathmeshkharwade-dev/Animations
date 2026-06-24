import { Environment, Instances, Instance, useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react'
import { texture } from 'three/tsl';

const Experience = () => {
    const cubeRef = useRef(null);

    useFrame((state, delta) => {
        // cubeRef.current.rotation.y += delta;    
    });

    const {texture, texture2, matcap } = useTexture(

        {
            matcap: "./matcap.png",

            texture: "https://images.unsplash.com/photo-1781206648019-663871db92fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            texture2: "https://images.unsplash.com/photo-1781768651523-7e75cff66a5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    )
    

    const {scene} = useGLTF('./model.glb');

    const handleClick = ()=>{
        cubeRef.current.material.color.set('green');
    }

  
  return (
    <>
        {/* <mesh onClick={handleClick} ref={cubeRef}>

            <boxGeometry  />
            {/* <meshBasicMaterial map={texture2} /> */}
            {/* <meshStandardMaterial roughness={0.01} metalness={0.9} color={'red'}/>
        </mesh> */} 

        {/* <ambientLight  intensity={3} color={'white'}/>

        <primitive object={scene} position={[0,-2,0]}/> */}


        {/* <Environment files="./envMap.hdr" /> */}



            <Instances>
                <boxGeometry />
                <meshMatcapMaterial  matcap={matcap}/>
                {Array.from({ length: 200 }).map((_, id) => {
                    return (
                     <Instance 
                        key={id}
                        position={[ 
                        Math.random() * 50 - 25,
                        Math.random() * 50 - 5,
                        Math.random() * 50 - 25
                        ]}
                        scale={Math.random() + 0.25}
                    />
                    ); 
                })}

            </Instances>


        

    </>   
  );
};  

export default Experience
