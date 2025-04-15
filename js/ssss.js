var t = document.querySelectorAll(".js-scroll")
, n = function() {
  t.forEach((function(e) {
      !function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return e.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / t
      }(e, 1.25) ? function(e) {
          return e.getBoundingClientRect().top > (window.innerHeight || document.documentElement.clientHeight)
      }(e) && function(e) {
          e.classList.remove("scrolled")
      }(e) : e.classList.add("scrolled")
  }
  ))
};
window.addEventListener("scroll", (function() {
  n()
}
)) 