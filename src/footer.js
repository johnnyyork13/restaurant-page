function buildFooter(footer){
    const footerHeader = document.createElement('h3');
    footerHeader.textContent = "Johnny York - 2023"

    footer.appendChild(footerHeader);
}

module.exports = {buildFooter};