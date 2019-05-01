score = 0;
var number = 15;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;

  $("#countdown").html("<h2>" + number + "</h2>");

  if (number === 0) {
    stop();
    alert("Time Up! You answered" + score + "correctly");
  }
}

function stop() {
  clearInterval(intervalId);
}
$("#inlineRadio11").on("click", function() {
  $("#answeredright").empty();
  $("#answeredright").append((score += 1));
});

$("#inlineRadio22").on("click", function() {
  $("#answeredright").empty();
  $("#answeredright").append((score += 1));
});

$("#inlineRadio13").on("click", function() {
  $("#answeredright").empty();
  $("#answeredright").append((score += 1));
});

$("#reset").on("click", function() {
  stop();
  alert("your final score is" + score);
});
run();
