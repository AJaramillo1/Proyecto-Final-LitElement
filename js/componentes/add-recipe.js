
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
        const forms = this.renderRoot.querySelector('.side-form');
        M.Sidenav.init(forms, {edge: 'left'});
      }
      render() {
        return html`
       <link href="../../node_modules/materialize-css/dist/css/materialize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="./../../node_modules/materialize-css/dist/js/materialize.min.js"></script>
        <div class="center">
            <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
            <i class="material-icons" @click=${this._eventReceta}>add</i>
            </a>
        </div>
        <div id="side-form" class="sidenav side-form">

        <form class="add-recipe container section">
        <h6 >New Recipe</h6>
        <div class="divider"></div>
         <label for="title">Recipe Title</label>
        <div class="input-field">
            <input placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
        </div>
        <label for="ingredients">Ingredients</label>
        <div class="input-field">
            <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">
        </div>
        <div class="input-field center">
            <button type="button" class="btn-small" @click=${this._repachnuevo}>Add</button>
        </div>
        </form>
    </div>
        `;
      }

      _eventReceta(event) {
        const forms = this.renderRoot.querySelector('.side-form');
        const intance =  M.Sidenav.init(forms);
        intance.open();
       }

       _repachnuevo(event) {
        const tituloInput = this.shadowRoot.querySelector('#title');
        const ingredientesInput = this.shadowRoot.querySelector('#ingredients');

        const titulo = tituloInput.value.trim();
        const ingredientes = ingredientesInput.value.trim();
        
        if (!titulo || !ingredientes) {
            alert("Favor de llenar los campos");
            return;
        }

        const newRecipe = {
        "src": "/img/comidas.png",
        "alt": "recipe thumb 1",
        "title": titulo,
        "ingredients": ingredientes,
        "deleteIcon": "delete_outline"        
        }

        this._dispatchArriba(newRecipe)
        tituloInput.value = '';
        ingredientesInput.value = '';
       }

       _dispatchArriba(newRecipe) {
        const event = new CustomEvent('dispacht-agregar', {
          detail: {newRecipe: newRecipe},
          bubbles: true,
          composed: false,
        });
        this.dispatchEvent(event);
      }
}
customElements.define('add-recipe', MyButton);
