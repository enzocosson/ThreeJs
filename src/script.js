import "./style.css";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { PointLightHelper } from "three";
import gsap from "gsap";
// import { timeline } from "gsap/gsap-core";

const gltfLoader = new GLTFLoader();

// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
//material

const material = new THREE.ShaderMaterial();

// spiderman

let t1 = gsap.timeline();

gltfLoader.load("spider.gltf", (gltf) => {
  gltf.scene.scale.set(0.1, 0.1, 0.1);
  gltf.scene.rotation.set(0, 6, 0);
  gltf.scene.position.set(0, 0, 2.38);
  gltf.scene.opacity = "1";
  scene.add(gltf.scene);

  // const milesMorales = gui.addFolder("milesMorales");

  // milesMorales.add(gltf.scene.scale, "x").min(0).max(9).step(0.01);
  // milesMorales.add(gltf.scene.scale, "y").min(0).max(9).step(0.01);
  // milesMorales.add(gltf.scene.scale, "z").min(0).max(9).step(0.01);

  // milesMorales.add(gltf.scene.rotation, "x").min(0).max(9).step(0.01);
  // milesMorales.add(gltf.scene.rotation, "y").min(0).max(9).step(0.01);
  // milesMorales.add(gltf.scene.rotation, "z").min(0).max(9).step(0.01);

  // milesMorales.add(gltf.scene.position, "x").min(-10).max(10).step(0.01);
  // milesMorales.add(gltf.scene.position, "y").min(-10).max(10).step(0.01);
  // milesMorales.add(gltf.scene.position, "z").min(-30).max(10).step(0.01);

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
      y: -8,
      duration: 6,
      ease: "power1.inOut",
    },
    "=-3"
  );
});

let t2 = gsap.timeline();

gltfLoader.load("scene.gltf", (gltf1) => {
  gltf1.scene.scale.set(1, 1, 1);
  gltf1.scene.rotation.set(0, 0, 0);
  gltf1.scene.position.set(0, 0, -5);
  scene.add(gltf1.scene);

  // const pixel = gui.addFolder("pixel");

  // pixel.add(gltf1.scene.rotation, "x").min(0).max(9).step(0.1);
  // pixel.add(gltf1.scene.rotation, "y").min(0).max(9).step(0.1);
  // pixel.add(gltf1.scene.rotation, "z").min(0).max(9).step(0.01);

  // pixel.add(gltf1.scene.position, "x").min(-10).max(10).step(0.1);
  // pixel.add(gltf1.scene.position, "y").min(-10).max(10).step(0.1);
  // pixel.add(gltf1.scene.position, "z").min(-30).max(10).step(0.1);

  t2.to(gltf1.scene.rotation, { z: 3.2, duration: 5, ease: "power3.inOut" });
  t2.to(
    gltf1.scene.position,
    { z: 10, duration: 5, ease: "power3.inOut" },
    "=-3"
  );

  t2.play();
});

let tBuilding1 = gsap.timeline();

gltfLoader.load("./building/scene.gltf", (gltf3) => {
  gltf3.scene.scale.set(5, 5, 5);
  gltf3.scene.rotation.set(0, 5.2, 6.29);
  gltf3.scene.position.set(0.01, -20, -0.71);
  gltf3.scene.opacity = "1";
  scene.add(gltf3.scene);

  // const building = gui.addFolder("building");

  // building.add(gltf3.scene.scale, "x").min(0).max(9).step(0.01);
  // building.add(gltf3.scene.scale, "y").min(0).max(9).step(0.01);
  // building.add(gltf3.scene.scale, "z").min(0).max(9).step(0.01);

  // building.add(gltf3.scene.rotation, "x").min(0).max(9).step(0.01);
  // building.add(gltf3.scene.rotation, "y").min(0).max(9).step(0.01);
  // building.add(gltf3.scene.rotation, "z").min(0).max(9).step(0.01);

  // building.add(gltf3.scene.position, "x").min(-10).max(10).step(0.01);
  // building.add(gltf3.scene.position, "y").min(-10).max(10).step(0.01);
  // building.add(gltf3.scene.position, "z").min(-30).max(10).step(0.01);

  tBuilding1.to(
    gltf3.scene.position,
    {
      y: 2,
      duration: 20,
      ease: "power3.inOut",
    },
    "=-2"
  );
  tBuilding1.to(
    gltf3.scene.rotation,
    {
      y: 6.19,
      x: -0.2,
      duration: 20,
      ease: "power3.inOut",
    },
    "=-20"
  );
  tBuilding1.to(
    gltf3.scene.position,
    {
      y: -100,
      duration: 5,
      ease: "power3.inOut",
    },
    "=-5"
  );
  tBuilding1.to(
    gltf3.scene.rotation,
    {
      z: 7,
      duration: 5,
      ease: "power3.inOut",
    },
    "=-6"
  );
});
// let tLightning = gsap.timeline();

