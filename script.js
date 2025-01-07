document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('#hero button');
    searchButton.addEventListener('click', function() {
        alert('Funcionalidade de busca em desenvolvimento!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('#hero button');
    searchButton.addEventListener('click', function() {
        alert('Funcionalidade de busca em desenvolvimento!');
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const loader = document.createElement('div');
            loader.className = 'loader';
            document.body.appendChild(loader);
        });
    });
});