const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

// VALIDA NOME DA PESSOA E BOTAO PLAY
const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

input.addEventListener('input', validateInput);

//SALVA NOME DA PESSOA E COLOCA ELA NA PAGINA DO JOGO

const handleSubmit = (event) => {
    event.preventDefault();

    //SALVAR O NOME DA PESSOA
    localStorage.setItem('player', input.value);

    // REDIRECIONAR A PESSOA P JOGO
    window.location = 'pages/game.html';
}

form.addEventListener('submit', handleSubmit);
