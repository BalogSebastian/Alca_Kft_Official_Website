import React from 'react';
import { useState, useEffect } from 'react';

const AboutPage = () => {

    const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 28) {
      const timer = setInterval(() => {
        setCount(count + 1);
      }, 50);

      return () => clearInterval(timer);
    }
  }, [count]);

  const [count_1, setCount_1] = useState(0);

  useEffect(() => {
    if (count_1 < 1100) {
        const timer_1 = setInterval(() => {
            setCount_1(count_1 + 50)
        }, 65);

        return () => clearInterval(timer_1);
    }
  }, [count_1]);

  const [count_2, setCount_2] = useState(0);

  useEffect(() => {
    if (count_2 < 40) {
        const timer_2 = setInterval(() => {
            setCount_2(count_2 + 1)
        }, 50);

        return () => clearInterval(timer_2);
    }
  }, [count_2]);



  return (
    <div name='about' className='w-full my-10'>
        <div className='max-w-[1240px] mx-auto'>
            {/* <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div> */}

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>{count}+</p>
                    <p className='text-gray-400 mt-2'>Év Tapasztalat</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>{count_1}+</p>
                    <p className='text-gray-400 mt-2'>Beépített konyha</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>{count_2}+</p>
                    <p className='text-gray-400 mt-2'>Beszállító partner</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage