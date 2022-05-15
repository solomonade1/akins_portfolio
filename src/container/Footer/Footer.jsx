import React, { useState } from 'react';

import { AppWrap, motionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss'
import { images } from '../../constants';


const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
    <h2 className="head-text">Take a coffe & chat with me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:hello@micael.com" className="p-text">hello@miceal.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
        <a href="tel: +234 (812) 3332-234" className="p-text">+234 (812) 3332-234</a>
      </div>
    </div>
    {!isFormSubmitted ?
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input type="text" placeholder='Your Name' name='name' value={name} className="p-text" onChange={handleChangeInput} />
      </div>
      <div className="app__flex">
        <input type="email" placeholder='Your Email' name='email' value={email} className="p-text" onChange={handleChangeInput} />
      </div>
      <div>
        <textarea name="message" value={message} placeholder='Your Message' className='p-text' onChange={handleChangeInput} />
      </div>
      <button type='button' className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    : <div>
      <h3 className="head-text">Thank you for getting in touch</h3>
    </div>
}
    </>
  )
}

export default AppWrap(
  motionWrap(Footer, 'app__about'),
    'contact',
    "app__whitebg"
    );