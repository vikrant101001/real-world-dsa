import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

export default scroll;