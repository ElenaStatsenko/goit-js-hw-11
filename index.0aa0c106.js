selectForm=document.querySelector(".breed-select"),selectForm.addEventListener("DOMContentLoaded",void fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then((e=>{const t=e.map((({id:e,name:t})=>`\n    \n    <option value= ${e}>${t}</option>  \n    `)).join("");console.log(t),selectForm.innerHTML=t}))),selectionForm.addEventListener("click",(breedId,void fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`).then((e=>e.json())).then((e=>{console.log(e)}))));
//# sourceMappingURL=index.0aa0c106.js.map
