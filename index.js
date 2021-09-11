let readlineSync = require("readline-sync")
const chalk = require('chalk');

let score = 0
let highScores = [{
    name: "Jitesh",
    score: 5    
},
{
    name: "Neelanshu", 
    score: 4
}];

(function welcome(){
    let userName = readlineSync.question("What's your name? ")
    console.log(chalk.yellow("Welcome " + userName + " Let's check how much you know about Aot ?"))
})()

let questions= [
   {
        question: "What has been terrorizing humans?? ",
        answer: "Titans"
    },
    {
        question: "What is the outermost wall protecting the humans called?",
        answer: "Wall Maria"
    },
    {
        question: "Which branch of the military protects the Royal Family?",
        answer: "Military Police Brigade"
    },
    {
        question: "Which family member does Eren watch get eaten by a Titan?",
        answer: "Mother"
    },
    {
        question: "Who is Eren's adopted sister? ",
        answer: "Mikasa Ackerman"


    },
]

function play(question, answer){
    var userAnswer = readlineSync.question(question)

    if(userAnswer.toLowerCase() == answer.toLowerCase()){
        console.log(chalk.green("right"))
        score++
    }
    else{
        console.log(chalk.red("wrong"))
    }

    console.log(chalk.blue("current score: ", score))
    console.log(chalk.white("----------------------"))
}

(function game(){
    console.log("Let's know your anime knowledge?----")
    questions.forEach(question =>{
        play(question.question, question.answer)
    })
})()
console.log(chalk.green("Your Final Score:",score))



   console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))



