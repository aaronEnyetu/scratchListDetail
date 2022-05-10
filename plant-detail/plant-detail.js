import { findById } from '../utils.js';
import { plants } from '../plants.js';
console.log('This is from plant detail');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const plant = findById(params.get('id'), plants);
console.log(plant);

const plantName = document.getElementById('plant-name');
plantName.textContent = plant.name;