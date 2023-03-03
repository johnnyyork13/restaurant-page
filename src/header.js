function buildHeader(header){
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Johnny-a-Rios"
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('linkContainer');
    //linkContainer children
    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.classList.add('tabDiv');
        switch (i) {
            case 0:
                div.textContent = "About Us";
                break;
            case 1:
                div.textContent = "Recipes";
                break;
            case 2:
                div.textContent = "Contact Us";
                break;
        }
        linkContainer.appendChild(div);
    }

    header.appendChild(headerTitle);
    header.appendChild(linkContainer);
}

module.exports = {buildHeader};