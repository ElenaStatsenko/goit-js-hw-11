// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a";

const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';
const url = ` https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key= ${key}`

selectForm = document.querySelector('.breed-select');
selectForm.addEventListener('click', fetchBreeds() )
 function fetchBreeds() {
fetch('https://api.thecatapi.com/v1/breeds').then(response=> {
    
 return response.json();
}).then(cat => {
    const catBreed = cat.map(({id, name}) => `
    <select class="breed-select">
    <option value= ${id}>${name}</option>  
    </select>`
    ).join('')
    console.log(catBreed);
    selectForm.innerHTML = catBreed;

})
}



