import styles from './Sidebar.module.css';
import SidebarList from './SidebarList';
import SidebarSizeList from './SidebarSizeList';
import SidebarSlider from './SidebarSlider';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <h6 className={styles.title}>Categories</h6>
                <SidebarList />
                <h6 className={styles.title}>Price Range</h6>
                <SidebarSlider />
                <h6 className={styles.title}>Size</h6>
                <SidebarSizeList />
            </div>
            <img
                className="w-full"
                src="/Super Sale Banner.jpg"
                alt="Super Sale Banner"
            />
        </div>
    );
};

export default Sidebar;
