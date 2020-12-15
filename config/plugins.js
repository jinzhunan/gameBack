  module.exports=({ env })=>   ({ 
    upload:{ 
      provider: "cloudinary",
      providerOptions:{ 
        cloud_name:'dhhuemjhf',
        api_key:'717721136637757',
        api_secret: 'h3urE5uA-V-7sffed06oBL1qsH8'
      }
    },
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
