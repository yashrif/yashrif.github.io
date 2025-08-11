'use client';

import { motion } from 'framer-motion';
import { ColorScheme } from '@/app/_types/color-scheme';
import Heading from '../common/Heading';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

// 📋 Contact data
const title = 'Get In Touch';
const description =
  "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!";

const contactData = {
  email: 'yaswoccho@gmail.com',
  phone: '+880 1776809429',
  location: 'Savar, Dhaka, Bangladesh',
  githubUrl: 'https://github.com/yashrif',
  linkedinUrl: 'https://www.linkedin.com/in/yashrif',
};

/**
 * 🎯 Contact component with fluid design and aesthetic appeal
 * @returns JSX element containing the complete contact section
 */
const Contact = () => {
  return (
    <section id='contact' className='py-16 lg:py-24'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          <Heading
            title={title}
            description={description}
            decorativeColor={ColorScheme.PRIMARY}
          />

          <div className='w-full mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 lg:gap-16 items-start'>
            {/* 📞 Contact Information Section */}
            <motion.div
              className='space-y-6 lg:space-y-8 order-2 lg:order-1'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              {/* 🎯 Header Section */}
              <motion.div
                className='space-y-3'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              >
                <h3 className='heading-tertiary bg-gradient-to-r from-violet-primary to-violet-tertiary bg-clip-text text-transparent'>
                  Contact Information
                </h3>
                <div className='w-16 h-1 bg-gradient-success rounded-full'></div>
              </motion.div>

              <ContactInfo
                email={contactData.email}
                phone={contactData.phone}
                location={contactData.location}
              />

              <SocialLinks
                githubUrl={contactData.githubUrl}
                linkedinUrl={contactData.linkedinUrl}
              />
            </motion.div>

            {/* 📝 Contact Form Section */}
            <div className='order-1 lg:order-2'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
