//navbar
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

 

//Start animation when scrolled into view
const observer = new IntersectionObserver(intersections => {
    intersections.forEach(({
        target,
        isIntersecting
    }) => {
        target.classList.toggle('animation-background', isIntersecting);
        target.children[0].classList.toggle('change', isIntersecting);
        target.children[1].classList.toggle('toggle', isIntersecting); 
    });
}, {
    threshold: 0
});

document.querySelectorAll('.switch_container').forEach(div => {
    observer.observe(div);
});  