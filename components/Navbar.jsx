import { Link } from "react-router-dom";
import { useState} from "react";
import menuIcon from '/src/assets/icon-hamburger.svg';
import chevronIcon from '/src/assets/icon-chevron.svg';

const Navbar = ()=>{

const[isActive,setActive] = useState(false)

    return(
        <header className="sticky px-16 lg:px-4 border-b border-[color:var(--grey)] text-center lg:py-4 sm:px-8 sm:z-50 sm:sticky sm:top-0 sm:bg-[url('/src/assets/background-stars.svg')] sm:bg-[size:70%] sm:bg-[var(--main-color)]">
            <div className="flex justify-between h-full items-center sm:flex lg:block">
                <h2 className="tracking-tight sm:pb-0 lg:pb-3">The Planets</h2>
                <nav className={`h-full sm:absolute sm:top-[4.3rem] sm:left-0 sm:h-[calc(100vh-2rem)] sm:w-screen sm:${isActive ? 'block' : 'hidden'}`}>
                    <ul className={`flex justify-between gap-3 h-full items-center text-[color:var(--light-grey)] sm:flex-col sm:justify-center sm:text-left sm:bg-[color:var(--main-color)] sm:py-[25 animate-hamburger-menu-open`}>
                        
                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--mercury-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between">
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--mercury-color)] rounded-full"></span>
                                <Link to="/">Mercury</Link>
                            </div>
                            <img src={chevronIcon} className="sm:block hidden" />
                        </li>

                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--venus-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between">
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--venus-color)] rounded-full"></span>
                                <Link to="/venus">Venus</Link>
                            </div>
                            <img src={chevronIcon} className="sm:block hidden" />
                        </li>

                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--earth-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between">
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--earth-color)] rounded-full"></span>
                                <Link to="/earth">Earth</Link>
                            </div>
                            <img src={chevronIcon} className="sm:block hidden" />
                        </li>

                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--mars-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between"> 
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--mars-color)] rounded-full"></span>
                                <Link to="/mars">Mars</Link>
                            </div>
                            <img src={chevronIcon} className="sm:block hidden" />
                        </li>

                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--jupiter-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between">
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--jupiter-color)] rounded-full"></span>
                                <Link to="/jupiter">Jupiter</Link>
                            </div>
                            <img src={chevronIcon}  className="sm:block hidden"/>
                        </li>

                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--saturn-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between">
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--saturn-color)] rounded-full"></span>
                                <Link to="/saturn">Saturn</Link>
                            </div>
                            <img src={chevronIcon} className="sm:block hidden" />
                        </li>

                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--uranus-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between">
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--uranus-color)] rounded-full"></span>
                                <Link to="/uranus">Uranus</Link>
                            </div>
                            <img src={chevronIcon}  className="sm:block hidden"/>
                        </li>

                        <li className="px-2 sm:px-8 lg:py-4 py-10 hover:shadow-[inset_0px_3px_0px_0px_var(--neptune-color)] lg:hover:shadow-none sm:w-full hover:text-white ease-in duration-100 sm:flex sm:items-baseline sm:justify-between">
                            <div className="flex items-center gap-8">
                                <span className="hidden sm:block w-4 h-4 bg-[var(--neptune-color)] rounded-full"></span>
                                <Link to="/neptune">Neptune</Link>
                            </div>
                            <img src={chevronIcon} className="sm:block hidden" />
                        </li>
                    </ul>
                </nav>
            <img src={menuIcon} className={`${isActive ? 'opacity-30' : 'opacity-100'} hidden sm:block`}  onClick={() => setActive(!isActive)}/>
            </div>
        </header>
    )

}

export default Navbar;