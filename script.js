const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(navbar){

        if(window.scrollY > 100){
            navbar.style.transform = "translateY(-100%)";
        }else{
            navbar.style.transform = "translateY(0)";
        }

    }

});