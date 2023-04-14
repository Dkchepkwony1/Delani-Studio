$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input= $("input#person1").val();
    var person2Input= $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput= $("input#exclamation").val();
    var verbInput= $("input#verb").val();
    var nounInput= $("input#noun").val();
    var flavorInput= $("input:radio[name=flavor]:checked").val();
    console.log(flavorInput);
    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".flavor").text(flavorInput);
    $("#story").show();
    event.preventDefault();
  });
});


$(document).ready(function(){
  $(":button").click(function(){
    alert("The paragraph was clicked.");
  });
});