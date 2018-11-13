/* Ecrire un script qui demande un mot à l'utilisateur et qui affiche à l'écran
le nombre de lettre.
 */
var mot = prompt("Saisir un mot");


console.log("Le mot contient " + mot.length + " lettre");


/* Écrire un script qui demande une phrase à l'utilisateur et affiche à l'écran
le nombre de mots de cette phrase. On suppose que les mots ne sont séparés que par
des espaces
 */

 var phrase = prompt('veuillez saisir une phrase');
function compte_mots(phrase){
     var espace ='';
     var espacePrec ='';
     var nb_mots = 0;
     var i = 0;

     while(i < length(phrase)){
         espace && espacePrec == espace && phrase[i]
         i += 1;
         if (espacePrec == '' && espace == ''){
             nb_mots +=1;
         }
        
     }
     return nb_mots 
}


/* Écrire une fonction qui retourne le nombre de voyelle dans une phrase */

function voyelle(str) {
    var compteurVoyelle = 0;
    var string = str.toString();
  
 
    for (var i = 0; i <= string.length ; i++) {
  
   
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "y" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        compteurVoyelle += 1;
      }
    }
    return compteurVoyelle;
  }