import { Loader } from './loader.js'
import { sortAlphabetically, sortByPrice } from './sort.js'

export const attractionsWrapper = document.querySelector('.attractions__cards')
const sortSelect = document.getElementById('sorting')

export let isLoading = true

let res = [] // Переменная для хранения данных

const fetchData = async () => {
	try {
		Loader()

		const obj = await axios.get(
			'https://6729edd66d5fa4901b6f05f6.mockapi.io/attractions-data'
		)
		res = obj.data

		displayData(res) // Отображение данных после загрузки
	} catch (error) {
		console.log('не работает', error)
	} finally {
		isLoading = false
	}
}

const displayData = (data) => {
	let result = ''

	for (let i = 0; i < data.length; i++) {
		result += `<article class="card">
                <div class="card__img">
                  <img src=${data[i].image} alt=${data[i].title} />
                </div>
                <p class="card__price">$${data[i].price}</p>
                <h3 class="h3-title">${data[i].title}</h3>
                <p class="card__desc">
                  ${data[i].description}
                </p>
              </article>`
	}

	attractionsWrapper.innerHTML = result
}

sortSelect.addEventListener('change', (event) => {
	const sortType = event.target.value
	let sortedData

	switch (sortType) {
		case 'alphabet':
			sortedData = sortAlphabetically(res)
			break
		case 'price':
			sortedData = sortByPrice(res)
			break
		default:
			sortedData = res
	}

	displayData(sortedData) // Отображение отсортированных данных
})

fetchData()
