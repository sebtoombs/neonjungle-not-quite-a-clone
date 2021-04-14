import { addEventListener } from "./dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

addEventListener("click", ".l-nav-toggle", onClickNavToggleHandler);

const ANIMATION_DURATION = 400;

function onClickNavToggleHandler(e) {
  const buttonEl = this;
  if (buttonEl.classList.contains("is-active")) {
    enableBodyScroll(document.querySelector(".l-site-header"));
    buttonEl.classList.remove("is-active");
    document.body.classList.remove("menu-open");
    setTimeout(() => {
      document.body.classList.remove("overlay-open");
    }, ANIMATION_DURATION);
  } else {
    disableBodyScroll(document.querySelector(".l-site-header"));
    document.body.classList.add("overlay-open");
    setTimeout(() => {
      buttonEl.classList.add("is-active");
      document.body.classList.add("menu-open");
    });
  }
}
