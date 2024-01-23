"use client"
import React, { useRef, useState } from 'react';
import Nav from './testnav/Nav';
import { useEffect } from 'react';
import Image from 'next/image';
import Axios from 'axios';
import { useRouter } from "next/navigation";
import './utils/config.js'
import config from './utils/config.js';
import Navbar from './navbar/Navbar.jsx'

import styles from "./home.module.css";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';





const EmptyPage = () => {

  const BASE_URL = config.SERVER_URL


  const [cannabisList, setCannabisList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const router = useRouter();

  const getCannabis = () => {
    Axios.get(`${BASE_URL}/cannabis`).then((response) => {
      setCannabisList(response.data)
    })
  }




  const deleteCannabis = (id) => {
    const shouldDelete = window.confirm("คุณต้องการลบข้อมูลนี้จริง ๆ หรือไม่?");
    if (shouldDelete) {
      Axios.delete(`${BASE_URL}/cannabis/${id}`).then((response) => {
        setCannabisList(
          cannabisList.filter((val) => {
            return val.id !== id
          })
        )
      }).then(() => {
        if (isDeleted === false) {
          setIsDeleted(true)
          setTimeout(() => {
            setIsDeleted(false)
          }, 2000)
        }
      })
    }
  }

  useEffect(() => {
    getCannabis()
  }, [])

  const handleOpenGoogleMaps = (id) => {
    const googleMapsUrl = (cannabis.lc);
    // แทน YourLocation ด้วยตำแหน่งที่คุณต้องการ

    // เปิด Google Maps ในหน้าต่างใหม่
    window.open(googleMapsUrl, '_blank');
  };
 
  
  return (
    <>
      
   
  


      

        <Navbar />
        
        <div className="h-screen ">
          <div className="bg-white">
            
            <br />
            <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Cannabis List.</h1>
        <p className={styles.desc}>
          This website is Cannabis list in Thailand.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
       
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>




           
          </div>
        </div>
      
      
      
    </>
   
  )
};

export default EmptyPage;