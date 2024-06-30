import React from 'react';
import User from '@/components/User/User';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'flex items-center px-[20px] justify-between bg-[#1E1E1E] w-[100%] h-[80px] sticky top-0 z-10'}>
            <Link to={'/'}><h1 className={'text-white text-3xl'}>Фильмопоиск</h1></Link>
            <User/>

        </div>
    );
};

export default Header;