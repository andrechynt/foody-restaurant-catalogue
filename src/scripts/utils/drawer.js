const Drawer = {
  init({
    button, drawer, backdrop, navLink,
  }) {
    button.addEventListener('click', () => {
      this._show(button, drawer, backdrop);
    });

    backdrop.addEventListener('click', () => {
      this._close(button, drawer, backdrop);
    });

    navLink.forEach((n) => {
      n.addEventListener('click', this._close(button, drawer, backdrop));
    });
  },

  _show(button, drawer, backdrop) {
    button.classList.toggle('show');
    drawer.classList.toggle('show');
    backdrop.classList.toggle('show');
  },

  _close(button, drawer, backdrop) {
    button.classList.remove('show');
    drawer.classList.remove('show');
    backdrop.classList.remove('show');
  },
};

export default Drawer;
