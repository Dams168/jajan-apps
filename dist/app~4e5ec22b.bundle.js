(()=>{"use strict";var n,r={948:(n,r,A)=>{A.d(r,{Z:()=>C});var e=A(537),t=A.n(e),i=A(645),o=A.n(i),a=A(667),p=A.n(a),s=new URL(A(736),A.b),l=o()(t()),d=p()(s);l.push([n.id,`@media screen and (min-width: 650px) {\n    .app-bar {\n      grid-template-columns: 1fr auto;\n      padding: 0px 32px;\n    }\n\n    .hero{\n      background-image: url(${d});\n    }\n\n    .hero__title{\n      font-size: 24px;\n    }\n\n    .hero__tagline{\n      font-size: 16px;\n    }\n   \n    .app-bar .app-bar__brand h1 {\n      font-size: 1.5em;\n    }\n   \n    .app-bar .app-bar__menu {\n      display: none;\n    }\n   \n    .app-bar .app-bar__navigation {\n      position: static;\n      width: 100%;\n    }\n   \n    .app-bar .app-bar__navigation ul li {\n      display: inline-block;\n    }\n   \n    .app-bar .app-bar__navigation ul li a {\n      display: inline-block;\n      width: 120px;\n      text-align: center;\n      margin: 0;\n    }\n   \n    .resto-list {\n      grid-template-columns: 1fr 1fr;\n    }\n   \n    .resto {\n      grid-template-columns: auto 1fr;\n    }\n   \n    .resto .resto__title {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n   \n    .resto .resto__overview {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n  }\n   \n  @media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n      font-size: 2em;\n    }\n  }\n   \n  @media screen and (min-width: 850px) {\n    .resto-list {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1200px) {\n    .resto-list {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1600px) {\n    .resto-list {\n        grid-template-columns: repeat(5, 1fr);\n    }\n  }`,"",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;MACE,+BAA+B;MAC/B,iBAAiB;IACnB;;IAEA;MACE,yDAA4E;IAC9E;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,WAAW;IACb;;IAEA;MACE,qBAAqB;IACvB;;IAEA;MACE,qBAAqB;MACrB,YAAY;MACZ,kBAAkB;MAClB,SAAS;IACX;;IAEA;MACE,8BAA8B;IAChC;;IAEA;MACE,+BAA+B;IACjC;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;QACI,qCAAqC;IACzC;EACF",sourcesContent:["@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n      grid-template-columns: 1fr auto;\r\n      padding: 0px 32px;\r\n    }\r\n\r\n    .hero{\r\n      background-image: url('../public/images/hero-images/hero-image_2-small.jpg');\r\n    }\r\n\r\n    .hero__title{\r\n      font-size: 24px;\r\n    }\r\n\r\n    .hero__tagline{\r\n      font-size: 16px;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n      display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n      position: static;\r\n      width: 100%;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n      display: inline-block;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li a {\r\n      display: inline-block;\r\n      width: 120px;\r\n      text-align: center;\r\n      margin: 0;\r\n    }\r\n   \r\n    .resto-list {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n   \r\n    .resto {\r\n      grid-template-columns: auto 1fr;\r\n    }\r\n   \r\n    .resto .resto__title {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n   \r\n    .resto .resto__overview {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 2em;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 850px) {\r\n    .resto-list {\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1200px) {\r\n    .resto-list {\r\n      grid-template-columns: repeat(4, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1600px) {\r\n    .resto-list {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }"],sourceRoot:""}]);const C=l},890:(n,r,A)=>{A.d(r,{Z:()=>C});var e=A(537),t=A.n(e),i=A(645),o=A.n(i),a=A(667),p=A.n(a),s=new URL(A(541),A.b),l=o()(t()),d=p()(s);l.push([n.id,`* {\n    padding: 0;\n    margin: 0;\n  }\n   \n  body {\n    font-family: 'Poppins', sans-serif;\n    background-color: white;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n\n  a, button, input, input[type='text'], textarea {\n    min-width: 44px;\n    min-height: 44px;\n}\n  /*\n    AppBar\n  */\n   \n  .app-bar {\n    padding: 8px 16px;\n    background-color: white;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 10px;\n    position: sticky;\n    top: 0;\n    z-index: 99;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n  }\n   \n  .app-bar .app-bar__menu {\n    display: flex;\n    align-items: center;\n  }\n   \n  .app-bar .app-bar__menu button {\n    background-color: transparent;\n    border: none;\n    font-size: 18px;\n    padding: 8px;\n    cursor: pointer;\n    min-width: 44px;\n    min-height: 44px;\n  }\n   \n  .app-bar .app-bar__brand {\n    display: flex;\n    align-items: center;\n  }\n   \n  .app-bar .app-bar__brand h1 {\n    color: #db0000;\n    text-transform: uppercase;\n    font-size: 12px;\n    user-select: none;\n  }\n   \n  .app-bar .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: white;\n    overflow: hidden;\n  }\n   \n  .app-bar .app-bar__navigation.open {\n    left: 0;\n  }\n   \n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    text-decoration: none;\n    color: black;\n    padding: 8px;\n    width: 100%;\n  }\n   \n  /* hero */\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    text-align: center;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5),\n                         rgba(0, 0, 0, 0.5)), url(${d});\n    background-position: center;\n    background-color: #000;\n  }\n  \n  .hero__inner {\n    margin: 0 auto;\n    max-width: 800px;\n  }\n  \n  .hero__title {\n    color: #fff;\n      font-weight: 700;\n      font-size: 36px;\n      text-shadow: 1px 1px #141414\n  }\n  \n  .hero__tagline {\n    color: #fff;\n      margin-top: 16px;\n      font-size: 18px;\n      font-weight: 500;\n      text-shadow: 1px 1px #141414\n  }\n  /*\n    Main Content\n  */\n   \n  main {\n    padding: 32px;\n    flex: 1;\n  }\n   \n  .content {\n    margin: 0 auto;\n    min-height: 100%;\n  }\n   \n  .content .content__heading {\n    font-weight: normal;\n  }\n   \n  \n  \n.content {\n\tpadding: 16px;\n}\n.latest {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.latest__label {\n  font-size: 32px;\n  font-weight: lighter;\n}\n\n.latest__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n\n  /*\n    Resto\n  */\n   \n  .resto-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    margin: 32px 0;\n  }\n   \n  \n  \n  \n  /*\n    Resto Item\n  */\n   \n  .resto-item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    overflow: hidden;\n  }\n   \n  .resto-item__header {\n    position: relative;\n  }\n   \n  .resto-item .resto-item__header .resto-item__header__poster {\n    width: 100%;\n  }\n   \n  .resto-item .resto-item__header .resto-item__header__rating {\n    position: absolute;\n    padding: 8px;\n    bottom: 20px;\n    left: 0;\n    display: inline-block;\n    background-color: black;\n    color: white;\n  }\n   \n  .resto-item .resto-item__header .resto-item__header__rating .resto-item__header__rating__score {\n    margin-left: 10px;\n  }\n   \n  .resto-item .resto-item__content {\n    padding: 16px;\n    text-align: left;\n  }\n   \n  .resto-item .resto-item__content h3 {\n    margin: 0 0 5px 0;\n  }\n   \n  .resto-item .resto-item__content h3 a {\n    color: #db0000;\n    text-decoration: none;\n    padding: 10px 0;\n  }\n\n  .resto-item .resto-item__content h4 {\n    font-size: 20px;\n    font-weight: 400;\n    color: black;\n    padding-bottom: 10px;\n  }\n   \n  .resto-item .resto-item__content p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4; /* number of lines to show */\n    -webkit-box-orient: vertical;\n  }\n   \n   \n  /*\n    Resto\n  */\n   \n  .resto {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n  }\n   \n  .resto .resto__poster {\n    width: 100%;\n    max-width: 400px;\n  }\n   \n  .resto .resto__info h4 {\n    margin: 8px 0;\n  }\n   \n   \n   \n  /*\n    Footer\n  */\n   \n  footer {\n    padding: 16px;\n  }\n   \n  footer p {\n    text-align: center;\n    color: #aaaaaa;\n  }\n   \n  footer p a {\n    color: #db0000;\n    text-decoration: none;\n  }\n\n  .skip-link {\n    position: absolute;\n    top: -60px;\n    left: 0;\n    background-color: #bf1722;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n  }\n   \n  .skip-link:focus {\n     top: 0;\n  }\n\n  /* review-list */\n\n.section-title {\n  font-size: 24px;\n  margin-top: 20px;\n}\n\n.review-list {\n  list-style-type: none;\n  padding: 0;\n}\n\n.review-item {\n  margin: 10px 0;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.review-name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n}\n\n.review-text {\n  font-size: 16px;\n  color: #555;\n}\n\n.review-date {\n  font-size: 14px;\n  color: #777;\n}\n\n  /* menu list */\n\n.menu-title {\n  font-size: 24px;\n  margin-top: 20px;\n}\n\n\n.menu-list {\n  list-style-type: none;\n  padding: 0;\n}\n\n\n.menu-item {\n  margin: 10px 0;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}`,"",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["* {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n   \r\n  body {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  a, button, input, input[type='text'], textarea {\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n}\r\n  /*\r\n    AppBar\r\n  */\r\n   \r\n  .app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 99;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n   \r\n  .app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand h1 {\r\n    color: #db0000;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    user-select: none;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    width: 100%;\r\n  }\r\n   \r\n  /* hero */\r\n  .hero {\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 380px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5),\r\n                         rgba(0, 0, 0, 0.5)), url('../public/images/heros/hero-image_2.jpg');\r\n    background-position: center;\r\n    background-color: #000;\r\n  }\r\n  \r\n  .hero__inner {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n  }\r\n  \r\n  .hero__title {\r\n    color: #fff;\r\n      font-weight: 700;\r\n      font-size: 36px;\r\n      text-shadow: 1px 1px #141414\r\n  }\r\n  \r\n  .hero__tagline {\r\n    color: #fff;\r\n      margin-top: 16px;\r\n      font-size: 18px;\r\n      font-weight: 500;\r\n      text-shadow: 1px 1px #141414\r\n  }\r\n  /*\r\n    Main Content\r\n  */\r\n   \r\n  main {\r\n    padding: 32px;\r\n    flex: 1;\r\n  }\r\n   \r\n  .content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n  }\r\n   \r\n  .content .content__heading {\r\n    font-weight: normal;\r\n  }\r\n   \r\n  \r\n  \r\n.content {\r\n\tpadding: 16px;\r\n}\r\n.latest {\r\n  width: 100%;\r\n  margin: 60px auto;\r\n  text-align: center;\r\n}\r\n\r\n.latest__label {\r\n  font-size: 32px;\r\n  font-weight: lighter;\r\n}\r\n\r\n.latest__label::after {\r\n  content: '';\r\n  margin-top: 16px;\r\n  display: block;\r\n  border-bottom: 1px solid #eeeeee;\r\n}\r\n\r\n\r\n  /*\r\n    Resto\r\n  */\r\n   \r\n  .resto-list {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n  }\r\n   \r\n  \r\n  \r\n  \r\n  /*\r\n    Resto Item\r\n  */\r\n   \r\n  .resto-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n  }\r\n   \r\n  .resto-item__header {\r\n    position: relative;\r\n  }\r\n   \r\n  .resto-item .resto-item__header .resto-item__header__poster {\r\n    width: 100%;\r\n  }\r\n   \r\n  .resto-item .resto-item__header .resto-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n   \r\n  .resto-item .resto-item__header .resto-item__header__rating .resto-item__header__rating__score {\r\n    margin-left: 10px;\r\n  }\r\n   \r\n  .resto-item .resto-item__content {\r\n    padding: 16px;\r\n    text-align: left;\r\n  }\r\n   \r\n  .resto-item .resto-item__content h3 {\r\n    margin: 0 0 5px 0;\r\n  }\r\n   \r\n  .resto-item .resto-item__content h3 a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n    padding: 10px 0;\r\n  }\r\n\r\n  .resto-item .resto-item__content h4 {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    color: black;\r\n    padding-bottom: 10px;\r\n  }\r\n   \r\n  .resto-item .resto-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4; /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n  }\r\n   \r\n   \r\n  /*\r\n    Resto\r\n  */\r\n   \r\n  .resto {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n  }\r\n   \r\n  .resto .resto__poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n  }\r\n   \r\n  .resto .resto__info h4 {\r\n    margin: 8px 0;\r\n  }\r\n   \r\n   \r\n   \r\n  /*\r\n    Footer\r\n  */\r\n   \r\n  footer {\r\n    padding: 16px;\r\n  }\r\n   \r\n  footer p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n  }\r\n   \r\n  footer p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .skip-link {\r\n    position: absolute;\r\n    top: -60px;\r\n    left: 0;\r\n    background-color: #bf1722;\r\n    color: white;\r\n    padding: 8px;\r\n    z-index: 100;\r\n  }\r\n   \r\n  .skip-link:focus {\r\n     top: 0;\r\n  }\r\n\r\n  /* review-list */\r\n\r\n.section-title {\r\n  font-size: 24px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.review-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.review-item {\r\n  margin: 10px 0;\r\n  border: 1px solid #ccc;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #f9f9f9;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.review-name {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n.review-text {\r\n  font-size: 16px;\r\n  color: #555;\r\n}\r\n\r\n.review-date {\r\n  font-size: 14px;\r\n  color: #777;\r\n}\r\n\r\n  /* menu list */\r\n\r\n.menu-title {\r\n  font-size: 24px;\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n.menu-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.menu-item {\r\n  margin: 10px 0;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #f9f9f9;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}"],sourceRoot:""}]);const C=l},362:(n,r,A)=>{var e=A(379),t=A.n(e),i=A(795),o=A.n(i),a=A(569),p=A.n(a),s=A(565),l=A.n(s),d=A(216),C=A.n(d),E=A(589),g=A.n(E),c=A(948),B={};B.styleTagTransform=g(),B.setAttributes=l(),B.insert=p().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=C(),t()(c.Z,B),c.Z&&c.Z.locals&&c.Z.locals},915:(n,r,A)=>{var e=A(379),t=A.n(e),i=A(795),o=A.n(i),a=A(569),p=A.n(a),s=A(565),l=A.n(s),d=A(216),C=A.n(d),E=A(589),g=A.n(E),c=A(890),B={};B.styleTagTransform=g(),B.setAttributes=l(),B.insert=p().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=C(),t()(c.Z,B),c.Z&&c.Z.locals&&c.Z.locals}},A={};function e(n){var t=A[n];if(void 0!==t)return t.exports;var i=A[n]={id:n,exports:{}};return r[n](i,i.exports,e),i.exports}e.m=r,n=[],e.O=(r,A,t,i)=>{if(!A){var o=1/0;for(l=0;l<n.length;l++){for(var[A,t,i]=n[l],a=!0,p=0;p<A.length;p++)(!1&i||o>=i)&&Object.keys(e.O).every((n=>e.O[n](A[p])))?A.splice(p--,1):(a=!1,i<o&&(o=i));if(a){n.splice(l--,1);var s=t();void 0!==s&&(r=s)}}return r}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[A,t,i]},e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var A in r)e.o(r,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var A=r.getElementsByTagName("script");if(A.length)for(var t=A.length-1;t>-1&&!n;)n=A[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={400:0};e.O.j=r=>0===n[r];var r=(r,A)=>{var t,i,[o,a,p]=A,s=0;if(o.some((r=>0!==n[r]))){for(t in a)e.o(a,t)&&(e.m[t]=a[t]);if(p)var l=p(e)}for(r&&r(A);s<o.length;s++)i=o[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},A=self.webpackChunkjajan_apps_2=self.webpackChunkjajan_apps_2||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),e.nc=void 0;var t=e.O(void 0,[192,2,193,337,268],(()=>e(253)));t=e.O(t)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map