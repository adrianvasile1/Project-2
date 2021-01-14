//When scroll the topnav is fixed .
window.onscroll = function() {myFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// This function open and close the sidenav also is changing the color of the background when is activated .
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("navbar").style.marginLeft = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "white";
  document.body.style.color= "grey";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navbar").style.marginLeft= "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
  document.body.style.color= "black";
}

//When is clicked on the sidenav, the following function scrolls to the paragraph 
links = [ ...document.getElementsByClassName("para")]
links.map(element => {
  element.addEventListener("click", e => {
    e.preventDefault()
    document.getElementById(e.target.dataset.target).scrollIntoView({
      behavior: "smooth", block: "end", inline: "nearest"
    })
  })
})