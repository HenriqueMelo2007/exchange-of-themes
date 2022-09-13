/* Trazendo os elementos HTML para o script */
const body = document.querySelector('body')
const box = document.querySelector('.box')
const button = document.querySelector('button')

/* Adicionando evento de click para o botão */
button.addEventListener('click', trocarTema)

/* Função executada ao botão ser clicado, troca o tema da página */
function trocarTema () {
  body.classList.toggle('body-clear')
  body.classList.toggle('body-dark')
  box.classList.toggle('box-clear')
  box.classList.toggle('box-dark')
  button.classList.toggle('button-clear')
  button.classList.toggle('button-dark')
}