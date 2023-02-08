function handleMarquee() {
    const marquee = document.querySelectorAll(".marquee");
    let speed = 2;
    let lastScrollPos = 0;
    let timer;
    marquee.forEach(function (el) {
      const container = el.querySelector(".inner");
      const content = el.querySelector(".inner > *");
      //Get total width
      const elWidth = content.offsetWidth;
      //Duplicate content
      let clone = content.cloneNode(true);
      container.appendChild(clone);
      let progress = 1;
      function loop() {
        progress = progress - speed;
        if (progress <= elWidth * -1) {
          progress = 0;
        }
        container.style.transform = "translateX(" + progress + "px)";
        window.requestAnimationFrame(loop);
      }
      loop();
    });
  }
  handleMarquee();
  