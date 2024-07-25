import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../SettingsSidebar.module.css';

interface ISettingsSidebarLink {
    to: string;
    icon: ReactElement;
    children: string;
}

const SettingsSidebarLink = ({ icon, to, children }: ISettingsSidebarLink) => {
    return (
        <>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.active_link : styles.defualt_link
                }
                to={to}
            >
                {icon}
                {children}
            </NavLink>
        </>
    );
};

export default SettingsSidebarLink;
