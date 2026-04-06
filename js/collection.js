import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OBJLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/MTLLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;

function open3DViewer(modelName) {
    // SECURITY CHECK: User must enter password to see the virtual heritage
    const password = prompt("Enter CEO/HR Code to view 3D Archive:");
    if (btoa(password) !== "MjEyMQ==") { // "2121"
        alert("Access Denied");
        return;
    }

    document.getElementById('viewerModal').classList.remove('hidden');
    document.getElementById('model-label').innerText = modelName.replace('Test', '') + " Virtual Reconstruction";
    
    initThreeJS();
    loadModel(modelName);
}

function initThreeJS() {
    const container = document.getElementById('threejs-container');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 5;
    
    animate();
}

function loadModel(name) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(`${name}.mtl`, (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(`${name}.obj`, (object) => {
            scene.add(object);
            // Center the object
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            object.position.sub(center);
        });
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (controls) controls.update();
    if (renderer) renderer.render(scene, camera);
}

function closeViewer() {
    document.getElementById('viewerModal').classList.add('hidden');
    // Cleanup to save memory
    renderer.dispose();
    document.getElementById('threejs-container').innerHTML = '';
}

// Attach to window so HTML onclick works
window.open3DViewer = open3DViewer;
window.closeViewer = closeViewer;