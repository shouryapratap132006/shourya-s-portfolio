let menuIcon = document.querySelector("#menu-icon");
let nav = document.getElementById("my-nav")


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle("active");
}