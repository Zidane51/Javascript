// Expliquer cette fonction et que retourne t-elle ?
/* Cette fonction permet de choisir un chiffre aléatoirement entre 0 et 10 dans un tableau et de le mettre à la fin de celui ci via 
la commande "array.push" ce qui permettra de réajuster le tableau, si le chiffre sélectionner est un chiffre à virgule alors il sera arrondit 
grâce à la commande Math.round
/*
/** 
  * 
  * @return {Array}
 */

function getRandArray(){
    var array = [];

    for(var i = 0; i < 10; i++){
        var n = Math.round(Math.random()*100);
        array.push(n);
    }

    return array;
}