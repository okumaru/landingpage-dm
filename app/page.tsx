"use client";

import react, {useRef} from 'react';
import Image from 'next/image'
import { CiYoutube, CiInstagram, CiFacebook } from "react-icons/ci";

import CardComponent from "../components/card/card";

export default function Home() {
  const refAbout = useRef(null);
  const refService = useRef(null);
  const refServiceFamily = useRef(null);
  const refServiceTeen = useRef(null);
  const refServiceMotifator = useRef(null);
  const refServiceOnline = useRef(null);

  const handleClickAbout = () => {
    refAbout.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickService = () => {
    refService.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickServiceFamily = () => {
    refServiceFamily.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickServiceTeen = () => {
    refServiceTeen.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickServiceMotifator = () => {
    refServiceMotifator.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickServiceOnline = () => {
    refServiceOnline.current?.scrollIntoView({behavior: 'smooth'});
  };

  return <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5 md:px-10 lg:p-16 mx-auto">

    <div className="z-10 w-full max-w-5xl items-start justify-between text-sm lg:flex">
      <div 
        className="
          fixed left-0 top-0 w-screen md:w-full
          flex lg:flex-col gap-4 justify-center items-center flex-wrap
          border-b border-gray-300 
          bg-gradient-to-b lg:from-blue-100 
          pb-6 pt-8 backdrop-blur-2xl 
          lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-blue-100 lg:p-4"
      >
        <div className='flex lg:flex-col gap-4 justify-center items-center '>
          <button onClick={handleClickAbout} className='font-semibold underline' id='to-about'>
            About
          </button>
          <button onClick={handleClickService} className='font-semibold underline'>Service</button>
        </div>
        <div className='flex lg:flex-col gap-4 justify-center items-center '>
          <button onClick={() => { window.location.href = "https://www.instagram.com/diah_maya81/"; }}>
            <CiInstagram className='w-8 h-8' />
          </button>
          <button onClick={() => { window.location.href = "https://www.youtube.com/@diahmayasari2614" }}>
            <CiYoutube className='w-8 h-8' />
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 flex h-32 md:h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          rel="noopener noreferrer"
        >
          By <span className='text-xl md:text-sm font-semibold underline'>Diah Mayasari</span>
        </a>
      </div>
    </div>

    <div className="
      lg:-mt-60
      relative flex place-items-center 
      before:absolute 
      before:h-[300px] before:w-[480px] 
      before:-translate-x-1/2 before:rounded-full 
      before:bg-gradient-radial before:from-white before:to-transparent 
      before:blur-2xl 
      before:content-[''] 
      after:absolute 
      after:-z-20 after:h-[180px] after:w-[180px] 
      after:translate-x-1/3 
      after:bg-gradient-conic after:from-sky-200 after:via-blue-200 
      after:blur-2xl after:content-[''] 
      before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 
      before:dark:opacity-10 after:dark:from-sky-900 
      after:dark:via-[#0141ff] after:dark:opacity-40 
      before:lg:h-[360px]"
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/young-asian-business-woman-2.png"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' 
        }}
        alt="Image Person"
        width={285}
        height={400}
        priority
      />
    </div>

    <div className='mt-0 mb-10 md:mt-10 lg:mt-16 md:mb-20'>
      <div className="text-2xl md:text-4xl font-bold text-center">Toward Emotional Well Being</div>
      <div className="text-lg md:text-xl text-center text-gray-500">By healing your memories</div>
    </div>

    <div className="mb-10 md:mb-20 grid gap-10 text-center md:grid-cols-2 lg:text-left">
        <CardComponent title="Family Therapy" onClick={handleClickServiceFamily} />
      {/* <button onClick={handleClickServiceFamily}>
      </button> */}
      <CardComponent title="Teen Counseling" onClick={handleClickServiceTeen} />
      <CardComponent title="Training Motivator" onClick={handleClickServiceMotifator} />
      <CardComponent title="Online Therapy" onClick={handleClickServiceOnline} />
    </div>

    <div className='mb-10 md:mb-20 w-full flex flex-col lg:flex-row gap-y-10'>
      <div className='max-w-full lg:w-1/2 lg:pr-5'>
        <Image
          ref={refAbout}
          className="mx-auto max-w-full sm:max-w-sm md:max-w-md lg:max-w-full rounded-lg"
          src="/family-therapy-psychologist-office.png"
          alt="Image Person"
          width={554}
          height={527}
          priority
        />
      </div>
      <div className="lg:w-1/2 lg:pl-5">
        <div className='text-2xl md:text-4xl' id='head-about-us'>ABOUT US</div>
        <div className='mt-10 flex flex-col gap-10'>
          <p className='text-base leading-7 font-light'>
            CV. Diah Mayasari is a company engaged in psychology and mentoring services.
            We provide comprehensive and compassionate support to enhance your mental well-being. 
            We understand that life can present challenges, 
            and our dedicated team of experienced psychologists is here to assist you in navigating 
            those difficulties with expertise and care.
          </p>

          <p className='text-base leading-7 font-light'>
            Our psychology service is designed to cater to individuals of all ages, backgrounds, and concerns. 
            Whether you're struggling with anxiety, depression, relationship issues, stress, 
            trauma, or any other psychological matter, 
            we are committed to helping you overcome obstacles and achieve a 
            healthier and happier state of mind.
          </p>
        </div>
      </div>
    </div>

    <div ref={refService} className='mb-10 md:mb-20 w-full'>
      <div ref={refServiceFamily} className='text-2xl md:text-4xl'>SERVICES</div>
      <div className='mt-10 flex flex-col gap-y-10'>
        <div ref={refServiceTeen} className="group max-w-full rounded-lg flex flex-col md:flex-row bg-gray-50 bg-opacity-80 drop-shadow-lg">
          <div className='basis-1/2 p-5 rounded'>
            <p className='font-bold text-lg md:text-2xl'>Family Therapy</p>
            <div className='hidden group-hover:flex mt-5 flex-col gap-10'>
              <p className='text-base leading-7 font-light'>Family therapy is a specialized form of psychotherapy that focuses on improving communication, resolving conflicts, and fostering healthy relationships within a family system. It is a therapeutic approach that recognizes the interconnectedness of family members and views the family unit as a vital context for understanding and addressing individual and collective challenges.</p>
              <p className='text-base leading-7 font-light'>The primary goal of family therapy is to enhance the overall functioning and well-being of the family as a whole. It involves the participation of multiple family members or the entire family, depending on the specific situation and needs. Family therapists work with families to identify and explore patterns of interaction, dynamics, and underlying issues that contribute to difficulties within the family unit.</p>
            </div>
          </div>
          <div className="basis-1/2 bg-[url('/asian-happiness-family-talking-relaxing-sofa-watch-tv-together.png')] bg-cover bg-fixed" style={{ backgroundPositionX: "310px" }}></div>
        </div>

        <div ref={refServiceMotifator} className="group max-w-full rounded-lg flex flex-col md:flex-row bg-gray-50 bg-opacity-80 drop-shadow-lg">
          <div className='basis-1/2 p-5 rounded'>
            <p className='font-bold text-lg md:text-2xl'>Teen Counseling</p>
            <div className='hidden group-hover:flex mt-5 flex-col gap-10'>
              <p className='text-base leading-7 font-light'>Teen counseling is a specialized mental health service that focuses on supporting and assisting teenagers in navigating the unique challenges they face during adolescence. It provides a confidential and supportive environment where teenagers can express themselves, explore their emotions, and work towards solutions for their concerns.</p>
              <p className='text-base leading-7 font-light'>The primary goal of teen counseling is to promote the emotional well-being and overall mental health of teenagers. It is designed to address a variety of issues that are common during this developmental stage.</p>
            </div>
          </div>
          <div className="basis-1/2 bg-[url('/smiling-students-with-backpacks.png')] bg-cover bg-fixed" style={{ backgroundPositionX: "170px" }}></div>
        </div>

        <div ref={refServiceOnline} className="group max-w-full rounded-lg flex flex-col md:flex-row bg-gray-50 bg-opacity-80 drop-shadow-lg">
          <div className='basis-1/2 p-5 rounded'>
            <p className='font-bold text-lg md:text-2xl'>Training Motivator</p>
            <div className='hidden group-hover:flex mt-5 flex-col gap-10'>
              <p className='text-base leading-7 font-light'>The Training Motivator service is designed to provide support, guidance, and motivation to individuals who are seeking to achieve their fitness and training goals. It offers a personalized and structured approach to help individuals stay motivated, maintain consistency, and make progress in their training regimen.</p>
              <p className='text-base leading-7 font-light'>The primary objective of a Training Motivator is to empower individuals and help them overcome obstacles that may hinder their fitness journey. Whether someone is a beginner looking to establish a workout routine or an experienced athlete aiming to reach new levels of performance, the Training Motivator service is tailored to meet their specific needs and goals.</p>
            </div>
          </div>
          <div className="basis-1/2 bg-[url('/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall.png')] bg-cover bg-fixed" style={{ backgroundPositionX: "170px" }}></div>
        </div>

        <div className="group max-w-full rounded-lg flex flex-col md:flex-row bg-gray-50 bg-opacity-80 drop-shadow-lg">
          <div className='basis-1/2 p-5 rounded'>
            <p className='font-bold text-lg md:text-2xl'>Online Therapy</p>
            <div className='hidden group-hover:flex mt-5 flex-col gap-10'>
              <p className='text-base leading-7 font-light'>Online therapy, also known as teletherapy or telehealth, is a form of mental health service that allows individuals to receive therapy remotely through digital communication tools. It provides an accessible and convenient alternative to traditional in-person therapy, particularly for those who may have limitations or difficulties accessing traditional therapy settings.</p>
              <p className='text-base leading-7 font-light'>Online therapy typically takes place through secure video conferencing platforms, although it can also involve other forms of communication such as phone calls, text messaging, or email exchanges. These platforms ensure privacy and confidentiality, creating a secure virtual space for therapy sessions.</p>
            </div>
          </div>
          <div className="basis-1/2 bg-[url('/person-conducting-online-psychologist-therapy.png')] bg-cover bg-fixed" style={{ backgroundPositionX: "170px" }}></div>
        </div>
        
      </div>
    </div>

    <div className="mb-32 md:mb-0"></div>
  </main>
}
