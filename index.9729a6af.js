selectForm=document.querySelector(".breed-select"),selectForm.addEventListener("click",void fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then((e=>{const t=e.map((({id:e,name:t})=>`\n    <select class="breed-select">\n    <option value= ${e}>${t}</option>  \n    </select>`)).join("");console.log(t),selectForm.innerHTML=t})));
//# sourceMappingURL=index.9729a6af.js.map
