// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { plants } from '../plants';
import { renderPlantLi } from '../utils';

const test = QUnit.test;

test('render plantLi should return an li with a link', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="./plant-detail/?id=1">corn</a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlantLi(plants[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

