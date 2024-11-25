import React from 'react';
import { motion } from 'motion/react';

import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { chillguy } from '../assets';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>&quot;</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex flex-1 flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@ </span>
            {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className='w-10 h-10 object-cover rounded-full'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h3 className={styles.sectionHeadText}>Testimonials</h3>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 `}>
        <p>
          Maybe, oneday I will have people say some goodthing about me for my
          works.
        </p>
        <p>
          I am just a{' '}
          <span className='font-extrabold text-[24px] uppercase'>
            chill guy
          </span>
          .
        </p>
        <motion.div
          variants={slideIn('left', 'spring', 0.25, 1.75)}
          className='p-3 rounded-3xl '
        >
          <img
            src={chillguy}
            alt="i'm just a chill guy"
            className='w-28 h-28 object-cover rounded-full'
          />
        </motion.div>
      </div>

      {/* <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedbacks');
