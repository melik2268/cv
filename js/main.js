AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: AbortController, // defines which position of the element regarding to window should trigger the animation

});
// multiple text
const typed = new Typed('.multiple-text', {
  strings: ["", "Frontend Developer", "Mobile Application Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeer: 100,
  backDelay: 100,
  loop: true

})
