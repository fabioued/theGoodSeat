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





  'get /user/new': 'UserController.new',
  'post /user/register': 'UserController.register',

  'get /session/new': 'SessionController.new',
  'post /session/create': 'SessionController.create',




  '/course/waitingTimes': { view: 'coursewaitingtimes' },



};
