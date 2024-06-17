
import {LitElement, html, css} from 'lit-element';
import {styles} from '../../css/styles.js';

export class MyButton extends LitElement {

    static styles = styles;

    static properties = {
        viewContact: {type: Boolean},
        viewAbout: {type: Boolean},
      };
      
      constructor() {
        super();
        this.viewContact = false;
        this.viewAbout = false;    
      }

      render() {
        return html`
        <link href="../../node_modules/materialize-css/dist/css/materialize.min.css" rel="stylesheet">
        <link href="../../node_modules/materialize-css/dist/js/materialize.min.js" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
<h5 class="center">About Food Ninja</h5>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus omnis, ea doloremque exercitationem id necessitatibus. Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus amet iure, non dignissimos illo.</p>

    `;
    }   
}
customElements.define('about-div', MyButton);
