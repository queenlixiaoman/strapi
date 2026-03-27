'use strict';

/**
 * home-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async find(ctx) {
    // Inject statically defined deep populate for home-page
    if (!ctx.query.populate || ctx.query.populate === 'deep') {
      ctx.query.populate = {
        Header: { populate: '*' },
        Banner: {
          populate: {
            homeBanner: { populate: '*' }
          }
        },
        Cards: {
          populate: {
            homeFeatureCards: { populate: '*' }
          }
        },
        Intro: {
          populate: {
            homeIntro: { populate: '*' }
          }
        },
        Amenities: {
          populate: {
            homeAmenitiesItems: { populate: '*' },
            homeAmenitiesImages: { populate: '*' },
            homeAmenitiesInfo: { populate: '*' }
          }
        },
        Ins: { populate: '*' },
        Footer: {
          populate: {
            footerCollegeLogo: true,
            footerSocialsIcons: { populate: '*' },
            footerContact: { populate: '*' },
            footerLinkColumns: {
              populate: {
                item: { populate: '*' }
              }
            },
            footerFundLogo: true,
            footerCopyright: { populate: '*' },
            footerCertifications: { populate: '*' }
          }
        }
      };
    }
    
    // Call the default core action
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  }
}));
