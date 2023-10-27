const nom = document.querySelector("#nom");
const email = document.querySelector("#mail");
const objet = document.querySelector("#objet");
const text = document.querySelector("#text");
const formulaire = document.querySelector("#formContact");
const info = document.querySelector(".flash-info");






const regex1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


entree = formulaire.email;
entree.addEventListener("change",function(){
validEmail(this);

})

nom.addEventListener("change",function(){
    validNom(this);
    
    })


const validNom = function(nom){  
    if (nom.value.length <3 ){
        console.log("text vide");
        document.querySelector(".petit").style.color = "red" ;
        document.querySelector(".petit").innerHTML = "veillez entrer un nom corect";
    return false ;
    }else{
    return true
    }
    }

const validEmail = function(entree){

    let emailRegex = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,8}$', 'g');
    let test = emailRegex.test(entree.value);

    if (test){
    document.querySelector(".petit").style.color = "green" ;
    document.querySelector(".petit").innerHTML = "email valid";
    return true ;
    }else if (entree.value === ""){
        document.querySelector(".petit").style.color = "red" ;
        document.querySelector(".petit").innerHTML = "veillez entrer votre email";
    return false ;
    }
    
    else if (text.value === ""){
        document.querySelector(".petit").style.color = "red" ;
        document.querySelector(".petit").innerHTML = "veuillez inscrire votre message";
        return false ;
        }
    else{
        document.querySelector(".petit").style.color = "red" ;
    document.querySelector(".petit").innerHTML = "l'email est invalide . ";
        return false;
    }
}




formulaire.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(validEmail(entree)){

        let titre = objet.value;
        let corpsMessage = "Nom : "+nom.value +"<br>"+"Email : "+ email.value +"<br>"+ "Objet : "+ objet.value + "<br>" + "Message : "+ text.value ;

        Email.send({
            SecureToken : "92fd0c31-06d4-46d1-9856-af1cc059179d",
            To : 'contact@globalservices-ci.com',
            From : "contact@globalservices-ci.com",
            Subject : titre,
            Body : corpsMessage
        }).then(
        message => console.log(message)  
        
        );
        nom.value = "";
        email.value = "";
        objet.value = "";
        text.value = "";
        document.querySelector(".petit").innerHTML = "";
        info.style.display = "initial";
        setTimeout(()=>{
            info.style.display = "none";
        },3000)


    }else if(nom.value === ""){
        document.querySelector(".petit").style.color = "red" ;
        document.querySelector(".petit").innerHTML = "veillez renseigner correctement les champs !";
        return
    } else if(entree.value === ""){
        document.querySelector(".petit").style.color = "red" ;
        document.querySelector(".petit").innerHTML = "Email obligatoir!";
        return
    }
    else if(text.value === ""){
        document.querySelector(".petit").style.color = "red" ;
        document.querySelector(".petit").innerHTML = "message vide !";
        return
    }
   
    else{
        document.querySelector(".petit").style.color = "red" ;
        document.querySelector(".petit").innerHTML = "veuillez saisir une addresse valide svp";
    return
    }

})