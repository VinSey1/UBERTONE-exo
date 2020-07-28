var frequence;
var amplitude;

function afficher() {
    var graphique = document.getElementById("graphique");
    var contexte = graphique.getContext("2d");

    frequence = document.getElementById("frequence").value;
    amplitude = document.getElementById("amplitude").value;

    document.getElementById("afficherAmp").innerHTML = amplitude;
    document.getElementById("afficherFreq").innerHTML = frequence;

    afficherAxes(contexte);
    contexte.save();
}

function afficherAxes(contexte) {
    var width = contexte.canvas.width;
    var height = contexte.canvas.height;

    contexte.beginPath();
    
    // Création axe X
    contexte.moveTo(0, height/2);
    contexte.lineTo(width, height/2);

    // Création axe Y
    contexte.moveTo(width/2, 0);
    contexte.lineTo(width/2, height);
    
    contexte.stroke();
}