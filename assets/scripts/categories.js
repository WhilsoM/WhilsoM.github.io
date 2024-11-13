import { displayData, res } from './info-attractions.js'

const categories = document.querySelectorAll('.categories button')

categories.forEach((e) =>        {
	e.addEventListener('click', (event) => {
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
