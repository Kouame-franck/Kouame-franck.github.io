
function handleIntersection(entries, observer) {

    entries.forEach(entry => {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('animation');
       console.log("visile");
       observer.unobserve(entry.target)
      } 
      // else {
      //   entry.target.classList.remove('animation');
      //   console.log("invisible")
      //   // L'élément n'est plus dans la vue
      // }
    });
  }
  
 const ratio = .3;
  const options = {
    root: null, // Conteneur racine, null signifie la fenêtre du navigateur
    rootMargin: '0px', // Marge autour du conteneur racine
    threshold: ratio, // Quelle partie de l'élément doit être visible pour déclencher l'intersection
  };
  
  const observer = new IntersectionObserver(handleIntersection, options);
  
  // Observer un élément en utilisant sa référence
  const elementToObserve = document.querySelector('.animer');
  console.log(elementToObserve)
  observer.observe(elementToObserve);
  