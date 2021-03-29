const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".front").style.opacity = opacity;
});

const h1 = document.getElementById("h1title");

setTimeout(function(){
  h1.innerHTML = "Même droits, Même opportunitées";
  h1.style.opacity = "1"; 
}, 6100);