const cookiesMessages = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
]
let controlMessage = 0
const fortuneCookie = document.querySelector('#fortuneCookie')
const resetButton = document.querySelector('#resetButton')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const luckMessage = document.querySelector('#luckMessage')

fortuneCookie.addEventListener('click', openCookie)
resetButton.addEventListener('click', handleClick)

function openCookie() {
  screen1.setAttribute('id', 'hide')
  screen2.setAttribute('id', '')
  luckMessage.innerText = cookiesMessages[controlMessage]
}

function handleClick(event) {
  event.preventDefault()

  screen1.setAttribute('id', '')
  screen2.setAttribute('id', 'hide')

  if (handleClick) {
    controlMessage++
  }
  if (controlMessage >= cookiesMessages.length) {
    controlMessage = 0
  }
}
