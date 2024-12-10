// imports
import { isLoading } from './global.js'
import { attractionsWrapper } from './info-attractions.js'

export const Loader = () => {
	const div = document.createElement('div')
	div.classList.add('loader')

	return isLoading ? attractionsWrapper.appendChild(div) : ''
}
