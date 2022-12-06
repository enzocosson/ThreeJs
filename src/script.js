import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PointLightHelper } from "three";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";

const gltfLoader = new GLTFLoader();

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
//material

const material = new THREE.ShaderMaterial();

// spiderman

let t1 = gsap.timeline();
let t2 = gsap.timeline();

gltfLoader.load("spider.gltf", (gltf) => {
  gltf.scene.scale.set(0.1, 0.1, 0.1);
  gltf.scene.rotation.set(0, 6, 0);
  gltf.scene.position.set(0, 0, 2.38);
  gltf.scene.opacity = "1";
  scene.add(gltf.scene);

  const milesMorales = gui.addFolder("milesMorales");

  milesMorales.add(gltf.scene.scale, "x").min(0).max(9).step(0.01);
  milesMorales.add(gltf.scene.scale, "y").min(0).max(9).step(0.01);
  milesMorales.add(gltf.scene.scale, "z").min(0).max(9).step(0.01);

  milesMorales.add(gltf.scene.rotation, "x").min(0).max(9).step(0.01);
  milesMorales.add(gltf.scene.rotation, "y").min(0).max(9).step(0.01);
  milesMorales.add(gltf.scene.rotation, "z").min(0).max(9).step(0.01);

  milesMorales.add(gltf.scene.position, "x").min(-10).max(10).step(0.01);
  milesMorales.add(gltf.scene.position, "y").min(-10).max(10).step(0.01);
  milesMorales.add(gltf.scene.position, "z").min(-30).max(10).step(0.01);

  t1.from(gltf.scene.rotation, {
    y: 8,
    duration: 3,
    delay: 4,
    ease: "power1.inOut",
  });
  t1.from(
    gltf.scene.position,
    { y: 1.4, duration: 3, ease: "power1.inOut" },
    "=-3"
  );
  t1.to(
    gltf.scene.scale,
    { x: 0.15, y: 0.15, z: 0.15, duration: 3, ease: "power1.inOut" },
    "=-3"
  );
  t1.to(gltf.scene.position, { y: -0.4, duration: 3, ease: "power1.inOut" });
  t1.to(
    gltf.scene.scale,
    { x: 0.12, y: 0.12, z: 0.12, duration: 3, ease: "power1.inOut" },
    "=-3"
  );
  t1.to(
    gltf.scene.rotation,
    {
      y: 4.21,
      duration: 3,
      ease: "power1.inOut",
    },
    "=-3"
  );
});

gltfLoader.load("scene.gltf", (gltf1) => {
  gltf1.scene.scale.set(1, 1, 1);
  gltf1.scene.rotation.set(0, 0, 0);
  gltf1.scene.position.set(0, 0, -5);
  scene.add(gltf1.scene);

  const pixel = gui.addFolder("pixel");

  pixel.add(gltf1.scene.rotation, "x").min(0).max(9).step(0.1);
  pixel.add(gltf1.scene.rotation, "y").min(0).max(9).step(0.1);
  pixel.add(gltf1.scene.rotation, "z").min(0).max(9).step(0.01);

  pixel.add(gltf1.scene.position, "x").min(-10).max(10).step(0.1);
  pixel.add(gltf1.scene.position, "y").min(-10).max(10).step(0.1);
  pixel.add(gltf1.scene.position, "z").min(-30).max(10).step(0.1);

  t2.to(gltf1.scene.rotation, { z: 3.2, duration: 5, ease: "power3.inOut" });
  t2.to(
    gltf1.scene.position,
    { z: 3.5, duration: 5, ease: "power3.inOut" },
    "=-3"
  );
});

let loader = new THREE.TextureLoader();
loader.load("cloud.png", function (texture) {
  cloudGeo = new THREE.BufferGeometry(500, 500);
  cloudMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    transparent: true,
  });

  for (let p = 0; p < 25; p++) {
    let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
    cloud.position.set(
      Math.random() * 800 - 400,
      500,
      Math.random() * 500 - 450
    );
    cloud.rotation.x = 1.16;
    cloud.rotation.y = -0.12;
    cloud.rotation.z = Math.random() * 360;
    cloud.material.opacity = 1;
    scene.add(cloud);

    gui.add(cloud.position, "x").min(-10).max(10).step(0.1);
    gui.add(cloud.position, "y").min(-10).max(10).step(0.1);
    gui.add(cloud.position, "z").min(-50).max(10).step(0.1);
  }
});

