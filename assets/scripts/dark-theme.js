//add dark theme
const bodyElem = document.body
const headerElem = document.querySelector('.header')
const sunIconBtn = document.querySelector('.theme > button')
const sunIcon = document.querySelector('.theme__icon')
const sectionTitles = document.querySelectorAll('.section-title')
const navLinks = document.querySelectorAll('.nav-list__link')
const burgerMenu = document.querySelector('.menu .burger')

const modalContent = document.querySelector('.modal-content')

const emailLink = document.querySelector('.email > a')
const phoneLink = document.querySelector('.phone > a')

const rootPages = ['http://127.0.0.1:5500/', 'http://127.0.0.1:5500/index.html']
const subPages = [
	'http://127.0.0.1:5500/assets/pages/attractions.html',
	'http://127.0.0.1:5500/assets/pages/contacts.html',
	'http://127.0.0.1:5500/assets/pages/contacts.html#!',
	'http://127.0.0.1:5500/assets/pages/contacts.html?#',
]

document.addEventListener('DOMContentLoaded', () => {
	const currentHref = window.location.href
	const savedTheme = localStorage.getItem('theme') // get saved theme

	// if theme saved, apply theme
	if (savedTheme) {
		applyTheme(savedTheme)
	}

	sunIconBtn.addEventListener('click', () => {
		const isRootPage = rootPages.includes(currentHref)
		const isSubPage = subPages.includes(currentHref)

		if (isRootPage || isSubPage) {
			const isSunIcon = sunIcon.src.includes('sun.svg')
			const theme = isSunIcon ? 'dark-theme' : 'white-theme'
			const iconSrc = isSunIcon ? 'moon.svg' : 'sun.svg'
			const color = isSunIcon ? '#fff' : '#000'

			const iconPath = isRootPage
				? `./assets/img/${iconSrc}`
				: `../img/${iconSrc}`

			localStorage.setItem('theme', theme)

			changeTheme(iconPath, theme, color)
		}
	})
})

function applyTheme(theme) {
	const isDarkTheme = theme === 'dark-theme'
	const iconSrc = isDarkTheme ? 'moon.svg' : 'sun.svg'
	const color = isDarkTheme ? '#fff' : '#000'

	const iconPath = rootPages.includes(window.location.href)
		? `./assets/img/${iconSrc}`
		: `../img/${iconSrc}`

	changeTheme(iconPath, theme, color)
}

function changeTheme(src, themeClass, color) {
	bodyElem.classList.toggle('dark-theme', themeClass === 'dark-theme')
	bodyElem.classList.toggle('white-theme', themeClass === 'white-theme')

	headerElem.classList.toggle('dark-theme', themeClass === 'dark-theme')
	headerElem.classList.toggle('white-theme', themeClass === 'white-theme')

	sunIcon.src = src
	burgerMenu.classList.toggle('invert-color', themeClass === 'dark-theme')
	sunIcon.classList.toggle('invert-color', themeClass === 'dark-theme')

	try {
		modalContent.classList.toggle('dark-theme', themeClass === 'dark-theme')
		modalContent.classList.toggle('white-theme', themeClass === 'white-theme')

		emailLink.classList.toggle('dark-theme', themeClass === 'dark-theme')
		emailLink.classList.toggle('white-theme', themeClass === 'white-theme')

		phoneLink.classList.toggle('dark-theme', themeClass === 'dark-theme')
		phoneLink.classList.toggle('white-theme', themeClass === 'white-theme')
	} catch (err) {
		console.log('')
	}

	sectionTitles.forEach((elem) => (elem.style.color = color))
	navLinks.forEach((link) => (link.style.color = color))
}
