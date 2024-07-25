import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.css';

const HeaderNav = () => {
    return (
        <div className="flex items-center gap-12">
            <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? styles.active : '')}
            >
                Home
            </NavLink>
            <NavLink
                to={'/Shop'}
                className={({ isActive }) => (isActive ? styles.active : '')}
            >
                Shop
            </NavLink>
            <NavLink
                to={'/PlantCare'}
                className={({ isActive }) => (isActive ? styles.active : '')}
            >
                Plant Care
            </NavLink>
            <NavLink
                to={'/Blogs'}
                className={({ isActive }) => (isActive ? styles.active : '')}
            >
                Blogs
            </NavLink>
        </div>
    );
};

export default HeaderNav;
