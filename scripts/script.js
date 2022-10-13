//Hamburger menu function
function hamburger(){

var menu = document.getEleentById("menu-links");
var menu = document.getElementById("catpaws-logo");

  if(menu.style.display === "block" && logo.style.display === "none"){
    menu.style.display = "none";
    logo.style.display = "block";
  } else{
    menu.style.display = "block";
    logo.style.display = "none";
  }
}
