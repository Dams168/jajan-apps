import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster lazyload" data-src="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="resto__overview">
  <h2>Deskripsi</h2>
  <p>${restaurant.description}</p>

  
  <h4 class="menu-title">Food Menu</h4>
<ul class="menu-list">
  ${restaurant.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join('')}
</ul>

<h4 class="menu-title">Drink Menu</h4>
<ul class="menu-list">
  ${restaurant.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join('')}
</ul>

  <h4 class="section-title">${restaurant.customerReviews.length} Review</h4>
<ul class="review-list">
  ${restaurant.customerReviews.map((review) => `
    <li class="review-item">
      <strong class="review-name">${review.name}</strong>
      <p class="review-date">${review.date}</p>
      <p class="review-text">${review.review}</p>
    </li>
  `).join('')}
</ul>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <h4 class="resto-city">${restaurant.city}</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
