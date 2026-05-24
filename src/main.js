// import fetchData from "./js/pixabay-api";
// import a from "./js/render-functions";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



import { getImage } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

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
    gallery.innerHTML = "";  
    loader.classList.remove("hidden");
    

  getImage(query)
    .then(data => {
      renderImages(data.hits)
    })
    .catch(err => {
      console.error(err);
    })
      .finally(() => {
          loader.classList.add("hidden");
        
    })

});

