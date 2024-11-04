window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show-element');
        }, index * 500); // Adiciona um atraso incremental para cada elemento
    });
});
