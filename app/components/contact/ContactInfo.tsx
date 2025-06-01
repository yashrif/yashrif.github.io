'use client';

import { motion } from 'framer-motion';
import { IoMail, IoCall, IoLocationOutline } from 'react-icons/io5';

type ContactInfoProps = {
  email: string;
  phone: string;
  location: string;
};

/**
 * 🎯 Contact information with fluid design
 * @param email - Contact email address
 * @param phone - Contact phone number
 * @param location - Contact location
 * @returns JSX element containing contact information cards
 */
const ContactInfo = ({ email, phone, location }: ContactInfoProps) => {
  return (
    <motion.div
      className='relative space-y-6'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* 📧 Email Flow */}
      <motion.div
        className='relative overflow-hidden'
        initial={{ opacity: 0, x: -50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-violet-soft/20 via-transparent to-yellow-innovation/10 rounded-[2rem] transform -skew-y-1'></div>
        <div className='relative p-8 pl-16'>
          <div className='flex items-center gap-4 mb-4'>
            <motion.div
              className='w-16 h-16 bg-gradient-innovation rounded-full flex items-center justify-center shadow-innovation'
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 1.0,
              }}
            >
              <IoMail className='text-white text-2xl' />
            </motion.div>
            <div className='flex-1'>
              <h4 className='text-xl font-bold text-text-primary mb-2'>
                Email
              </h4>
              <div className='w-24 h-1 bg-gradient-innovation rounded-full mb-3'></div>
              <a
                href={`mailto:${email}`}
                className='text-text-secondary hover:text-violet-primary transition-colors leading-relaxed'
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 📱 Phone Flow */}
      <motion.div
        className='relative overflow-hidden'
        initial={{ opacity: 0, x: -50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
      >
        <div className='absolute inset-0 bg-gradient-to-l from-green-success/15 via-transparent to-violet-primary/10 rounded-[2rem] transform skew-y-1'></div>
        <div className='relative p-8 pr-16 text-right'>
          <div className='flex items-center gap-4 mb-4 flex-row-reverse'>
            <motion.div
              className='w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center shadow-success'
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 1.2,
              }}
            >
              <IoCall className='text-white text-2xl' />
            </motion.div>
            <div className='flex-1'>
              <h4 className='text-xl font-bold text-text-primary mb-2'>
                Phone
              </h4>
              <div className='w-24 h-1 bg-gradient-success rounded-full mb-3 ml-auto'></div>
              <a
                href={`tel:${phone}`}
                className='text-text-secondary hover:text-violet-primary transition-colors leading-relaxed'
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 📍 Location Flow */}
      <motion.div
        className='relative overflow-hidden'
        initial={{ opacity: 0, x: -50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-violet-primary/15 via-transparent to-violet-tertiary/10 rounded-[2rem] transform -skew-y-1'></div>
        <div className='relative p-8 pl-16'>
          <div className='flex items-center gap-4 mb-4'>
            <motion.div
              className='w-16 h-16 bg-gradient-to-br from-violet-primary to-violet-secondary rounded-full flex items-center justify-center shadow-violet'
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 1.4,
              }}
            >
              <IoLocationOutline className='text-white text-2xl' />
            </motion.div>
            <div className='flex-1'>
              <h4 className='text-xl font-bold text-text-primary mb-2'>
                Location
              </h4>
              <div className='w-24 h-1 bg-gradient-to-br from-violet-primary to-violet-secondary rounded-full mb-3'></div>
              <p className='text-text-secondary leading-relaxed'>{location}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
