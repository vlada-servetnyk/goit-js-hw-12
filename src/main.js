
import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-function";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import errorImage from './img/error.png';

const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
});
            
const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const btnLoadMore = document.querySelector(".btn-none");
let inputSearch = "";
let page = 1;

form.addEventListener("submit", handleSearch);

btnLoadMore.addEventListener("click", clickLoadMore);

async function handleSearch(event) {
    event.preventDefault();
    page = 1;
    btnLoadMore.classList.replace("btn-load-more", "btn-none");
    gallery.innerHTML = "";
    let inputElement = event.target.elements.name;
    inputSearch = inputElement.value.trim();
    if (!inputSearch) {
        iziToast.show({
            title: '',
            iconUrl: `${errorImage}`,
            backgroundColor: 'red',
            messageColor: 'white',
            message: `Enter the data for the search!`,
            position: 'topRight',
        }
        );
        return;
    };
    loader.style.display = "inline-block";
    

    try {
        const data = await fetchImages(inputSearch, page);
        console.log(data);
        
        if (data.hits.length === 0) {
            btnLoadMore.classList.replace("btn-load-more", "btn-none");
            loader.style.display = "none";
            iziToast.show({
                title: '',
                iconUrl: `${errorImage}`,
                backgroundColor: 'red',
                messageColor: 'white',
                message: `Sorry, there are no images matching your search query. Please try again!`,
                position: 'topRight',
            });
            return
        };

        gallery.insertAdjacentHTML("beforeend", renderImages(data.hits));

        if (data.hits.length < 15 || data.total === 15) {
            btnLoadMore.classList.replace("btn-load-more", "btn-none");
            loader.style.display = "none";
            iziToast.show({
                    title: '',
                    backgroundColor: 'blue',
                    messageColor: 'white',
                    message: `We're sorry, but you've reached the end of search results.`,
                    position: 'topRight',
            })
            return
        }
        
        btnLoadMore.classList.replace("btn-none", "btn-load-more");
        lightbox.refresh();
        inputElement.value = "";
        loader.style.display = "none";
        
    } catch (error) {
                iziToast.show({
                    title: '',
                    iconUrl: `${errorImage}`,
                    backgroundColor: 'red',
                    messageColor: 'white',
                    message: `Sorry, ${error.message}. Please try again!`,
                    position: 'topRight',
                })
    }
}

async function clickLoadMore() {
    page += 1;

    btnLoadMore.classList.replace("btn-load-more", "btn-none");
    loader.style.display = "inline-block";

    try {
        const response = await fetchImages(inputSearch, page);
        
        gallery.insertAdjacentHTML("beforeend", renderImages(response.hits));

        btnLoadMore.classList.replace("btn-none", "btn-load-more");
        loader.style.display = "none";

        const img = document.querySelector(".gallery-item");
        const imgHeight = img.getBoundingClientRect().height;

        window.scrollBy({
            left: 0,
            top: imgHeight * 2,
            behavior: "smooth"
         })    
        
        if(response.hits.length < 15) {
            btnLoadMore.classList.replace("btn-load-more", "btn-none");
            iziToast.show({
                    title: '',
                    backgroundColor: 'blue',
                    messageColor: 'white',
                    message: `We're sorry, but you've reached the end of search results.`,
                    position: 'topRight',
                })
        }
    } catch (error) {
        iziToast.show({
                    title: '',
                    iconUrl: `${errorImage}`,
                    backgroundColor: 'red',
                    messageColor: 'white',
                    message: `Sorry, ${error.message}. Please try again!`,
                    position: 'topRight',
                })
    }
    
}

