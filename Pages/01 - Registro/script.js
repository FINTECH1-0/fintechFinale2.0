window.addEventListener('DOMContentLoaded', function () {

    const mainImage = document.querySelector('.main-image-container');
    const formContainer = document.querySelector('.form-container');

    
    setTimeout(() => {
        mainImage.classList.add('show-element');
    }, 500); 

    setTimeout(() => {
        formContainer.classList.add('show-element');
    }, 1000); 
});