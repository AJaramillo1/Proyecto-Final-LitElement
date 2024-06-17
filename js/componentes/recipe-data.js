
import {LitElement, html, css} from 'lit-element';
import {styles} from '../../css/styles.js';
//import recipesData from '../../json/recipes.json';
import {map} from 'lit/directives/map.js';
export class MyButton extends LitElement {

    static styles = styles;

    static properties = {
        recipes: { type: Array }
      };
      
      constructor() {
        super();    
        this.recipes = [
              {
                "src": "/img/comidas.png",
                "alt": "recipe thumb 1",
                "title": "Edame Noodles",
                "ingredients": "Edame Beans, Noodles, Garlic oil",
                "deleteIcon": "delete_outline"
              },
              {
                "src": "/img/dish.png",
                "alt": "recipe thumb 2",
                "title": "Chicken Curry",
                "ingredients": "Chicken, Curry Sauce, Rice",
                "deleteIcon": "delete_outline"
              },
              {
                "src": "/img/comidas.png",
                "alt": "recipe thumb 3",
                "title": "Vegetable Stir Fry",
                "ingredients": "Broccoli, Bell Peppers, Soy Sauce",
                "deleteIcon": "delete_outline"
              },
              {
                "src": "/img/dish.png",
                "alt": "recipe thumb 4",
                "title": "Beef Tacos",
                "ingredients": "Beef, Tortilla, Lettuce, Cheese",
                "deleteIcon": "delete_outline"
              },
              {
                "src": "/img/comidas.png",
                "alt": "recipe thumb 5",
                "title": "Salmon Sushi",
                "ingredients": "Salmon, Rice, Nori, Wasabi",
                "deleteIcon": "delete_outline"
              }
            ];
      }

      render() {
        return html`
        <link href="../../node_modules/materialize-css/dist/css/materialize.min.css" rel="stylesheet">
        <link href="../../node_modules/materialize-css/dist/js/materialize.min.js" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <!-- recipes -->
        <div class="recipes container grey-text text-darken-1" >
            ${this.recipes.map((recipe, index) => html`
                <div class="card-panel recipe white row">
                  <img src="${recipe.src}" alt="${recipe.alt}">
                  <div class="recipe-details">
                    <div class="recipe-title">${recipe.title}</div>
                    <div class="recipe-ingredients">${recipe.ingredients}</div>
                  </div>
                  <div class="recipe-delete">
                    <i class="material-icons" id = "positonDrop" value = ${index}  @click=${this._dropPosition}>${recipe.deleteIcon}</i>
                  </div>
                </div>
              `)}

              <div @dispacht-agregar=${this._dispatchSuperior}>
        <slot></slot>
      </div>
        </div>
         
        `;
      }

      _dropPosition(event) {
        const index = event.currentTarget.getAttribute('value');
        this.recipes.splice(index, 1);
        this.requestUpdate();
       }

       _dispatchSuperior(e) {
        console.log(e.detail);
        if (e.detail) {
            this.recipes.push(e.detail.newRecipe);
            this.requestUpdate();
        }
       }

}
customElements.define('recipe-data', MyButton);
