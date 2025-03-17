import {FaHouse} from "react-icons/fa6";
import {CgProfile} from "react-icons/cg";

import {NavLink} from "react-router";
import {FaPlus} from "react-icons/fa";
import {IoSearchSharp} from "react-icons/io5";
import {GrTransaction} from "react-icons/gr";

const Nav = () => {

    return (
        <ul className="w-full py-5 bg-zinc-900 flex justify-around">
            <NavLink
                className={({isActive}) =>
                    isActive ? "text-teal-400" : "text-white"
                }
                to="/feed">
                <FaHouse className="text-4xl cursor-pointer"/>
            </NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? "text-teal-400" : "text-white"
                }
                to="/createPost">
                <FaPlus className="text-4xl cursor-pointer"/>
            </NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? "text-teal-400" : "text-white"
                }
                to="/transaction">
                <GrTransaction className="text-4xl cursor-pointer"/>
            </NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? "text-teal-400" : "text-white"
                }
                to="/search">
                <IoSearchSharp className="text-4xl cursor-pointer"/>
            </NavLink>
            <NavLink
                className={({isActive}) =>
                    isActive ? "text-teal-400" : "text-white"
                }
                to="/profile">
                <CgProfile className="text-4xl cursor-pointer"/>
            </NavLink>
        </ul>
    )
}

export default Nav
