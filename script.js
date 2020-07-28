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
    var tmp;

    contexte.beginPath();
    
    // Création axe X
    contexte.moveTo(0, height/2);
    contexte.lineTo(width, height/2);

    // Graduation axe X
    for(tmp = 0; tmp < width; tmp += 10){
        contexte.moveTo(tmp, height/2);
        contexte.lineTo(tmp, height/2 + 5);
        contexte.lineTo(tmp, height/2 - 5);
    }

    // Création axe Y
    contexte.moveTo(width/2, 0);
    contexte.lineTo(width/2, height);

    // Graduation axe Y
    for(tmp = 0; tmp < height; tmp += 10){
        contexte.moveTo(width/2, tmp);
        contexte.lineTo(width/2 + 5, tmp);
        contexte.lineTo(width/2 - 5, tmp);
    }
    
    contexte.stroke();
}