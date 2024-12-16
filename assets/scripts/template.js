/**
 * сделать переменную которая будет выводить через цикл данные сервера
 * сделать так чтобы при нажатии на достопримечательность у нас выводилась страница с правильными данными
 * добавить карту на сайт, картинки, текст, название
 * добавить пагинацию
 *
 * добавить в mockapi - категории по которым можно будет фильтровать достопримечательности
 */
import { API_URL } from './pagination.js'

async function loadAttraction() {
	const params = new URLSearchParams(window.location.search)
	const id = params.get('id')
	const response = await fetch(`${API_URL}/${id}`)
	const attraction = await response.json()

	document.querySelector('.img').src = attraction.image
	document.querySelector('.title').innerText = attraction.title
	document.querySelector('.description').innerText = attraction.description

	// Здесь можно добавить код для загрузки изображений и т.д.
}

document.addEventListener('DOMContentLoaded', loadAttraction)
console.log('hello')
