selectForm=document.querySelector(".breed-select"),selectForm.addEventListener("click",void fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then((e=>{const t=e.map((({id:e,name:t})=>`${e} ${t}`)).join("");console.log(t),id,name})));
//# sourceMappingURL=index.137f36c9.js.map
