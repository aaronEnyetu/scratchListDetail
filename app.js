// import functions and grab DOM elements

import { plants } from './plants.js';

import { renderPlantLI } from './utils.js';

const plantLinks = document.getElementById('plant-links');

for (let plant of plants) {
    const li = renderPlantLI(plant);
    plantLinks.append(li);
}



// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
