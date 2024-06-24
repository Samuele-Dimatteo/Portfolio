import { ReactElement } from 'react';

const AboutSection = (): ReactElement => {
  return (
    <section className='flex justify-between items-center gap-32 py-8 h-screen'>
      <div className='flex flex-col justify-between w-1/3 h-full'>
        <h1 className='text-xl font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Elementum pulvinar etiam non quam. Leo duis ut diam quam. Ultrices vitae auctor eu augue ut lectus.</h1>
        <p className='text-lg font-medium'>Lorem ipsum dolor sit amet</p>
      </div>
      <div className='flex justify-between items-end w-2/4 h-full'>
        <h1 className='text-xl font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
        <img className='h-2/3' src='/images/Image.png' alt='Image' />
      </div>
    </section>
  );
};

export default AboutSection;
