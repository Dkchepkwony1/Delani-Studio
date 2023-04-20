$(document).ready(function(){
  $(".buttons1").click(function(){
    $(this).hide();
    $("#input1").append("<p>Our design practice offers a full range of services including brand strategy,interaction and visual deaign and user experience.Throughout your project,our designers create and implement visual design and workflows,solicit user feedback and work with you to make sure what gets built is what is needed</p>");
  });
    //  $("#input1").hide();
  // $(".buttons1").show();
});
$(document).ready(function(){
  $(".buttons2").click(function(){
    $(this).hide();
    $("#input2").append("<p>All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis,using proven practices such as test-driven development and pair programming.</p>");
    // $("#input1").hide();
    // $(".buttons1").show();
  });
});

$(document).ready(function(){
  $(".buttons3").click(function(){
    $(this).hide();
    $("#input3").append("<p>Planning and development is interactive. Because we are contantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.</p>");
    // $("#input2").hide();
    // $(".buttons2").show();

  });
});
$(document).ready(function() {
  $("#input2").click(function() {
    $("#input2").hide();
    $(".buttons2").show();
  });
});

$(document).ready(function() {
  $("#input1").click(function() {
    $("#input1").hide();
    $(".buttons1").show();
  });
});

$(document).ready(function() {
  $("#input3").click(function() {
    $("#input3").hide();
    $(".buttons3").show();
  });
});
 
$(function () {
  var info = $("#info");
      if (info.length == 0) {
        info = $("<span />").addClass("info");
          $("body").append(info);
    }
   info.hide();
  $(".idimg").bind("mouseenter", function () {
      $(this).animate({ opacity: 0.5});
      var p = GetScreenCordinates(this);
      info.html(this.alt);
      console.log(info);
      info.show();
      info.css("width", $(this).width());
      info.css({ "left": p.x, "top": p.y + this.offsetHeight - info[0].offsetHeight });
  });
  $(".idimg").bind("mouseleave", function () {
    $(this).animate({ opacity: 6 },6000);
      info.hide();
  });
});
function GetScreenCordinates(obj) {
  var p = {};
  p.x = obj.offsetLeft;
  p.y = obj.offsetTop;
   while (obj.offsetParent) {
    p.x = p.x + obj.offsetParent.offsetLeft;
    p.y = p.y + obj.offsetParent.offsetTop;
    if (obj == document.getElementsByTagName("body")[0]) {
          break;
      }
      else {
          obj = obj.offsetParent;
      }
  }
  return p;
}

document.getElementById("myBtn").addEventListener("click", function validateForm() {
  let x = document.forms["myForm"]["userName"].value;
  let y = document.forms["myForm"]["email"].value;
  let z = document.forms["myForm"]["msg"].value;
  // console.log(z);
  if (x == "" || y == "" || z== "") { 
    alert("Name, email and message must be filled out");
  }
  else {
   
    alert(x+" we have received your message '"+z+"' through "+y+". Thank you for reaching out to us.");
    }
    
});
