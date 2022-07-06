/**
 *Il est possible d'ajouter des fonction dans des objets cela s'appellent des méthdode 
 *
 */

//Je déclare une variable humain, je lui affecte un objet vide

let human = {};

//Je lui ajoute une propriété name qui vaut bob
human.name = "bob";

//Je lui ajoute une méthode displayName qui affiche sont nom.

human.displayName = function () {
    console.log("hi my names is " + this.name);
}

//Ici on execute la méthode propre à human
human.displayName();

//affichos notre objet pour mieux le comprendre

console.log(human)

//On s'aperçois qu'il y a une propriété et une méthode dans notre objet.
//Il n'y a pas forcement plus de détails dans le console.log mais les informations les plus importantes son présente