import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const allGalleryImages = createGalleryImages(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', allGalleryImages)

function createGalleryImages(images) {
    return images
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`
    }).join('')
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
})