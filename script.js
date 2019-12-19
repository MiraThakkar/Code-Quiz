var mainDiv = $(".container");
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

      
    });
    

