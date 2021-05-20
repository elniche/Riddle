 var stageone = "fence";
 var stagetwo = "comb";
 var stagethree = "bed";
 var stagefour = "yardstick";
 var stagefive = "piano";
 
 // para el estato 1
 function Tego() {
var coin = document.getElementById("classic").value;
    if(coin==stageone) {
      alert("Good Job!");
    }
    else {
        alert("Try Again");
    }
}

// para el estato 2
function Calde() {
    var tame = document.getElementById("corazon").value;
       if(tame==stagetwo) {
           alert("Excellent, you are a Genius!");
       }
       else {
           alert("WRONG");
       }
}

// para el estato 3
function Partido() {
    var tocar = document.getElementById("cabeza").value;
    if(tocar==stagethree) {
        alert("Good Job, Albert Einstein!");
    } else {
        alert("Keep Trying");
    }
}

// para el estato 4
function Escobar() {
    var popeye = document.getElementById("piez").value;
    if(popeye==stagefour) {
        alert("Magna Cum laude..AWESOME!!!");
    } else {
        alert("Please Keep Trying");
    }
}

// para el estato 5
function Chapo() {
    var cartel = document.getElementById("cuerpo").value;
    if(cartel==stagefive) {
        alert("Congratulations! You have acheived MASTERY!!!");
    } else {
        alert("You are Wrong");
    }
}

//// for the wrappers2

var rapping = document.querySelectorAll(".wrapper2");
var boton = document.querySelector("#maduro");
var boton2 = document.querySelector("#guaido");
var current = 0;


//clear all images
function Disappear() {
     for(var i =0;i<rapping.length;i++) {
           rapping[i].style.display = "none";
     }
}

//shows the first image
function Blocke() {
    Disappear();
    rapping[0].style.display = "block";
}

//para el boton anterior

function Left() {
    Disappear();    
    rapping[current - 1].style.display = 'block';
    current--;    
}
// left arrow click
boton.addEventListener('click', function() {
     if(current === 0) {
         current = rapping.length;
     }
     Left();
});


//para el boton proximo
function Right() {
    Disappear();
    rapping[current + 1].style.display = 'block';
    current++;
}

//right arrow click
boton2.addEventListener('click', function() {
    if(current === rapping.length - 1) {
    current = -1;
    }
       Right();
})










Blocke();





 

