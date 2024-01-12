'use strict';

/**
 * stay-now service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stay-now.stay-now');
