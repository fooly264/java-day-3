

//Primitive Datatypes
let score = 0;
const appName = "My App";
let playing = true;

// complex / Compound
const players = [];
const player = {
    inventory : [],
};

// Functions / actions
function createTitle(titleText) { //creates elements
    const h1 = document.createElement('h1'); // tells the browers where to place the element
    document.body.appendChild(h1);
    h1.innerHTML = titleText; // tells h1 what to show

    const li = document.createElement('li');
    h1.appendChild(li);
    li.innerHTML = titleText;
};

// loops
 for (let i = 0; i <= 10; i++){

    // what should happen / logic
    if ( i < 5) {
        createTitle();
    };

    if (i === '5') {
        createTitle(i);
    };

    if ( i > 5){
        createTitle(i);
    };
    
 };
