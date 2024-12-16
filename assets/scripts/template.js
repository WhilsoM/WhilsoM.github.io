/**
 * сделать переменную которая будет выводить через цикл данные сервера
 * сделать так чтобы при нажатии на достопримечательность у нас выводилась страница с правильными данными
 * добавить карту на сайт, картинки, текст, название
 * добавить пагинацию
 *
 * добавить в mockapi - категории по которым можно будет фильтровать достопримечательности
 */

import { isLoading } from './info-attractions.js'
import { Loader } from './loader.js'

const title = document.querySelector('.title')
const description = document.querySelector('.description')
const img = document.querySelector('.img')
const map = document.querySelector('.map')

export const fetchData = async () => {
	try {
		Loader()

		const obj = await axios.get(
			'https://6729edd66d5fa4901b6f05f6.mockapi.io/items'
		)
		res = obj.data
	} catch (error) {
		console.log('не работает', error)
	} finally {
		isLoading = false
	}
}

const displayBlock = (res) => {
	let result = ''

	// for (let i  = 0; i < res)
}
