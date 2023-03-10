import { html, LitElement, TemplateResult } from 'lit';

export class App extends LitElement {
  render(): TemplateResult {
    return html`HELLO WORLD!`;
  }
}

customElements.define('demo-app', App);
