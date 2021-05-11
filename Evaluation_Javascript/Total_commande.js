// J'appel l'ID du bouton.
let TDC =document.getElementById("commande");
// Je déclenche la fonction à partir du  bouton.
TDC.addEventListener("click", function () { remise() } );
// Je crée la fonction.
function remise(){
    var PU =parseFloat(prompt("Prix unitaire"));
    var QTECOM =parseInt(prompt("Quantité commandée"));
    var TOT =PU *QTECOM;
    var PORT =0.02 *TOT;
    var REM5 =TOT *0.05;
    var REM10 =TOT *0.1;
    var PAP =0;
        // Si les informations renseignées ne sont pas des nombres, on renvoie une erreur.
        if (isNaN(PU && QTECOM)){
            alert('Erreur, saisissez des nombres');
        }else{
            // Si TOT est supérieur à 500, le Prix à Payer sera de TOT - la Remise de 10.
            if (TOT >500){
                PAP =TOT -REM10;
                alert ("Le prix sera de"+ PAP +"€.")
            }
                // Sinon Si TOT supérieur à 200 ET TOT inférieur ou égal à 500, le prix à payer sera de TOT - la Remise de 10%, + le port.
             else if (TOT >200 && TOT <500){
                 // Si le port est inférieur à 6, il sera minimum de 6€
                    if (PORT <6){
                        PORT=6;
                    }else {
                        PORT = 0.02 * TOT;
                      }
                      PAP = TOT - REM10 + PORT;
                      alert('Le prix à payer sera de ' + PAP + '€.');
             }
                // Sinon Si TOT inférieur ou égal à 200 ET TOT supérieur ou égal à 100, le prix à payer sera de TOT - Remise de 5% + le port de 6€.
                else if (TOT <=200 && TOT >=100){
                    PAP =TOT -REM5+6;
                    alert('Le prix à payer sera de ' + PAP + '€.');
                }
                      // Sinon, le prix à payer sera de TOT + le port de 6€
                      else {
                          PAP =TOT+6;
                          // PAP.tofixed(2) ===> Fixe la valeur de PAP à deux décimales.
                          alert('Le prix à payer sera de ' + PAP.toFixed(2) + '€.'); 
                      }
        }
}