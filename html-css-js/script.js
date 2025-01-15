const emailInput = document.getElementById('email_input')
const emailErrorMessage = document.getElementById('email_error_message')

const passwordInput = document.getElementById('password_input')
const passwordErrorMessage = document.getElementById('password_error_message')

const submitButton = document.querySelector('button')
const message = document.getElementById('message')

addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = emailInput.value
  const password = passwordInput.value

  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

  if (!email.length || !emailRegex.test(email)) {
    emailErrorMessage.innerText = 'Por favor, insira um endereço de e-mail válido.'

    return
  } else {
    emailErrorMessage.innerText = ''
  }

  if (password.length < 5) {
    passwordErrorMessage.innerText = 'Por favor, insira pelo menos 6 caracteres.'

    return
  } else {
    passwordErrorMessage.innerText = ''
  }

  // simulando integração com o backend

  submitButton.disabled = true
  submitButton.innerText = 'Enviando...'

  emailInput.disabled = true
  passwordInput.disabled = true

  await new Promise((resolve) => setTimeout(resolve, 2000))

  submitButton.disabled = false
  submitButton.innerText = 'Enviar'

  emailInput.value = ''
  passwordInput.value = ''

  emailInput.disabled = false
  passwordInput.disabled = false

  const response = Math.floor(Math.random() * 10)

  if (response % 2 == 0) {
    message.innerText = 'Login efetuado com sucesso!'
    message.classList.remove('error')
    message.classList.add('success')
  } else {
    message.innerText = 'Erro ao efetuar o login!'
    message.classList.remove('success')
    message.classList.add('error')
  }

  await new Promise((resolve) => setTimeout(resolve, 5000))

  message.classList.remove('success')
  message.classList.remove('error')

  message.innerText = ''
})