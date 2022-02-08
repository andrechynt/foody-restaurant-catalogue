import Route from '../routes/route';
import UrlParser from '../routes/url-parser';
import Drawer from '../utils/drawer';
import CustomPage from '../utils/custom-page';

class App {
  constructor({
    header, button, drawer, backdrop, content, btnAbout, navbar,
  }) {
    this._header = header;
    this._button = button;
    this._drawer = drawer;
    this._backdrop = backdrop;
    this._content = content;
    this._btnAbout = btnAbout;
    this._navbar = navbar;
  }

  initialAppShell() {
    Drawer.init({
      button: this._button,
      drawer: this._drawer,
      backdrop: this._backdrop,
      navLink: this._navbar,
    });
  }

  scrollPage() {
    this._header.classList.toggle('fixed-top', window.scrollY > 0);
    this._btnAbout.classList.toggle('show', window.scrollY > 0);
  }

  renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Route[url];
    const breakpointsForMobile = window.matchMedia('(max-width: 540px)');

    this._content.innerHTML = page.render();
    page.afterRender();
    CustomPage._skipContent();

    // FOR CUSTOM STYLE HEADER IN DIFFERENT PAGES
    if (url === '/favorite' || url === '/detail/:id') {
      if (breakpointsForMobile.matches) {
        window.scrollTo(0, 0);
      }

      CustomPage._page(this._header, this._btnAbout);
    } else {
      CustomPage._remove(this._header, this._btnAbout);
    }
  }
}

export default App;
