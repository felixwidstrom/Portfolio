import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import {OBJLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/OBJLoader.js';

window.onload = () => {
    Render();
    setInterval(() => {Animate();}, 50);
    setInterval(() => {setModel();}, 18000);
}

window.onresize = () => {
    renderer.setSize(render.offsetWidth, render.offsetHeight);
}

window.onclick = (e) => {
    if (e.target == input) {
        document.querySelector(".terminal_help").classList.add("show");
    } else {
        document.querySelector(".terminal_help").classList.remove("show");
    }

    if (e.target == document.querySelectorAll("h2")[0]) {
        document.querySelectorAll(".home")[0].classList.add("show");
        document.querySelectorAll(".projects")[0].classList.remove("grid");
    }
    if (e.target == document.querySelectorAll("header img")[0]) {
        window.open("https://github.com/felixwidstrom");
    }
    if (e.target == document.querySelectorAll("p")[0]) {
        document.querySelectorAll(".home")[0].classList.remove("show");
        document.querySelectorAll(".projects")[0].classList.add("grid");
    }
};

let input = document.querySelectorAll("input")[0];

input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        if (input.value.toLowerCase() == "home") {
            document.querySelectorAll(".home")[0].classList.add("show");
            document.querySelectorAll(".projects")[0].classList.remove("grid");
        } else if (input.value.toLowerCase() == "projects") {
            document.querySelectorAll(".home")[0].classList.remove("show");
            document.querySelectorAll(".projects")[0].classList.add("grid");
        } else if (input.value.toLowerCase() == "github") {
            window.open("https://github.com/felixwidstrom");
        } else {
            alert("Invalid command!");
            return;
        }
        input.value = "";
        input.blur();
        document.querySelector(".terminal_help").classList.remove("show");
    }
});

let scene, camera, renderer, object;
let render = document.querySelector(".render")
let models = ["models/cube.obj"];
let boundary = new THREE.Box3(), size = new THREE.Vector3(0,0,0), distance;

function Render() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(90, 1, 1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(render.offsetWidth, render.offsetHeight);
    document.querySelector(".render").appendChild(renderer.domElement);

    let amblight = new THREE.AmbientLight(0x404040, 0.25);
    scene.add(amblight);
    
    let dirlight_1 = new THREE.DirectionalLight(0xFFFFFF, 1);
    dirlight_1.castShadow = true;
    dirlight_1.position.x = -100;
    dirlight_1.position.y = 100;
    scene.add(dirlight_1);

    setModel();
}

let index = 0;

function setModel() {
    if (object != undefined) {
        scene.remove(object);
    }

    let loader = new OBJLoader();
    loader.load( 
        models[index], 
        (obj) => { 
            object = obj;
            scene.add(obj);
            boundary.setFromObject(obj);
            size.subVectors(boundary.max, boundary.min);
            distance = (Math.max(size.x, size.y, size.z)*2)/Math.tan((45*Math.PI)/180);
            setCamera(distance, 45);
        }, 
        (xhr) => {},
        (err) => {console.error("Could not load model...");}
    );

    index = (index+1)%models.length;
}

function Animate() {
	object.rotation.y += Math.PI/180;
	renderer.render(scene, camera);
}

function setCamera(distance, angle) {
    camera.position.z = distance*Math.cos(angle*Math.PI/180);
    camera.position.y = distance*Math.sin(angle*Math.PI/180);
    camera.rotation.x = -angle*Math.PI/180;
}