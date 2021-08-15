import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
    const location = useLocation(); // на главной странице градиентный фон, во избежание конфликтов с ним...
    
    return (
        <div className={location.pathname !== '/' ? s.root : s.transparent}>
            AppCo
        </div>
    )
}

export default Header;
