


var teamscore = 0;
var teams1total = 0;
var teams2total = 0;
var balls = 0;
var over = 0;
var player = 1;

var toss=Math.ceil(Math.random()*2);
var arr=["pak","ind"];
arr[toss];
if(toss == 1){
    alert(arr[0]+"won the toss and elected to bat first");
}
else{
    alert("team 2 won the toss and elected to bat first");
}
var currentteam = arr[toss];


var pscore = document.getElementById('pscore');
var var_team = document.getElementById('team');
var var_players = document.getElementById('players');
var var_score = document.getElementById('score');


function circketmatch()
{

    // (function(){
    //     var myDiv = document.getElementById("myDiv"),
    
    //       show = function(){
    //         myDiv.style.display = "block";
    //         setTimeout(hide, 3000); // 5 seconds
    //       },
    
    //       hide = function(){
    //         myDiv.style.display = "none";
    //       };
    
    //     show();
    //   })();
    

var rand = Math.floor(Math.random()*7);
var comment = '';

    
    if(rand == 7)
    {
        teamscore++;
        comment += " No Ball...";
        comment += " ----TeamScore " + currentteam + " " + teamscore + " ";
    }
    else{
        balls ++;
        teamscore += rand;

        comment += " Player "+player+ " runs increase by " + rand;
        comment += " ----TeamScore " +  currentteam + " " + teamscore + " ";

        if (rand == 0)
        {
            player++;
            comment += "Your Player is out..";
            //comment += " total score is " + teamscore + " ";
        }
    }

    

    if(balls == 6){
        balls = 0;
        over++;

        comment += " " + over + " Over Completed";
    }

    if (over == 2 || player == 3){


        if(currentteam == 1)
        {
            teams1total = teamscore;
            comment += " Team "+ currentteam +"  " + over + " Over Completed on " + (parseInt(player)-1) + " Wickekts gone!! Total Score" + teams1total;
            currentteam++;
        }
        else if(currentteam == 2){
            teams2total = teamscore;
            comment += " Team "+ currentteam +"  " + over + " Over Completed on " + (parseInt(player)-1) + " Wickekts gone!! Total Score" + teams2total;
            
            currentteam--;


        }

        over =0;
        player =1;
        teamscore =0;
        balls =0;

    }
    
    if(teams1total !==0 && teams2total !==0)
    {
        
        
            if (teams1total >= teams2total) { comment += "Team 1 Wins the Match...";
        
        }
            if (teams2total >= teams1total) { comment += "Team 2 Wins the Match...";
        
        }
            teams1total = 0;
            teams2total = 0;        
    }
    //console.clear();
    // console.log(teamscore + ' teamscore');
    // console.log(balls + ' balls');
    // console.log(over + ' over');
    // console.log(player + ' player');

    var_team.innerHTML = currentteam
    var_players.innerHTML = player;
    var_score.innerHTML = teamscore

    pscore.innerHTML += "<br/>"+comment;
    //console.log(comment);
}
