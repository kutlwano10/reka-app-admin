// lib/cloudinaryConfig.js
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME
  }
});

export default cloudinary;
