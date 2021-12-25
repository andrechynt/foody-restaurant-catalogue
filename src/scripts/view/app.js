import Route from '../routes/route';
import UrlParser from '../routes/url-parser';
import Drawer from '../utils/drawer';
import CustomPage from '../utils/custom-page';

class App {
  constructor({
    header, button, drawer, content, btnAbout, navbar,
  }) {
    this._header = header;
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._btnAbout = btnAbout;
    this._navbar = navbar;
  }

  initialAppShell() {
    Drawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navLink: this._navbar,
    });
  }

  scrollPage() {
    this._header.classList.toggle('sticky', window.scrollY > 0);
    this._btnAbout.classList.toggle('show', window.scrollY > 0);
  }

  renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Route[url];

    this._content.innerHTML = page.render();
    page.afterRender();

    // FOR CUSTOM STYLE HEADER IN DIFFERENT PAGES
    if (url === '/favorite' || url === '/detail/:id') {
      CustomPage._page(this._header, this._btnAbout);
    } else {
      CustomPage._remove(this._header, this._btnAbout);
    }

    CustomPage._skipContent();
  }
}

export default App;
