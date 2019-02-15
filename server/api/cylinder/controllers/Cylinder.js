'use strict';

/**
 * Cylinder.js controller
 *
 * @description: A set of functions called "actions" for managing `Cylinder`.
 */

module.exports = {

  /**
   * Retrieve cylinder records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cylinder.search(ctx.query);
    } else {
      return strapi.services.cylinder.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cylinder record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cylinder.fetch(ctx.params);
  },

  /**
   * Count cylinder records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cylinder.count(ctx.query);
  },

  /**
   * Create a/an cylinder record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cylinder.add(ctx.request.body);
  },

  /**
   * Update a/an cylinder record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cylinder.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cylinder record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cylinder.remove(ctx.params);
  }
};
