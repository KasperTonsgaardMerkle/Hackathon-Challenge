if (performance.navigation.type === 1) {
    window.location.href = 'index.html';
}

const currentPage = window.location.pathname.split('/').pop();

if (currentPage !== 'contact.html') {
    const contactLink = document.querySelector('a[href="contact.html"]');
    if (contactLink) contactLink.style.display = 'none';
};
