// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// DOM Manipulation using QuerySelector

// document.querySelector('.heding_one').textContent = 'test';
// console.log(document.querySelector('.heding_one').textContent);
// document.querySelector('.test_input').value = 23;

// DOM Manipulation using QuerySelector Ends

/*******************/

// Hnadling click events

document.querySelector('.clickBtn').addEventListener('click', function () {
    // document.querySelector('.heding_one').textContent = 'new';
    addValue();
    console.log(document.querySelector('.heding_one'));
})

function addValue() {
    const x = document.querySelector('.test_input').value;
    if (document.querySelector('.test_input').value > 20) {
        console.log(document.querySelector('.changeText').textContent = x + ' is GREATER than 20');
    } else {
        console.log(document.querySelector('.changeText').textContent = x + ' is SMALLER than 20');
    }
}