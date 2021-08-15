import React from 'react';
import { useLocation } from 'react-router';
import s from './Footer.module.scss';

const Footer = () => {
    const location = useLocation(); // тот же принцип, что и с хэдером
    
    return (
        <div className={location.pathname !== '/' ? s.root : s.transparent}>
            <div className={location.pathname === '/' ? s.logo : s.tr_logo}>AppCo</div>
            <div className={location.pathname === '/' ? s.rights : s.tr_rights}>All rights reserved by ThemeTags</div>
            <div className={location.pathname === '/' ? s.copyright : s.tr_copyright}>Copyrights © 2019.</div>
        </div>
    )
}

export default Footer;
