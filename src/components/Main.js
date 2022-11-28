import React from 'react'
import MainLeft from './Main_left'
import MainRight from './Main_right'

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