// gltfLoader.load("./lightning/scene.gltf", (gltf4) => {
//   gltf4.scene.scale.set(0, 0, 0);
//   gltf4.scene.rotation.set(0, 3.32, 6.3);
//   gltf4.scene.position.set(-0.21, -0.43, -8.21);
//   gltf4.scene.opacity = "1";
//   scene.add(gltf4.scene);

//   const lightning = gui.addFolder("lightning");

//   lightning.add(gltf4.scene.scale, "x").min(0).max(9).step(0.01);
//   lightning.add(gltf4.scene.scale, "y").min(0).max(9).step(0.01);
//   lightning.add(gltf4.scene.scale, "z").min(0).max(9).step(0.01);

//   lightning.add(gltf4.scene.rotation, "x").min(0).max(9).step(0.01);
//   lightning.add(gltf4.scene.rotation, "y").min(0).max(9).step(0.01);
//   lightning.add(gltf4.scene.rotation, "z").min(0).max(9).step(0.01);

//   lightning.add(gltf4.scene.position, "x").min(-10).max(10).step(0.01);
//   lightning.add(gltf4.scene.position, "y").min(-10).max(10).step(0.01);
//   lightning.add(gltf4.scene.position, "z").min(-30).max(10).step(0.01);

//   tLightning.to(gltf4.scene.scale, {
//     x: 2,
//     y: 2,
//     z: 2,
//     duration: 2.5,
//     delay: 5,
//     ease: "power3.inOut",
//   });
//   tLightning.to(gltf4.scene.scale, {
//     x: 0,
//     y: 0,
//     z: 0,
//     duration: 0.5,
//     ease: "power3.in",
//   });
// });
let tGalaxy = gsap.timeline();

gltfLoader.load("./galaxy/scene.gltf", (gltf5) => {
  gltf5.scene.scale.set(10, 10, 10);
  gltf5.scene.rotation.set(0.93, 1.83, 5.1);
  gltf5.scene.position.set(10, 50, 1.94);
  scene.add(gltf5.scene);

  // const galaxy = gui.addFolder("galaxy");

  // galaxy.add(gltf5.scene.scale, "x").min(0).max(100).step(0.01);
  // galaxy.add(gltf5.scene.scale, "y").min(0).max(100).step(0.01);
  // galaxy.add(gltf5.scene.scale, "z").min(0).max(100).step(0.01);

  // galaxy.add(gltf5.scene.rotation, "x").min(0).max(9).step(0.01);
  // galaxy.add(gltf5.scene.rotation, "y").min(0).max(9).step(0.01);
  // galaxy.add(gltf5.scene.rotation, "z").min(0).max(9).step(0.01);

  // galaxy.add(gltf5.scene.position, "x").min(-100).max(100).step(0.01);
  // galaxy.add(gltf5.scene.position, "y").min(-100).max(100).step(0.01);
  // galaxy.add(gltf5.scene.position, "z").min(-100).max(100).step(0.01);

  tGalaxy.to(
    gltf5.scene.position,
    {
      y: 10,
      x: 100,
      z: 50,
      duration: 15,
      ease: "power3.inOut",
    },
    "=-15"
  );
  tGalaxy.to(
    gltf5.scene.rotation,
    {
      y: 2,
      duration: 15,
      ease: "power3.inOut",
    },
    "=-15"
  );

  tGalaxy.to(
    gltf5.scene.scale,
    {
      x: 50,
      y: 50,
      z: 50,
      duration: 15,
      ease: "power3.inOut",
    },
    "=-15"
  );
  tGalaxy.to(gltf5.scene.position, {
    y: 300,
    duration: 5,
    ease: "power3.inOut",
  });
  tGalaxy.to(
    gltf5.scene.rotation,
    {
      y: 0.24,
      duration: 5,
      ease: "power3.inOut",
    },
    "=-5"
  );
});

