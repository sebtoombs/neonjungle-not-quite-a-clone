/**
 * Add a delegated event listener. Inspired by youmightnotneedjquery.com
 * @param {*} eventName
 * @param {*} elementSelector
 * @param {*} context
 */
export function addEventListener(
  eventName,
  elementSelector,
  eventHandler,
  context = document
) {
  context.addEventListener(
    eventName,
    function (e) {
      for (
        let target = e.target;
        target && target != this;
        target = target.parentNode
      ) {
        if (target.matches(elementSelector)) {
          eventHandler.call(target, e);
          break;
        }
      }
    },
    false
  );
}
