"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { skills } from "@/lib/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function MySkills() {
  return (
    <main
      style={{ backgroundImage: "url(/assets/bg-2.jpg)" }}
      className="min-h-screen overflow-hidden w-screen flex sm:items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center mt-28 sm:mt-0 items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[36px] sm:text-[50px]">
            Skill
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Tech Stack
          </h1>
          <p className="text-gray-400 text-[20px] ">
            Menggunakan teknologi terbaru yang sedang tren sekarang
          </p>
        </div>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={5000}
          modules={[Autoplay]}
          className="w-full md:max-w-[80%]"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          speed={5000}
          modules={[Autoplay]}
          className=" max-w-[80%]"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
