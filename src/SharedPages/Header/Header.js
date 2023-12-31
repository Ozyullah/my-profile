import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/cover.png';

const Header = () => {
    return (
        <div>
            <div className="setUpPosition shadow-xl">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/about'}>About</Link></li>
                                <li><Link to={'/projects'}>Projects</Link></li>
                                <li>
                                    <a>Blogs</a>
                                    <ul className="p-2">
                                        <li><Link to={'/blog'}>Submenu 1</Link></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><Link to={'/resume'}>Resume</Link></li>

                            </ul>
                        </div>
                        <Link to={"/"} className="btn btn-ghost normal-case text-xl"><img src={logoImg} alt="" className=" w-44" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/projects'}>Projects</Link></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Blogs</summary>
                                    <ul className="p-2">
                                        <li><Link to={'/blog'}>Submenu 1</Link></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to={'/resume'}>Resume</Link></li>

                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                        <div className=" dropdown dropdown-end">
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <div className=" form-control mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            </div>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;