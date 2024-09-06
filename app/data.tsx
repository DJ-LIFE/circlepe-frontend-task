import React from 'react';

interface Screen {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  slider: string;
  img_layout: string;
  arrow?: string;
  arrow_additional?: {
    transform: string;
  };
}

type Screens = {
  [key: number]: Screen;
};

export const screens: Screens = {
  0: {
    title: <span>How does it <span className='text-header-white'>Work</span> <span className='text-header-blue'>?</span></span>,
    description: <h1 className='text-description-white'>We make it possible in a quick and easy few steps process, takes max 5 mins</h1>,
    image: '/screenShot0.png',
    slider: '5%',
    img_layout: 'top-[8%] md:scale-[1.1]',
  },
  1: {
    title: <span>Step <span className='text-header-white'>1</span></span>,
    description: <div className='flex flex-col gap-y-2'>
                   <h1 className='text-description-heading'>Tenant selects the property</h1>
                   <h1 className='text-description-white'>Tenant selects flexible rent tenure & corresponding amount</h1>
                </div>,
    image: '/screenShot1.png',
    slider: '20%',
    img_layout: 'top-1/3 md:scale-[1.4] max-md:scale-[1.2] max-md:translate-y-1/4',
    arrow: 'top-1/4 right-[80%]'
  },
  2:{
    title:<span>Step <span className='text-header-white'>1</span></span>,
    description:<div className='flex flex-col gap-y-2'>
                    <h1 className=' text-description-white'>Tenant selects the property</h1>
                    <h1 className=' text-description-heading'>Tenant selects flexible rent tenure & corresponding amount</h1>
                </div>,
    image: '/screenShot2.png',
    slider: '30%',
    img_layout:'top-[15%] md:scale-[1.5]',
    arrow:'top-[38%] right-[48%]',
    arrow_additional :{transform:'rotateX(180deg)'}
},
3:{
    title:<span>Step <span className='text-header-white'>2</span></span>,
    description:<div className='flex flex-col gap-y-2'>
                    <h1 className=' text-description-heading'>Tenant selects the property</h1>
                    <ul className=' text-description-white list-disc pl-3'>
                        <li>Zero security deposit move-in</li>
                        <li>Reduced rent offer</li>
                        <li>3 months salary cover</li>
                    </ul>
                </div>,
    image:'/screenShot3.png',
    slider: '60%',
    img_layout:'md:-translate-y-[21%] md:scale-[1.5]',
    arrow:'top-[55%] right-[75%] md-scale-[1.1]',
    arrow_additional :{transform:'rotateX(180deg) rotateZ(-40deg)'}
},
4:{
    title:<span>Step <span className='text-header-white'>3</span></span>,
    description: <h1 className=' text-description-heading'>Smooth Onboarding for the Tenant begins</h1>,
    image:'/screenShot4.png',
    slider: '80%',
    img_layout:'-top-[4%] md:scale-[1.1]',
    arrow:'top-[52%] right-[70%] ',
    arrow_additional :{transform:'rotateX(180deg) rotateZ(-40deg)'}
},
5:{
    title:<span>Step <span className='text-header-white'>4</span></span>,
    description:<div className='flex flex-col gap-y-2'>
                    <h1 className=' text-description-heading'>Tenant gets approved to move-in</h1>
                    <ul className=' text-description-white list-disc pl-3'>
                        <li>Gets Zero-security deposit approval</li>
                        <li>Zero cost EMI = Monthly Rent</li>
                    </ul>
                </div>,
    image:'/screenShot5.png',
    slider: '100%',
    img_layout:'-top-[1%] md:scale-[1.1]',
    arrow:'top-[58%] right-[73%] ',
    arrow_additional :{transform:'rotateX(180deg) rotateZ(-40deg)'}
},
};