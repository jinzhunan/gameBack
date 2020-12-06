module.exports = {
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: 'nanjinzhu666@gmail.com',
            from: 'nanjinzhu202012@gmail.com',
            subject: 'Comment posted that contains a bad words',
            text: `
              ${new Date()} test email 
            `,
          });
          ctx.send('email sents')
    }
}