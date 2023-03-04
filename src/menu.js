function addMenu(main){
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = "Our Glorious Menu";

    for (let i = 0; i < 6; i++) {
        let e = document.createElement('div');
        let img = document.createElement('img');
        let p = document.createElement('div');
        p.classList.add('menuText')
        img.src = `../src/${i}.jpg`;
        e.appendChild(img);
        switch (i) {
            case 0:
                p.textContent = "Kickin' BBQ Pizza";
                break;
            case 1:
                p.textContent = 'Dope Chicken Alfredo';
                break;
            case 2:
                p.textContent = 'Awesome Lasagna';
                break;
            case 3:
                p.textContent = 'Perplexing Spaghetti';
                break;
            case 4:
                p.textContent = 'Rivoting Ravioli';
                break;
            case 5:
                p.textContent = 'Tasty Tomato Soup';
                break;
        }
        e.appendChild(p);
        menuContent.appendChild(e);
    }
    main.appendChild(menuHeader);
    main.appendChild(menuContent);
}

module.exports = {addMenu};