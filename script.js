function startgame (playerchoice){
    var playersel = playerchoice.toUpperCase()


    //alert(playersel);

    //figure out computer choice
    var computerchoice = "N";
    var randomsel = Math.floor(Math.random()*3)
    if (randomsel == 1){
        computerchoice = "P"
    }else if (randomsel == 2){
        computerchoice = "R"
    }else{
        computerchoice = "S"
    }
    
   
    //alert(computerchoice);
    if (playersel !== computerchoice) {
        if (playersel == "R"){
            if (computerchoice == "P") {
                alert("Computer wins game, paper beats rock.");
                document.getElementById("losses").innerHTML = 1 + Number(document.getElementById("losses").innerHTML);
            }else{
                alert("Player wins game, rock beats scissors.");
                document.getElementById("wins").innerHTML = 1 + Number(document.getElementById("wins").innerHTML);
            }
        }else if (playersel == "P"){
            if (computerchoice == "S") {
                alert("Computer wins game, scissors beats paper.");
                document.getElementById("losses").innerHTML = 1 + Number(document.getElementById("losses").innerHTML);
            }else {
                alert("Player wins game, paper beats rock.");
                document.getElementById("wins").innerHTML = 1 + Number(document.getElementById("wins").innerHTML);
            }  
        }else if (playersel == "S"){
            if (computerchoice == "R") {
                alert("Computer wins game, rock beats scissors.");
                document.getElementById("losses").innerHTML = 1 + Number(document.getElementById("losses").innerHTML);
            }else {
                alert("Player wins game, scissor beats rock.");
                document.getElementById("wins").innerHTML = 1 + Number(document.getElementById("wins").innerHTML);
            }
        }else {
            alert("No one player choice is invalid.");
        }
    }else{
        alert("No one wins tie game.");
        document.getElementById("ties").innerHTML = 1 + Number(document.getElementById("ties").innerHTML);
    }

    document.getElementById("playervalue").value = "";
    playagain();
}

function playagain(){
    if (window.confirm("Do you want to play again?")) {
        
      }else{
        alert("Thanks for playing!" + "Your totals were wins: " + document.getElementById("wins").innerHTML + " losses: " + document.getElementById("losses").innerHTML + " and ties: " + document.getElementById("ties").innerHTML);
        document.getElementById("wins").innerHTML = "0";
        document.getElementById("losses").innerHTML = "0";
        document.getElementById("ties").innerHTML = "0";
      }
}
