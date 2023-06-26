// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a";

const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';
const url = ` https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key= ${key}`


selectForm = document.querySelector('.breed-select');
selectForm.addEventListener('DOMContentLoaded', fetchBreeds() )
 function fetchBreeds() {
fetch('https://api.thecatapi.com/v1/breeds').then(response=> {
    
 return response.json();
}).then(cat => {
    const catBreed = cat.map(({id, name}) => `
    
    <option value= ${id}>${name}</option>  
    `
    ).join('')
    console.log(catBreed);
    selectForm.innerHTML = catBreed;

})
};
 selectionForm.addEventListener('click',fetchCatByBreed(breedId));
 function fetchCatByBreed(breedId) {

  fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`).then(response=> {
    
 return response.json();
}).then(cat => {
    console.log(cat)
})
 }




// function work() { /*...*/ }

// if (document.readyState == 'loading') {
//   // ещё загружается, ждём события
//   document.addEventListener('DOMContentLoaded', work);
// } else {
//   // DOM готов!
//   work();
// }


