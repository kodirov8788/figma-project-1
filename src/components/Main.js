import React from 'react'
import MainLeft from './Main_Left'
import MainRight from './Main_Right'

function Main() {
    const stl = {
        main: "flex pl-[10%] py-[10%] bg-bg_color_first h-[94vh] relative"
    }
    return (
        <div className={stl.main}>
            <MainLeft />
            <MainRight />
        </div>
    )
}

export default Main