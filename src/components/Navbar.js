import React from 'react'
import { navbar } from "../static_data"
import { Link } from "react-router-dom"
function Navbar() {
    const stl = {
        nav: "px-[10%] bg-bg_color_first m-auto border flex justify-between",
        logo: "text-[32px] text-[#3C3C3C] font-bold",
        logo_child: "text-primary_yellow",
        nav_collection: "flex-[.7] flex justify-around items-center",
        nav_list: "border-b-2 duration-150 hover:border-b-2 border-b-transparent hover:border-b-primary_yellow font-sans font-bold hover:text-primary_yellow cursor-pointer",
    }
    return (
        <div className={stl.nav}>
            <Link to="/"><div className={stl.logo}>Tammy <span className={stl.logo_child}>Food</span></div></Link>

            <ul className={stl.nav_collection}>
                {navbar.map(item => {
                    return <li key={item.id} className={stl.nav_list}><Link to={item.route}>{item.nav_text}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default Navbar