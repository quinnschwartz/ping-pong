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

//FRONT END
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var input = $("#input").val();
    var results = pingPong(input);
    // $("#output").text(result);
    results.forEach(function(result) {
        $("ul").append("<li>" + result + "</li>");
    });
  });
});