// Lights

let tLight1 = gsap.timeline();
let tLight2 = gsap.timeline();
let tLight3 = gsap.timeline();

const pointLight = new THREE.PointLight(0x4a40e6, 10);
pointLight.scale.set(0.3, 0.3, 0.3);
pointLight.position.x = 1.4;
pointLight.position.y = -3.5;
pointLight.position.z = -10;
pointLight.intensity = 7.5;
scene.add(pointLight);

const light1 = gui.addFolder("light1");

light1.add(pointLight.position, "x").min(-10).max(10).step(0.1);
light1.add(pointLight.position, "y").min(-10).max(10).step(0.1);
light1.add(pointLight.position, "z").min(-50).max(10).step(0.1);
light1.add(pointLight, "intensity").min(-10).max(100).step(0.1);

const light1Color = {
  color: 0xffffff,
};

light1.addColor(light1Color, "color").onChange(() => {
  pointLight.color.set(light1Color.color);
});

tLight1.to(pointLight.position, {
  x: -1.4,
  y: 2.4,
  z: 10,
  duration: 5,
  ease: "power1.inOut",
  delay: 4.5,
});

const pointLightHelper = new THREE.PointLightHelper(pointLight, 2);
// scene.add(pointLightHelper);

/**
 * Light 2
 */
const pointLight2 = new THREE.PointLight(0xe64e4e, 10);
pointLight2.scale.set(0.3, 0.3, 0.3);
pointLight2.position.x = -1.4;
pointLight2.position.y = -30;
pointLight2.position.z = 10;
pointLight2.intensity = 39;
scene.add(pointLight2);

const light2 = gui.addFolder("light2");

light2.add(pointLight2.position, "x").min(-10).max(10).step(0.1);
light2.add(pointLight2.position, "y").min(-10).max(10).step(0.1);
light2.add(pointLight2.position, "z").min(-50).max(10).step(0.1);
light2.add(pointLight2, "intensity").min(-10).max(100).step(0.1);

const light2Color = {
  color: 0xffffff,
};

light2.addColor(light2Color, "color").onChange(() => {
  pointLight2.color.set(light2Color.color);
});

tLight2.to(pointLight2.position, {
  x: 5.7,
  y: 30,
  z: 2.4,
  duration: 5,
  ease: "power1.inOut",
  delay: 6,
});

const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 2);
// scene.add(pointLightHelper2);

/**
 * Light  3
 */
const pointLight3 = new THREE.PointLight(0xaf7f7f, 10);
pointLight3.scale.set(0.3, 0.3, 0.3);
pointLight3.position.x = -5.9;
pointLight3.position.y = -10;
pointLight3.position.z = 3.2;
pointLight3.intensity = 32;
scene.add(pointLight3);

const light3 = gui.addFolder("light3");

light3.add(pointLight3.position, "x").min(-10).max(10).step(0.1);
light3.add(pointLight3.position, "y").min(-10).max(10).step(0.1);
light3.add(pointLight3.position, "z").min(-50).max(10).step(0.1);
light3.add(pointLight3, "intensity").min(-10).max(100).step(0.1);

const light3Color = {
  color: 0xffffff,
};

light3.addColor(light3Color, "color").onChange(() => {
  pointLight3.color.set(light3Color.color);
});

tLight3.from(pointLight3.position, {
  x: 5.7,
  y: 30,
  z: 2.4,
  duration: 5,
  ease: "power1.inOut",
  delay: 5,
});

const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 2);
scene.add(pointLightHelper3);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
let tcam = gsap.timeline();

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 4;

camera.rotation.x = 0;
camera.rotation.y = 0;
camera.rotation.z = 0;

// camera.position.x = -0.3;
// camera.position.y = -0.1;
// camera.position.z = 2.3;

