'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const GoogleMapsButton = ({ cannabisId }) => {
  const [cannabis, setCannabis] = useState(null);

  useEffect(() => {
    // ดึงข้อมูล cannabis จากฐานข้อมูลโดยใช้ ID
    const fetchData = async () => {
      try {
        const response = await Axios.get(`/api/cannabis/${cannabisId}`); // แทนที่ '/api/cannabis/' ด้วย endpoint ที่ถูกต้องในแอปของคุณ
        setCannabis(response.data);
      } catch (error) {
        console.error('Error fetching cannabis data:', error);
      }
    };

    fetchData();
  }, [cannabisId]);

  const handleOpenGoogleMaps = () => {
    if (cannabis && cannabis.location) {
      const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(cannabis.location)}`;

      // เปิด Google Maps ในหน้าต่างใหม่
      window.open(googleMapsUrl, '_blank');
    }
  };

  if (!cannabis) {
    return <p>Loading...</p>;
  }

  return (
    <button onClick={handleOpenGoogleMaps}>
      Open Google Maps for {cannabis.name}
    </button>
  );
};

export default GoogleMapsButton;