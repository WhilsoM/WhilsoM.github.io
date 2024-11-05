import axios from 'axios'

const fetchData = async () => {
	const data = await axios.get(
		'https://6729edd66d5fa4901b6f05f6.mockapi.io/attractions-data'
	)
	console.log(data)
}

fetchData()
