//BACK END
function pingPong (countTo) {
  // if (countTo )
    var countToNum = parseInt(countTo);
    var countedNumbers = [];
    for (var i = 1; i <= countToNum; i ++) {
      if (i % 3 == 0 && i % 5 != 0 && i % 15 != 0) {
        countedNumbers.push("ping");
      } else if (i % 5 == 0 && i % 15 != 0 && i % 3 != 0) {
        countedNumbers.push("pong");
      } else if (i % 15 == 0) {
        countedNumbers.push("ping-pong");
      } else {
        countedNumbers.push(i);
        }
      };
      return countedNumbers;
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

    var countTo = $("#countTo").val();
    var result = pingPong(countTo);
    $("#output").text(result);
  });
});
