/**
 * RidesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let axios = require('axios');
var validate = require('sails-hook-validation-ev/lib/validate');
const TGS_apiKey = '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig';
const TGS_url = 'https://staging.api.external.thegoodseat.fr/';

module.exports = {
  search: async (req, res) => {
    validate(req, (req) => {
      req.check('startLatitude').not().isEmpty().withMessage('startLatitude is required');
      req.check('startLongitude').exists();
      req.check('endLatitude').exists();
      req.check('endLongitude').exists();
      req.check('startFullAddress').optional().isString();
      req.check('startZipCode').optional().isString();
      req.check('endFullAddress').optional().isString();
      req.check('startDate').optional();
      req.check('filterBy').optional();
      req.check('sort').optional();
    })

    const errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const data = {
        startLatitude: req.body.startLatitude,
        startLongitude: req.body.startLongitude,
        endLatitude: req.body.endLatitude,
        endLongitude: req.body.endLongitude,
        startFullAddress: encodeURI(req.body.startFullAddress),
        startZipCode: req.body.startZipCode,
        endFullAddress: encodeURI(req.body.endFullAddress),
        startDate: req.body.startDate,
        filterBy: req.body.filterBy,
        sort: req.body.sort,
      };
      const token = req.cookies.token;
      const result = await axios({
        url: TGS_url + 'getalloffers',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'x-api-key': TGS_apiKey,
          'Content-Type': 'application/json',
          'usertoken': token
        }
      });
      const obj = result.data;
      if (obj.statusCode === 200) {
        let offers = JSON.parse(obj.body);
        var allOffers = [];
        offers.forEach(offer => {
          allOffers.push({
            'providerCode': offer.providerCode,
            'price': offer.price,
            'currency': offer.currency,
            'WaitingTime': Math.floor(offer.arrivalTime / 60),
          });
        });
        res.view('rides/result', { allOffers });
      } else {
        console.error('search failed !! ', obj);
      }

    } catch (error) {
      throw new Error('Issue while getting the price : ' + error.message);
    }
  },
  getPrices: async (req, res) => {
    validate(req, (req) => {
      req.check('startLatitude').not().isEmpty().withMessage('startLatitude is required');
      req.check('startLongitude').exists();
      req.check('endLatitude').exists();
      req.check('endLongitude').exists();
      req.check('startFullAddress').optional().isString();
      req.check('startZipCode').optional().isString();
      req.check('endFullAddress').optional().isString();
      req.check('startDate').optional();
      req.check('filterBy').optional();
      req.check('sort').optional();
    })

    const errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const data = {
        startLatitude: req.body.startLatitude,
        startLongitude: req.body.startLongitude,
        endLatitude: req.body.endLatitude,
        endLongitude: req.body.endLongitude,
        startFullAddress: encodeURI(req.body.startFullAddress),
        startZipCode: req.body.startZipCode,
        endFullAddress: encodeURI(req.body.endFullAddress),
        startDate: req.body.startDate,
        filterBy: req.body.filterBy,
        sort: req.body.sort,
      };
      const token = req.cookies.token;
      const result = await axios({
        url: TGS_url + 'getalloffers',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'x-api-key': TGS_apiKey,
          'Content-Type': 'application/json',
          'usertoken': token
        }
      });
      const obj = result.data;
      if (obj.statusCode === 200) {
        let offers = JSON.parse(obj.body);
        res.view('rides/allPrices', { offers });
      } else {
        console.error('getPrices failed !! ', obj);
      }

    } catch (error) {
      throw new Error('Issue while getting the price : ' + error.message);
    }
  },
  getTime: async (req, res) => {
    validate(req, (req) => {
      req.check('startLatitude').not().isEmpty().withMessage('startLatitude is required');
      req.check('startLongitude').exists();
      req.check('endLatitude').exists();
      req.check('endLongitude').exists();
      req.check('startFullAddress').optional().isString();
      req.check('startZipCode').optional().isString();
      req.check('endFullAddress').optional().isString();
      req.check('startDate').optional();
      req.check('filterBy').optional();
      req.check('sort').optional();
    })

    const errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const data = {
        startLatitude: req.body.startLatitude,
        startLongitude: req.body.startLongitude,
        endLatitude: req.body.endLatitude,
        endLongitude: req.body.endLongitude,
        startFullAddress: encodeURI(req.body.startFullAddress),
        startZipCode: req.body.startZipCode,
        endFullAddress: encodeURI(req.body.endFullAddress),
        startDate: req.body.startDate,
        filterBy: req.body.filterBy,
        sort: req.body.sort,
      };
      const token = req.cookies.token;
      const result = await axios({
        url: TGS_url + 'getalloffers',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'x-api-key': TGS_apiKey,
          'Content-Type': 'application/json',
          'usertoken': token
        }
      });
      const obj = result.data;
      if (obj.statusCode === 200) {
        let offers = JSON.parse(obj.body);
        var allWaitingTimes = [];
        offers.forEach(offer => {
          allWaitingTimes.push({
            'providerCode': offer.providerCode,
            'price': offer.price,
            'currency': offer.currency,
            'WaitingTime': Math.floor(offer.arrivalTime / 60),
          });
        });
        res.view('rides/waitingTimes', { allWaitingTimes });
      } else {
        console.error('getTime failed !! ', obj);
      }

    } catch (error) {
      throw new Error('Issue while getting the waiting time : ' + error.message);
    }
  }
};

