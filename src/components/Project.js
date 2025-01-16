// import React from 'react'

// import Navbar1 from './Navbar1'
// import { Button } from 'react-bootstrap'
// import Buttompart from './Buttompart'
// export default function Project() {
//     return (
//         <body>
//             <div className='sticky-top'>
//                 <Navbar1></Navbar1></div>
//             <div className='container custom-container  my-5 py-5'>
//                 <div className="row row-cols-1 row-cols-md-3 g-4 auto-pading text-center">
//                     <div className="col custom-column-border px-3 py-3 mx-2">
//                         <div className="card h-100 bg-transparent ">
//                             <img src="./calculator.png" className="card-img-hrefp" alt="..." />
//                             <div className="card-body">
//                                 <h3 className="card-title text-light text-center">Basic Calculator</h3>
//                                 <p className="card-text text-size-custom text-light">Here you calculate the basic problems like basic problrms
//                                 addition ,subtraction,multiplication,division,percentage .I mainly use Html , css , js for this Calculator App .</p>
//                             </div>
//                             <div className="card-footer text-center">
//                                 <Button href='https://my-basic-calcu-lator.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
//                                 <Button href='' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col custom-column-border px-3 py-3 mx-auto">
//                         <div className="card h-100  bg-transparent ">
//                             <img src="./weatherApp.png" className="card-img-hrefp" alt="..." />
//                             <div className="card-body">
//                                 <h3 className="card-title text-light text-center">Weather App</h3>
//                                 <p className="card-text text-size-custom text-light">This is a Weather App , which shows you the weather details of a particular city. I mainly use Html ,css ,basic js for this website . I us the weather api.</p>
//                             </div>
//                             <div className="card-footer text-center">
//                                 <Button href='https://basicweather-app.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
//                                 <Button href='' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col custom-column-border px-3 py-3 mx-2">
//                         <div className="card h-100  bg-transparent ">
//                             <img src="./bhoj2.png" className="card-img-hrefp" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title text-light text-center">Restaurant Website</h5>
//                                 <p className="card-text text-size-custom text-light">This is a basic website of a Restaurant .where you order your food, using Html,css & basic js .</p>
//                             </div>
//                             <div className="card-footer text-center">
//                                 <Button href='https://bhoj-restaurant.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
//                                 <Button href='https://github.com/Tanmoy-Santra/Bhoj-Restaurant.git' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             <Buttompart></Buttompart>


//         </body >
//     )
// }





import React from 'react'
import Navbar1 from './Navbar1'
import { Button } from 'react-bootstrap'
import Buttompart from './Buttompart'

export default function Project() {
    return (
        <body>
            <div className='sticky-top'>
                <Navbar1></Navbar1>
            </div>
            <div className='container custom-container my-5 py-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4 auto-pading text-center">
                    {/* Basic Calculator */}
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent">
                            <img src="./calculator.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-light text-center">Basic Calculator</h3>
                                <p className="card-text text-size-custom text-light">Here you calculate the basic problems like basic problems: addition, subtraction, multiplication, division, percentage. I mainly use HTML, CSS, JS for this Calculator App.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://my-basic-calcu-lator.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                    {/* Weather App */}
                    <div className="col custom-column-border px-3 py-3 mx-auto">
                        <div className="card h-100 bg-transparent">
                            <img src="./weatherApp.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-light text-center">Weather App</h3>
                                <p className="card-text text-size-custom text-light">This is a Weather App, which shows you the weather details of a particular city. I mainly use HTML, CSS, and basic JS for this website. I use the Weather API.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://basicweather-app.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                    {/* Restaurant Website */}
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent">
                            <img src="./bhoj2.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light text-center">Restaurant Website</h5>
                                <p className="card-text text-size-custom text-light">This is a basic website of a Restaurant where you order your food, using HTML, CSS & basic JS.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://bhoj-restaurant.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='https://github.com/Tanmoy-Santra/Bhoj-Restaurant.git' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                    {/* Notes Management App */}
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent">
                            <img src="./notesApp.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light text-center">Notes Management App</h5>
                                <p className="card-text text-size-custom text-light">This is a Notes Management App, where users can create, edit, delete, and share their notes. I used React, MongoDB, Firebase for storage, and JWT for authentication.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://notes-management-app-drqo.vercel.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='https://github.com/Tanmoy-Santra/Notes-Management-App' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                    {/* CryptoPlace App */}
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent">
                            <img src="./cryptoApp.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light text-center">CryptoPlace App</h5>
                                <p className="card-text text-size-custom text-light">CryptoPlace App lets you track real-time cryptocurrency prices and trends. Built with React, integrated with APIs to fetch live data.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://cryptoplace-tmwt.vercel.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='https://github.com/Tanmoy-Santra/cryptoplace' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                    {/* Dhun Music App */}
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent">
                            <img src="./dhunMusic.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light text-center">Dhun Music App</h5>
                                <p className="card-text text-size-custom text-light">Dhun Music App allows users to listen to music, create playlists, and discover new tracks. Built using React, Node.js, and MongoDB.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://dhunmusicapp.web.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='https://github.com/Tanmoy-Santra/dhunmain' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                    {/* GitHub Profile Viewer */}
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent">
                            <img src="./githubprofile.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light text-center">GitHub Profile Viewer</h5>
                                <p className="card-text text-size-custom text-light">This app lets you view a GitHub profile and their details like repos, followers, and more. Built with React and GitHub API.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://github-profile-viewer-pro.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='https://github.com/Tanmoy-Santra/Github-Profile-Viewer' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                    {/* Handmade Haven */}
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent">
                            <img src="./handmadehaven.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light text-center">Handmade Haven</h5>
                                <p className="card-text text-size-custom text-light">A platform to explore, discover, and purchase handmade crafts. Built with React and MongoDB.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://rangmanch-e9e75.web.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='https://github.com/Tanmoy-Santra/Handmade-Haven' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Buttompart></Buttompart>
        </body>
    )
}
