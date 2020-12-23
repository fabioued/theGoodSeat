/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/login': { view: 'login' },
  '/register': { view: 'register' },
  '/rides/search': { view: 'rides/search' },
  '/rides/price': { view: 'rides/getPrice' },
  '/rides/time': { view: 'rides/getTime' },
  '/rides/map': { view: 'rides/map' },

  //BACKEND

  //AUTHENTIFICATION
  'POST /register': 'UsersController.register',
  'POST /login': 'UsersController.login',

  'POST /rides/search': 'RidesController.search',
  'POST /rides/price': 'RidesController.getPrices',
  'POST /rides/time': 'RidesController.getTime',

  //API AUTHENTIFICATION
  'POST /api/register': 'UsersController.apiRegister',
  'POST /api/login': 'UsersController.apiLogin',

  'POST /api/rides/search': 'RidesController.apiSearch',
  'POST /api/rides/price': 'RidesController.apiGetPrices',
  'POST /api/rides/time': 'RidesController.apiGetTime',


};
