import bot from './assets/bot.svg'
import user from './assets/user.svg'

const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')

let loadInterval

const loader = (element) => {
  element.textContent = ''
  loadInterval = setInterval(() => {
    element.textContent += '.'
    if(element.textContent.length === 3) element.textContent = ''
  }, 300)
}