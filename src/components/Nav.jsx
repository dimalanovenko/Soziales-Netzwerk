import {useDispatch, useSelector} from "react-redux";
import {setIsFeed} from "../features/feedSlice.js";

import {FaHouse} from "react-icons/fa6";
import {CgProfile} from "react-icons/cg";

import {Link} from "react-router";

const Nav = () => {
    const dispatch = useDispatch();
    const isFeed = useSelector(state => state.feed.isFeed);

    const handleClick = () => {
       dispatch(setIsFeed(!isFeed))
    }

    return (
        <ul className="w-1/4 py-5 bg-zinc-900 flex justify-around fixed mt-162">
            <Link to="/feed">
                <FaHouse
                    onClick={handleClick}
                    className={`text-4xl cursor-pointer 
                    ${isFeed ? 'text-pink-400' : 'text-white'}`}
                />
            </Link>
            <Link to="/profile">
                <CgProfile
                    onClick={handleClick}
                    className={`text-4xl cursor-pointer 
                    ${!isFeed ? 'text-pink-400' : 'text-white'}`}
                />
            </Link>
        </ul>
    )
}

export default Nav
