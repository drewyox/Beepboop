// retry this whole section of code. Doesnt seem to format well with getting it to display vertically. Maybe has to do with how the array is being called? Or perhaps with how the array elements are being created?

// Think about specs of this function, and how I can realte those back to what is needed for the assaignment. Ask about specs too, they seem to create a harder time rather than illuminating how to code more efficiently.


var numbers = [];
var results = [];


function beepboop(numberInput) {
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
};



      // Figure out how to print the array as seperate points within a list, or include a page break or anything really


// Research the functionality of nested if statements, code feels redundant here. Surely there is a more efficient way to isolate how this works. Maybe try reversing the order of the if statements as the Beeps seem to be dominant while in the top of the if else argument. ((UPDATE)) rewrote code to have include 3 at the top and it works as intended now without the wildly inefficient && statements. 

    // if (numString.includes("1") === true && numString.includes("2") === false && numString.includes("3") === false ) {
    //     results.push("Beep ");
    //   }
    // else if (numString.includes("2")===true && numString.includes("3")===false) {
    //       results.push("Boop ");
    //   }
    // else if (numString.includes("3")){
    //         results.push("I'm sorry Dave, I cant let you do that ");
    //   }
    // else {
    //   results.push(numString + " ");
    //
    //
    //
    //   if (numString.includes("1") === true && numString.includes("2") === false && numString.includes("3") === false ) {
    //       results.push("Beep ");
    //     }
    //   else if (numString.includes("2")===true && numString.includes("3")===false) {
    //         results.push("Boop ");
    //     }
    //   else if (numString.includes("3")){
    //           results.push("I'm sorry Dave, I cant let you do that ");
    //     }
    //   else {
    //     results.push(numString + " ");




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
