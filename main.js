import './style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGL1Renderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('app').appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

// -- Meshes --------------------------------------------------------------
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({color: 0xffff00})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// -- Helpers -------------------------------------------------------------
const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

// const gridHelper = new THREE.GridHelper()
// scene.add(gridHelper)

// -- Camera Initial Position ---------------------------------------------
camera.position.set(3, 1.5, 5)

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
animate()