// empire state building

let tEmpire = gsap.timeline();

gltfLoader.load("./empireStateBuilding/scene2.gltf", (gltf6) => {
  gltf6.scene.scale.set(10, 10, 10);
  gltf6.scene.rotation.set(1.1, 1.23, 5);
  gltf6.scene.position.set(33.23, -39.5, -37.35);
  scene.add(gltf6.scene);

  // const empire2 = gui.addFolder("empire2");

  // empire2.add(gltf6.scene.scale, "x").min(0).max(100).step(0.01);
  // empire2.add(gltf6.scene.scale, "y").min(0).max(100).step(0.01);
  // empire2.add(gltf6.scene.scale, "z").min(0).max(100).step(0.01);

  // empire2.add(gltf6.scene.rotation, "x").min(0).max(9).step(0.01);
  // empire2.add(gltf6.scene.rotation, "y").min(0).max(9).step(0.01);
  // empire2.add(gltf6.scene.rotation, "z").min(0).max(9).step(0.01);

  // empire2.add(gltf6.scene.position, "x").min(-100).max(100).step(0.01);
  // empire2.add(gltf6.scene.position, "y").min(-100).max(100).step(0.01);
  // empire2.add(gltf6.scene.position, "z").min(-100).max(100).step(0.01);

  tEmpire.from(gltf6.scene.position, {
    y: -100,
    duration: 10,
    delay: 12,
    ease: "power3.inOut",
  });
});

// empire state building 2

let tEmpire2 = gsap.timeline();

gltfLoader.load("./empireStateBuilding/scene.gltf", (gltf7) => {
  gltf7.scene.scale.set(10, 10, 10);
  gltf7.scene.rotation.set(1.13, 1.93, 5.5);
  gltf7.scene.position.set(17.79, -35.14, -28.5);
  scene.add(gltf7.scene);

  // const empire = gui.addFolder("empire");

  // empire.add(gltf7.scene.scale, "x").min(0).max(100).step(0.01);
  // empire.add(gltf7.scene.scale, "y").min(0).max(100).step(0.01);
  // empire.add(gltf7.scene.scale, "z").min(0).max(100).step(0.01);

  // empire.add(gltf7.scene.rotation, "x").min(0).max(9).step(0.01);
  // empire.add(gltf7.scene.rotation, "y").min(0).max(9).step(0.01);
  // empire.add(gltf7.scene.rotation, "z").min(0).max(9).step(0.01);

  // empire.add(gltf7.scene.position, "x").min(-100).max(100).step(0.01);
  // empire.add(gltf7.scene.position, "y").min(-100).max(100).step(0.01);
  // empire.add(gltf7.scene.position, "z").min(-100).max(100).step(0.01);

  tEmpire2.from(gltf7.scene.position, {
    y: -100,
    duration: 10,
    delay: 10,
    ease: "power3.inOut",
  });
});
// Lights

let tLight1 = gsap.timeline();
let tLight2 = gsap.timeline();
let tLight3 = gsap.timeline();
let tLight4 = gsap.timeline();

const pointLight = new THREE.AmbientLight(0xe55858, 10);
pointLight.scale.set(0.3, 0.3, 0.3);
pointLight.position.x = 1.4;
pointLight.position.y = -3.5;
pointLight.position.z = -10;
pointLight.intensity = 5;
scene.add(pointLight);

// const light1 = gui.addFolder("light1");

// light1.add(pointLight.position, "x").min(-10).max(10).step(0.1);
// light1.add(pointLight.position, "y").min(-10).max(10).step(0.1);
// light1.add(pointLight.position, "z").min(-50).max(10).step(0.1);
// light1.add(pointLight, "intensity").min(-10).max(100).step(0.1);

const light1Color = {
  color: 0xffffff,
};

// light1.addColor(light1Color, "color").onChange(() => {
//   pointLight.color.set(light1Color.color);
// });

tLight1.to(pointLight.position, {
  x: -1.4,
  y: 2.4,
  z: 10,
  duration: 5,
  ease: "power1.inOut",
  delay: 4.5,
});

// const pointLightHelper = new THREE.PointLightHelper(pointLight, 2);
// scene.add(pointLightHelper);

/**
 * Light 2
 */
