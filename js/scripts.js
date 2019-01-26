var numbers = [];
var results = [];

function beepboop(numberInput) {
  for (var i = 0; i <= numberInput; i++) {
    numbers.push(i);};

  numbers.forEach(function(num) {
    var numString = num.toString();

    if (numString.includes("1") === true && numString.includes("2") === false && numString.includes("3") === false ) {
        results.push("Beep ");
      }
    else if (numString.includes("2")===true && numString.includes("3")===false) {
          results.push("Boop ");
      }
    else if (numString.includes("3")){
            results.push("I'm sorry Dave, I cant let you do that ");
      }
    else {
      results.push(numString + " ");
    };
  });
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var numberInput = $("input#number").val();
      beepboop(numberInput);
      $("#result").show();
      $("#formOne").hide();
      $(".result").text(results);
      event.preventDefault();
    });
  });
