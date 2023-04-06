import React, { PureComponent } from 'react'

export default function Header () {
    return (
      <div>
        
        <nav className="bg-white border-gray-200">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://tcetmumbai.in" className="flex items-center">
                    <img src="Images/TCET Logo.png" className=" h-[64px] w-[64px] mr-3" alt="TCET Logo" />
                    <div>
                        <p className='text-[12px] text-[#667085] font-Playfair_Display'><i>Zagdu Singh Charitable Trust`s (Regd.)</i></p>
                        <p className="self-center text-[24px] font-semibold whitespace-nowrap text-[#DC6803] font-title">Thakur College Of Enginnering & Technology</p>
                        <p className='text-[12px] leading-[15px] text-[#667085]'>(Autonomous Institute Affiliated to University of Mumbai, Approved by AICTE & <br></br> Govt. of Maharashtra)</p>
                    </div>
                </a>
                <div className="flex items-center">
                    <a href="thakureducation.org" className="mr-7 text-sm text-[#101828] hover:underline">thakureducation.org</a>
                    <a href="ERP" className="mr-7 text-sm text-[#101828] hover:underline">ERP</a>
                    <a href="Alumni" className="mr-7 text-sm text-[#101828] hover:underline">Alumni</a>
                    <a href="Careers" className="mr-7 text-sm text-[#101828] hover:underline">Careers</a>
                    <a href="Contact Us" className="mr-7 text-sm text-[#101828] hover:underline">Contact Us</a>
                    <img src="Images/Thakur Trust.jpeg" alt="" srcSet="" className='h-[64px] w-[64px] mr-3'/>
                </div>
            </div>
        </nav>
        <hr /><hr />
      </div>
    )
  }