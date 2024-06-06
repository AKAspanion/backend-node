import multer from 'multer';

export default () => {
  const upload = {
    destination: function (req, file, cb) {
      cb(null, './public/storage');
    },
    filename: function (req, file, cb) {
      const uploadFile = file.originalname.split('.');
      const name = `${uploadFile[0]}-${Date.now()}.${uploadFile[uploadFile.length - 1]}`;
      cb(null, name);
    },
  };
  const storage = multer.diskStorage(upload);
  return multer({
    storage: storage,
    limits: {
      fields: 5,
      fieldNameSize: 50,
      fieldSize: 20000,
      fileSize: 15000000,
    },
  });
};
