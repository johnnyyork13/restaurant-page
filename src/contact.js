function buildContact(main){
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us';

    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    
    const phone = document.createElement('div');
    phone.classList.add('info');
    const address = document.createElement('address');
    address.classList.add('info');

    const phoneImg = document.createElement('img');
    phoneImg.src = '../src/phone.png';
    const addressImg = document.createElement('img');
    addressImg.src = '../src/house.png';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '706-555-1234';
    const addressText = document.createElement('p');
    addressText.textContent = '404 Beachview Dr, Jekyll Island, GA';

    phone.appendChild(phoneImg);
    phone.appendChild(phoneNumber);

    address.appendChild(addressImg);
    address.appendChild(addressText);

    contactInfo.appendChild(phone);
    contactInfo.appendChild(address);

    //create img for map
    const map = document.createElement('img');
    map.src = '../src/map.png';

    contactContent.appendChild(contactInfo);
    contactContent.appendChild(map);

    main.appendChild(contactContent);
}

module.exports = {buildContact};