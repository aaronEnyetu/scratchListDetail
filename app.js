// import functions and grab DOM elements

import { plants } from './plants.js';
import { renderPlant } from './utils.js';
import { renderPlantLI } from './utils.js';

const plantLinks = document.getElementById('plant-links');
const plantListElem = document.getElementById('plants');

for (let plant of plants) {
    const li = renderPlantLI(plant);
    plantLinks.append(li);
}


for (let plant of plants) {
  // plantListElem.textContent = '';
    const plantDiv = renderPlant(plant);
    plantListElem.append(plantDiv);
}
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
