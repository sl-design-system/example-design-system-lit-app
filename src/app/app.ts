import type { ScopedElementsMap } from '@open-wc/scoped-elements';
import type { CSSResultGroup, TemplateResult } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Button } from '@sanomalearning/slds-core/button';
import { ButtonBar } from '@sanomalearning/slds-core/button-bar';
import { Editor } from '@sanomalearning/slds-editor';
import { Grid, GridColumn } from '@sanomalearning/slds-grid';
import { css, html, LitElement } from 'lit';
import { people } from '../data.js';

export class App extends ScopedElementsMixin(LitElement) {
  static get scopedElements(): ScopedElementsMap {
    return {
      'sl-button': Button,
      'sl-button-bar': ButtonBar,
      'sl-editor': Editor,
      'sl-grid': Grid,
      'sl-grid-column': GridColumn
    };
  }

  static styles: CSSResultGroup = css`
    :host {
      display: block;
    }

    .container {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      flex-wrap: wrap;
    }

    sl-grid {
      height: 300px;
      overflow: auto;
    }
  `;

  richText = `
    <h1>Rich Text Editor</h1>
    <p>This component is a <em>rich text editor</em> based on the <a href="https://prosemirror.net/" target="_blank">ProseMirror</a> library.</p>
    <p>It has support for the following editor actions:</p>
    <ul>
      <li><p>Typography: <strong>bold</strong>, <em>italic</em>, <u>underline</u> and <del>strikethrough</del></p></li>
      <li><p>Format: paragraph, quotation and headings</p></li>
      <li><p>Alignment: left, right or center</p></li>
      <li><p>Lists: ordered or unordered</p></li>
      <li><p>Indentation: indent and outdent</p></li>
      <li><p>Insert links</p></li>
    </ul>
  `;

  render(): TemplateResult {
    return html`
      <h1>Sanoma Learning Design System Demo App</h1>
      <h2>Using <a href="https://lit.dev">Lit</a></h2>

      <div class="container">
        <sl-button-bar>
          <sl-button>Button</sl-button>
          <sl-button variant="default">Button</sl-button>
          <sl-button variant="primary">Button</sl-button>
          <sl-button variant="success">Button</sl-button>
          <sl-button variant="warning">Button</sl-button>
          <sl-button variant="danger">Button</sl-button>
          <sl-button disabled>Button</sl-button>          
        </sl-button-bar>

        <sl-editor .value=${this.richText}></sl-editor>

        <sl-grid .items=${people}>
          <sl-grid-column path="firstName"></sl-grid-column>
          <sl-grid-column path="lastName"></sl-grid-column>
          <sl-grid-column path="email"></sl-grid-column>
          <sl-grid-column path="address.phone"></sl-grid-column>
          <sl-grid-column path="profession"></sl-grid-column>
        </sl-grid>
      </div>
    `;
  }
}

customElements.define('demo-app', App);
