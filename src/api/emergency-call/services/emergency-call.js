'use strict';

/**
 * emergency-call service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emergency-call.emergency-call');
