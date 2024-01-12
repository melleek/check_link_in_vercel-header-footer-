import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Card1 from '../components/Card1'

function Layout() {
    const { pathname } = useLocation()
    return (
        <>
            <>
                <header className='bg-[black] lg:px-[50px] lg:py-[40px] flex justify-between'>
                    <aside>
                        <h1 className='text-[29px] font-[700] text-[white]'>LOGO</h1>
                    </aside>
                    <aside>
                        <nav className='flex items-center gap-[88px] lg:px-[80px] text-white font-[700]'>
                            <Link to="/">
                                <p style={{ borderBottom: pathname === "/" ? "3px solid  rgb(220,112,0)" : "none" }}>Home</p>
                            </Link>
                            <Link to="/about">
                                <p style={{ borderBottom: pathname === "/about" ? "3px solid  rgb(220,112,0)" : "none" }}>About</p>
                            </Link>
                            <Link to="/portfolio">
                                <p style={{ borderBottom: pathname === "/portfolio" ? "3px solid  rgb(220,112,0)" : "none" }}>Portfolio</p>
                            </Link>
                            <Link to="/news">
                                <p style={{ borderBottom: pathname === "/news" ? "2px solid rgb(220,112,0)" : "none" }}>News</p>
                            </Link>
                            <button className='bg-[rgb(220,112,0)] lg:py-[8px] rounded-[8px] px-[27px]'>Contact us</button>
                        </nav>

                    </aside>
                </header>

                <aside>
                    <Outlet />
                </aside>
            </>

            {/* footer */}
            <footer className='bg-[black]'>

                <main className='text-white flex justify-between items-end lg:p-[80px]'>


                    <ul className='flex flex-col gap-[30px]'>
                        <h1 className='text-[29px] font-[700] text-[white]'>LOGO</h1>
                        <p className='w-[372px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <h1>@Logo</h1>
                    </ul>

                    <ul className='flex flex-col gap-[14px]'>
                        <li>About us</li>
                        <li>Zeux</li>
                        <li>Portfolio</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </ul>


                    <ul className='flex flex-col gap-[40px]'>
                        <li>Contact us</li>
                        <p className='lg:w-[282px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <li>+908 89097 890</li>
                    </ul>
                    <ul className='flex items-center gap-[20px]'>
                        <img src="Group 5 (3).png" alt="" />
                        <img src="Group 9.png" alt="" />
                        <img src="Group 10.png" alt="" />
                        <img src="Group 11.png" alt="" />
                    </ul>
                </main>
                <hr />
                <div className='flex text-white text-[13px] justify-center p-[30px]'>
                    <p>Copyright ® 2021 Lorem All rights Rcerved</p>
                </div>
            </footer>
        </>
    )
}

export default Layout
