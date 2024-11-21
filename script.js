const currentPage = window.location.pathname.split('/').pop();


const activeLink = document.querySelector('a[href="' + currentPage + '"]');
activeLink.style.background = '#2646a6';