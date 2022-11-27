import React from 'react'
import Mainbg from "../images/mainbg.svg"
function Main_right() {
    const stl = {
        mainright: "w-[52%]  w-fit absolute z-1 right-0 top-[7em]"
    }
    return (
        <div className={stl.mainright}>
            <img src={Mainbg} alt="" className='translate-[50px]' />
        </div>
    )
}

export default Main_right