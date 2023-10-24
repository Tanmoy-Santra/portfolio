import React from 'react'

export default function Buttompart() {
  return (
    <div>
      <div className='container my-5'>
                <div className="card text-center py-5 bg-transparent border-0">
                    <div className="card-body">
                        <p className="card-text text-size-custom-home custom-font">FIND ME ON</p><br></br>
                        <p className='font-light'>Feel free href <span className='introduce'>connect</span> with me</p>
                    </div>
                    <ul className="socials ">
                        <li><a href='#'><i className="fab fa-facebook"></i></a></li>
                        <li><a href='#'><i className="fab fa-twitter"></i></a></li>
                        <li><a href='#'><i className="fab fa-instagram"></i></a></li>
                        <li><a href='https://github.com/Tanmoy-Santra'><i className="fab fa-github"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/tanmoy-santra-986b32252/'><i className="fab fa-linkedin-square"></i></a></li>
                    </ul>

                </div>
            </div>
            <nav className="navbar  navbar-dark bg-dark sticky-buttom">
                <p className='font-light px-5'>Designed and Developed by Tanmoy Santra</p>
                <p className='font-light px-5'>Copyright © 2023</p>
            </nav>
    </div>
  )
}
