document.querySelectorAll(".tab-bar").forEach(function (item) {
  let children = Array.from(item.children);
  let circleIndicator = item.querySelector(".tab-bar__circle-indicator");
  let lineIndicator = item.querySelector(".tab-bar__line-indicator");
  let gap = 25;

  if (window.screen.availWidth <= 768) {
    gap = 10;
  }

  if (item.classList.contains("tab-bar-vertical")) {
    children.forEach((childItem, key) => {
      childItem.addEventListener("click", () => {
        let color = getComputedStyle(document.documentElement).getPropertyValue(
          `--theme-${childItem.dataset.theme}`
        );

        lineIndicator.classList.remove("animate");
        lineIndicator.style.marginTop =
          (gap + childItem.clientHeight) * key + "px";
        lineIndicator.classList.add("animate");

        document.body.style.backgroundColor = color;
        lineIndicator.style.backgroundColor = color;
      });
    });
  } else {
    children.forEach((childItem, key) => {
      childItem.addEventListener("click", () => {
        let color = getComputedStyle(document.documentElement).getPropertyValue(
          `--theme-${childItem.dataset.theme}`
        );

        circleIndicator.classList.remove("animate");
        circleIndicator.style.marginLeft =
          (gap + childItem.clientWidth) * key + "px";
        circleIndicator.classList.add("animate");

        document.body.style.backgroundColor = color;
        circleIndicator.style.backgroundColor = color;
      });
    });
  }
});
