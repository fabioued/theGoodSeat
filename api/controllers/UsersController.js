/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let axios = require('axios');
var validate = require('sails-hook-validation-ev/lib/validate');
const got = require('got');
const TGS_apiKey = '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig';
const TGS_url = 'https://staging.api.external.thegoodseat.fr/';

module.exports = {

  register: async function (req, res) {
    validate(req, (req) => {
      req.check('email').not().isEmpty().isString().isEmail().withMessage('email is required');
      req.check('phoneNumber').not().isEmpty().isString().withMessage('phoneNumber is required');
      req.check('firstName').not().isEmpty().isString().withMessage('firstName is required');
      req.check('lastName').not().isEmpty().isString().withMessage('lastName is required');
      req.check('birthDate').not().isEmpty().withMessage('birthDate is required');
      req.check('isPhoneNumberVerified').optional();
      req.check('country').not().isEmpty().isString();
    });

    const errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const result = await axios({
        url: TGS_url + 'registeruser',
        method: 'POST',
        data: {
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          birthDate: req.body.birthDate,
          isPhoneNumberVerified: true,
          country: req.body.country,
        },
        headers: {
          'x-api-key': TGS_apiKey,
          'Content-Type': 'application/json'
        }
      });

      const data = JSON.parse(result.data.body);
      if (data.userToken) {
        res.cookie('token', data.userToken);
        res.view('pages/homepage', { user: data });
      }
      else {
        return res.status(401).json(data);
      }
    } catch (error) {
      throw new Error('Issue during user sign in : ' + error.message);
    }
  },

  login: async function (req, res) {
    validate(req, (req) => {
      req.check('email').not().isEmpty().isEmail().withMessage('email is required');
      req.check('phoneNumber').not().isEmpty().withMessage('phoneNumber is required');
    });

    const errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const result = await axios({
        url: TGS_url + 'loginuser',
        method: 'POST',
        data: {
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
        },
        headers: {
          'x-api-key': TGS_apiKey,
          'Content-Type': 'application/json'
        }
      });

      const data = JSON.parse(result.data.body);
      if (data.token) {
        res.cookie('token', data.token);
        res.view('pages/homepage', { user: data });
      }
      else {
        return res.status(401).json(data);
      }
    } catch (error) {
      throw new Error('Issue during user sign in : ' + error.message);
    }
  },
  apiRegister: async function (req, res) {
    validate(req, (req) => {
      req.check('email').not().isEmpty().isString().isEmail().withMessage('email is required');
      req.check('phoneNumber').not().isEmpty().isString().withMessage('phoneNumber is required');
      req.check('firstName').not().isEmpty().isString().withMessage('firstName is required');
      req.check('lastName').not().isEmpty().isString().withMessage('lastName is required');
      req.check('birthDate').not().isEmpty().withMessage('birthDate is required');
      req.check('isPhoneNumberVerified').optional();
      req.check('country').not().isEmpty().isString();
    });

    const errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const result = await axios({
        url: TGS_url + 'registeruser',
        method: 'POST',
        data: {
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          birthDate: req.body.birthDate,
          isPhoneNumberVerified: true,
          country: req.body.country,
        },
        headers: {
          'x-api-key': TGS_apiKey,
          'Content-Type': 'application/json'
        }
      });

      const data = JSON.parse(result.data.body);
      if (data.userToken) {
        res.cookie('token', data.userToken);
        res.send(data);
      }
      else {
        return res.status(401).json(data);
      }
    } catch (error) {
      throw new Error('Issue during user sign in : ' + error.message);
    }
  },

  apiLogin: async function (req, res) {
    validate(req, (req) => {
      req.check('email').not().isEmpty().isEmail().withMessage('email is required');
      req.check('phoneNumber').not().isEmpty().withMessage('phoneNumber is required');
    });

    const errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const result = await axios({
        url: TGS_url + 'loginuser',
        method: 'POST',
        data: {
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
        },
        headers: {
          'x-api-key': TGS_apiKey,
          'Content-Type': 'application/json'
        }
      });

      const data = JSON.parse(result.data.body);
      if (data.token) {
        res.cookie('token', data.token);
        res.send(data);
      }
      else {
        return res.status(401).json(data);
      }
    } catch (error) {
      throw new Error('Issue during user sign in : ' + error.message);
    }
  }
};

