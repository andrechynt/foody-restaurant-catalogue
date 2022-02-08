import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/template.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/home/main.css';
import '../styles/detail/main.css';
import '../styles/favorite/main.css';
import './view/components/navigation-bar';
import './view/components/footer-bar';
import './view/components/home/jumbotron-element';
import './view/components/home/headline-element';
import './view/components/home/restaurant-item';
import './view/components/home/skeleton-loader';
import './view/components/detail/detail-restaurant';
import './view/components/detail/other-restaurant';
import './view/components/detail/review-element';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  header: document.querySelector('header'),
  button: document.querySelector('.hamburger-toggle'),
  drawer: document.querySelector('.navbar-nav'),
  backdrop: document.querySelector('.backdrop-nav'),
  content: document.querySelector('main'),
  btnAbout: document.querySelector('.btn-about'),
  navbar: document.querySelectorAll('.navbar-nav a'),
});

window.addEventListener('DOMContentLoaded', () => {
  app.initialAppShell();
});

window.addEventListener('scroll', () => {
  app.scrollPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
