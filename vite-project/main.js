import * as THREE from 'three';
import { BoxGeometry } from 'three';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()

console.log(scene)
console.log(camera)
console.log(renderer)

renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry
    (1,1,1)

console.log(boxGeometry)

const material = new THREE.MeshBasicMaterial({color: 0x00F00})
 
console.log(material)

const mesh = new THREE.Mesh(boxGeometry, material)

console.log(mesh)

scene.add(mesh)

camera.position.z = 5

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01
}

animate ()
