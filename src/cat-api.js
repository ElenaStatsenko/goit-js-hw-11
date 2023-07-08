
    
    const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';
    function fetchBreeds() {
        fetch('https://api.thecatapi.com/v1/breeds').then(response=> {
            
         return response.json();
        })
      }

      function fetchCatByBreed(e) {
        const breedId = e.target.value;
        const urlCat = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${key}`;

        // console.log(breedId);
    
        fetch(urlCat)
        .then(response=> {
            return response.json();
            })
          }
          export default({key, breedId})