// camera.rotation.x = -1.6;
// camera.rotation.y = -2.2;
// camera.rotation.z = 5.3;
scene.add(camera);

// const camera = gui.addFolder("camera");
gui.add(camera.position, "x", -10, 10).step(0.1);
gui.add(camera.position, "y", -10, 10).step(0.1);
gui.add(camera.position, "z", -10, 10).step(0.1);

gui.add(camera.rotation, "x", -10, 10).step(0.1);
gui.add(camera.rotation, "y", -10, 10).step(0.1);
gui.add(camera.rotation, "z", -10, 10).step(0.1);

tcam.to(camera.position, {
  y: -0.1,
  z: 2.7,

  duration: 3,
  ease: "power1.inOut",
  delay: 4,
});
tcam.to(
  camera.rotation,
  {
    x: 0.8,

    duration: 3,
    ease: "power1.inOut",
  },
  "=-4"
);
tcam.to(camera.position, {
  y: 0,
  z: 4,

  duration: 3,
  ease: "power1.inOut",
  delay: 1,
});
tcam.to(
  camera.rotation,
  {
    x: 0,

    duration: 3,
    ease: "power1.inOut",
  },
  "=-4"
);

// animation tete vers le bas

// tcam.to(camera.position, {
//   y: 1,
//   z: 3,

//   duration: 3,
//   ease: "power1.inOut",
//   delay: 4,
// });
// tcam.to(
//   camera.rotation,
//   {
//     x: 1,

//     duration: 4,
//     ease: "power2.inOut",
//   },
//   "=-4"
// );
// tcam.to(
//   camera.rotation,
//   {
//     x: -0.4,

//     duration: 2,
//     ease: "power2.inOut",
//   },
//   "=-2"
// );
// tcam.to(
//   camera.rotation,
//   {
//     z: 2.5,

//     duration: 2,
//     ease: "power2.inOut",
//   },
//   "=-2"
// );
// tcam.to(
//   camera.rotation,
//   {
//     x: -1.4,
//     z: 3,

//     duration: 2,
//     ease: "power2.inOut",
//   },
//   "=-2"
// );
// tcam.to(
//   camera.position,
//   {
//     x: -0.3,
//     y: 2.1,
//     z: 2.7,

//     duration: 2,
//     ease: "power2.inOut",
//   },
//   "=-2"
// );
// tcam.to(
//   camera.position,
//   {
//     x: 0,
//     y: 0.8,
//     z: 3,

//     duration: 2,
//     ease: "power2.inOut",
//   },
//   "=-2"
// );
// tcam.to(
//   camera.rotation,
//   {
//     x: -0.3,
//     y: -0.3,
//     z: 2.5,

//     duration: 2,
//     ease: "power2.inOut",
//   },
//   "=-2"
// );
// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 4));

/**
 * Animate
 */

document.addEventListener("mousemove", onDocumentMouseMove);

let mouseX = 0;
let mouseY = 0;

let targerX = 0;
let targerY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowX;
  mouseY = event.clientX - windowY;
}

const clock = new THREE.Clock();

const tick = () => {
  targerX = mouseX * 0.001;
  targerY = mouseY * 0.001;

  const elapsedTime = clock.getElapsedTime();

  // // Update objects
  // gltf.scene.children[0].rotation.y = 0.5 * elapsedTime;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

// -----------SKY

// const ambient = new THREE.AmbientLight(0x555555);
// console.log(ambient);

// const directionalLight = new THREE.DirectionalLight(0xffeedd);
// directionalLight.position.set(0, 0, 1);
// scene.add(directionalLight);

// scene.fog = new THREE.FogExp2(0x11111f, 0.001);
// renderer.setClearColor(scene.fog.color);

// cloudParticles.push(cloud);

// function animate() {
//   cloudParticles.forEach((p) => {
//     p.rotation.z -= 0.002;
//   });
// }
// flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
// flash.position.set(200, 300, 100);
// scene.add(flash);

// if (Math.random() > 0.93 || flash.power > 100) {
//   if (flash.power < 100)
//     flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100);
//   flash.power = 50 + Math.random() * 500;
// }
