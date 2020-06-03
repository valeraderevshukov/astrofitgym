import { WIN, FIXED, HTML, HTMLBODY, OPEN, OVERFLOW_HIDDEN } from '../constants';

const header = $('.js-header');
const btnMenu = $('.js-btn-menu');

WIN.on('scroll', () => {
  const offset = WIN.scrollTop();
  offset >= 1 ? header.addClass(FIXED) : header.removeClass(FIXED);
});

let winOffset;
let openMenu = 'is-open-menu';
let clickFlag = true;
btnMenu.on('click', () => {
  if(!clickFlag) return;
  if (!header.hasClass(openMenu)) {
    clickFlag = false;
    winOffset = WIN.scrollTop();
    header.addClass(openMenu);
    setTimeout(() => {
      HTML.addClass(OVERFLOW_HIDDEN);
      clickFlag = true;
    }, 300);
  }
  else {
    header.removeClass(openMenu);
    HTML.removeClass(OVERFLOW_HIDDEN);
    HTMLBODY.scrollTop(winOffset);
  }
});
