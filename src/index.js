//import tabs from external modules

/*
const tabOne = require('./tab-one.js');
const tabTwo = require('./tab-two.js');
const tabThree = require('./tab-three.js');
*/
const {buildHeader} = require('./header.js');

const mainContent = document.getElementById('mainContent');

//import stylesheet
import './style.css';

function landingPageStructure(){
    //parent is #mainContent
    //create elements
    const header = document.createElement('header');
    buildHeader(header);
    
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    return [header, main, footer];
}

//append header, main, and footer to body
const mainElements = landingPageStructure();

for (let i = 0; i < mainElements.length; i++) {
    mainContent.appendChild(mainElements[i]);
}

