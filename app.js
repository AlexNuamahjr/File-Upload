const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dqgcvdfdh",
    api_key: "552436342726661",
    api_secret: "YRTONA-ZC58PmOvLGnqD0zdfJGM"
})

const uploadImage = './img-1.jpg';

const uploadFile = async()=>{
    const res = await cloudinary.uploader.upload(uploadImage);
    console.log(res);
}

uploadFile();