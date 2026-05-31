// import fetchData from "./js/pixabay-api";
// import a from "./js/render-functions";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = form.elements['search-text'];
    const query = input.value.trim();
    if (!query) {
        iziToast.show({
            title: 'Warninig',
            titleColor: 'red',
            position:'topRight',
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return;
    }
  clearGallery(); 
    hideLoader();


    

  getImagesByQuery(query)
    .then(data => {
      createGallery(data.hits)
    })
    .catch(err => {
      console.error(err);
    })
      .finally(() => {
            showLoader();
    })

});

