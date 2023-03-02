import './style.css';

function component() {
    let e = document.createElement('p');

    e.textContent = "Bababooee";
    e.classList.add('myClass');
    return e;
}

document.body.appendChild(component());