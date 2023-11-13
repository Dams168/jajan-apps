import restaurantsource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="latest__label">Explore Restaurant</h1>
                <div class="resto-list" id="resto-list"></div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const content = await restaurantsource.listRestaurant();
    const contentContainer = document.querySelector('#resto-list');
    content.forEach((restaurant) => {
      contentContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
