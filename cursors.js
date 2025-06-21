// Creates fading trail dots that follow the mouse
document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;
  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 600); // Matches the CSS animation duration
});
// Animate on scroll
AOS.init({
  duration: 1000,
  once: true
});
