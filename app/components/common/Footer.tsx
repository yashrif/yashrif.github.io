import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className='border-t-2 border-violet-soft'>
      <div className='container-body py-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          <div>
            <p className='font-tertiary text-2xl font-medium text-text-primary tracking-[-0.5px]'>
              Yashrif
            </p>
            <p className='text-md text-text-secondary mt-2'>
              Full-Stack Developer & ML Enthusiast
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-text-secondary'>
              <IoMail className='text-lg' />
              <a
                href='mailto:yaswoccho@gmail.com'
                className='hover:text-violet-primary transition-colors'
              >
                yaswoccho@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-2 text-text-secondary'>
              <IoCall className='text-lg' />
              <a
                href='tel:+8801776809429'
                className='hover:text-violet-primary transition-colors'
              >
                +880 1776809429
              </a>
            </div>
          </div>

          <div className='flex gap-4'>
            <a
              href='https://github.com/yashrif'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-text-secondary hover:text-violet-primary transition-colors'
            >
              <IoLogoGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/yashrif'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-text-secondary hover:text-violet-primary transition-colors'
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>

        <div className='mt-8 pt-6 border-t border-violet-soft text-center'>
          <p className='text-md text-text-secondary'>
            Copyright &copy; <span id='copyright-year'>2025</span> All rights
            reserved.
          </p>
          <p className='text-md text-text-secondary mt-1'>
            Developed by Yashrif Arifin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
