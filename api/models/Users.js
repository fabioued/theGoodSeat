/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true
    },
    phoneNumber: {
      type: 'string',
      required: true
    }

  },

  signup: function (inputs, cb) {
    // Create a new user
    // Users.create({
    //   email: inputs.email,
    //   firstname: inputs.firstname,
    //   lastname: inputs.lastname,
    //   birthDate: inputs.birthDate,
    //   phoneNumber: inputs.phoneNumber,
    //   isPhoneNumberVerified: inputs.isPhoneNumberVerified,
    //   country: inputs.country,
    // })

  },



};

