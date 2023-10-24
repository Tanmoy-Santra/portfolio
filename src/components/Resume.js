import React from 'react'
import Navbar1 from './Navbar1'

export default function Resume() {
  const contactItems = [
    { icon: 'fa-brands fa-google-drive', text: '' }


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
        <Navbar1></Navbar1></div>
      <div className='container py-5 my-5 mx-5 px-5'>
        <div className="contact-container">
          {contactItems.map((item, index) => (
            <div key={index} className="contact-item text-light">
              <i className={`fa ${item.icon}`} />
              <span className='text-light'>{item.text}</span>&nbsp;&nbsp;
              <button
                className="copy-button "
                onClick={() => handleCopyClick(item.text)}
              >
                Copy
              </button>&nbsp;&nbsp;
              <button href=''>
                drive link here.....
              </button>
            </div>
          ))}
        </div>
      </div>




    </div>

  )
}
