import { API_URL, contentDiv, renderData } from './pagination.js'

const searchInput = document.querySelector('.attractions__input')

// поисковик
searchInput.addEventListener('input', (e) => {
	setTimeout(async () => {
		const url = `${API_URL}?search=${e.target.value}`
		const res = await fetch(url)
		const data = await res.json()

		contentDiv.innerHTML = ''

		renderData(data)
	}, 1000)
})
