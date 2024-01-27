"use client"
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Axios from 'axios';
import { useRouter } from "next/navigation";
import './utils/config.js'
import config from './utils/config.js';
import Navbar from './navbar/Navbar.jsx'
import styles from "./home.module.css";
import "./globals.css";
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




 

  useEffect(() => {
    getCannabis()
  }, [])

  
 
  
  return (
    <>

        <Navbar />
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




         
      
      
      
    </>
   
  )
};

export default EmptyPage;