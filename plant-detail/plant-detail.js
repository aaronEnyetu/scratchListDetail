import { findById } from '../utils.js';
import { plants } from '../plants.js';
console.log('This is from plant detail');

const nameEl = document.getElementById('name');
const classificationEl = document.getElementById('classification');
const originEl = document.getElementById('origin');
const domesticatedEl = document.getElementById('domesticated');
const subspeciesEl = document.getElementById('subspecies');
const imageEl = document.getElementById('image');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const plant = findById(params.get('id'), plants);
console.log(plant);

//const plantName = document.getElementById('plant');
//plantName.textContent = plant.name;

nameEl.textContent = plant.name;
classificationEl.textContent = plant.classification;
originEl.textContent = plant.origin;
domesticatedEl.textContent = plant.domesticated;
subspeciesEl.textContent = plant.subspecies;
imageEl.src = `../assets/${plant.image}`;

