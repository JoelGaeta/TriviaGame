score = 0;
var number = 15;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
run();

function reset() {
  run();
  score = 0;
  number = 15;
  intervalId;

  decrement();
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

$("#reset").on("click", function() {
  stop();

  alert("your final score is" + score);
});
$("#inlineRadio11").on("click", function() {
  $("#answeredright").empty();
  score += 1;
});

$("#inlineRadio22").on("click", function() {
  $("#answeredright").empty();
  score += 1;
});

$("#inlineRadio13").on("click", function() {
  $("#answeredright").empty();
  score += 1;
});
$("#startclock").on("click", function() {
  reset();
});
