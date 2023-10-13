const urlcontato = 'https://linktr.ee/luiz.fo';
const contato = document.getElementById('meucontato');
contato.addEventListener('click', function(event){
    event.preventDefault();

    window.open(urlcontato, '_blank');
});

const urlprojetos = 'https://github.com/Luizfrr/projetos/blob/main/README.md';
const projetos = document.getElementById('projetos');
projetos.addEventListener('click', function(event){
    event.preventDefault();

    window.open(urlprojetos, '_blank');
});

