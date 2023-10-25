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

// /affficher masquer suite de texte aprropo

function toggleText() {
    var texteCache = document.getElementById("texteCache");
    var suite = document.getElementById("suite");

    if (texteCache.style.display === "none") {
        texteCache.style.display = "block";
        suite.textContent = "Masquer";
    } else {
        texteCache.style.display = "none";
        suite.textContent = "..Lire la suite";
    }
}


// /afficher cacher menue lateral

const menueBar = document.querySelector("#menue-bar");
const menueFermer = document.querySelector("#croix");
const menuelateral = document.querySelector("#menue-lateral");

menueBar.addEventListener("click",()=>{
menueBar.style.display = "none";
menueFermer.style.display = "initial";
menuelateral.style.left = "0";
})

menueFermer.addEventListener("click",()=>{
    menueBar.style.display = "initial";
    menueFermer.style.display = "none";
    menuelateral.style.left = "-100%";
})

