// let est utilisé pour les variables qui peuvent changer de valeur
let nom= "Decho"

// var n'est plus utilisé de nos jours, on utilise let ou const
var prenom= "Jean"
// const est utilisé pour les variables qui ne changent pas de valeur
const age= 25
const ville= "Paris"
const arr= [
    1, 2, 3, 4, 5]
const objet= 
    {
        nom: "Decho", 
        prenom: "Jean", 
        age: 25, 
        ville: "Paris"
}
// console.log est utilisé pour afficher des messages dans la console
console.log(nom)
console.log(prenom)
console.log(age)
console.log(ville)
console.log(arr)

// les loupes sont utilisées pour répéter une action plusieurs fois
//exemple avec for
for (let i=0; i<5; i++){
    console.log(i)
}
// exemple avec while
let i=0
while (i<5){
    console.log(i)
    i++
}
// exemple avec do while
let j=0
do {
    console.log(j)
    j++
}
while (j<5)
// exemple avec forEach
arr.forEach(function(element){
    console.log(element)
})
// exemple avec map
const arr2= arr.map(function(element){
    return element*2
})
console.log(arr2)


// Export/Import via ES6 en supposant que cette fonction dans un fichier math.js
export const somme= (a, b) => {
    return a+b
}

import {somme} from './math.js'
console.log(somme(2, 3)) //5 

// Export/Import directement comme un module node js
function somme(a, b) {
    return a + b;
}

module.export = somme;
const somme = require('./math');

console.log(somme(2, 3)); // Affiche 5
