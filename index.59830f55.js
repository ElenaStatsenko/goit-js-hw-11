const e=document.querySelector(".breed-select"),n=document.querySelector(".cat-info");window.addEventListener("DOMContentLoaded",void fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then((n=>{const t=n.map((({id:e,name:n})=>`\n    \n    <option value= ${e}>${n}</option>  \n    `)).join("");e.innerHTML=t}))),e.addEventListener("change",(function(e){const t=e.target.value;fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}&api_key=live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a`).then((e=>e.json())).then((e=>function(e){const t=e.map((e=>`\n \n <img class="gallery__image" src='${e.url}' width=300>\n `)).join("");console.log(t);const o=e.flatMap((e=>e.breeds)).map((e=>`\n  <h1>${e.name}</h1>\n  <p>${e.description}</p>\n  <p>${e.temperament}</p>\n  `));n.innerHTML=t+o}(e))).then((e=>console.log(e)))}));
//# sourceMappingURL=index.59830f55.js.map
