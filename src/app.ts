//import * as Argon from '@argonjs/argon';
import * as THREE from 'three';

//const app = Argon.init();
//app.context.setDefaultReferenceFrame(app.context.localOriginEastUpSouth);

// initialize THREE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const userLocation = new THREE.Object3D;
scene.add(camera);
scene.add(userLocation);
const renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    logarithmicDepthBuffer: true
});
renderer.setPixelRatio(window.devicePixelRatio);
//app.view.element.appendChild(renderer.domElement);