   const text = document.querySelector("h1");
   const birds = document.querySelector(".birds");
   const land = document.querySelector(".land");

   window.addEventListener("scroll", () => {
    scroll = window.scrollY;
    text.style.marginTop = scroll*0.8 + 'px';
    birds.style.left = scroll*2 + 'px';
    land.style.marginTop = scroll*1.9 + 'px';
   })