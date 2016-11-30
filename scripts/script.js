//http://devjana.net/support/countries.json

console.log("sourced");
$(document).ready(function(){
console.log("sourced");
// $("#container1").html("Hello!");


var thing = function(){
console.log("its runningfghjk!");
$.ajax({
  url:'http://devjana.net/support/countries.json',
  dataType: 'JSON',
  success: function(data){
    //console.log("hello!", data);
    console.log(data.countries.length);
    for (var i = 0; i < data.countries.length; i++) {
      //console.log(data.countries[i]);

      $('#container2').append("<p id ='container" + [i] + "'></p>");
      $('#container' + [i]).html("<p>" + data.countries[i].name + "</p>");
      }
    }
  });//end ajax
}// end thing func
$("#theButton").on('click', function(){
  //$("#container1").html('Hello!');
  thing();
  $('#theButton').html("COUNTRIES");

});//end button click
});//End DOCready
