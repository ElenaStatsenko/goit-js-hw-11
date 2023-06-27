// import axios from "axios";

const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';

const selectForm = document.querySelector('.breed-select');
const divCat = document.querySelector('.cat-info');

window.addEventListener('DOMContentLoaded', fetchBreeds())

//функция рендера списка пород котов 
function fetchBreeds() {
fetch('https://api.thecatapi.com/v1/breeds').then(response=> {
    
 return response.json();
}).then(cat => {
    const catBreed = cat.map(({id, name}) => `
    
    <option value= ${id}>${name}</option>  
    `
    ).join('')
    
    selectForm.innerHTML = catBreed;
  })
};

    selectForm.addEventListener('change', fetchCatByBreed);

    //функция вызова картинки по породе 
    function fetchCatByBreed(e) {
        
        const breedId = e.target.value;
        const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${key}`;

        // console.log(breedId);
      
        
        fetch(url).then(response=> {
            return response.json();
            }).then(cat => {
            console.log(cat);
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


