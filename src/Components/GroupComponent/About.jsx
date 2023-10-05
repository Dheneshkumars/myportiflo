import about_image from '../../images/About_Dhenesh.webp';


const About = () => {
    return (
        <section id='page_About' className='hide'>
            <div className="container py-4">
                <div className="about-parent row">
                    <div className="about-child1 col-lg-4">
                        <img src={about_image} alt='about' className='about_image' />
                    </div>
                    <div className="about-child2 col-lg-8">
                        <h3 className='section_heading'>About</h3>
                        <div className="line"></div>
                        <div className="about-content">
                            <p>I am a bachelor of engineer and junior web developer. I have one and half year's experience in IT Field. I am a most trained person in web Developing.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className='about-ul'>
                                        <li className='about-list'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 0 1 2.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.36a4.024 4.024 0 0 1-.972-2.182l-.022-.253L2 14v-1a3 3 0 0 1 2.824-2.995L5 10l1-.001V6h2Zm11 6H5a1 1 0 0 0-.993.883L4 13v.971l.003.147A2 2 0 0 0 6 16a1.999 1.999 0 0 0 1.98-1.7l.015-.153l.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134l.004.147a2 2 0 0 0 3.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.013.282a2 2 0 0 0 3.988 0L20 14v-1a1 1 0 0 0-.883-.993L19 12ZM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 0 1-2.898-.776C5.85 2.002 7 2.5 7 1Zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C10.85 2.002 12 2.5 12 1Zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C15.85 2.002 17 2.5 17 1Z" /></svg>
                                            <div className='mx-3'>
                                                <strong>BirthDay:</strong>
                                                <span> 23 Dec-1999</span>
                                            </div>
                                        </li>
                                        <li className='about-list'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" /></g></svg>
                                            <div className='mx-3'>
                                                <strong>Phone:</strong>
                                                <span> (+91)-9344368889</span>
                                            </div>
                                        </li>
                                        <li className='about-list'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><g fill="currentColor"><path d="M22 13h-2v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-10 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-6 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-10 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-6 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-6 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-6 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm5-7h3v-2h-3v2Zm3 4h-3v-2h3v2Zm-3 4h3v-2h-3v2Z" /><path fillRule="evenodd" d="m17 4l16 6v14h4a1 1 0 0 1 1 1v17h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1V21a1 1 0 0 1 1-1h2v-7h2v7h2V4Zm2 2.886l12 4.5V24h-3a1 1 0 0 0-1 1v17h-8V6.886ZM12 22v20h5V22h-5Zm24 20h-2v-2h-3v2h-2V26h7v16Z" clipRule="evenodd" /></g></svg>
                                            <div className="mx-3">
                                                <strong>City:</strong>
                                                <span> Kanyakumari,TamilNadu</span>
                                            </div>
                                        </li>
                                        <li className="about-list">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374l-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76l4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548l3.643-3.57l1.13-6.652l-4.439-.228Z" /></svg>
                                            <div className="mx-3">
                                                <strong>freelance:</strong>
                                                <span> Avilable</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className='about-ul'>
                                        <li className="about-list">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 24"><path fill="currentColor" d="M14.145 16.629a23.876 23.876 0 0 1-.052-2.525l-.001.037a4.847 4.847 0 0 0 1.333-2.868l.002-.021c.339-.028.874-.358 1.03-1.666a1.217 1.217 0 0 0-.455-1.218l-.003-.002c.552-1.66 1.698-6.796-2.121-7.326C13.485.35 12.479 0 11.171 0c-5.233.096-5.864 3.951-4.72 8.366a1.222 1.222 0 0 0-.455 1.229l-.001-.008c.16 1.306.691 1.638 1.03 1.666a4.858 4.858 0 0 0 1.374 2.888a24.648 24.648 0 0 1-.058 2.569l.005-.081C7.308 19.413.32 18.631 0 24h22.458c-.322-5.369-7.278-4.587-8.314-7.371z" /></svg>
                                            <div className="mx-3">
                                                <strong>Age:</strong>
                                                <span> 24</span>
                                            </div>
                                        </li>
                                        <li className="about-list">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><mask id="ipSDegreeHat0"><g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4L2 17.4Z" /><path strokeLinecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825" /></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDegreeHat0)" /></svg>
                                            <div className="mx-3">
                                                <strong>Degree</strong>
                                                <span> Bachelor of Engineering [B.E]</span>
                                            </div>
                                        </li>
                                        <li className="about-list">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z" /></svg>
                                            <div className="mx-3">
                                                <strong>Email:</strong>
                                                <span> dheneshkumar111@gmail.com</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;