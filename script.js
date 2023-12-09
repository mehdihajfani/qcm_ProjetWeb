document.getElementById("quiz-form").addEventListener('submit', function(check) {
    
    check.preventDefault();
    
    var answer1 = document.querySelectorAll('input[name="answer-1"]:checked');
    var answer2 = document.querySelectorAll('input[name="answer-2"]:checked');
    var answer3 = document.querySelectorAll('input[name="answer-3"]:checked');

    var qst = document.querySelectorAll('li[class="question-item"]');

    if (answer1.length > 0) {
        var reponse1 = answer1[0].value;
        if (reponse1 == "true") {
            qst[0].style.color = "green";
        } else {
            qst[0].style.color = "red";
        }
    } 
    
    if (answer2.length > 0) {
        var reponse2 = answer2[0].value;
        if (reponse2 == "true") {
            qst[1].style.color = "green";
        } else {
            qst[1].style.color = "red";
        }
    } 
    
    if (answer3.length > 0) {
        var reponse3 = answer3[0].value;
        if (reponse3 == "true") {
            qst[2].style.color = "green";
        } else {
            qst[2].style.color = "red";
        }
    } 

    var alerte = document.getElementById("alert");
    if (reponse1 == reponse2 && reponse2 == reponse3 && reponse1 == reponse3) {
        alerte.style.display = "block";
    } else {
        alerte.style.display = "none";
    }

});

