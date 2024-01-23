import React from 'react';

const GalleryItem = ({ imageUrl, description }) => {
  return (
    <div className="gallery m-5 border border-solid border-gray-300 hover:border-gray-700 float-left w-180">
      <img className="w-full h-auto" src={imageUrl} alt="Gallery Image" />
      <div className="desc p-15 text-center">{description}</div>
    </div>
  );
};

export default GalleryItem;