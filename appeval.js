// Expliquer cette procédure, que fait elle ?

/* Il est fortement conseillé d'utiliser
la doc en ligne sur JavaScript (mdn,devdocs,w3school etc...) */

// Expliquer les lignes 19 & 20
// Expliquer la ligne 30
// Expliquer les ligne 49 à 54

var kewlArray = ['Bien', 'Good', 'Super', 'Génial', 'Youpi !', 'Right'];
var notKewlArray = ['Pas bien', 'Bouh !', 'Bad', 'Zéro !', 'Wrong', 'Nul'];
var title = document.querySelector('h1');

function createSquare(){

    var body = document.querySelector('body');
    
    var square = document.createElement('div') // Cette partie permet de créer une balise <div></div> du coté HTML
    square.classList.add('square'); // Cette permet d'ajouter la classe spécifiées ('square') qui est assignée dans la partie HTML.
    

    
    var circle = document.createElement('div');
    circle.classList.add('circle');
    
    var containerStick = document.createElement('div');
    containerStick.classList.add('cross--container', 'hide');
    
    var leftStick = document.createElement('div');
    leftStick.classList.add('left-stick');
    
    var rightStick = document.createElement('div');
    rightStick.classList.add('right-stick');

    title.innerHTML = 'Click me !';
    
    containerStick.append(leftStick);
    containerStick.append(rightStick);
    square.append(circle); /* La méthode ParentNode.append insère un ensemble d’objets Node ou DOMString après le dernier enfant de ParentNode. 
    Les objets DOMString (c’est-à-dire les chaînes de caractères) sont insérés comme nœuds Text équivalents. */
    square.append(containerStick);
    body.appendChild(square);

    containerStick.addEventListener('click', (e) => {
        var target = e.target;

        if(target.className === 'cross--container'){

            target.previousSibling.classList.toggle('hide');
            target.classList.toggle('hide');
            title.innerHTML = kewlArray[getRandomInt(6)];

        }
    }); 

    circle.addEventListener('click', (e) => {
        var target = e.target;

        target.nextSibling.classList.toggle('hide');
        target.classList.toggle('hide');
        title.innerHTML = notKewlArray[getRandomInt(6)];

    }); // La méthode addEventListener() met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible.
}

/**
 *
 * @param max {int}
 * @return {number}
 */

function getRandomInt(max){

    return Math.floor(Math.random() * Math.floor(max));

}