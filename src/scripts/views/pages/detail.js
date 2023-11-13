import UrlParser from '../../routes/url-parser';
import restaurantsource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await restaurantsource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        rating: resto.rating,
        pictureId: resto.pictureId,
        description: resto.description,
      },
    });
  },
};

export default Detail;
