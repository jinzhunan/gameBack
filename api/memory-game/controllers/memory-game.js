const { sanitizeEntity,parseMultipartData } = require('strapi-utils');

module.exports = {

//   async find(ctx) {
//     const  type  = ctx.params.type;
//     const newType = `practice_${type}`
//     console.log(newType)

//     const myfiles = await strapi.services['memory-game'].find()
//     const newMyfiles = myfiles.filter(file => file.url.includes(newType))

//     console.log(newMyfiles)
//     return sanitizeEntity(newMyfiles, { model: strapi.models['memory-game'] });

//   },

  async create(ctx) {

      let entity;

        const { body, files } = ctx.request;
        entity = await strapi.services['memory-game'].create(body, { files });

      return sanitizeEntity(entity, { model: strapi.models['memory-game'] });
    },

    async update(ctx) {
        const { id } = ctx.params;
    
        let entity;
        if (ctx.is('multipart')) {
          const { body, files } = ctx.request


          entity = await strapi.services['memory-game'].update({ id }, body, {
            files,
          });
        } else {
          entity = await strapi.services['memory-game'].update({ id }, ctx.request.body);
        }
    
        return sanitizeEntity(entity, { model: strapi.models['memory-game'] });
      },
    

}


