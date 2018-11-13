/* Ecrire un script qui test les 100 premiers nombres
on affichera fizz si le nombre est un multiple de 5
et buzz si c'est un multiple de 7 Attention certains nombres sont des multiples de 5 & 7*/


for (var i = 1; i <= 100; i++) {  
    if ( i % 5 == 0 ) {
      console.log("Fizz");
    }
    else if ( i % 7 == 0 ) {
      console.log("Buzz");
    }
    else if ( i % 5 == 0 && i % 7 == 0 ) {
      console.log("FizzBuzz");
    }
    else {
      console.log(i);
    }
  }