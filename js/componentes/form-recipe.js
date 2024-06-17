
import {LitElement, html, css} from 'lit-element';
import {styles} from '../../css/styles.js';
export class MyButton extends LitElement {

    static styles = styles;

    static properties = {
        aperturaReceta: {type: Boolean},
        claseNav: {type: String},
        showForm: {type: Boolean},
      };
      
      constructor() {
        super();    
        this.aperturaReceta = false;
        this.showForm = false;
        this.claseNav = 'sidenav';
      }

      connectedCallback(){
        super.connectedCallback();
        document.addEventListener('Receta-click', this._handleFormClick.bind(this))
      }
      disconnectedCallback(){
        super.disconnectedCallback();
        document.removeEventListener('Receta-click', this._handleFormClick)
      }

      _handleFormClick(){
        this.showForm = !this.showForm;
        this.claseNav = this.showForm ? 'side-form' : 'sidenav';
        this.requestUpdate();
      }

      render() {
        return html`
        <link href="../../node_modules/materialize-css/dist/css/materialize.min.css" rel="stylesheet">
        <link href="../../node_modules/materialize-css/dist/js/materialize.min.js" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
         <!-- add recipe side nav -->
        <div id="side-form" class="${this.claseNav}">
            <form class="add-recipe container section">
            <h6 >New Recipe</h6>
            <div class="divider"></div>
            <div class="input-field">
                <input placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
                <label for="title">Recipe Title</label>
            </div>
            <div class="input-field">
                <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">
                <label for="ingredients">Ingredients</label>
            </div>
            <div class="input-field center">
                <button class="btn-small">Add</button>
            </div>
            </form>
        </div>
        `;
      }

}
customElements.define('form-recipe', MyButton);
