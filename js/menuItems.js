/*
addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.img-menu-icono');
    if(btnMenu) {
        btnMenu.addEventListener('click', () =>{
            const menuItems = document.querySelector('.menu');
            menuItems.classList.toggle('menu-toggle');
        })
    }
});
*/


function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
    

}