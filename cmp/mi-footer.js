class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021 Arreortua Tapia Samuel Alejandro.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);