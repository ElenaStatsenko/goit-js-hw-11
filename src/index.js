// import axios from "axios";
import ({key, breedId}) './cat-api.js'

const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';

const selectForm = document.querySelector('.breed-select');
const divCat = document.querySelector('.cat-info');

window.addEventListener('DOMContentLoaded', fetchBreeds())

// функция рендера списка пород котов 
 fetchBreeds().then(cat => {
    const catBreed = cat.map(({id, name}) => `
    
    <option value= ${id}>${name}</option>  
    `
    ).join('')
    
    selectForm.innerHTML = catBreed;
  });

    selectForm.addEventListener('change', fetchCatByBreed);

    //функция вызова картинки по породе 
   fetchCatByBreed(e) 
        .then(cat =>  renderCat(cat))
        .then(markup => console.log(markup))
    
        

function renderCat(cat) {

const catUrl = cat.map(cat => `
 
 <img class="gallery__image" src='${cat.url}' width=300>
 `
  ).join('');
  console.log(catUrl);

 const catBreed = cat.flatMap(cat => 
  cat.breeds
  ).map(item =>`
  <h1>${item.name}</h1>
  <p>${item.description}</p>
  <p>${item.temperament}</p>
  `
    )
    
    divCat.innerHTML= catUrl + catBreed;
        
}
 
