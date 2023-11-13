const assert = require('assert');

Feature('Un-Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// Scenario('showing empty liked restaurant',({ I }) => {
//   I.seeElement('.resto-list');

//   I.see('Tidak ada restaurant untuk ditampilkan');
// });

Scenario('liking one resto', async ({ I }) => {

  I.amOnPage('/');


  I.seeElement('.resto__title a');
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one Resto', async ({ I }) => {

  I.amOnPage('/');

  I.seeElement('.resto__title a');
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item a');
  const firstLikedResto = locate('.resto__title a').first();
  const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);

  assert.strictEqual(firstRestoTitle, firstLikedRestoTitle);

  I.click(firstLikedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});
