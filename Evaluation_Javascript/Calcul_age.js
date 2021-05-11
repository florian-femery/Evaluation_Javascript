//J'appelle l'Id du bouton .
let tranchAge =document.getElementById("tranche"); 
//J'enclenche la fonction a partir du clic du bouton.
tranchAge.addEventListener('click' ,function() {tranche()});
//Je crée la fonction.
function tranche(){
// Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre.
    var controle =/^[0-9]+$/;
//D'éclaration d'une fonction.
    function _calcul(){
        //Déclaration des variables utilisé dans la fonction
        var age= 0;
        var j= 0;
        var m= 0;
        var v= 0;
// Lancement d'une boucle tant que la variable "age" est plus petite que 100
        age = prompt("Quelle est l'age de la personne ?");
            if (age == null){
                window.close();
            }else {
                if (!controle.test(age)) {
                    alert("Il faut entrer un nombre \n Recommencez !");
                    window.location.reload(_calcul());
                    // La page est rechargé et la fonction réexcuté
                }
                else {
                    age = parseInt(age);
                    if (age > 100) {
                        v++;
                    }
                    else if (age < 20) {
                        j++;
                    }
                    else {
                        m++;
                    }
                    while (age < 100) {
                        age = parseInt(prompt("Quelle est l'age de la personne ?"));
                        // Utilisation d'un parseInt pour passer la valeur de "age" en int 
                        if (!controle.test(age))
                        // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
                        // du regex on entre dans la condition 
                        {
                            alert("Il faut entrer un nombre \n Recommencez !");
                            window.location.reload(_calcul());
                            // La page est rechargé et la fonction réexcuté
                        }
                        // Incrément des compteurs correspondant aux valeurs paramettré en fonction de leur conditios
                        if (age < 20) {
                            j++;
                        }
                        else if (age >= 20 && age <= 40) {
                            m++;
                        }
                        else {
                            v++;
                        }
                    }
                }
            }
alert("Il y a " + j + " jeunes \n Il y a " + m + " moyens \n Il y a " + v + " vieux");
    if (confirm("Voulez vous recommencer ?") == true) {
        window.location.reload(_calcul());
        // La page est rechargé et la fonction réexcuté
    }else {
            window.close();
            // Fonction fermant la page
        }
    }
_calcul();
// Execution de la fonction
}