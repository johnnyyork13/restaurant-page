function defaultContent(main){
    //create elements for body
    const bodyContent = document.createElement('div');
    bodyContent.classList.add('bodyContent');

    const defaultImg = document.createElement('img');
    defaultImg.classList.add('defaultImg');
    defaultImg.src = "../src/all-food.jpg";

    bodyContent.appendChild(defaultImg);
    //add a few p elements to bodyContent
    for (let i = 0; i < 3; i++) {
        const p = document.createElement('p');
        switch (i) {
            case 0:
                p.textContent = "Welcome to Johnny-a-Rios!";
                break;
            case 1:
                p.textContent = "The best Italian food is only a few clicks away!";
                break;
            case 2:
                p.textContent = "Order online or call us at 706-555-1234!";
                break;
        }
        bodyContent.appendChild(p);
    }

    
    main.appendChild(bodyContent);
}

module.exports = {defaultContent};