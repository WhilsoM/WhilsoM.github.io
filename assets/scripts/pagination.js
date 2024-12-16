// export const contentDiv = document.querySelector('#content')
// const loader = document.querySelector('.loader')
// const sortingSelect = document.querySelector('#sorting')
// const categoriesBtns = document.querySelectorAll('.categories button')

// export const API_URL = 'https://6729edd66d5fa4901b6f05f6.mockapi.io/items'

// let currentPage = 1
// const itemsPerPage = 10

// // запрос данных
// const fetchData = async (page, sortBy, order, category) => {
// 	try {
// 		// проверяет кол-во элементов в мокапи и на сайте, чтобы не запускать лишний раз лоадер
// 		const resDataLength = await fetch(API_URL)
// 		const dataCheck = await resDataLength.json()
// 		const dataCheckLength = dataCheck.length

// 		const cardsLength = document.querySelectorAll('.card').length

// 		if (dataCheckLength === cardsLength) return

// 		loader.style.display = 'block'

// 		let url = `${API_URL}?page=${page}&limit=${itemsPerPage}&sortBy=${sortBy}&order=${order}`

// 		if (category && category !== 'all') {
// 			url += `&category=${category}`
// 		}
// 		const response = await fetch(url)

// 		const data = await response.json()

// 		renderData(data)
// 	} catch (error) {
// 		console.error('Ошибка при загрузке данных:', error)
// 	} finally {
// 		loader.style.display = 'none'
// 	}
// }

// export const renderData = (data) => {
// 	data.forEach((item) => {
// 		const article = document.createElement('article')
// 		const img = document.createElement('img')
// 		const div = document.createElement('div')
// 		const h3 = document.createElement('h3')
// 		const price = document.createElement('p')
// 		const description = document.createElement('p')

// 		img.src = item.image
// 		img.alt = item.h3
// 		h3.textContent = item.title
// 		price.textContent = item.price
// 		description.textContent = item.description

// 		article.classList.add('card')
// 		div.classList.add('card__img')
// 		price.classList.add('card__price')
// 		h3.classList.add('h3-title')
// 		description.classList.add('card__desc')

// 		div.appendChild(img)
// 		article.appendChild(div)
// 		article.appendChild(price)
// 		article.appendChild(h3)
// 		article.appendChild(description)

// 		contentDiv.appendChild(article)
// 	})
// }

// // infinite scroll
// window.addEventListener('scroll', () => {
// 	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
// 		currentPage++
// 		const sort = sortingSelect.value

// 		fetchData(currentPage, sort)
// 	}
// })

// // sortingSelect.addEventListener('change', function () {
// // 	const sortValue = this.value
// // 	let sortBy, order

// // 	switch (sortValue) {
// // 		case 'alphabet':
// // 			sortBy = 'name'
// // 			order = 'asc'
// // 			break
// // 		case 'famous':
// // 			sortBy = 'popularity'
// // 			order = 'desc'
// // 			break
// // 		case 'price-up':
// // 			sortBy = 'price'
// // 			order = 'asc'
// // 			break
// // 		case 'price-down':
// // 			sortBy = 'price'
// // 			order = 'desc'
// // 			break
// // 		default:
// // 			return
// // 	}
// // 	currentPage = 1 // Сбрасываем страницу при изменении сортировки

// // 	const category = document.querySelector('.categories button.active') // Получаем активную категорию
// // 	if (category.value === null) return
// // 	fetchData(currentPage, sortBy, order, category) // Вызываем fetchData с текущими параметрами
// // })

// // categoriesBtns.forEach((btn) => {
// // 	const url = ''
// // 	btn.addEventListener('click', (e) => {
// // 		const category = e.target.value
// // 		let filteredData

// // 		console.log(API_URL)

// // 		// displayData(filteredData)
// // 	})
// // })

// // categoriesBtns.forEach((btn) => {
// // 	btn.addEventListener('click', (event) => {
// // 		// Удаляем класс active у всех кнопок
// // 		categoriesBtns.forEach((button) => button.classList.remove('active'))

// // 		// Добавляем класс active к нажатой кнопке
// // 		event.target.classList.add('active')

// // 		const category = event.target.value
// // 		currentPage = 1 // Сбрасываем страницу при изменении категории
// // 		const sort = sortingSelect.value // Получаем текущее значение сортировки

// // 		fetchData(currentPage, sort, 'asc', category) // Вызываем fetchData с фильтром по категории
// // 	})
// // })

// sortingSelect.addEventListener('change', function () {
// 	const sortValue = this.value
// 	let sortBy, order

// 	switch (sortValue) {
// 		case 'alphabet':
// 			sortBy = 'name'
// 			order = 'asc'
// 			break
// 		case 'famous':
// 			sortBy = 'popularity'
// 			order = 'desc'
// 			break
// 		case 'price-up':
// 			sortBy = 'price'
// 			order = 'asc'
// 			break
// 		case 'price-down':
// 			sortBy = 'price'
// 			order = 'desc'
// 			break
// 		default:
// 			return
// 	}
// 	currentPage = 1

// 	const activeButton = document.querySelector('.categories button.active')
// 	const category = activeButton ? activeButton.value : 'all'

// 	fetchData(currentPage, sortBy, order, category)
// })

// fetchData(currentPage, sortingSelect.value, 'popularity')

export const contentDiv = document.querySelector('#content')
const loader = document.querySelector('.loader')
const sortingSelect = document.querySelector('#sorting')
const categoriesBtns = document.querySelectorAll('.categories button')

export const API_URL = 'https://6729edd66d5fa4901b6f05f6.mockapi.io/items'

let currentPage = 1
const itemsPerPage = 10

// Запрос данных
const fetchData = async (page, sortBy, order, category) => {
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
	}
}

export const renderData = (data) => {
	contentDiv.innerHTML = '' // Очищаем предыдущие данные
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

// Обработчик событий для кнопок категорий
categoriesBtns.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		categoriesBtns.forEach((button) => button.classList.remove('active'))
		event.target.classList.add('active')

		const category = event.target.value
		currentPage = 1 // Сбрасываем страницу при изменении категории
		const sort = sortingSelect.value // Получаем текущее значение сортировки

		fetchData(currentPage, sort, 'asc', category) // Вызываем fetchData с фильтром по категории
	})
})

// Обработчик событий для сортировки
sortingSelect.addEventListener('change', function () {
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
	currentPage = 1 // Сбрасываем страницу при изменении сортировки

	const activeButton = document.querySelector('.categories button.active')
	const category = activeButton ? activeButton.value : 'all' // Получаем активную категорию

	fetchData(currentPage, sortBy, order, category) // Вызываем fetchData с текущими параметрами
})

// Изначальный вызов для загрузки данных
fetchData(currentPage, sortingSelect.value, 'popularity', 'all')
