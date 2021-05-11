// J'appel l'ID du bouton
let multiple = document.getElementById("multiple");  
// Je déclenche la fonction à partir du clic sur le bouton
multiple.addEventListener("click", function () { tablemultiple() });
// Je crée la fonction
function tablemultiple(){
// Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
  var controle = /^[0-9]+$/;
// Déclaration d'une fonction
    function _TableMultiplication(){
        // Déclaration des variables utilisé dans la fonction
        var res = 0;
        var i = 0;
        var tab = [];
        var X = prompt("Entrez le nombre correspondant à la table de multiplication souhaité");
        if (X == null) {
            window.close();
        }else {
            X = parseInt(X);
            if (!controle.test(X)){
            // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
            // du regex on entre dans la condition
            alert("Il faut entrer un nombre \n Recommencez !");
            window.location.reload(_TableMultiplication());
            // La page est rechargé et la fonction réexcuté
        }
        while (i <= 10){
        // lancement d'une boucle tant que i est plus petit que 10
            res = i * X;
            tab[i] = (i + " x " + X + " = " + res + "\n");
            // La valeur trouvé dans res est stocké dans un index du tableau correspondant a 
            // mon compteur "i" . Elle est stocké au sein d'une phrase
            i++;
        }
        if (tab != 0) {
            tab = tab.join("");
            alert(tab);
        }
        if (confirm("Voulez vous recommencer ?") == true) {
            window.location.reload(_TableMultiplication());
            // La page est rechargé et la fonction réexcuté
        }
    }
}
_TableMultiplication();
// Execution de la fonction
} 