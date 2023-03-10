import type { ScopedElementsMap } from '@open-wc/scoped-elements';
import type { CSSResultGroup, TemplateResult } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Button } from '@sanomalearning/slds-core/button';
import { css, html, LitElement } from 'lit';

export class App extends ScopedElementsMixin(LitElement) {
  static get scopedElements(): ScopedElementsMap {
    return {
      'sl-button': Button
    };
  }

  static styles: CSSResultGroup = css`
    :host { display: block; }
  `;

  render(): TemplateResult {
    return html`
      <h1>Sanoma Learning Design System Demo App</h1>
      <h2>Using <a href="https://lit.dev">Lit</a></h2>
      <sl-button>Button</sl-button>
    `;
  }
}

customElements.define('demo-app', App);
