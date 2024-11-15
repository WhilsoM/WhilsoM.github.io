import { displayData, res } from './info-attractions.js'

const categoriesBtns = document.querySelectorAll('.categories button')

categoriesBtns.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		const category = event.target.value
		let filteredData

		if (category === 'all') {
			filteredData = res
		} else {
			filteredData = res.filter((item) => item.category === category)
		}

		displayData(filteredData)
	})
})
