import { useControls } from 'leva'
import React from 'react'

const Experience = () => {
  const { x, y } = useControls("Box Position",{
      x: { value: 0, min: -4, max: 4, step: 0.01, label: 'x - position'},
      y: { value: 0, min: -4, max: 4, step: 0.01}
  })
  return (
    <>
        <mesh position= {[x, y, 0]}>
            <boxGeometry />
            <meshBasicMaterial color={'red'} />
        </mesh>
    </>
  )
}

export default Experience
