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
  submitButton.innerText = 'Entrando...'

  emailInput.disabled = true
  passwordInput.disabled = true

  await new Promise((resolve) => setTimeout(resolve, 2000))

  submitButton.disabled = false
  submitButton.innerText = 'Entrar'

  emailInput.value = ''
  passwordInput.value = ''

  emailInput.disabled = false
  passwordInput.disabled = false

  message.innerText = 'Login efetuado com sucesso!'
  message.classList.add('success')

  await new Promise((resolve) => setTimeout(resolve, 5000))

  message.classList.remove('success')

  message.innerText = ''
})