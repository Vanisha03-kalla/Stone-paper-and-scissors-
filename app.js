let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
  const randomidx= Math.floor(Math.random()*3);//generated random index from the array options using math.index; floor is used to avoid decimal digits, it provides whole number.
  return options[randomidx];
    //rock,paper,scissors

};


const drawgame=()=>{
    //console.log("Game was Draw.");it will be shown in console.
    msg.innerText="It's a Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin, userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        //console.log("You win!");it will be shown in console.
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor="green";
        
    }

    else{
        compscore++;
        compscorepara.innerText=compscore;
        //console.log("You lose"); it will be shown in console.
        msg.innerText=`You Loose.${compchoice} beats your ${userchoice}.`;
        msg.style.backgroundColor="red";
    }
};


const playgame=(userchoice)=>{
    console.log("user choice=", userchoice);
    //Generate computer choice 
    const compchoice=gencompchoice();
    console.log("comp choice=", compchoice);

    if(userchoice===compchoice){
        //Draw game
        drawgame();

    }

    else{
        let userwin=true;
        if(userwin==="rock"){
            userwin= compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
         userwin= compchoice==="scissors" ? false:true; 

        }

        else{
         userwin= compchoice==="rock"?false:true;  
        }

        showwinner(userwin,userchoice,compchoice);
           
        
    }
};






choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{

        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
});
