# dojo2
/*Sujet du dojo :  à l'aide d'une fonction qui prend en paramètre un nombre, veuillez décomposer la méthode js reverse 
(attention aux types de données comme d'habitude. Exemple de test : assert.deepStrictEqual(reverse(13578), 87531) */
function reverse(number){ //on crée une fonction
    let numberStr=number.toString() // on converti cette variable en chaine de charactère
    let array = numberStr.split(''); // on crée un tableau et on decoupe chaque element de la chaine de charactère qu'on va mettre dans ce tableau 
    console.log(array)// affiche ['1', '2', '3', '4', '5']
    let reverseArray =[]; // on crée un nouveau tableau vide 
    
    for( i = 0 ; i < array.length; i++ ){ // on fait une boucle en parcourant le tableau "array"
        reverseArray.unshift( array[i]); // on rempli le tableau reversArray avec le [i] de array en 
        
    }
    let result = reverseArray.join(''); // on remet reverseArray en string ou tout les element sont joins.
    console.log(parseInt(result)); // on les defini en nombre mais il reste une chaine de caractère
}
reverse(12345); // on met un nombre 12345 dans la fonction et il a le resultat 54321 
