import * as THREE from 'three';
import { useRef, useEffect } from 'react';

function App() {
  const mountRef = useRef(null);

  useEffect(()=>{
    const scene = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
  },[]);
 
  return (
    <>
      <dev ref={mountRef} style={{width:"100%", height:"400px"}}></dev>
    </>
  )
}

export default App
