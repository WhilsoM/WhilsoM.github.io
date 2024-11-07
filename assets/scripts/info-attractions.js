import { Loader } from './loader.js'

export const attractionsWrapper = document.querySelector('.attractions__cards')

export let isLoading = true

const fetchData = async () => {
	try {
		Loader()
		const obj = await axios.get(
			'https://6729edd66d5fa4901b6f05f6.mockapi.io/attractions-data'
		)
		const res = obj.data

		let result = ``

		for (let i = 0; i < res.length; i++) {
			result += `<article class="card">
							<div class="card__img">
								<img src=${res[i].avatar} alt=${res[i].title} />
							</div>

							<p class="card__price">$${res[i].price}</p>

							<h3 class="h3-title">${res[i].title}</h3>

							<p class="card__desc">
								${res[i].short_desc}
							</p>
						</article>`
		}
		attractionsWrapper.innerHTML = result
	} catch (error) {
		console.log('не работает', error)
	} finally {
		isLoading = false
	}
}

fetchData()
