
import {LitElement, html, css} from 'lit-element';
import {styles} from '../../css/styles.js';

export class MyButton extends LitElement {
  
  static styles = styles;

    static properties = {
        titulo: {type: String},
        titulo2: {type: String},
        viewContact: {type: Boolean},
        viewAbout: {type: Boolean},
      };
      
      constructor() {
        super();    
        this.titulo = 'Food';
        this.titulo2 = 'Ninja';
        this.viewContact = false;
        this.viewAbout = false; 
      }
      
      firstUpdated(){
        const menus = this.renderRoot.querySelector('.side-menu');
        M.Sidenav.init(menus, {edge: 'right'});
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
            <span class="right grey-text text-darken-1">
                <i @click=${this._eventMenu} class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
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
         <div>
                <slot></slot>
          </div>
   
        `;
      }

     _eventMenu(event) {
        const menus = this.renderRoot.querySelector('.side-menu');
        const instance = M.Sidenav.getInstance(menus);
        menus.classList.add('open');
        instance.open();
    }
    

}
customElements.define('top-nav', MyButton);
