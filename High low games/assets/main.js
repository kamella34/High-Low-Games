/*
Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
deviner le prix d'un produit. Ici, trois possibilités :
- C'est plus cher
- C'est moins cher
- C'est le juste prix !
Dans cette version du "Juste prix", nous générerons un
prix aléatoire, et nous calculerons le nombre de coups
qu'il faut à un joueur pour retrouver le juste prix.
Ainsi, il pourra se confronter à ses amis pour tenter de
voir qui retrouve le bon prix avec le moins de coups
possibles !
Je vous attends dans la prochaine session !
Etape 1 - Sélectionner nos éléments
Etape 2 - Cacher l'erreur
Etape 3 - Générer un nombre aléatoire
Etape 4 - Vérifier que l'utilisateur donne bien un nombre
Etape 5 - Agir à l'envoi du formulaire
Etape 6 - Créer la fonction vérifier

Couleur:
#004a6f
#2b9f88
*/



let input;
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let justePrix = Math.floor(Math.random() * 1000);
let message = document.querySelector(".titleThree");
let span = document.querySelector(".span");
let span1 = document.querySelector(".span1");
let p22 = document.querySelector(".p22");
let p33 = document.querySelector(".p33");
console.log(justePrix);
let tour = 1;
let nbrT = 0;


   

btn.addEventListener("click", function () {

    input = document.querySelector(".input").value;

    if (isNaN(input) || input === "" || input === " "|| input === "   "|| input === "    " ) {
        span.textContent = `" OUPSSY " Erreur de saisie !!! `;
       
    } else {
        if (input < justePrix) {
            span.textContent = "C'est Plus";
            p22.textContent = input;
            
           
        } else if (input > justePrix) {
            span.textContent = "C'est Moins";
            p22.textContent = input;
            
           
        }else if(nbrT == 5){
            span.textContent = "Fin du Game"; 
            console.log("hello")

        } else if ( input==justePrix) {
            span.textContent = `Félicitation le chiffre été bien "${justePrix}"`
            span1.textContent = `Tu as reussi en ${nbrT +1} tours `;
            p22.textContent = input;
           
           
  
        }

        nbrT = nbrTour();
    }
    
})



function nbrTour (){
    return p33.textContent = tour ++;
     }

// function restart(){
//     nbrT= 1
//     p22 = 0;
//     p33 = 0;
//     input = 0;
//  }
 

  



