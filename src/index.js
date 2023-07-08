// import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';

const selectForm = document.querySelector('.breed-select');
const divCat = document.querySelector('.cat-info');
const pLoader = document.querySelector('.loader')

window.addEventListener('DOMContentLoaded', onClick)
function onClick () {
  showLoader();
  fetchBreeds()
  .then(cat => {
    const catBreed = cat.map(({id, name}) => `
    
    <option value= ${id}>${name}</option>  
    `
    ).join('')
    
    selectForm.innerHTML = catBreed; 
  });
}
  
selectForm.addEventListener('change', fetchCat);

//     //функция вызова картинки по породе 
  function fetchCat(e) {
    
    const breedId = e.target.value;
    showLoader();
    fetchCatByBreed(breedId) 
        .then(data => renderCat(data))
  }
       

function renderCat(cat) {
  console.log(cat);
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
    hideLoader()
        
}
// function onErorr(err) {
//   console.log(err);
// }
 
function showLoader(){
  pLoader.style.display = 'block';
}
function hideLoader() {
  pLoader.style.display = 'none';
}


