import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMailOpen } from 'react-icons/io';
import contactIMG from '../../assets/images/contact.png';
import './Contact.css';
// import { Form } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9dub4ra', 'template_ms5my54', form.current, 'wSgiyP5XFSIy25aZh')
            .then((result) => {
                console.log(result.text)
            },
                (error) => {
                    console.log(error.text)
                });


    }
    return (
        <div className='p-10'>
            <h2 className='text-2xl text-center pb-3 font-serif'>Contact me</h2>

            <div>
                <div className='lg:flex lg:justify-center lg:justify-evenly md:grid md:place-items-center sm:grid sm:place-items-center'>
                    <h3 className='flex gap-2'><IoIosMailOpen className='text-sky-500' /> md.habibullah7520@gmail.com</h3>

                    <h3 className='flex gap-2'><FaPhoneAlt className='text-sky-500' /> +8801609111813</h3>
                </div>
            </div>
            <div className=' lg:flex md:flex sm:grid sm:gap-y-4'>
                <div className=' w-1/2'>
                    <img src={contactIMG} alt="" className=' ' />
                </div>
                <form ref={form} onSubmit={sendEmail} className='grid place-content-center gap-10 pt-10 w-1/2'>

                <div>
                   
                    <input type="email" name='email' placeholder='Email' className="input-field" required />

                    <label id='email-lebel' className='input-lebel'>Email</label>
                </div>

                <div>
                    
                    <input type="text" name='name' placeholder="" className="input-field" required />

                    <label id='name-sector' className='input-lebel'>Name</label>
                </div>

                <div>
                    
                    <textarea name='message' placeholder="Write your messege"  className=" text-sm max-w-xs input-field" required></textarea>

                    <label id='message-lebel' className='input-lebel'>Message</label>
                </div>
                <input type='submit' value='send' className='btn btn-info btn-outline w-60' />
            </form>
            </div>
        </div>
    );
};

export default Contact;