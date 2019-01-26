//
// var results = [];
//
//  function beepboop(numberInput) {
//     for (var i = 0; i <= numberInput; i++) {
//       results.push(i);};
//
//     results.forEach(function(num) {
//       var numString = num.toString();
//       if (numString.match(/["1"]/)) {
//           results.push("Beep");
//         }
//         else if (numString.match(/["2"]/)) {
//             results.push("Boop");
//           }
//           else if (numString.match(/["3"]/)){
//               results.push("I'm sorry Dave, I cant let you do that")
//             }
//             else {
//                 results.push(numString);
//
//
//
//
//
//
//     }
//   });
//     };


    var numbers = [];
    var results = [];

     function beepboop(numberInput) {
        for (var i = 0; i <= numberInput; i++) {
          numbers.push(i);};

        numbers.forEach(function(num) {
          var numString = num.toString();

          if (numString.includes("1") === true && numString.includes("2") === false && numString.includes("3") === false ) {
              results.push("Beep");
            }

          else if (numString.includes("2")===true && numString.includes("3")===false) {
                results.push("Boop");
            }

          else if (numString.includes("3")){
                  results.push("I'm sorry Dave, I cant let you do that");
            }
          else {
            results.push(numString);
          };
          });
        };












$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var numberInput = $("input#number").val();
      // var truNumber = parseInt(numberInput);
      // alert(truNumber);
      beepboop(numberInput);

      console.log(results);

      $("#result").show();
      $(".result").text(results);


      event.preventDefault();
    });
  });
