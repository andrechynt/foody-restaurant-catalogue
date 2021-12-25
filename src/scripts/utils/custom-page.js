const CustomPage = {
  _page(header, btn) {
    header.style.backgroundColor = '#f96501';
    btn.style.border = '2px solid #ffffff';
  },

  _remove(header, btn) {
    header.style.backgroundColor = '';
    btn.style.border = '';
  },

  _skipContent() {
    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('#post').focus();
      }
    });
  },
};

export default CustomPage;
