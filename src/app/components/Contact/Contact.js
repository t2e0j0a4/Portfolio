"use client";
import Link from 'next/link';
import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import {IoIosSend} from "react-icons/io"
import styles from "./Contact.module.css";
import { BiLogoGithub, BiLogoGmail, BiLogoInstagram, BiLogoTwitter, BiPhoneCall } from 'react-icons/bi';

const Contact = () => {

  const { app__contact, contact__center, contact__side1, contact__socials, contact__side2, side2__form, formsend__message_true, formsend__message_false } = styles;

  const form = useRef();

  const [ emailSend, setEmailSend ] = useState({
    success : false,
    message : ''
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9vhwcvc', 'template_f54hid9', form.current, 'm3HMEpwZdRvxIANbK')
      .then(() => {
        console.log('Send');
        setEmailSend({...emailSend, success : true, message : 'Got you! Reach you soon.'});
        setTimeout(() => {
          setEmailSend({
            success : false,
            message : ''
          });
        }, 5000);
        location.reload();
      }).catch(() => {
        setEmailSend({...emailSend, message : 'There some error occured!'});
        setTimeout(() => {
          setEmailSend({
            success: false,
            message: "",
          });
        }, 5000);
        location.reload();
    });
  };

  return (
    <section className={app__contact}>
      <div className={contact__center} id='contact'>

        {/* Side 1 */}
        
        <div className={contact__side1}>
          <h3>Let&apos;s Work Together</h3>
          <p>If you want a Developer to Work in your Project (or) want to work with me on a Personal Project or hire me as a Freelancer then just drop a Email.</p>
          <div className={contact__socials}>
            <Link href="tel: +919398891038"><BiPhoneCall fontSize={24} color='#FFF'/></Link>
            <Link href="mailto: teja91.valiveti@gmail.com"><BiLogoGmail fontSize={24} color='#FFF'/></Link>
            <Link href="https://github.com/t2e0j0a4"><BiLogoGithub fontSize={24} color='#FFF'/></Link>
            <Link href="https://instagram.com/t2e0j0a4"><BiLogoInstagram fontSize={24} color='#FFF'/></Link>
            <Link href="https://twitter.com/t2e0j0a4"><BiLogoTwitter fontSize={24} color='#FFF'/></Link>
          </div>
        </div>

        {/* Side 2 */}

        <div className={contact__side2}>
          <form className={side2__form} ref={form} onSubmit={(e) => {sendEmail(e)}} >
            <input type="text" name='name' required placeholder='Enter your Name' />
            <input type='email' required name='email' placeholder='Enter your Email' />
            <textarea name="message" placeholder='Tell me about your project'></textarea>
            {
              emailSend.message && <p className={`${emailSend.success ? formsend__message_true : formsend__message_false}`}>{emailSend.message}</p>
            }
            <button type='submit'>Send <IoIosSend/></button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact