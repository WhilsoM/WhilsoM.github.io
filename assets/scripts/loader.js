// imports
import { attractionsWrapper, isLoading } from './info-attractions.js'

const loaderTemplate = `<div class="loader"></div>`

export const Loader = () =>
	isLoading ? (attractionsWrapper.innerHTML = loaderTemplate) : ''
