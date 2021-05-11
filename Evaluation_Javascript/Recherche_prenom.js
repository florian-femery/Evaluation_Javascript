// J'appel l'ID du bouton
let tabnom =document.getElementById("Table");
//Je déclenche la fonction "tableau" à partir du bouton
tabnom.addEventListener("click", function () { tableau3() })
// Je crée la fonction tableau
function tableau3(){
    var tab=["Audrey", "Aurélien", "Flavien", "Laurent", "Melik" ,"Nouara", "Salem", "Samuel", "Stéphane"];
    var prenom =prompt("Veuillez écrire un prenom");
        // Je transforme les valeurs et le prénom indiqué en majuscules pour éviter la casse (toUpperCase)
        for (let i =0; i<tab.length; i++){
            tab[i] =tab[i].toUpperCase();
        }
    prenomMaj =prenom.toUpperCase();
    // On demande le prénom
    var check =tab.includes(prenomMaj);
        // La variable check va comparer les prénoms du tableau avec celui rentré en paramettre et renvoyer true si il y est et false si non
        if (check){// Abréviation pour dire "si check vaut true"
            // La fonction splice va supprimer l'élément et l'index qui ce trouve a l'index du tableau qu'on lui donne
            tab.splice(tab.indexOf(prenomMaj), 1);
            // Affiche une valeur vide
            tab.push("");
        }else{
            alert("Prenom pas dans la liste");
        }
    alert(tab);
}