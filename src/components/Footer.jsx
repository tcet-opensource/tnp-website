import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-4 px-4 py-2'>
            <div id="homepage-footer" className="flex justify-around items-center font-sans flex-wrap">

                {/* Map And Address */}
                <div className="w-full sm:w-1/4 m-2">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7457229439237!2d72.87241691481825!3d19.20630535285474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1680794472903!5m2!1sen!2sin" style={{ border: 0, width: "100%", height: "27vh" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='mt-4 text-sm'>
                        <p className='text-justify' >Thakur College Of Engineering And Technology. A-Block, Thakur Educational Campus, Shyamnarayan Thakur Marg, Thakur Village, Kandivali(E). Mumbai - 400101.</p>
                    </div>
                </div>

                {/* Contacts and CopyRight */}
                <div className="w-full sm:w-auto mt-10 sm:mt-0 m-2">
                    <div className='text-base'>
                        <div>
                            <img className='inline mr-2' src="/phone.svg" alt="phone" />
                            <p className='inline'>
                                <a className='underline' href="tel:022-28461891">022 - 28461891</a> / <a className='underline' href="022-67308000">022 - 67308000</a>, <a className='underline' href="022-67308106">67308106</a> / <a className='underline' href="022-67308107">07</a>
                            </p>
                        </div>
                        <div className='mt-2'>
                            <img className='inline mr-2' src="/email.svg" alt="email" />
                            <p className='inline'>
                                <a href="mailto:tcet@thakureducation.org">tcet@thakureducation.org</a>
                            </p>
                        </div>
                        <div className='mt-2'>
                            <img className='inline mr-2' src="/website.svg" alt="website" />
                            <p className='inline'>Websites: <a className='underline' href="https://www.tcetmumbai.in">www.tcetmumbai.in</a> / <a className='underline' href="https://www.thakureducation.org">www.thakureducation.org</a>
                            </p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p className=''>© 2023 Thakur College of Engineering and Technology.</p>
                        <p className=''>All Rights Reserved.</p>
                    </div>
                </div>

                {/* Nav as */}
                <div className="mt-10 sm:mt-0 w-full sm:w-auto m-2">
                    <div className="grid grid-rows gap-2 text-base">
                        <a href="/about">Home</a>
                        <a href="/download">Download</a>
                        <a href="/media">Media</a>
                        <a href="/news">News</a>
                        <a href="/mandatory-disclosure">Mandatory Disclosure</a>
                        <a href="/disclaimer">Disclaimer</a>
                        <a href="/content-policy">Content Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;