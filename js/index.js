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
        console.log(target.children)
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
  