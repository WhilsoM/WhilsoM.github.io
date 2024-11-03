const burgerMenu = document.querySelector('.burger')
let countClick = 0

burgerMenu.addEventListener('click', () => {
	if (countClick === 0) {
		document.body.style.overflowY = 'hidden'
		countClick++
	} else if (countClick === 1) {
		document.body.style.overflowY = 'auto'
		countClick--
	}
})
