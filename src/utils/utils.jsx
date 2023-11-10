export const scrollIntoView = (id) => {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
};

const observer = (className, el) => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${className}-show`);
        return;
      }
      entry.target.classList.remove(`${className}-show`);
    });
  });

  obs.observe(el);
};

export const animateJS = (className) => {
  document
    .querySelectorAll(`.${className}-hidden`)
    .forEach((el) => observer(className, el));
};
