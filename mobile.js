document.getElementById("hamburger").addEventListener("click", function(){
    console.log("clicked")
    document.querySelector(".menu-mobile").style.display="flex";
    
})

document.querySelector(".close-icon").addEventListener("click", function(){
    console.log("clicked")
    document.querySelector(".menu-mobile").style.display="none";
    
})
