'use strict';
const slugify = require('slugify')
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    beforeSave: async model => {
        if (model.content) {
          model.slug = slugify(model.content);
        }
      },
      beforeUpdate: async model => {
        if (model.getUpdate() && model.getUpdate().content) {
          model.update({
            slug: slugify(model.getUpdate().content),
          });
        }
      },
};
