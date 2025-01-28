const urlcontato = 'https://linktr.ee/luiz.fo';
const contato = document.getElementById('meucontato');
contato.addEventListener('click', function(event){
    event.preventDefault();

    window.open(urlcontato, '_blank');
});

const urlprojetos = 'https://drive.google.com/drive/folders/1EAi07_Xa-8jmkF2vHzGUL8d8Kzw0XBZz?usp=drive_link';
const projetos = document.getElementById('projetos');
projetos.addEventListener('click', function(event){
    event.preventDefault();

    window.open(urlprojetos, '_blank');
});

