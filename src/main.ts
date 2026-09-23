import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 1. Créer la scène
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

// 2. Créer la caméra
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(3, 3, 5); // Position de départ
camera.lookAt(0, 0, 0);

// 3. Créer le renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Activer les ombres
document.body.appendChild(renderer.domElement);

// 4.  ORBIT CONTROLS 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;       // effet de lissage
controls.dampingFactor = 0.05;       // intensité du lissage
controls.minDistance = 2;            // zoom minimum
controls.maxDistance = 15;           // zoom maximum

// 5. Lumières
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
scene.add(directionalLight);

// 6. Objet (cube)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
scene.add(cube);

// 7. Sol (pour recevoir les ombres)
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true;
scene.add(plane);

// 8. Boucle d'animation
function animate() {
  requestAnimationFrame(animate);

  // Animation du cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // ⭐ Mise à jour des contrôles (OBLIGATOIRE avec enableDamping)
  controls.update();

  renderer.render(scene, camera);
}
animate();

// 9. Gérer le redimensionnement de la fenêtre
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});