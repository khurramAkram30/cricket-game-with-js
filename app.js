


var teamscore = 0;
var firstTeamTotal = 0;
var secondTeamTotal = 0;
var balls = 0;
var over = 0;
var player = 1;

var toss = Math.floor(Math.random() * 2);
var arr = ["pak", "ind"];
arr[toss];
if (toss == 0) {
    alert(arr[0] + " won the toss and elected to bat first");
}
else {
    alert(arr[1] + "won the toss and elected to bat first");
}
var teams = arr[toss];
var currentteam = 1;


var commentory = document.getElementById('pscore');
var team = document.getElementById('team');
var players = document.getElementById('players');
var score = document.getElementById('score');
var a=0;
var myDiv = document.getElementById("myDiv")


// if(a == 0){
//     var time=setTimeout(function(){
//         myDiv.style.display="none";
//     },2000);
//     a++;
// }

function circketmatch() {
    // myDiv.style.display="none";


    var rand = Math.floor(Math.random() * 7);
    var comment = '';


    if (rand == 7) {
        teamscore++;
        comment += " No Ball...";
        comment += " ----TeamScore " + currentteam + " " + teamscore + " ";
    }
    else {
        balls++;
        teamscore += rand;
        
        comment += " Player " + player + " runs increase by " + rand;
        comment += " ----TeamScore " + currentteam + " " + teamscore + " ";

        if (rand == 0) {
            player++;
            comment += "Your Player is out..";
            //comment += " total score is " + teamscore + " ";
        }
    }


    if (balls == 6) {
        balls = 0;
        over++;

        comment += " " + over + " Over Completed";
    }


    if(currentteam == 2 && teamscore > firstTeamTotal){
        comment += " team 2 won the match ";
        var a=prompt(`Team 2 won the match 
        can u play again?`);
        if(a == "yes"){
            commentory.innerHTML="";
            
            players.innerHTML="";
            window.location.reload();

        }else{
            commentory.innerHTML="";
            
            players.innerHTML="";
            }
        
    }

    if (over == 2 || player == 3) {

        if (teams == arr[0]) {
            teams = arr[1];
        }
        else if (teams == arr[1]) {
            teams = arr[0];
        }
        if (currentteam == 1) {
            firstTeamTotal = teamscore;
            comment += " Team " + currentteam + "  " + over + " Over Completed on " + (parseInt(player) - 1) + " Wickekts gone!! Total Score" + firstTeamTotal;
           commentory.innerHTML="";
            currentteam++;

        }
        else if (currentteam == 2) {
            secondTeamTotal = teamscore;
            comment += " Team " + currentteam + "  " + over + " Over Completed on " + (parseInt(player) - 1) + " Wickekts gone!! Total Score" + secondTeamTotal;

            currentteam--;


        }

        over = 0;
        player = 1;
        teamscore = 0;
        balls = 0;

    }
   
    
    if (firstTeamTotal !== 0 && secondTeamTotal !== 0) {


        if (firstTeamTotal >= secondTeamTotal) {
            comment += "Team 1 Wins the Match...";

                    var a=prompt(`Team 1 won the match 
        can u play again?`);
        if(a == "yes"){
            commentory.innerHTML="";
            
            players.innerHTML="";
            window.location.reload();

        }else{
            commentory.innerHTML="";
            
            players.innerHTML="";
            }

        }
        if (secondTeamTotal >= firstTeamTotal) {
            comment += "Team 2 Wins the Match...";
        }
        firstTeamTotal = 0;
        secondTeamTotal = 0;
        commentory.innerHTML="";
            
        players.innerHTML="";

    }   




    team.innerHTML = teams;
    players.innerHTML = player;
    score.innerHTML = teamscore

    commentory.innerHTML += "<br/>" + comment;
}
