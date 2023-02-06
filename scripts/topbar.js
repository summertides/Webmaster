window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.getElementById("p-stickybar").style.bottom = "91vh";
    document.getElementById("p-heading").style.position = "fixed";
    document.getElementById("p-heading").style.bottom = "93.7vh";
    document.getElementById("p-heading").style.left = "20px";
    document.getElementById("p-heading").style.fontSize = "3vh";

    document.getElementById("icon-nav1").style.top = "2.3vh";
    document.getElementById("icon-nav2").style.top = "2.3vh";
    document.getElementById("icon-nav3").style.top = "2.3vh";
    document.getElementById("icon-nav4").style.top = "2.3vh";
    document.getElementById("icon-nav5").style.top = "2.3vh";
    document.getElementById("icon-nav6").style.top = "2.3vh";
  } else {
    document.getElementById("p-stickybar").style.bottom = "110vh";
    document.getElementById("p-heading").style.bottom = "1040px";
    document.getElementById("p-heading").style.left = "0px";

    document.getElementById("icon-nav1").style.top = "-6vh";
    document.getElementById("icon-nav2").style.top = "-6vh";
    document.getElementById("icon-nav3").style.top = "-6vh";
    document.getElementById("icon-nav4").style.top = "-6vh";
    document.getElementById("icon-nav5").style.top = "-6vh";
    document.getElementById("icon-nav6").style.top = "-6vh";
  }
}