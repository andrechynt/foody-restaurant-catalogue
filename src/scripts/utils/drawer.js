const Drawer = {
  init({
    button, drawer, content, navLink,
  }) {
    button.addEventListener('click', () => {
      this._show(button, drawer);
    });

    content.addEventListener('click', () => {
      this._close(button, drawer);
    });

    navLink.forEach((n) => {
      n.addEventListener('click', this._close(button, drawer));
    });
  },

  _show(button, drawer) {
    button.classList.toggle('show');
    drawer.classList.toggle('show');
  },

  _close(button, drawer) {
    button.classList.remove('show');
    drawer.classList.remove('show');
  },
};

export default Drawer;
