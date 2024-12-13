import { API_URL, contentDiv, renderData } from './pagination.js'

const notFoundItems = 'Ничего не найдено'
const searchInput = document.querySelector('.attractions__input')

// поисковик
searchInput.addEventListener('input', async (e) => {
	const url = `${API_URL}?search=${e.target.value}`
	const res = await fetch(url)
	const data = await res.json()

	contentDiv.innerHTML = ''

	renderData(data)
})
