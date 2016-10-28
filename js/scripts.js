//BACK END


function pingPong (countTo) {
var countToNum = parseInt(countTo);
var countedNumbers = [];
for (var i = 1; i <= countToNum; i += 1) {
  countedNumbers.push(i);
  }
  return countedNumbers;
  console.log(countedNumbers);
};


//FRONT END
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var countTo = $("#countTo").val();
    var countedNumbers = [];
    var result = pingPong(countTo);
    $("#output").text(result);
  });
});
