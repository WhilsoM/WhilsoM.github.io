// /**
//  * найти элемент модалки
//  * сделать в scss классы со стилями
//  * добавлять или убирать в зависимости от условия
//  * когда пользователь полностью заполняет две формы
//  * и нажимает на кнопку отправить
//  * то потом идет модалка с сообщением
//  * и сверху галочку зеленую какую нибудь
//  * "заявка будет обрабатываться в течении дня!"
//  */
// import { validateEmail } from './mail-send.js'

// const modal = document.querySelector('.modal')
// const modalContent = document.querySelector('.modal-content')
// const btn = document.querySelector('.btn')
// const sendBtn = document.querySelector('#send')
// const form = document.querySelector('form')
// const emailInp = document.querySelector('#email')
// const telInp = document.querySelector('#tel')

// const p = document.createElement('p')
// const closeBtn = document.createElement('button')
// const error = document.createElement('p')

// p.textContent = 'заявка будет обрабатываться в течении дня!'
// closeBtn.textContent = 'закрыть'
// error.textContent = 'Заполните корректно почту!'

// error.classList.add('error')
// p.style.marginBottom = '25px'
// closeBtn.classList.add('btn')

// let isOpenModal = false
// let isError = false

// btn.addEventListener('click', () => {
// 	if (!isOpenModal) {
// 		modal.style.display = 'block'
// 	} else {
// 		modal.style.display = 'none'
// 	}
// })

// sendBtn.addEventListener('click', (e) => {
// 	if (!isError) {
// 		validateEmail(e, emailInp, error)
// 		modalContent.appendChild(error)
// 		isError = true
// 		return
// 	}
// 	form.style.display = 'none'

// 	modalContent.appendChild(p)
// 	modalContent.appendChild(closeBtn)
// })

// closeBtn.addEventListener('click', () => {
// 	if (isOpenModal) {
// 		modal.style.display = 'block'
// 	} else {
// 		modal.style.display = 'none'
// 	}
// })

import { validateEmail } from './mail-send.js'

const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const sendBtn = document.querySelector('#send')
const form = document.querySelector('#form')
const emailInp = document.querySelector('#email')
const telInp = document.querySelector('#tel')
const openModalBtn = document.querySelector('.btn')

const successMessage = document.createElement('p')
const closeBtn = document.createElement('button')
const error = document.createElement('p')

successMessage.textContent = 'Заявка будет обрабатываться в течение дня!'
closeBtn.textContent = 'Закрыть'
error.textContent = 'Заполните корректно почту и телефон!'

error.classList.add('error')
successMessage.style.marginBottom = '25px'
closeBtn.classList.add('btn')

let isOpenModal = false

openModalBtn.addEventListener('click', () => {
	modal.style.display = 'block'
	isOpenModal = true
})

sendBtn.addEventListener('click', (e) => {
	e.preventDefault()

	const emailValid = validateEmail(emailInp.value)
	const telValid = validatePhone(telInp.value)

	if (!emailValid || !telValid) {
		if (!emailValid) {
			error.textContent = 'Заполните почту правильно!'
		} else if (!telValid) {
			error.textContent = 'Заполните телефон правильно!'
		}
		form.appendChild(error)
		return
	}

	error.remove()
	form.style.display = 'none'

	// message for correct data
	modalContent.appendChild(successMessage)
	modalContent.appendChild(closeBtn)
	modal.classList.add('open')
})

closeBtn.addEventListener('click', () => {
	modal.classList.remove('open')
	form.style.display = 'block'
	modal.style.display = 'none'
	sendBtn.style.display = 'none'
	emailInp.disabled = true
	telInp.disabled = true
})

function validatePhone(tel) {
	const phonePattern = /^[\d\+]{1,3}?[\d]{10,12}$/
	return phonePattern.test(tel)
}
