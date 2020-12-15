const { sanitizeEntity,parseMultipartData } = require('strapi-utils');
var cloudinary = require('cloudinary').v2;
// var streamifier = require('streamifier') 


cloudinary.config({ 
    cloud_name: 'dhhuemjhf', 
    api_key: '717721136637757', 
    api_secret: 'h3urE5uA-V-7sffed06oBL1qsH8' 
  });


module.exports = {

    async create(ctx) {

      let entity;
      if (ctx.is('multipart')) {
        const { body, files } = ctx.request;
        entity = await strapi.services['memory-game'].create(body, { files });
      } else {
        entity = await strapi.services['memory-game'].create(ctx.request.body);
      }
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
    
    async delete(ctx) {
        const { id } = ctx.params;
        console.log(id)
        // findOne by id
        const entity = await strapi.services['memory-game'].findOne({ id });
        // console.log(entity)

        if(entity.cover.mime.includes('video')){
            const FilePublicId = entity.cover.url.split('/')[7].split('.')[0]
            // delete cloudnary
            cloudinary.uploader.destroy(FilePublicId, {resource_type: 'video'}, 
            function(error,result) { console.log(result, error) });
        }
        if(entity.cover.mime.includes('audio')){
            const FilePublicIdAudio = entity.cover.url.split('/')[7].split('.')[0]
            const FilePublicIdImage = entity.cover2.url.split('/')[7].split('.')[0]
            // delete audio
            cloudinary.uploader.destroy(FilePublicIdAudio, {resource_type: 'video'}, 
            function(error,result) { console.log(result, error) });
            // delete imgs
            const thumbnal = `thumbnail_${FilePublicIdImage}`
            const large = `large_${FilePublicIdImage}`
            const medium = `medium_${FilePublicIdImage}`
            const small = `small_${FilePublicIdImage}`
            const urls = [FilePublicIdImage,thumbnal,large,medium,small]
            urls.forEach(url => {
                // delete cloudnary
                cloudinary.uploader.destroy(url, {resource_type: 'image'}, 
                function(error,result) { console.log(result, error) });
            })
        }

        if(entity.cover.mime.includes('image')){
            const FilePublicId = entity.cover.url.split('/')[7].split('.')[0]
            const thumbnal = `thumbnail_${FilePublicId}`
            const large = `large_${FilePublicId}`
            const medium = `medium_${FilePublicId}`
            const small = `small_${FilePublicId}`
            console.log(FilePublicId)
            const urls = [FilePublicId,thumbnal,large,medium,small]
            urls.forEach(url => {
                // delete cloudnary
                cloudinary.uploader.destroy(url, {resource_type: 'image'}, 
                function(error,result) { console.log(result, error) });
            })

        }


        // delete model
        const entity2 = await strapi.services.restaurant.delete({ id });

        return sanitizeEntity(entity2, { model: strapi.models.restaurant });
    },
}


