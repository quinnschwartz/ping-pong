//BACK END
function pingPong (input) {
    var parseNumbers = parseInt(input);
    var numbersArray = [];
    for (var i = 1; i <= parseNumbers; i ++) {
      if (i % 3 == 0 && i % 5 != 0 && i % 15 != 0) {
        numbersArray.push("ping");
      } else if (i % 5 == 0 && i % 15 != 0 && i % 3 != 0) {
        numbersArray.push("pong");
      } else if (i % 15 == 0) {
        numbersArray.push("ping-pong");
      } else {
        numbersArray.push(i);
        }
      };
      return numbersArray;
};

// function pingPong (countTo) {
// var countToNum = parseInt(countTo);
// // var finalArray = [];
// for (var i = 1; i <= countToNum; i += 1) {
//     countedNumbers.push(i);
//   }
//   return countedNumbers;
//
// }

// function finalArray (pingPong2) {
//   // var stringArray = countedNumbers.map(String);
//   for (var i = 1; i <= countedNumbers.length; i += 1) {
//   var number = countedNumbers.shift();
//     if (number % 3 === 0) {
//       stringArray.replace([i], "ping");
//     } else {
//       return alert("hi");
//     }
//   }
// };

//FRONT END
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var input = $("#input").val();
    var result = pingPong(input);
    $("#output").text(result);
  });
});
