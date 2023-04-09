import React, { PureComponent } from 'react'

export default function Header () {
    return (
        <div>
            <header>
                <nav className="bg-white border-gray-200 px-4 md:px-5 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto">

                        <a href="https://tcetmumbai.in" className="flex items-center">
                            <img src="Images/TCET Logo.png" className="2xl:h-[77px] 2xl:w-[77px] xl:h-[64px] xl:w-[64px] mr-3 2xl:mr-4 md:h-[50px] md:w-[50px] h-[40px] w-[40px]" alt="TCET Logo" />
                            <img src="Images/Thakur Trust.jpeg" alt="Thakur Trust" srcSet="" className='mr-3 md:-[50px] md:w-[50px] h-[40px] w-[40px] lg:hidden flex'/>
                            <div className='items-center mr-10 '>   
                                <p className='hidden lg:flex text-[9px] xl:text-[12px] 2xl:text-[15px] text-[#667085] font-Playfair_Display'><i>Zagdu Singh Charitable Trust`s (Regd.)</i></p>
                                <p className="hidden lg:flex self-center text-[19px] xl:text-[24px] 2xl:text-[28.8px] font-semibold whitespace-nowrap text-[#DC6803] font-title">Thakur College Of Enginnering & Technology</p>
                                <p className='hidden lg:flex text-[9px] xl:text-[12px] 2xl:text-[15px] text-[#667085]'>(Autonomous Institute Affiliated to University of Mumbai, Approved by AICTE & <br></br> Govt. of Maharashtra)</p>
                            </div>  
                        </a>

                        <div className="flex items-center">
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                 <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className="hidden items-center lg:flex p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#667085" className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 mr-1 w-4 h-4"> 
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            <a href="thakureducation.org" className="mr-5 xl:mr-7 2xl:mr-9 text-xs xl:text-sm 2xl:text-lg text-[#101828] hover:underline ">thakureducation.org</a>
                            <a href="ERP" className="mr-5 xl:mr-7 2xl:mr-9 text-xs xl:text-sm 2xl:text-lg text-[#101828] hover:underline ">ERP</a>
                            <a href="Alumni" className="mr-5 xl:mr-7 2xl:mr-9 text-xs xl:text-sm 2xl:text-lg text-[#101828] hover:underline ">Alumni</a>
                            <a href="Careers" className="mr-5 xl:mr-7 2xl:mr-9 text-xs xl:text-sm 2xl:text-lg text-[#101828] hover:underline ">Careers</a>
                            <a href="Contact Us" className="mr-5 xl:mr-7 2xl:mr-9 text-xs xl:text-sm 2xl:text-lg text-[#101828] hover:underline ">Contact Us</a>
                            <img src="Images/Thakur Trust.jpeg" alt="Thakur Trust" srcSet="" className='2xl:h-[77px] 2xl:w-[77px] xl:h-[64px] xl:w-[64px] mr-2 xl:mr-3 2xl:mr-4 md:h-[40px] md:w-[40px] h-[34px] w-[34px]'/>
                        </div>

                    </div>
                </nav>
            </header>
            <hr></hr><hr></hr>
        </div>
    )
}
