
//функция вызова котов по url
    const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';
    
    function fetchBreeds() {
         return fetch('https://api.thecatapi.com/v1/breeds')
        .then(response=> response.json())
      }

//функция вызова кота
      function fetchCatByBreed(breedId) {
   
        const urlCat = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${key}`;

        // console.log(breedId);
    
         return fetch(urlCat)
        .then(response => response.json()
            )
          }
          export { fetchBreeds, fetchCatByBreed };