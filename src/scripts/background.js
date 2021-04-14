// Don't be scared, we're only using lodash's throttle function, nothing else
import { throttle } from "lodash";

function onScrollHandler(e) {
  const backgroundImage = document.querySelector(".l-background-image--img");
  if (!backgroundImage) return;
  let opacity = 1 - window.scrollY * (1 / 300);
  opacity = opacity < 0 ? 0 : opacity;
  backgroundImage.style.opacity = opacity;
}
// Throttle the scroll handler down enough that the browser doesn't struggle,
// But the "animation" is still smooth enough
const throttledScrollHandler = throttle(onScrollHandler, 10);

window.addEventListener("scroll", throttledScrollHandler);
