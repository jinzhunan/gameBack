module.exports = {
    //...
    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 20000000 // defaults to 200mb
        }
      }
    },
  };