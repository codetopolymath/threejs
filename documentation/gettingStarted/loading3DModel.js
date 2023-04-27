// not finished - pending work not loading
import * as THREE from 'three';
import { PerspectiveCamera } from 'three';

// three js need 3 basic things before anything: scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5; // shifted camera on z-axis (0,0,0) ---> (0,0,5)

// use glTF (GL Transmission Format) with both format { .GLB & .GLTB }
// some loader are supported by default such as ObjectLoader other you may have to import
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// based on type of loader syntax may varies so before using any loader check for given example
const loader = new GLTFLoader();

loader.load('shiba.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, 
    function (error) {
    console.error(error);
});
