"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import styles from "../styles/Speakers.module.css";

const speakers = [
  {
    name: "Dr. Indra Nooyi",
    role: "Former CEO, PepsiCo",
    type: "KEYNOTE SPEAKER",
    image: "/images/speakers/1.jpg",
  },
  {
    name: "Kiran Mazumdar-Shaw",
    role: "Executive Chairperson, Biocon",
    type: "KEYNOTE SPEAKER",
    image: "/images/speakers/2.jpg",
  },
  {
    name: "Dr. Tessy Thomas",
    role: "Scientist & Missile Woman of India",
    type: "KEYNOTE SPEAKER",
    image: "/images/speakers/3.jpg",
  },
  {
    name: "Amrita Rajan",
    role: "Playback Singer",
    type: "SPECIAL PERFORMER",
    image: "/images/speakers/4.jpg",
  },
  {
    name: "Sudha Murty",
    role: "Author & Philanthropist",
    type: "SPECIAL GUEST",
    image: "/images/speakers/5.jpg",
  },
];

export default function Speakers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>Speakers</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
            },
            640: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {speakers.map((speaker, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>

                <div className={styles.imageWrapper}>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <h3>{speaker.name}</h3>

                  <p>{speaker.role}</p>

                  <span>{speaker.type}</span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}