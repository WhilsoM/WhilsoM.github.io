/**
 * сделать переменную которая будет выводить через цикл данные сервера
 * сделать так чтобы при нажатии на достопримечательность у нас выводилась страница с правильными данными
 * добавить карту на сайт, картинки, текст, название
 * добавить пагинацию
 *
 * добавить в mockapi - категории по которым можно будет фильтровать достопримечательности
 */
import { API_URL } from './pagination.js'
const templateContainer = document.querySelector('.template .container')

const modal = (src, alt) => {
	const modalTemplate = `
      <div class="modal">
        <div class="modal-content">
          <img src=${src} alt=${alt}>
        </div>
      </div>
  `

	templateContainer.appendChild(modalTemplate)
}

async function loadAttraction() {
	const params = new URLSearchParams(window.location.search)
	const id = params.get('id')
	const response = await fetch(`${API_URL}/${id}`)
	const attraction = await response.json()

	const img = document.querySelectorAll('.img')
	const title = document.querySelector('.title')
	const description = document.querySelector('.description')

	// get current image index
	let currentImage = 0

	img[currentImage].src = attraction.image[currentImage]
	img[currentImage].alt = attraction.title

	title.innerText = attraction.title
	description.innerText = attraction.description

	img[currentImage].addEventListener('click', () => {
		img[currentImage].classList.add('img_full')
		modal()
	})
}

document.addEventListener('DOMContentLoaded', loadAttraction)

const arr = ['a', 'b', 'c', 'd']

const newArr = arr.map((item) => {})
