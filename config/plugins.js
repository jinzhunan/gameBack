module.exports=({ env })=>   ({ 
    // ...
    upload:{ 
      provider: "cloudinary",
      providerOptions:{ 
        cloud_name:env('CLOUDINARY_NAME'), 
        api_key:env('CLOUDINARY_KEY'), 
        api_secret: env('CLOUDINARY_SECRET')
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
    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 20000000 // defaults to 200mb
        }
      }
    }
  });