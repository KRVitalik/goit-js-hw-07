import { galleryItems } from './gallery-items.js';
// Change code below this line

const allElementOfGallery = document.querySelector('.gallery')

const isCreateAllCatalog = galleryItems.map((item) => {
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

return listElement;
})

allElementOfGallery.append(...isCreateAllCatalog);
allElementOfGallery.addEventListener('click', (onItemClick))

function onItemClick(e) {
    e.preventDefault();
    
    if (e.target.classList.value !== 'gallery__image') {
        return
    }
    isOriginalImageOpen(e)
}

function isOriginalImageOpen(item) {
    const instance = basicLightbox.create(
        `<img src="${item.target.dataset.source}" width="800" height="600">`)
        
        instance.show()
    closeOriginalImage(instance)
} 

function closeOriginalImage(instance) {
    document.addEventListener('keydown', (event) => {
        if (event.code !== 'Escape') {
            return
        }
        instance.close()
        return
    })
}


