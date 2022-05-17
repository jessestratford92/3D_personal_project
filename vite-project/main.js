import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls'
console.log(OrbitControls)
import { BoxGeometry, FlatShading } from 'three';

const gui = new dat.GUI()
const world = {
  plane: {
    width: 10,
    height: 10,
    widthSegments: 10,
    heightSegments: 10
  }
}

  gui.add(world.plane, 'width', 1, 20)
  .onChange (generatePlane)

  gui.add(world.plane, 'height', 1, 20)
  .onChange (generatePlane)

  gui.add(world.plane, 'widthSegments', 1, 50)
  .onChange (generatePlane)

  gui.add(world.plane, 'heightSegments', 1, 50)
  .onChange (generatePlane)

  function generatePlane () {

  planeMesh.geometry.dispose()
  planeMesh.geometry = new THREE.PlaneGeometry
  ( 
    world.plane.width, 
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments,
  )

  const { array } = planeMesh.geometry.attributes.position

  for (let i = 0; i < array.length; i += 3 ) {
    const x = array[i]
    const y = array[i + 1]
    const z = array[i + 2]

  array[i + 2] = z + Math.random()

  console.log(array[i])
}

}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

new OrbitControls (camera, renderer.domElement)
console.log(OrbitControls)
camera.position.z = 5

const planeGeometry = new THREE.PlaneGeometry
(10, 10, 10, 10)
const planeMaterial = new THREE.
  MeshPhongMaterial ({
  color: 0xffff00,
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading
})
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(planeMesh)

console.log(planeMesh.geometry.attributes.position.array)

const { array } = planeMesh.geometry.attributes.position

for (let i = 0; i < array.length; i += 3 ) {
  const x = array[i]
  const y = array[i + 1]
  const z = array[i + 2]

  array[i + 2] = z + Math.random()

console.log(array[i])
}

const light = new THREE.DirectionalLight(
  0xffffff, 1
)
light.position.set(0, 0, 1 )
scene.add(light)

const backlight = new THREE.DirectionalLight(
  0xffffff, 1
)
backlight.position.set(0, 0, -1 )
scene.add(backlight)


function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  // planeMesh.rotation.x += 0.01
}

animate ()

const mouse = {
  x: undefined,
  y: undefined,
}

addEventListener ('mousemove', (event) => {
    mouse.x = (event.clientX / innerWidth) * 2-1
    mouse.y = -(event.clientY / innerHeight) * 2+1
    console.log(mouse)
})
