import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryItems.forEach(item => createCatalog(item));

function createCatalog(item) {
const listElement = document.createElement('li')
listElement.classList.add('gallery__item')

const refElement = document.createElement('a')
refElement.classList.add('gallery__link')
refElement.setAttribute('href', item.original)

const imgElement = document.createElement('img')
imgElement.classList.add('gallery__image')
imgElement.setAttribute('src', `${item.preview}`)
imgElement.setAttribute('data-source', `${item.original}`)
imgElement.setAttribute('alt', `${item.description}`)

listElement.appendChild(refElement)
    refElement.appendChild(imgElement) 
    
    console.log(listElement);
}


