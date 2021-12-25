class ReviewElement extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review-result" tabindex="0">
        <p class="review-author mb-1">${this._item.name} 
          <i class="icon fas fa-circle"></i> 
          <span class="review-date">${this._item.date}</span>
        </p>
        <p class="review-content">"${this._item.review}"</p>
      </div>
    `;
  }
}

customElements.define('review-element', ReviewElement);
