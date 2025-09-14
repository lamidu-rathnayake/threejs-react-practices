import * as THREE from 'three';
import { useRef, useEffect } from 'react';

function App() {
  const mountRef = useRef(null);

  // in react we need to use useEffect to write all the three js logic
  // because it needs to be run outside from the react component function 
  // in order to avoide "being re-executed" by the react re-redering process  
  useEffect(()=>{
    const scene = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // creating geometry, material, and the cube 
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camara.position.z = 5;

    // animation function  
    function animation(){
      renderer.render(scene, camara);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }

    // looping animation function
    renderer.setAnimationLoop(animation);

  },[]);
 
  return (
    <>
    {/* this is where the canvas will be placed in */}
    {/* i also have assigned this componet to the useRef hook to access it in the useEffect to insert the scene to it*/}
      <dev ref={mountRef} style={{width:"100%", height:"400px"}}></dev>
    </>
  )
}

export default App
