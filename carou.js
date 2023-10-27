const caroussels = document.querySelector(".caroussels");
const caroussel = document.querySelector(".caroussel")
const slides = document.querySelectorAll(".slide");

// let clone =  caroussel.firstElementChild.cloneNode(true);       
// caroussel.appendChild(clone);
// nbr = caroussel.childElementCount;
// console.log(nbr);


let nbr = caroussel.childElementCount;
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const elips = document.querySelectorAll(".elips");

let long = caroussel.clientWidth;
let compteur = 0 ;

function nextSlide(){
     // caroussel.style.transform = "translateX(-200px)"; 
 
     if(compteur<slides.length -1 ){ 
        compteur ++;
        let defileur = compteur * long;
       caroussel.style.transform = `translateX(-${defileur}px)`;
    } else{
        return
    }
    
    for(i = 0 ; i<elips.length ; i++){
        if(i === compteur){   
            elips[i].classList.add("active");
        }else{
        elips[i].classList.remove("active");
        }
    }
}

function prevSlide(){
    if(compteur > 0){
        compteur-- ;
        let defileur = compteur * long;
        caroussel.style.transform = `translateX(-${defileur}px)`;
    
        for(i = 0 ; i<elips.length ; i++){
            if(i === compteur){   
                elips[i].classList.add("active");
            }else{
            elips[i].classList.remove("active");
            }
         }  
        }
}

function autoDefil(){
    compteur ++;
    if(compteur<nbr  ){ 
        caroussel.style.transition = "0.8s";
        let defileur = compteur * long;
        
       caroussel.style.transform = `translateX(-${defileur}px)`;
       
    }else if(compteur = nbr){
        compteur = 0;
        caroussel.style.transition = "0s";
        caroussel.style.transform = "translateX(0)";
    }
    
    for(i = 0 ; i<elips.length ; i++){
        if(i === compteur){   
            elips[i].classList.add("active");
        }else{
        elips[i].classList.remove("active");
        }
    }
}

next.addEventListener("click",nextSlide);
prev.addEventListener("click",prevSlide);
setInterval(autoDefil,6000);



