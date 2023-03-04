//import tabs from external modules
const {buildHeader} = require('./header.js');
const {defaultContent} = require('./default-content.js');
const {buildFooter} = require('./footer.js');
const {addMenu} = require('./menu.js');
const {buildContact} = require('./contact.js');

const mainContent = document.getElementById('mainContent');
const tabDiv = document.getElementsByClassName('tabDiv');

//import stylesheet
import './style.css';

function landingPageStructure(){
    //parent is #mainContent
    //create elements
    const header = document.createElement('header');
    buildHeader(header);
    
    const main = document.createElement('main');
    main.id = 'main';
    defaultContent(main);

    const footer = document.createElement('footer');
    buildFooter(footer);

    return [header, main, footer];
}

//append header, main, and footer to body
const mainElements = landingPageStructure();

for (let i = 0; i < mainElements.length; i++) {
    mainContent.appendChild(mainElements[i]);
}

function clearMain() {
    const main = document.getElementById('main');
    const m = main.children.length;
    for (let i = 0; i < m; i++) {
        main.children[main.children.length - 1].remove();
    }
}

function changePage(){
    const main = document.getElementById('main');
    for (let i = 0; i < tabDiv.length; i++) {
        let e = tabDiv[i];
        e.addEventListener('click', function(){
            switch (e.id) {
                case "home":
                    clearMain();
                    defaultContent(main);
                    break;
                case "menu":
                    clearMain();
                    addMenu(main);
                    break;
                case 'contact':
                    clearMain();
                    buildContact(main);
            }
        })
    }
}
changePage();

