const mailSendInp = document.querySelector('.footer form > input')
const btn = document.querySelector('.footer form > .btn')
const err = document.querySelector('.error')

btn.addEventListener('click', (e) => {
	e.preventDefault()

	if (btn.textContent === 'отправлено! 🎉') return

	if (validateEmail(mailSendInp.value)) {
		btn.textContent = 'отправлено! 🎉'
		btn.style.backgroundColor = '#90ee90'
		err.textContent = '' // убираем ошибку, если почта корректна
	} else {
		err.textContent = 'Заполните почту правильно!'

		setTimeout(() => {
			err.textContent = ''
		}, 3000)

		return
	}
})

mailSendInp.addEventListener('input', () => {
	if (validateEmail(mailSendInp.value)) {
		err.textContent = '' // убираем сообщение об ошибке при вводе корректного email
	}
})

export const validateEmail = (email) => email.length > 0 && email.includes('@')
