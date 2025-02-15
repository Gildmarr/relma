function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
function enableScroll() {
    window.onscroll = function () { };
}

document.getElementById("hamburger").addEventListener("click", function(){
    console.log("clicked")
    document.querySelector(".menu-mobile").style.display="flex";
    disableScroll();
})



document.querySelector(".close-icon").addEventListener("click", function(){
    enableScroll();
    console.log("clicked")
    document.querySelector(".menu-mobile").style.display="none";
    
    
})


