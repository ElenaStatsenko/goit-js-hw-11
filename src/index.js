// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a";

const key = 'live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a';
const url = ` https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key= ${key}`

selectForm = document.querySelector('.breed-select');

fetch('https://api.thecatapi.com/v1/images/search?breed_ids=${}').then(data => {
    console.log(data)
})