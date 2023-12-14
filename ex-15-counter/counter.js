window.addEventListener("load", function () {
  const counters = document.querySelectorAll(".counter");
  [...counters].forEach((counter) => {
    counter.innerHTML = 0;
    const counterFollers = () => {
      const target = +counter.dataset.target;
      const c = +counter.innerText;
      const increment = target / 200;
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(counterFollers, 1);
      } else {
        counter.innerHTML = target;
      }
    };
    counterFollers();
  });
});
