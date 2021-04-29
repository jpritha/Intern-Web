
const getUserChoice = (userInput) =>{
    var userInput = userInput.toLowerCase();

    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
        return userInput;
    }else{
        return console.log("Error!");
    }
} 

const getComputerChoice = () =>{
    randomNumber=Math.floor(Math.random() * 3);

    if(randomNumber===0){
        return 'rock';
    }else if(randomNumber===1){
        return 'paper';
    }
    else if(randomNumber===2){
        return 'scissors';
    }
}

const determineWinner = (userChoice,computerChoice) =>{
    if(userChoice===computerChoice){
        return " The game was a tie.";
    }

    if(userChoice==='rock'){
        if(userChoice==='paper'){
            return "The computer won.";
        }else{
            return "The user won."
        }

    }

    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return "Computer won.";
        } else {
          return "User won.";
        }
    }

    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') 
          return "Computer won.";
         else {
         return "User won.";
        }
    }
    
}

const playGame = () =>{
    const userChoice = getUserChoice ('Paper');
    const computerChoice =  getComputerChoice ();
    console.log('Your choice is: ' + userChoice );
    console.log('Your choice is: ' + computerChoice );
    console.log(determineWinner(userChoice,computerChoice));
}

playGame();







console.log(getComputerChoice())