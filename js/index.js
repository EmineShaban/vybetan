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
        bag.style.display = "block"
    }
})

let dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];
let menuProd = document.getElementsByClassName("menu-prod")[0];
console.log(menuProd);

menuProd.addEventListener(("click"), (e) => {
    e.preventDefault();
    if (dropdownMenu.className == "dropdown-menu") {
        dropdownMenu.className = "dropdown-menu show"
        dropdownMenu.style.display = "block"

    } else {
        dropdownMenu.className = "dropdown-menu"
        dropdownMenu.style.display = "none"

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


const observer2 = new IntersectionObserver(intersections => {
    intersections.forEach(({
        target,
        isIntersecting
    }) => {
        target.children[0].classList.toggle('slide-in-top', isIntersecting);
        target.children[1].classList.toggle('slide-in-right', isIntersecting);
        target.children[2].classList.toggle('slide-in-right', isIntersecting);
        target.children[3].classList.toggle('slide-in-right', isIntersecting);

    });
}, {
    threshold: 0
});
document.querySelectorAll('.banner-aft-div').forEach(div => {
    observer2.observe(div);
});


const observer3 = new IntersectionObserver(intersections => {
    intersections.forEach(({
        target,
        isIntersecting
    }) => {

        target.children[0].classList.toggle('slide-in-right', isIntersecting);
        target.children[1].classList.toggle('slide-in-top', isIntersecting);
        target.children[2].classList.toggle('slide-in-left', isIntersecting);
    });
}, {
    threshold: 0
});
document.querySelectorAll('.typography-div').forEach(div => {
    observer3.observe(div);
});


const observer4 = new IntersectionObserver(intersections => {
    intersections.forEach(({
        target,
        isIntersecting
    }) => {
        target.children[0].children[0].classList.toggle('expandIn-animation1', isIntersecting);
        target.children[1].classList.toggle('expandIn-animation2', isIntersecting);
    });
}, {
    threshold: 0
});
document.querySelectorAll('.product-imgs').forEach(div => {
    observer4.observe(div);
});



// Image hotspots 


const selectHotspot = (e) => {
    const clickedHotspot = e.target.parentElement;
    const container = clickedHotspot.parentElement;

    // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
    const hotspots = container.querySelectorAll(".lg-hotspot");
    hotspots.forEach(hotspot => {
        if (hotspot === clickedHotspot) {
            hotspot.classList.toggle("lg-hotspot--selected");
        } else {
            hotspot.classList.remove("lg-hotspot--selected");
        }
    });
}

(() => {
    const buttons = document.querySelectorAll(".lg-hotspot__button");
    buttons.forEach(button => {
        button.addEventListener("click", selectHotspot);
    });
})();





var acc = document.getElementsByClassName("q");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// Comments


var comment = document.getElementsByClassName("comment");
var viewMore = document.getElementsByClassName("viewMore");

viewMore[0].addEventListener("click", function () {
    buttonView();
    for (let i = 3; i <= comment.length; i++) {
        if (comment[i].style.display == "none" || comment[i].style.display == "") {
            for (let index = 0; index <= 2; index++) {
                if (comment[i + index] != undefined) {
                    comment[i + index].style.display = "block";
                } else {
                    buttonView();
                }
            }
            i += 3;
            break
        }
    }
})

function buttonView() {
    if (comment[comment.length - 1].style.display == "block") {
        viewMore[0].style.display = "none";
    }
}