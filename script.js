padding.addEventListener("input", (e) => {
    demo.style.setProperty("--padding", `${e.target.value}px`);
  });
  border.addEventListener("input", (e) => {
    demo.style.setProperty("--border-width", `${e.target.value}px`);
  });
  margin.addEventListener("input", (e) => {
    demo.style.setProperty("--margin", `${e.target.value}px`);
  });