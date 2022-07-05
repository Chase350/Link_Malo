let toggle = document.querySelector('.toggle'); // on recup les infos de la div toggle
let body = document.querySelector('body'); // on recup les infos du body

toggle.addEventListener('click', function(){ // j'attend le clic sur le toggle
    body.classList.toggle('nav-open'); // lorqsu'un clic est effectuer sur le toggle, on ajoute (ou enleve) l'icone 
});