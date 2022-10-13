//Hamburger menu function
function hamburger(){

  if(menu.style.display === "block" && logo.style.display === "none"){
    menu.style.display = "none";
    logo.style.display = "block";
  } else{
    menu.style.display = "block";
    logo.style.display = "none";
  }
}
