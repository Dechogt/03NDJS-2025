import { add, diff, prod, quot } from './calcul.js'

console.log("Prenons a = 10 et b = 3 pour tester ces fonctions") 
console.log("En faisant l'addition de a et b on obtient " + add(10, 3)) // Affiche 13
console.log("En faisant la différence de a par b on obtient " + diff(10, 3)) // Affiche 7
console.log("En faisant le produit de a et b on obtient " + prod(10, 3)) // Affiche 30
console.log("En faisant le quotient de a et b on obtient " + quot(10, 3)) // Affiche 3.33