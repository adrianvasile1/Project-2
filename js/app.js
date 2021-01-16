// add Li to 
function MenuItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
// get the ul#menu
const menu = document.querySelector('#into');


// add menu item
menu.appendChild(MenuItem('Home'));
menu.appendChild(MenuItem('Our Works'));
menu.appendChild(MenuItem('Team'));
menu.appendChild(MenuItem('Testimonials'));
menu.appendChild(MenuItem('Subscribe'));





// Add style on the nav 
document.addEventListener('click', addItem);
function addItem(){
document.getElementById('into').classList.add('tab-content');
}

//When scroll the topnav is fixed .
const navbar = document.getElementById("nav-container");
const sticky = navbar.offsetTop;
window.onscroll = function() {myFunction()};


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//Active navigation on scroll
window.addEventListener('scroll', event => {
let navigationLinks = document.querySelectorAll('nav ul li a');
let fromTop = window.scrollY;

navigationLinks.forEach(link => {
  let section = document.querySelector(link.hash);
 
  if (
    section.offsetTop <= fromTop &&
    section.offsetTop + section.offsetHeight > fromTop
  ) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
});

// This function open and close the sidenav also is changing the color of the background when is activated .
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("nav-container").style.marginLeft = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "white";
  document.body.style.color= "grey";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("nav-container").style.marginLeft= "0";
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
      behavior: "smooth", block: "start", inline: "nearest"
    })
  })
})

