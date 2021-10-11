console.clear();

var readLineSync = require('readline-sync');
var chalk = require('chalk');

game();

// main method
function game(){
  
  // Greetings
  var welcomeMsg = `Hi, Welcome let's play "DO YOU KNOW JYOTI?"\n`;
  console.log(chalk.yellowBright(welcomeMsg));
  
  var username = readLineSync.question(chalk.cyan(`May I know your name please? \n`));

  console.log(chalk.cyan(`\n${capitalize(username)}, let the fun begin :)\n`));
  
  // quiz begins
  var userScore = quiz();
  var scores = {
    currentHighestScore:100
  };
  console.log(chalk.green(`Total questions: 12,
Correctly answered questions: ${userScore/10}`))
  console.log(chalk.cyanBright.italic.underline(`\n${username}, your total score is: ${userScore} `));
  
  
  scores[username] = userScore;

  if(userScore > scores.currentHighestScore){
    
    console.log(chalk.magenta(`Congrats!!! you beat the highest score by ${userScore-scores.currentHighestScore} points`));
    
    scores.currentHighestScore = userScore;
  } else if(userScore = scores.currentHighestScore){
    console.log(chalk.yellowBright(`CONGRATS!!! you scored equal to the highest score.`));
  } else{
    console.log(chalk.magenta(`Oops!!! you are ${userScore-scores.currentHighestScore} points less than the highest :(`));
  }

  
  // saying bye
  console.log(chalk.red(`\nJyoti loves ${username} :)`));
}

// quiz function
function quiz(){
  
  var score = 0;
  var quesAns = [{
    question: `Who wouldn't Jyoti ever visit? `, 
    options: ['Fortune teller','Psychiatrist','Plastic surgeon','Dentist'],
    answer:'Plastic surgeon'
  },
  {
    question: `What app does Jyoti use most often? `,
    options: ['Instagram','WhatsApp','Tik Tok','Twitter'],
    answer:'Whatsapp'
  },
  {
    question: `When Jyoti is bored, what does she do? `,
    options: ['Reads a book','Watches a movie','Calls a friend','Goes running'],
    answer:'Reads a book'
  },
  {
    question: `What food does Jyoti hate? `,
    options: ['Broccoli','Bitter gourd','Bitter gourd',`Jyoti doesn't hate any food`],
    answer:`Jyoti doesn't hate any food`
  },
  {
    question: `What would be the best birthday present for Jyoti? `,
    options: ['Gift coupon','Custom photo puzzles','Books',`Snacks basket`],
    answer:'Books'
  },
  {
    question: `What is Jyoti 's biggest fear? `,
    options: ['Spiders','Confined spaces','Heights',`She's gonna die single`],
    answer:`She will die single`
  },
  {
    question: `Jyoti doesn't like when people? ` ,
    options: ['lie or be dishonest','take her for granted',`takes her food`],
    answer:'lie or be dishonest'
  },
  {
    question: `What kind of power would Jyoti like to poses? `,
    options: [`Doremon's Anywhere Door`,`Stark's Intelligence`,`Scarlet Witch's Power `,`Any of Black Widow's powers`],
    answer:`Any of Black Widow's powers`
  },
  {
    question: `Jyoti like her pizza with? `,
    options: ['Extra cheese','Veggies','Loads of tofu',`Sweetcorn and Onion`],
    answer:'veggies'
  },
  {
    question:`When sad or upset, what is the best way to comfort Jyoti?`,
    options: ['Talking over a cup of coffee','Watching a movie ','Going shopping',`Bring her tasty food then talking`],
    answer:'Bring her tasty food then talking'
  },
  {
    question: `What would Jyoti spend money from the lottery most likely on? `,
    options: ['Traveling','Food','Charity',`No spending. just Investing`],
    answer:'Traveling'
  },
  {
    question: `What is Jyoti's retirement plan? `,
    options: ['Buy a big land, make a small home, do gardening, read, have pets','Go traveling around the globe',`Go to the mountains, be a saint, if she didn't do it already`],
    answer:'Traveling'
  }];
  for (let i of quesAns){
    
    var ansUser = readLineSync.keyInSelect(i.options, i.question);
        
    if (i.options[ansUser].toLowerCase() === i.answer.toLowerCase())
    {
      console.log(chalk.yellow('\nAhhhh Absouletly correct: '),chalk.yellowBright.bold('+10 points'));
      score += 10;
    } else {
      console.log(chalk.bgRed('\nOopsyy you lost :/'));
      console.log(chalk.magenta('Correct ans is: ' + i.answer));
    }
    console.log(chalk.blackBright.dim('\n........................................................................................'));
  }
  return score;
}

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//console.clear();