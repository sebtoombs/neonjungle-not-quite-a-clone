import "intersection-observer";
import scrollama from "scrollama";
// Scrollama is actually a great library!

const scrollyTime = scrollama();

scrollyTime
  .setup({
    step: "[data-scrollytime]",
    offset: 1,
  })
  .onStepEnter(({ element }) => {
    if (!element.classList.contains("is-animated")) {
      element.classList.add("is-animated");
    }
  });
