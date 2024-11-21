const currentPage = window.location.pathname.split('/').pop();


const activeLink = document.querySelector('a[href="' + currentPage + '"]');
activeLink.style.background = '#2646a6';


function contactSubmit() {
    alert("Thank you for your message! We will get back to you soon.");
}

function indexSubmit() {
    alert("this was a useless form, but thank you very much anyway");
}