const contentDiv = document.getElementById('content')
const loadMoreButton = document.getElementById('loadMore')
const loader = document.querySelector('.loader')

let currentPage = 1
const itemsPerPage = 10

const fetchData = async (page) => {
	try {
		loader.style.display = 'block'

		const response = await fetch(
			`https://6729edd66d5fa4901b6f05f6.mockapi.io/items?page=${page}&limit=${itemsPerPage}`
		)
		const data = await response.json()
		renderData(data)
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error)
	} finally {
		loader.style.display = 'none'
	}
}

function renderData(data) {
	data.forEach((item) => {
		const article = document.createElement('article')
		const img = document.createElement('img')
		const div = document.createElement('div')
		const h3 = document.createElement('h3')
		const price = document.createElement('p')
		const description = document.createElement('p')

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

		contentDiv.appendChild(article)
	})
}

loadMoreButton.addEventListener('click', () => {
	currentPage++
	fetchData(currentPage)
})

fetchData(currentPage)
