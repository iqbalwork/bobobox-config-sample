'use strict';

/**
 * app-update service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-update.app-update');
