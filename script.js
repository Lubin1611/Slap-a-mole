/**
 * Created by sstienface on 03/12/2018.
 */


const holes = $(".hole"); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $(".score"); //utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $(".mole"); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

var totobol = 0;
var rdnHole;
var startbol = 0;
var score = 0;
var time;
var testSec = 10;

var chrono = function() {

    time = setTimeout(chrono, 1000);
    testSec--;

    if (testSec < 0) {
        clearTimeout(time);
    }


};

chrono();

var scoreCompteur = function () {

    holes.click(function () {
        score++;
        $(".score").html(score);
        console.log(score);
    });
};

scoreCompteur();

    function showMole() {

        if (totobol == 0) {
            totobol++;
            holes.eq(rdnHole).addClass("up");
        }
}

console.log(score);

function dispMole() {

    totobol = 0;

    setTimeout(function () {
        holes.eq(this.rdnHole).removeClass("up");
    }, 1000);



  holes.click(function () {

      //holes.eq($(this).index).removeClass("up");
      $(this).removeClass("up");
      //holes.eq(rdnHole).removeClass("up");


  })
}

function startgame() {

    rdnHole = Math.ceil(Math.random() * 5);

    showMole();
    dispMole();
    setTimeout(startgame,1000);

}

$("#startGame").click(function () {

    if (startbol == 0) {
        startbol++;
        startgame();
    }



});





