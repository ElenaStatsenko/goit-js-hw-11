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
    const catBreed = cat.map(({id, name}) => `${id} ${name}`
    ).join('')
    console.log(catBreed);
renderBreed ({id, name});
})
}
function renderBreed({id, name}) {
    

}

// onst gallaryContainer = document.querySelector('.gallery'); 

// const images = galleryItems.map(({preview, original, description}) => `

// <li class="gallery__item">
//    <a class="gallery__link" href='${original}'>
//       <img class="gallery__image" src='${preview}' alt='${description}' />
//    </a>
// </li>`).join(''); 

// function renderSelect() {
//     // Создание элемента select
//     var selectElement = document.createElement('select');
  
//     // Добавление опций
//     var option1 = document.createElement('option');
//     option1.text = 'Опция 1';
//     selectElement.add(option1);
  
//     var option2 = document.createElement('option');
//     option2.text = 'Опция 2';
//     selectElement.add(option2);
  
//     var option3 = document.createElement('option');
//     option3.text = 'Опция 3';
//     selectElement.add(option3);
  
//     // Добавление события изменения значения
//     selectElement.addEventListener('change', function() {
//       console.log('Выбрано значение:', selectElement.value);
//     });
  
//     // Добавление select на страницу
//     document.body.appendChild(selectElement);
//   }
  
//   // Вызов функции для рендеринга select
//   renderSelect();
 
// gallaryContainer.insertAdjacentHTML('beforeend', images); 


