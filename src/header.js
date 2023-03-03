function divClicked(div){
    const allButtons = document.getElementsByClassName('tabDiv');
    for (let i = 0; i < allButtons.length; i++) {
        let e = allButtons[i];
        e.style.backgroundColor = 'var(--accent)';
        e.style.color = 'var(--text)';
    }
    div.style.backgroundColor = 'var(--bg-color)';
    div.style.color = 'var(--accent)';

} 

function buildHeader(header){
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Johnny-a-Rios"
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('linkContainer');
    //linkContainer children
    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.classList.add('tabDiv');
        div.addEventListener('click', function(){
            divClicked(div);
        })
        switch (i) {
            case 0:
                div.textContent = "Home";
                div.id = "home";
                break;
            case 1:
                div.textContent = "Menu";
                div.id = "menu";
                break;
            case 2:
                div.textContent = "Contact Us";
                div.id = "contact";
                break;
        }
        linkContainer.appendChild(div);
    }

    header.appendChild(headerTitle);
    header.appendChild(linkContainer);

}

module.exports = {buildHeader};