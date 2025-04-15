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









const observer1 = new IntersectionObserver(intersections => {
    intersections.forEach(({
        target,
        isIntersecting
    }) => {
        target.classList.toggle('change', isIntersecting);
    });
}, {
    threshold: 0
});
const observer2 = new IntersectionObserver(intersections => {
    intersections.forEach(({
        target,
        isIntersecting
    }) => {
        target.classList.toggle('toggle', isIntersecting);
    });
}, {
    threshold: 0
});
const observer3 = new IntersectionObserver(intersections => {
    intersections.forEach(({
        target,
        isIntersecting
    }) => {
        target.classList.toggle('animation', isIntersecting);
    });
}, {
    threshold: 0
});
document.querySelectorAll('.button1').forEach(div => {
    observer1.observe(div);
});

document.querySelectorAll('.button2').forEach(div => {
    observer2.observe(div);
});
document.querySelectorAll('.switch_container').forEach(div => {
    observer3.observe(div);
}); 