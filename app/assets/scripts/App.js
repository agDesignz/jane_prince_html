import '../styles/styles.css';
import NavStopScroll from './modules/NavStopScroll.js';

let navStopScroll = new NavStopScroll();


// let checkBox = document.querySelector('.navigation__checkbox');
// checkBox.addEventListener('click', () => {
//   document.querySelector('body').classList.toggle('stop-scroll');
// });



if (module.hot) {
  module.hot.accept();
}
