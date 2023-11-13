import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <section class="content">
              <div class="latest">
                  <h1 class="latest__label">Your Favorite Restaurants</h1>
                  <div class="resto-list" id="resto-list"></div>
              </div>
          </section>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restosContainer = document.querySelector('#resto-list');

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Favorite;
