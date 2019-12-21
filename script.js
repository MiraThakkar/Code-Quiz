
var startBtn = $("#start");
var countEl = document.querySelector("#count");
var countE2 = $("#count");
var questionEl = $("#question");
var choice = $(".option");

var counter = 10;


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
  var int = setInterval(function(){
      setCounterText();
      counter--;
      if (counter  < 0){
          clearInterval(int);
          $("#quiz").hide();
          $("#scorecard").show();
      }
    }, 1000)

    renderQuestion();
    
  })


  



  function renderQuestion() {

    questionIndex = Math.floor(Math.random()*questions.length);
    questionEl.text(questions[questionIndex].question);
    for(i=0; i< choice.length; i++){

      choice[i].innerHTML = questions[questionIndex].choices[i];
    
    }

    questions.slice(questionIndex, 1);

  
  
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
    

