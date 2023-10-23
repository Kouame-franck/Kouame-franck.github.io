const listService = document.querySelector("#listservices");
const service = document.querySelector("#nav-services");
const navs = document.querySelector("#nav-principal");
const nav = navs.querySelectorAll("li > :not(#nav-services)");
console.log(nav)

service.addEventListener("mouseover",()=>{
listService.style.display = "initial";
})

listService.addEventListener("mouseover",()=>{
listService.style.display = "initial";
})

nav.forEach(elmt=>{

    elmt.addEventListener("mouseover",()=>{
        listService.style.display = "none";
        })
})

listService.addEventListener("mouseout",()=>{
listService.style.display = "none";
})


