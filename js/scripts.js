// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     var person1Input= $("input#person1").val();
//     var person2Input= $("input#person2").val();
//     var animalInput= $("input#animal").val();
//     var exclamationInput= $("input#exclamation").val();
//     var verbInput= $("input#verb").val();
//     var nounInput= $("input#noun").val();
//     var flavorInput= $("input:radio[name=flavor]:checked").val();
//     console.log(flavorInput);
//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);
//     $(".flavor").text(flavorInput);
//     $("#story").show();
//     event.preventDefault();
//   });
// });


$(document).ready(function(){
  $(".buttons1").click(function(){
    $(this).hide();
    $("#input1").append("<p>Our desin practice offers a full range of services including brand strategy,interaction and visual deaign and user experience.Throughout your project,our designers create and implement visual design and workflows,solicit user feddback and work with you to make sure what gets built is waht is needed</p>");
    });
});
$(document).ready(function(){
  $(".buttons2").click(function(){
    $(this).hide();
    $("#input2").append("<p>All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis,using proven practices such as test-driven development and pair programming.</p>");
    $("#input1").hide();
    $(".buttons1").show();
  });
});

$(document).ready(function(){
  $(".buttons3").click(function(){
    $(this).hide();
    $("#input3").append("<p>Planning and development is interactive. Because we are contantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.</p>");
    $("#input2").hide();
    $(".buttons2").show();  
  });
});