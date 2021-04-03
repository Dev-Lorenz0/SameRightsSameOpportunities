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

setTimeout(function(){
  document.getElementById("myImg").src = "Same (4).png";
}, 6100);
