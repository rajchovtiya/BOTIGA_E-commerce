import React, { useState } from 'react';

const ContactUs = () => {

    return (
        <div className='mt-16  px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64'>
            <div className='flex items-center justify-center flex-col mt-20'>
                <h1 className='text-7xl font-light'>Contact Us</h1>
            </div>

            {/* Google Map */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Our Location - Surat</h2>
                <div className=" overflow-hidden shadow-lg">
                    <iframe
                        title=""
                        src="https://www.google.com/maps?q= New York, USA&output=embed"
                        className="w-full h-[450px] "
                        allowFullScreen=""
                       
                    ></iframe>
                </div>
            </div>
            <div className='flex  w-full justify-between gap-2 mt-16'>
                <form action="#" className='w-[60%]'>
                    <h1 className='text-4xl font-light'>Leave Us a Message</h1>
                    <div className='flex items-center justify-between gap-2'>
                        <p className="text-[16px] opacity-80 flex flex-col mt-7 w-[49%]">
                            <label for="comment">Name <span className='text-red-500'>*</span></label>
                            <input id='comment' type="text" className='w-full h-[48px] bg-transparent border border-black' />
                        </p>
                        <p className="text-[16px] opacity-80 flex flex-col mt-7 w-[49%]">
                            <label for="comment">Email <span className='text-red-500'>*</span></label>
                            <input id='comment' type="email" className='w-full h-[48px] bg-transparent border border-black' />
                        </p>
                    </div>
                    <p className="text-[16px] opacity-80 flex flex-col mt-5">
                        <label for="comment">Comment <span className='text-red-500'>*</span></label>
                        <textarea id="comment" name="comment" cols="45" rows="9" maxlength="65525" required="" className='bg-transparent p-5 border mt-2 border-black'></textarea>
                    </p>

                    <button type='submit' className='bg-black text-white p-3 px-5 mt-4'>SEND MESSAGE</button>
                </form>
                <div>
                    <h1 className='text-3xl font-normal'> Our Store</h1>
                    <p className='mt-8 text-gray-800'>501-521 Fashion Ave, New York, NY 10018, USA</p>
                    <p className='text-gray-800 mt-2 text-[14px]'>PHONE:</p>
                    <p className='text-gray-800 mt-2 text-[14px]'>+1 212 244 2681</p>
                    <p className='text-gray-800 mt-2 text-[14px]'>E-MAIL:</p>
                    <p className='text-gray-800 mt-2 text-[14px]'>office@example.org</p>
                    <h1 className='text-3xl font-normal mt-2'>Store Hours</h1>
                    <p  className='text-gray-800 mt-2 text-[14px]'>Sun: Closed</p>
                    <p  className='text-gray-800 mt-3 text-[14px]'>Mon to Sat: 10 AM – 5:30 PM</p>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
