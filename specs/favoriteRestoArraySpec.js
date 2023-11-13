import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }
    return favoriteRestaurants.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteRestaurants;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus resto dengan meng-copy resto yang ada
    // kecuali resto dengan id == id

    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id != id);
  },

  async searchResto(query) {
    return (await this.getAllResto()).filter((resto) => {
      const loweredCaseRestoTitle = (resto.title || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
