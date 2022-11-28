import React from 'react'
import VideoIcon from "../images/icons/video.svg"
function Main_left() {
    const stl = {
        mainleft: "w-1/2 z-10"
    }
    return (
        <div className={stl.mainleft}>
            <span className='bg-[#FFF2D4] px-3 py-2 rounded-[8px] font-inter text-[#F4B41B]'>Fast Delevery</span>

            <h1 className='text-[48px] font-sans font-bold my-4 tracking-wide'>
                Discover Your Favourite <br /> Food and <span className='text-primary_text'>Test Forever</span>

            </h1>

            <p className='text-[#667085] leading-7 text-[16px] tracking-wider w-11/12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <div className="flex mt-10">
                <button className='bg-[#FFC12F] text-white rounded-[48px] px-4 py-2'>Get Started</button>

                <button className='flex ml-4 items-center hover:bg-[#FFC12F] hover:text-white text-[#3C3C3C] rounded-[48px] px-2 py-px '>
                    <div className="w-[30px] mr-2 h-[30px] bg-white p-[6px] rounded-full"><img className='' src={VideoIcon} alt="" /></div>
                    <span>More Information</span></button>
            </div>

        </div>
    )
}

export default Main_left