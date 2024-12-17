export const contentDiv = document.querySelector('#content')
const loader = document.querySelector('.loader')
const sortingSelect = document.querySelector('#sorting')
const categoriesBtns = document.querySelectorAll('.categories button')

export const API_URL = 'https://6729edd66d5fa4901b6f05f6.mockapi.io/items'

let currentPage = 1
const itemsPerPage = 10
let isLoading = false

const fetchData = async (page, sortBy, order, category) => {
	if (isLoading) return
	isLoading = true

	try {
		loader.style.display = 'block'

		let url = `${API_URL}?page=${page}&limit=${itemsPerPage}&sortBy=${sortBy}&order=${order}`

		if (category && category !== 'all') {
			url += `&category=${category}`
		}

		const response = await fetch(url)
		const data = await response.json()

		renderData(data)
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error)
	} finally {
		loader.style.display = 'none'
		isLoading = false
	}
}

// render attractions
export const renderData = (data) => {
	data.forEach((item) => {
		const article = document.createElement('article')
		const img = document.createElement('img')
		const div = document.createElement('div')
		const h3 = document.createElement('h3')
		const price = document.createElement('p')
		const description = document.createElement('p')
		const link = document.createElement('a')

		link.href = `template.html?id=${item.id}`
		link.textContent = 'Узнать подробнее ->'
		link.classList.add('article__link')

		img.src = item.image
		img.alt = item.h3
		h3.textContent = item.title
		price.textContent = item.price
		description.textContent = item.description

		article.classList.add('card')
		div.classList.add('card__img')
		price.classList.add('card__price')
		h3.classList.add('h3-title')
		description.classList.add('card__desc')

		div.appendChild(img)
		article.appendChild(div)
		article.appendChild(price)
		article.appendChild(h3)
		article.appendChild(description)
		article.appendChild(link)

		contentDiv.appendChild(article)
	})
}

// categories
categoriesBtns.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		categoriesBtns.forEach((button) => button.classList.remove('active'))
		event.target.classList.add('active')

		const category = event.target.value
		currentPage = 1
		const sort = sortingSelect.value

		contentDiv.innerHTML = ''
		fetchData(currentPage, sort, 'asc', category)
	})
})

function sort() {
	const sortValue = this.value
	let sortBy, order

	switch (sortValue) {
		case 'alphabet':
			sortBy = 'name'
			order = 'asc'
			break
		case 'famous':
			sortBy = 'popularity'
			order = 'desc'
			break
		case 'price-up':
			sortBy = 'price'
			order = 'asc'
			break
		case 'price-down':
			sortBy = 'price'
			order = 'desc'
			break
		default:
			return
	}
	currentPage = 1

	const activeButton = document.querySelector('.categories button.active')
	const category = activeButton ? activeButton.value : 'all'

	contentDiv.innerHTML = ''
	fetchData(currentPage, sortBy, order, category)
}
// Infinite scroll
window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
		currentPage++
		const sort = sortingSelect.value
		const activeButton = document.querySelector('.categories button.active')
		const category = activeButton ? activeButton.value : 'all'

		fetchData(currentPage, sort, 'asc', category)
	}
})

window.addEventListener('DOMContentLoaded', () => {
	// sort
	sortingSelect.addEventListener('change', sort)
	fetchData(currentPage, sortingSelect.value, 'popularity', 'all')
})
// потом нужно будет по файлам раскидать для удобства я же не лох чтобы писать все в одном файле как санек пенек
