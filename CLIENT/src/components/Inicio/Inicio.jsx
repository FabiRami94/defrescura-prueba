
import Footer from "../Footer/Footer";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Inicio.module.css';
import "swiper/css";

const Inicio = () => {

    const swiperRef = useRef(null);

    useEffect(() => {

      const interval = setInterval(() => {
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      }, 4000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return(
        <div>
            <Swiper 
                className={styles.swiperPrincipal}
                loop={true}
                spaceBetween={0}
                slidesPerView={1} 
                speed={3000}  
                onSwiper={(swiper) => (swiperRef.current = swiper)}>
                <SwiperSlide className={styles.slide1}>
                    <div className={styles.container}>Calidad a un super precio</div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide2}>
                    <div className={styles.container}>Vive saludable</div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide3}>
                    <div className={styles.container}>Del campo a tu mesa</div>
                </SwiperSlide>
            </Swiper>
            <Footer></Footer>
        </div>
    )
}

export default Inicio;