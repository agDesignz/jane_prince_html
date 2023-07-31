import '../styles/styles.css';
import NavStopScroll from './modules/NavStopScroll.js';
import StickyHeader from './modules/StickyHeader';

let navStopScroll = new NavStopScroll();
new StickyHeader();


// let checkBox = document.querySelector('.navigation__checkbox');
// checkBox.addEventListener('click', () => {
//   document.querySelector('body').classList.toggle('stop-scroll');
// });



if (module.hot) {
  module.hot.accept();
}
