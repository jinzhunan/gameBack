  module.exports=({ env })=>   ({ 

    email: {
        provider: "nodemailer-v3",
        providerOptions: {},
        settings: {
            host: 'smtp.gmail.com',
            port: 587,
            username: 'nanjinzhu202012@gmail.com',
            password: 'woshinjz',
            secure: false
        }
    },
  });
