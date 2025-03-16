'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Globe } from './magicui/globe';

const testimonials = [
  {
    id: 1,
    name: 'Madanachitran',
    company: 'Faculty KNCET',
    feedback:
      'The website they developed for us is fast, visually stunning, and incredibly user-friendly. Their attention to detail and responsiveness to our needs were outstanding!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Suresh',
    company: 'SM Crackers',
    feedback:
      'I was amazed at how they transformed our outdated website into a modern, sleek, and highly functional platform. Sales and customer engagement have improved significantly!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'Sheik',
    company: 'Zeah',
    feedback:
      'From concept to execution, the team was fantastic! They understood our brand vision and delivered a high-performing, SEO-optimized website that helped boost our online presence.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 4,
    name: 'Habeeb',
    company: 'Nexevo Technologies',
    feedback:
      'The team built a seamless e-commerce platform for our business. The UI/UX design is clean, intuitive, and has significantly increased conversions. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 5,
    name: 'Ansari',
    company: 'Falcon Pipe Company',
    feedback:
      'Their web development service is top-notch! They delivered a fully responsive website with custom features tailored to our business needs. Great communication and timely delivery!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

export default function Testimonials() {
  return (
    <div className='w-full py-20 flex flex-col items-center relative bg-gradient-to-b from-black via-gray-900 to-black text-white'>
      {/* Heading */}
      <div className='text-center z-10'>
        <h2 className='text-sm py-1 px-5 rounded-full text-white bg-gray-700 w-fit mx-auto mb-3'>Testimonials</h2>
        <h2 className='font-semibold text-5xl mb-10 text-white'>What Our Clients Say</h2>
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        className='w-full max-w-5xl mx-auto'
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              className='backdrop-blur-lg bg-white/10 border border-gray-700 py-10 px-6 rounded-2xl text-center shadow-xl transform transition duration-500 hover:scale-110'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className='text-gray-200 italic text-lg leading-relaxed'>"{testimonial.feedback}"</p>
              <div className='flex items-center justify-center mt-6'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-14 h-14 rounded-full mr-4 border-2 border-blue-500 shadow-md'
                />
                <div>
                  <h4 className='font-bold text-xl'>{testimonial.name}</h4>
                  <p className='text-sm text-gray-400'>{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Background Effects */}
      <Globe className='absolute top-0 opacity-10' />
      <div className='pointer-events-none absolute inset-0 h-full' />
    </div>
  );
}
