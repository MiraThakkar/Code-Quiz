
var startBtn = $("#start");
var countEl = document.querySelector("#count");
var countE2 = $("#count");
var questionEl = $("#question");
var choice = $(".option");
var counter = 120;
var int = 0;
var inputInitial = $("#inputInitial");
var submitBtn = $("#submit");
var finalScoreEl = document.querySelector("#finalScore");
var lastQuestionIndex = questions.length - 1;
var qustionIndex = 0;

console.log(inputInitial);
 inputInitial.innerHTML = "Mira";

 console.log(inputInitial.innerHTML);

//setCounterText to set the text of the counter 
function setCounterText() {
  countEl.textContent = counter;
};

//Start button event listner to start the quiz when user clicks on the "Start Quiz" button
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
    
  renderQuestion();
    
});



function renderQuestion() {

  questionIndex = Math.floor(Math.random() * questions.length);
  //alert(questionIndex);
  questionEl.text(questions[questionIndex].question);
  for(i=0; i< choice.length; i++){
    choice[i].innerHTML = questions[questionIndex].choices[i];
  }

 // console.log(questions);
};


//this function is invoked when user clicks the option

$(".option").on("click", function(event){
  
  var userAnswer = event.target.textContent;
  var resultEl = document.querySelector("#result");
  if(userAnswer == questions[questionIndex].answer){    
    //$("#quiz").append("<hr>");
    //result.text("Correct!");
    //$("#quiz").append(result);
    //resultE1.show();
    resultEl.innerHTML = "Correct!";
    //resultE1.hide();
  }
  else{
    
    //$("#quiz").append("<hr>");
    //result.text(":Wrong!")
    counter= counter-10;
    setCounterText();
    //$("#quiz").append(result);
    resultEl.innerHTML = "Wrong";
    //resultE1.fadeOut(250);
  }
  questions.splice(questionIndex, 1);
  
  if (questions.length > 0) {
    renderQuestion ();  
  } else {
    endQuiz();
  }
  


});

function endQuiz(){
  //alert("in end quiz");
  finalScoreEl.textContent = counter;
  clearInterval(int);
  $("#quiz").hide();
  //counter=0;
  $("#scorecard").show();
  
}

//Score high score into local storage


submitBtn.on("click", function(event){
  event.preventDefault();
  var inElement = document.querySelector("#inputInitial").value;
  console.log(inElement);
  //Store in local storage
  localStorage.setItem("Score", counter);
  localStorage.setItem("Initial",inElement);
  $("#scorecard").hide();
  $("#highscore").show();
  
  
  //get from local storage
 
   
  
  
  //alert(StoredInitial + StoredScore);
});

$(".showhighscore").on("click", function(){
  alert("navbar clicked")

  var StoredInitial = localStorage.getItem("Initial");
  var StoredScore = localStorage.getItem("Score");

});





















































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
    

