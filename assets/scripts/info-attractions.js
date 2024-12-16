// import { Loader } from './loader.js'
// import { sortAlphabetically, sortByPrice } from './sort.js'

// export const attractionsInfo = document.querySelector('.attractions__info')
// export const attractionsWrapper = document.querySelector('.attractions__cards')
// const sortSelect = document.getElementById('sorting')

// export let res = []
// let currentData = []

// const fetchData = async () => {
// 	try {
// 		Loader()

// 		const obj = await axios.get(
// 			'https://6729edd66d5fa4901b6f05f6.mockapi.io/items'
// 		)
// 		res = obj.data
// 		currentData = res

// 		displayData(currentData)
// 	} catch (error) {
// 		console.log('не работает', error)
// 	} finally {
// 		Loader()
// 	}
// }

// export let result = ''

// export const displayData = (data) => {
// 	result = ''
// 	for (let i = 0; i < data.length; i++) {
// 		result += `<article class="card" data-id=${data[i].id}>
//                 <div class="card__img">
//                   <img src=${data[i].image} alt=${data[i].title} />
//                 </div>
//                 <p class="card__price">$${data[i].price}</p>
//                 <h3 class="h3-title">${data[i].title}</h3>
//                 <p class="card__desc">
//                   ${data[i].description}
//                 </p>
//               </article>`
// 	}

// 	attractionsWrapper.innerHTML = result
// }
// // сортировка добавить
// sortSelect.addEventListener('change', (event) => {
// 	const sortType = event.target.value
// 	let sortedData

// 	switch (sortType) {
// 		case 'alphabet':
// 			sortedData = sortAlphabetically(currentData)
// 			break
// 		case 'price':
// 			sortedData = sortByPrice(currentData)
// 			break
// 		default:
// 			sortedData = currentData
// 	}

// 	displayData(sortedData)
// })

// // fetchData()
