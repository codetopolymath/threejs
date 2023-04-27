import * as THREE from 'three';
import { PerspectiveCamera } from 'three';

// three js need 3 basic things before anything: scene, camera, renderer
const scene = new THREE.Scene();
// PerspectiveCamera(field_of_view(in degree), aspect_ratio, near, far )
// field_of_view = extent of the scene that is seen on the display at any given moment
// aspect_ratio = width/height is recomended
// near and far are lowerbound and upperbound for rendering object
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer();

// set the size at which we want it to render our app
renderer.setSize(window.innerWidth, window.innerHeight);

// add the renderer element to our HTML document
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xff5349});

// A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // default this scene will be (0, 0, 0) camera and cube both inside each other

camera.position.z = 5; // shifted camera on z-axis (0,0,0) ---> (0,0,5)

// rendering loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();


