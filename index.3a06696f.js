!function(){import({key:n,breedId:breedId});var n="live_fksKLT6b3rWXK0Tu5oRKNInMZzCgNp9DLE15zuaKYxGuWwhtQAtLVAUkFZrwCO5a",t=document.querySelector(".breed-select"),r=document.querySelector(".cat-info");window.addEventListener("DOMContentLoaded",fetchBreeds()),fetchBreeds().then((function(n){var e=n.map((function(n){var e=n.id,t=n.name;return"\n    \n    <option value= ".concat(e,">").concat(t,"</option>  \n    ")})).join("");t.innerHTML=e})),t.addEventListener("change",fetchCatByBreed),fetchCatByBreed(e).then((function(n){return function(n){var e=n.map((function(n){return'\n \n <img class="gallery__image" src=\''.concat(n.url,"' width=300>\n ")})).join("");console.log(e);var t=n.flatMap((function(n){return n.breeds})).map((function(n){return"\n  <h1>".concat(n.name,"</h1>\n  <p>").concat(n.description,"</p>\n  <p>").concat(n.temperament,"</p>\n  ")}));r.innerHTML=e+t}(n)})).then((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.3a06696f.js.map
