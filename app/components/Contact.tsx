import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  IoMail,
  IoCall,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';

import {
  springSingleBounce,
  viewportAmount,
  viewportMargin,
} from '../assets/data/animation';

const Contact: FC = () => {
  return (
    <section id='contact' className='container-body'>
      <motion.div
        className='flex flex-col gap-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: viewportAmount, margin: viewportMargin }}
        transition={springSingleBounce}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className='text-center' variants={itemVariants}>
          <h2 className='font-tertiary text-4xl md:text-5xl font-bold text-light-black-33 mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-[#767676] max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s create something amazing together!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className='grid md:grid-cols-2 gap-12'
          variants={itemVariants}
        >
          {/* Contact Information */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold text-light-black-33 mb-6'>
              Contact Information
            </h3>

            <div className='space-y-6'>
              <motion.div
                className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'
                whileHover={{ x: 5 }}
              >
                <div className='text-2xl text-light-violet-d7'>
                  <IoMail />
                </div>
                <div>
                  <p className='font-medium text-light-black-33'>Email</p>
                  <a
                    href='mailto:yaswoccho@gmail.com'
                    className='text-[#767676] hover:text-light-violet-d7 transition-colors'
                  >
                    yaswoccho@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'
                whileHover={{ x: 5 }}
              >
                <div className='text-2xl text-light-violet-d7'>
                  <IoCall />
                </div>
                <div>
                  <p className='font-medium text-light-black-33'>Phone</p>
                  <a
                    href='tel:+8801776809429'
                    className='text-[#767676] hover:text-light-violet-d7 transition-colors'
                  >
                    +880 1776809429
                  </a>
                </div>
              </motion.div>

              <motion.div
                className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'
                whileHover={{ x: 5 }}
              >
                <div className='text-2xl text-light-violet-d7'>
                  <IoLocationOutline />
                </div>
                <div>
                  <p className='font-medium text-light-black-33'>Location</p>
                  <p className='text-[#767676]'>Savar, Dhaka, Bangladesh</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className='pt-6'>
              <h4 className='text-lg font-medium text-light-black-33 mb-4'>
                Follow Me
              </h4>
              <div className='flex gap-4'>
                <motion.a
                  href='https://github.com/yashrif'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-12 h-12 bg-light-violet-d7 text-white rounded-full hover:bg-opacity-80 transition-all duration-300'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoLogoGithub className='text-xl' />
                </motion.a>
                <motion.a
                  href='https://www.linkedin.com/in/yashrif'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-12 h-12 bg-light-violet-d7 text-white rounded-full hover:bg-opacity-80 transition-all duration-300'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoLogoLinkedin className='text-xl' />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold text-light-black-33 mb-6'>
              Send a Message
            </h3>

            <form
              className='space-y-6'
              onSubmit={e => {
                e.preventDefault();
                // Handle form submission here
              }}
            >
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-light-black-33 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-violet-d7 focus:border-transparent transition-all duration-300'
                  placeholder='Your Name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-light-black-33 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-violet-d7 focus:border-transparent transition-all duration-300'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-light-black-33 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-violet-d7 focus:border-transparent transition-all duration-300'
                  placeholder='Project Inquiry'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-light-black-33 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-violet-d7 focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>

              <motion.button
                type='submit'
                className='w-full bg-light-violet-d7 text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

// Animation variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
