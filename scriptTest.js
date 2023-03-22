//Hides refresh button on load, could be optimized in the future
window.onload = function() {
    document.getElementById("refresh").style.display="none";
};

//Clears all the check boxes
function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') //Get all the boxes that are checked
    for (var i = 0; i < checkedBoxes.length; i++) { //Run through each checked box and uncheck it
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') //Gets all the boxes that were checked
    var score = 100 - totalChecked.length //Subtracts the amount of boxes checked from 100, which results in the score

    //Associates your score with what it says about you
    var meaning;
    if (score >= 98) {
        meaning = "You&#39re as pure as gold. It would be difficult for anyone over the age of 18 to get this score."
    } else if (score >= 94) {
        meaning = "You&#39re still considered pretty pure. Maybe you&#39ve had your first kiss or held hands with someone, but you haven&#39t gone much further than that."
    } else if (score >= 77) {
        meaning = "This is about the average score range, which signifies that you are not an averagely pure person. Maybe you&#39ve french kissed before or even gone down below the belt!"
    } else if (score >= 45) {
        meaning = "This score means you might have your fair share of alcohol, drugs, or sexual experiences."
    } else if (score >= 9) {
        meaning = "A score in this range is definitely below average. You may have been to jail, used hard drugs, or had public sex."
    } else {
        meaning = "This score means you&#39ve done some pretty wild stuff, including maybe even paying for or being paid for a sexual act."
    }

    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "Your Score: " + score.toString() //Sets the div text to your score
    meaningDiv.innerHTML = meaning //Sets the div text to your meaning
    document.getElementById("refresh").style.display="inline"; //Reveals the refresh page button
    document.body.scrollTop = 0; // Scrolls to top of the page for Safari
    document.documentElement.scrollTop = 0; // Scrolls to the top of the page for Chrome, Firefox, IE, and Opera
}

//Clears the page (clear page button)
function clearPage() {
    clearBoxes() //Calls the clearBoxes function to clear all the boxes
    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "" //Makes the score div blank
    meaningDiv.innerHTML = "" //Makes the meaning div blank
    document.getElementById("refresh").style.display="none"; //Hides the clear page button button
}