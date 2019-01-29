function beepboop(numberInput) {
  var numbers = [];
  var results = [];
  for (var i = 0; i <= numberInput; i++) {
    numbers.push(i);};

  numbers.forEach(function(num) {
    var numString = num.toString();

    if (numString.includes("3")){
      results.push("I'm sorry Dave, I cant let you do that ");
    }
    else if (numString.includes("2")) {
      results.push("Boop ");
    }
    else if (numString.includes("1")) {
      results.push("Beep ");
    }
    else {
      results.push(numString + " ");
    };
  });
  return results;
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var numberInput = $("input#number").val();
      $("input#number").val("");
      var results = beepboop(numberInput);
      $("#result").show();
      $(".result").text(results);
      event.preventDefault();
    });
  });
