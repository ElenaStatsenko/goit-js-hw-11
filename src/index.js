// import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';

// const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';

const selectForm = document.querySelector('.breed-select');
const divCat = document.querySelector('.cat-info');
const pLoader = document.querySelector('.loader');
const pError = document.querySelector('.error')


window.addEventListener('DOMContentLoaded', onClick)

function onClick () {
  pLoader.classList.remove('visually-hidden');   
  textErorrhide();
  fetchBreeds()
  .then(cat => {
    const catBreed = cat.map(({id, name}) => `
    
    <option value= ${id}>${name}</option>  
    `
    ).join('')
    
    selectForm.innerHTML = catBreed; 
   
  })
  .catch(error => onErorr());
}
  
selectForm.addEventListener('change', fetchCat);

//     //функция вызова картинки по породе 
  function fetchCat(e) {
    
    const breedId = e.target.value;
    pLoader.classList.remove('visually-hidden'); 
    textErorrhide();
    fetchCatByBreed(breedId) 
        .then(data => renderCat(data))
        .catch(error => onErorr());
        
  }
       

function renderCat(cat) {

const catUrl = cat.map(cat => `
 
 <img class="gallery__image" src='${cat.url}' width=300>
 `
  ).join('');
  
 const catBreed = cat.flatMap(cat => cat.breeds).map(item =>`
  <h1>${item.name}</h1>
  <p>${item.description}</p>
  <p>${item.temperament}</p>
  `
    )
    divCat.innerHTML= catUrl + catBreed;
   
    
        
}

function onErorr() {
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}
 
function textErorrhide() {
  pError.style.display = 'none'; 
}




