export const sortAlphabetically = (data) => {
	return data.sort((a, b) => a.title.localeCompare(b.title))
}

export const sortByPrice = (data) => {
	return data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
}
