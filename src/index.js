
// import global css
import './index.css';
// ...and css modules
import css from './index.m.css';

// import a pug template
import template from './index.pug';

const root = document.querySelector('#root');

root.classList.add('global-style', css['scoped-style']);

const html = template({ className: css.another_style, content: 'Contents for Pug' });

root.innerHTML = html;
