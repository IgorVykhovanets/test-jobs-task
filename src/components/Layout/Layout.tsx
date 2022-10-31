import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './layout.modules.scss';

const Layout:FC = () => {
    return (
        <div className={'nav-links-menu'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/jobs'}>Jobs</NavLink>
        </div>
    );
};

export default Layout;