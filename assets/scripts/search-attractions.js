import { attractionsWrapper, result } from './info-attractions.js'

const searchInput = document.querySelector('.attractions__input')
const notFoundItems = 'Ничего не найдено'

searchInput.addEventListener('input', (e) => {
	let found = false

	;[...document.querySelectorAll('.card')].forEach((item) => {
		if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
			item.style.display = 'flex'
			found = true
		} else {
			item.style.display = 'none'
		}
	})

	if (e.target.value.length === 0) {
		attractionsWrapper.innerHTML = result
	} else if (!found) {
		attractionsWrapper.textContent = notFoundItems
	} else {
		attractionsWrapper.innerHTML = attractionsWrapper.innerHTML
	}
})
