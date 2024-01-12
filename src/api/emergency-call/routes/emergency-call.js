'use strict';

/**
 * emergency-call router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::emergency-call.emergency-call');
