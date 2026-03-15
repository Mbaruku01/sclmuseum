import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 1. Core Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(4, 2, 4); // Positioned to see the car from an angle

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Enable shadows for the car
document.getElementById('canvas-container').appendChild(renderer.domElement);

// 2. Lighting (Crucial for metal/car paint)
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 10);
spotLight.position.set(5, 10, 5);
scene.add(spotLight);

// 3. Loading the GLB File
const loader = new GLTFLoader();
loader.load('benz.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    
    // Center the model automatically
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
}, undefined, (error) => {
    console.error('Error loading GLB:', error);
});

// 4. Interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 5. Animation
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// 6. Responsive Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});