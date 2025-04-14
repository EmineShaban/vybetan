let active = document.getElementsByClassName("active")[0]
let navbar = document.getElementById("navbar")
let menu = document.getElementsByClassName("menu")[0]
let bag = document.getElementsByClassName("shopping-bag")[0]

navbar.addEventListener(("click"), (e) => {
    e.preventDefault()
    if (menu.className == "menu") {
        menu.className = "menu active"
        active.style.opacity = "1";
        bag.style.display = "none"
    } else if (menu.className == "menu active") {
        menu.className = "menu"
        menu.style.opacity = "0";
        bag.style.display = "block"
    }
})


const myTimeout = setTimeout(myGreeting, 5000);
