// retry this whole section of code. Doesnt seem to format well with getting it to display vertically. Maybe has to do with how the array is being called? Or perhaps with how the array elements are being created?

// Think about specs of this function, and how I can realte those back to what is needed for the assaignment. Ask about specs too, they seem to create a harder time rather than illuminating how to code more efficiently.




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
      var results = beepboop(numberInput);
      $("#result").show();
      $(".result").text(results);
      event.preventDefault();
    });
  });
