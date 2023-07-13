import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options = {
  closeButton: true,
  positionClass: 'toast-bottom-right',
  timeOut: 3000,
};

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0fuc2h9', 'template_uq3d0p1', form.current, 'QZ4rdIHMBykykuS-b')
      .then((result) => {
          console.log(result.text);
          toastr.success('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          toastr.error('Error sending email');
      });
  };

  return (
    <div className='bg-slate-500 flex justify-center px-5'>
      <div className='Poppins-medium'>
        <h1 className='text-white text-6xl mt-10 p-5 text-center'>CONTACT US</h1>
        <p className='text-white text-center'>We always hear you, left a message for us!</p>
        <div className='container border-white mt-5'>
          <form ref={form} onSubmit={sendEmail} className='bg-gray-300 w-full rounded-lg shadow-lg relative content-center'>
            <div className="mx-3 mb-6">
              <div className="w-full px-3 mb-1 md:mb-0 p-5 flex sm:flex-row">
                <div className="w-full">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                    Name
                  </label>
                  <input name='user_name' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Name"></input>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                    E-mail
                  </label>
                  <input name='user_email' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="E-mail"></input>
                </div>
              </div>
              <div className="mx-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Message">
                  Message
                </label>
                <textarea name="message" id="" cols="10" rows="5" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'></textarea>
              </div>
              <div className='py-5 flex'>
                <button className='mx-auto w-[10rem] p-4 bg-sky-500 hover:bg-sky-600 rounded-md font-semibold'>Send</button>
              </div>
            </div>
          </form>
        </div >
        <div className='py-10'>
          <hr />
          <p className='text-white text-center'>Jl. Prof. DR. G.A. Siwabessy, Kota Depok, Jawa Barat 16425</p>
          <p className='text-white text-center'>tiwaibi@class.com</p>
          <p className='text-white text-center'>08123456789</p>
        </div>
      </div >
    </div >
  );
};

export default ContactUs;