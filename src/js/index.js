const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        desselecionaBotao();

        botao.classList.add('selecionado');

        desselecionaPersonagem();

        personagens[index].classList.add('selecionado');
    });
});

function desselecionaBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
};

function desselecionaPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
};