function addMenu(main){
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

    for (let i = 0; i < 6; i++) {
        let e = document.createElement('div');
        let img = document.createElement('img');
        img.src = `../src/${i}.jpg`;
        e.appendChild(img);
        menuContent.appendChild(e);
    }

    main.appendChild(menuContent);
}

module.exports = {addMenu};