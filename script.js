var frequence;
var amplitude;

function afficher() {
    var graphique = document.getElementById("graphique");
    var contexte = graphique.getContext("2d");

    frequence = document.getElementById("frequence").value;
    amplitude = document.getElementById("amplitude").value;

    document.getElementById("afficherAmp").innerHTML = amplitude;
    document.getElementById("afficherFreq").innerHTML = frequence;
}