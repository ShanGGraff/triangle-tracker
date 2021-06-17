//Business Logic
  
//UserInterface Logic
//UserInterface Logic
$(document).ready(function () {
  $("form#TriangleForm").submit(function(event) {
    const sideOne = parseInt($("input#sideone").val());
    console.log(sideOne);
    const sideTwo = parseInt($("input#sidetwo").val());
    console.log(sideTwo);
    const sideThree = parseInt($("input#sidethree").val());
    console.log(sideThree);
    

    if (sideOne === sideTwo && sideThree) {
      alert("This is an equalateral triangle")
    }

    event.preventDefault();
  });
});