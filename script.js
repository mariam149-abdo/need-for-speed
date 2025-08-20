const  about=document.querySelector(".about-content");
     window.addEventListener("scroll", () =>{     
        const rect=about.getBoundingClientRect();   
       if (rect.top < window.innerHeight - 100){   
        about.classList.add("animationabout"); 
   }   
       });


const menubtn = document.getElementById("menu-icon");
const menu = document.getElementById("mobile-menu");
const menua =document.querySelectorAll(".mobile-menu a");
const animation ="animation-menu";
menubtn.addEventListener("click", () => {
 if (menu.style.display === "flex") {
    menu.style.display = "none";
    menua.forEach(link =>{link.style.display="none"});
 }
    else {
    menu.style.display = "flex";
    menua.forEach(link =>{link.style.display="flex"});
    menu.classList.add(animation);
  }

menua.forEach(link => {
    link.addEventListener("click", () => {
        menu.style.display = "none";
    });
 })
})