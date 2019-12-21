
var startBtn = $("#start");
var countEl = document.querySelector("#count");
var countE2 = $("#count");
var questionEl = $("#question");
var choice = $(".option");
var counter = 120;
var int = 0;
var finalScoreEl = document.querySelector("#finalScore");
// var availableQuestions = [];
//alert(finalScoreEl.textContent);


//questions array
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["scripting", "js", "javascript", "script"],
    answer: "script"
  },

  {
    question: " Which of the following is not a reserved word in JavaScript?",
    choices: ["interface", "throws", "program", "short"],
    answer: "program"
  },

  {
    question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    choices: ["alertbox(“GeeksforGeeks”)", "msg(“GeeksforGeeks”);", "msgbox(“GeeksforGeeks”);", "alert(“GeeksforGeeks”);"],
    answer: "alert(“GeeksforGeeks”);"
  },
  {
    question: "What does HTML stand for?",
    choices: ["Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Makeup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    choices: ["font", "style", "class", "script"],
    answer: "style"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    choices: ["color", "text-color", "fgcolor", "font-color"],
    answer: "color"
  },

  {
    question: "Which property is used to change the left margin of an element",
    choices: ["margin-left", "padding-left", "margin", "indent"],
    answer: "margin-left"
  },
  
  {
    question: "What is the default value of the position property?",
    choices: ["fixed", "static", "relative", "absolute"],
    answer: "static"
  },
    
];
  
var lastQuestionIndex = questions.length - 1;
var qustionIndex = 0;
 


//set counter function 
function setCounterText() {
  countEl.textContent = counter;
};

//Start button even listner
startBtn.on("click", function(){

  $("#home").hide();
  $("#quiz").show();
  int = setInterval(function(){
      counter--;  
      setCounterText();
      
      if (counter  <= 0){
          //clear interval and show result
          endQuiz();
          //clearInterval(int);
          //$("#quiz").hide();
          //counter=0;
          //$("#scorecard").show();
          
      }
    }, 1000)
    // availableQuestions = [...questions];
    renderQuestion();
    
});


  



function renderQuestion() {


  
  questionIndex = Math.floor(Math.random() * questions.length);
  //alert(questionIndex);
  questionEl.text(questions[questionIndex].question);
  for(i=0; i< choice.length; i++){
    choice[i].innerHTML = questions[questionIndex].choices[i];
  }

  
  console.log(questions);
};

$(".option").on("click", function(event){
  
  var userAnswer = event.target.textContent;
  //alert(userAnswer);
  //alert(questions[questionIndex].answer);
  var result = $("<p>");
  if(userAnswer == questions[questionIndex].answer){    
    $("#quiz").append("<hr>");
    result.text((11-questions.length) + ":" + questions[questionIndex].question + " :Correct!")
    $("#quiz").append(result); 
  }
  else{
    
    $("#quiz").append("<hr>");
    result.text((11-questions.length) + ":" + questions[questionIndex].question + " :Wrong!")
    counter= counter-10;
    setCounterText();
    $("#quiz").append(result);
  }
  questions.splice(questionIndex, 1);
  //alert(questions.length)
  
  if (questions.length > 0) {
    renderQuestion ();  
  } else {
    //alert("no more questions");
    //Stop the timer
    //Display Results
    endQuiz();
  }
  


});

function endQuiz(){
  //alert("in end quiz");
  finalScoreEl.textContent = counter;
  clearInterval(int);
  $("#quiz").hide();
  counter=0;
  $("#scorecard").show();
  
}















































//soulution to add home screen using DOM
/*var mainDiv = $(".container");
var header = $("<h1>");
var pEl = $("<p1>");
var startBtn = $("<button>");
var countEl = document.querySelector("#count");
var counter = 10;
var countE2 = $("#count");



function setCounterText() {
    countEl.textContent = counter;
  };

//code block to add home page elements

header.text("Coding Quiz Challenge");
$(".container").append(header);
pEl.text("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!");
$(".container").append(pEl);
startBtn.text("Start Quiz");
startBtn.attr("style","background-color: purple");
startBtn.addClass("btn");
$(".container").append( "<br>", startBtn);

//home page code block ends here

//event listner code block
startBtn.on("click", function(){

    var int = setInterval(function(){

        setCounterText();
        counter--;
        if (counter  < 0){
            clearInterval(int);
        }
      }, 1000)

      
    });*/
    

