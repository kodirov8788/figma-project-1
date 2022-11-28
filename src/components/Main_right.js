import React from 'react'
import Mainbg from "../images/mainbg.svg"
import Shape from "../images/icons/Shape.svg"
function Main_Right() {
    const stl = {
        mainright: "w-1/2 w-fit absolute z-1 right-0 top-[7em] flex"
    }
    return (
        <div className={stl.mainright}>
            <img className='translate-y-[80px]' src={Shape} alt="" />
            <img src={Mainbg} alt="" />
        </div>
    )
}

export default Main_Right