'use strict';

/**
 * initial-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::initial-page.initial-page');
