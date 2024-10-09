
// var typed= new typed(".text",{
//   Strings:["Frontend Developer","Web Developer"],
//   typeSpeed:100,
//   backSpeed:100,
//   backDelay:1000,
//   loop:true
// });


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }