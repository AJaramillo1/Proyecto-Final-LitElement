

import {LitElement, html, css} from 'lit-element';
import {styles} from '../../css/styles.js';
export class MyButton extends LitElement {

    static styles = styles;

    static properties = {
        aperturaReceta: {type: Boolean},
      };
      
      constructor() {
        super();    
        this.aperturaReceta = false;
      }
      firstUpdated(){
        const forms = this.renderRoot.querySelector('.side-menu');
        M.Sidenav.init(forms, {edge: 'right'});
      }
      render() {
        return html`
       <link href="../../node_modules/materialize-css/dist/css/materialize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="./../../node_modules/materialize-css/dist/js/materialize.min.js"></script>
      
         <!-- top nav -->
  <nav class="z-depth-0">
    <div class="nav-wrapper container">
      <a href="/">Food<span>Ninja</span></a>
      <span class="right grey-text text-darken-1"  @click=${this._eventReceta} >
        <i class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
      </span>
    </div>
  </nav>

  <!-- side nav -->
  <ul id="side-menu" class="sidenav side-menu">
    <li><a class="subheader">FOODNINJA</a></li>
    <li><a href="/" class="waves-effect">Home</a></li>
    <li><a href="/pages/about.html" class="waves-effect">About</a></li>
    <li><div class="divider"></div></li>
    <li><a href="/pages/contact.html" class="waves-effect">
      <i class="material-icons">mail_outline</i>Contact</a>
    </li>
  </ul>
     
        `;
      }

      _eventReceta(event) {
        const forms = this.renderRoot.querySelector('.side-menu');
        const intance =  M.Sidenav.init(forms);
        intance.open();
       }


}
customElements.define('side-nav', MyButton);
