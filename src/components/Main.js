import React from 'react'
import Main_left from './Main_left'
import Main_right from './Main_right'

function Main() {
    const stl = {
        main: "flex pl-[10%] py-[10%] bg-bg_color_first h-screen relative"
    }
    return (
        <div className={stl.main}>
            <Main_left />
            <Main_right />
        </div>
    )
}

export default Main