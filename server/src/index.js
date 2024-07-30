'use strict';

const boostrap = require("./bootstrap");

module.exports = {
  async bootstrap() {
    await boostrap();
  },
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    const extensionService = strapi.service("plugin::graphql.extension");
    extensionService.use(({ strapi }) => ({
      typeDefs: `
            type Query {
              page(slug: String!): PageEntityResponse
            }
          `,
      resolvers: {
        Query: {
          page: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::page.page"].find({
                filters: { slug: args.slug },
              });

              const response = toEntityResponse(data.results[0]);

              // console.log("##################", response, "##################");

              return response;
            },
          },
        },
      },
    }));
    extensionService.use(({ strapi }) => ({
      typeDefs: `
            type Query {
              category(slug: String!): CategoryEntityResponse
            }
          `,
      resolvers: {
        Query: {
          category: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::category.category"].find({
                filters: { slug: args.slug },
              });

              return toEntityResponse(data.results[0]);
            },
          },
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */

};
