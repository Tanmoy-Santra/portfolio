import React from 'react';
import Navbar1 from './Navbar1';
function Contact() {
  const contactItems = [
    { icon: 'fa-envelope', text: 'tanmoysantra911@.com' },
    { icon: 'fa-phone', text: '+91 8617551535' },
    { icon: 'fa-brands fa-whatsapp', text: '+91 8617551535' },
    { icon: 'fa-brands fa-facebook', text: '' },
    { icon: 'fa-brands fa-twitter', text: '' },
    { icon: 'fa-brands fa-github', text: 'https://github.com/Tanmoy-Santra' },
    { icon: 'fa-brands fa-linkedin', text: 'https://www.linkedin.com/in/tanmoy-santra-986b32252/' },
    
    
  ];

  const handleCopyClick = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied to clipboard: ' + text);
  };

  return (
    <div>
    <div className='sticky-top'>
    <Navbar1></Navbar1>
    </div>
    <div className='container py-5 my-5 mx-5 px-5 expand-lg'>
    <div className="contact-container mx-auto">
      {contactItems.map((item, index) => (
        <div key={index} className="contact-item text-light">
          <i className={`fa ${item.icon}`} />
          <span className='text-light'>{item.text}</span>&nbsp;&nbsp;
          <button
            className="copy-button "
            onClick={() => handleCopyClick(item.text)}
          >
            Copy
          </button>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default Contact;
