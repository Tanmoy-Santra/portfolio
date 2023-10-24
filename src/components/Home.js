import React from 'react'

import Type from './Type'

import Navbar1 from './Navbar1'
import Buttompart from './Buttompart'
export default function Home() {
  return (
    <body>

      <div className='sticky-top'>
        <Navbar1></Navbar1>
      </div>
      <div class='main-content'>
        <div class='container my-5 py-5'>
          <div class="row ">
            <div class="col-sm-6 mb-5 mb-sm-0">
              <div class="card bg-transparent border-0">
                <div class="card-body">
                  <p class="card-text  text-size-custom-home">
                    Hi There! <span class='wave text-light' role='img' area-labelledby='wave'>👋🏻</span><br></br>I'M<span class='name-style '> TANMOY SANTRA</span>
                  </p>
                  <div style={{ padding: 50, textAlign: "left", color: 'aqua', fontSize: '40px', fontWeight: 'bold' }}>
                    <Type />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card bg-transparent border-0">
                <div class="card-body ">
                  <img class='card-body-img img-fluid ' src='./hobe-removebg-preview.jpg' height='400px'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='second-container'>
            <div class="row">
              <div class="col-sm-6 mb-3 mb-sm-0 col-sm-6-border">
                <div class="card bg-transparent border-0">
                  <div class="card-body">
                    <p class="card-text text-size-custom-home"><span class='head-lower-card '>LET ME <span class='introduce'>INTRODUCE</span> MYSELF</span></p>
                    <p class='paragraph-body'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️<br></br><br></br>I am fluent in classics like <span class='introduce'>C++ , Javascript and Go.</span><br></br><br></br>My field of Interest's are building new  <span class='introduce'>Web Technologies</span> and Products and also in areas related to <span class='introduce'>Blockchain.</span><br></br><br></br>Whenever possible, I also apply my passion for developing products with<span class='introduce'>Node.js and Modern Javascript Library</span>  and Frameworks  <span class='introduce'>like React.js and Next.js</span></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-sm-6-border">
                <div class="card bg-transparent border-0">
                  <div class="card-body">
                    <img class="img-fluid rounded-start" src="./profile.png" height='300px'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Buttompart></Buttompart>
      </div>


    </body>
  )
}
