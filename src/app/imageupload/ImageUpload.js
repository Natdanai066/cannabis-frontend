'use client'
import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // เรียกใช้งาน callback function ที่ได้รับเพื่อส่งข้อมูลภาพไปยัง Component หลัก
    if (onImageUpload && selectedImage) {
      onImageUpload(selectedImage);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