const pointLight2 = new THREE.PointLight(0xe64e4e, 10);
pointLight2.scale.set(0.3, 0.3, 0.3);
pointLight2.position.x = -1.4;
pointLight2.position.y = -30;
pointLight2.position.z = 10;
pointLight2.intensity = -1;
scene.add(pointLight2);

// const light2 = gui.addFolder("light2");

// light2.add(pointLight2.position, "x").min(-10).max(10).step(0.1);
// light2.add(pointLight2.position, "y").min(-10).max(10).step(0.1);
// light2.add(pointLight2.position, "z").min(-50).max(10).step(0.1);
// light2.add(pointLight2, "intensity").min(-10).max(100).step(0.1);

const light2Color = {
  color: 0xffffff,
};

// light2.addColor(light2Color, "color").onChange(() => {
//   pointLight2.color.set(light2Color.color);
// });

tLight2.to(pointLight2.position, {
  x: 5.7,
  y: 30,
  z: 2.4,
  duration: 5,
  ease: "power1.inOut",
  delay: 6,
});

// const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 2);
// scene.add(pointLightHelper2);

/**
 * Light  3
 */
const pointLight3 = new THREE.PointLight(0xaf7f7f, 10);
pointLight3.scale.set(0.1, 0.1, 0.1);
pointLight3.position.x = -5.9;
pointLight3.position.y = -10;
pointLight3.position.z = 3.2;
pointLight3.intensity = 1;
scene.add(pointLight3);

// const light3 = gui.addFolder("light3");

// light3.add(pointLight3.position, "x").min(-10).max(10).step(0.1);
// light3.add(pointLight3.position, "y").min(-10).max(10).step(0.1);
// light3.add(pointLight3.position, "z").min(-50).max(10).step(0.1);
// light3.add(pointLight3, "intensity").min(-10).max(100).step(0.1);

const light3Color = {
  color: 0xffffff,
};

// light3.addColor(light3Color, "color").onChange(() => {
//   pointLight3.color.set(light3Color.color);
// });

tLight3.from(pointLight3.position, {
  x: 5.7,
  y: 30,
  z: 2.4,
  duration: 5,
  ease: "power1.inOut",
  delay: 5,
});

// const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 2);
// scene.add(pointLightHelper3);

/**
 * Light  4 directionnel
 */
const directionalLight = new THREE.DirectionalLight(0xffacac, 0.5);
directionalLight.scale.set(0.1, 0.1, 0.1);
directionalLight.position.set(0, 10, 5.2);
directionalLight.target.position.set(7.7, -2, 10);
directionalLight.intensity = 0.2;
scene.add(directionalLight);
scene.add(directionalLight.target);

// const light4 = gui.addFolder("light4");

// light4.add(directionalLight.position, "x").min(-10).max(10).step(0.1);
// light4.add(directionalLight.position, "y").min(-10).max(10).step(0.1);
// light4.add(directionalLight.position, "z").min(-50).max(10).step(0.1);

// light4.add(directionalLight.target.position, "x").min(-10).max(10).step(0.1);
// light4.add(directionalLight.target.position, "y").min(-10).max(10).step(0.1);
// light4.add(directionalLight.target.position, "z").min(-50).max(10).step(0.1);
// light4.add(directionalLight, "intensity").min(-10).max(100).step(0.1);

const light4Color = {
  color: 0xffffff,
};

// light4.addColor(light4Color, "color").onChange(() => {
//   directionalLight.color.set(light4Color.color);
// });

tLight4.to(directionalLight.position, {
  y: -10,
  duration: 10,
  delay: 10,
  ease: "power1.inOut",
});

// const pointLightHelper4 = new THREE.DirectionalLightHelper(directionalLight, 2);
// scene.add(pointLightHelper4);

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

scene.add(camera);

// const camera = gui.addFolder("camera");
// gui.add(camera.position, "x", -10, 10).step(0.1);
// gui.add(camera.position, "y", -10, 10).step(0.1);
// gui.add(camera.position, "z", -10, 10).step(0.1);

// gui.add(camera.rotation, "x", -10, 10).step(0.1);
// gui.add(camera.rotation, "y", -10, 10).step(0.1);
// gui.add(camera.rotation, "z", -10, 10).step(0.1);

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
  z: 6,

  duration: 5,
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
tcam.to(camera.position, {
  x: -0.75,
  y: 0,
  z: 3.4,

  duration: 5,
  ease: "power1.inOut",
});

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

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
