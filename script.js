const triggers = document.querySelectorAll(".accordion-trigger");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    triggers.forEach((t) => {
      const otherPanelId = t.getAttribute("aria-controls");
      const otherPanel = document.getElementById(otherPanelId);
      t.setAttribute("aria-expanded", "false");
      otherPanel.classList.remove("open");
    });

    if (!isExpanded) {
      trigger.setAttribute("aria-expanded", "true");
      panel.classList.add("open");
    }
  });
});

const trigger = document.getElementById("mobile-menu-trigger");
const mobileMenuCloseButton = document.getElementById(
  "mobile-menu-close-button"
);
const menu = document.getElementById("menu");

trigger.addEventListener("click", () => {
  menu.classList.add("open");
});

mobileMenuCloseButton.addEventListener("click", () =>
  menu.classList.remove("open")
);
