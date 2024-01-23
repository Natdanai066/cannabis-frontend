"use client"
import React, { useRef, useState } from 'react';
import Nav from '../testnav/Nav'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Grid from '@mui/material/Grid';
import Axios from 'axios';
import { useRouter } from "next/navigation";
import '../utils/config'
import config from '../utils/config'
import Link from 'next/link';
import Container from '@mui/material/Container';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../style.css';
import { Input } from 'postcss';





const EmptyPage = () => {
  
  const BASE_URL = config.SERVER_URL


  const [cannabisList, setCannabisList] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  const router = useRouter()

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
      {isDeleted === true ?
        <div className="absolute right-4 top-4">
          <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-white">ลบข้อมูลสำเร็จ!</span>
          </div>
        </div>
        : (<div></div>)
      }



      <body>
        <Nav />
        <div className="h-screen ">
        <div className="bg-white"> 
        <br />
        
        
         
            <div className='photoSlide'>
            <Swiper
  slidesPerView={3}
  spaceBetween={20}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  className="mySwiper"
>
  {/* รูปภาพของคุณ */}
  <SwiperSlide><img src='https://media.npr.org/assets/img/2021/05/27/gettyimages-592213298-1-_slide-ec5e9b6128c048099339c359c4512a505dd4393c.jpg' alt="Slide 1"></img></SwiperSlide>
  <SwiperSlide><img src="https://th.bing.com/th/id/OIP.quuJkEeXELjDjMrInHJsFgHaE1?rs=1&pid=ImgDetMain" alt="Slide 2"></img></SwiperSlide>
  <SwiperSlide><img src="https://th.bing.com/th/id/R.ed47a4922ded74812685ae4665089b38?rik=pxUrNflS3Dz2FQ&pid=ImgRaw&r=0" alt="Slide 3"></img></SwiperSlide>
  <SwiperSlide><img src="https://th.bing.com/th/id/OIP.8jyv_da_PhMlZJJ9TRff2AHaE2?rs=1&pid=ImgDetMain" alt="Slide 4"></img></SwiperSlide>
  <SwiperSlide><img src="https://www.politico.com/dims4/default/e778f2d/2147483647/strip/true/crop/5760x3840+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F60%2F28%2Fd1f1cea843338136355f5340a3e0%2Fmarijuana-new-york-19399.jpg"></img></SwiperSlide>
  {/* สามารถเพิ่มรูปภาพเพิ่มเติมตามต้องการ */}
</Swiper>





           
          <div className="flex justify-end">
            <button className="bg-green-500 text-white border border-green-500 p-2 rounded hover:bg-white hover:text-green-500 hover:border-green-500 transition " onClick={() => router.push('/editmenu')}>
              เพิ่มข้อมูล
            </button>
            {/* ปุ่ม */}
          </div>
          <div className="flex justify-center" style={{ fontSize: '30px' }}>Cannabis List</div>

          <a target='_black' href='https://th.bing.com/th/id/OIP.8jyv_da_PhMlZJJ9TRff2AHaE2?rs=1&pid=ImgDetMain'>
          </a>
          <div className='table'>


          </div>
          <br/>
          <Container maxWidth="md">
  <Grid container spacing={2}>
    {cannabisList.length <= 0
      ? "ไม่พบข้อมูล!!"
      : cannabisList.map((cannabis, index) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
            <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 180 }}
                image={cannabis.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cannabis.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cannabis.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => window.open(cannabis.lc, '_blank')}
                >
                  Google Maps
                </Button>
                <Button
              size="small"
              onClick={() => deleteCannabis(cannabis.id)}
              className="bg-red-500 text-white"
              >
              delete
              </Button>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
  </Grid>
</Container>











</div>
          </div>
        </div>
      </body>

    </>
  )
};

export default EmptyPage;