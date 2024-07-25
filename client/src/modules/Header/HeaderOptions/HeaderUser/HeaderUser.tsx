import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { CiDeliveryTruck, CiHeart } from 'react-icons/ci';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import styles from './HeaderUser.module.css';

const HeaderUser = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="border">
                    <AvatarImage src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className={styles.dropdownMenuItemStyle}>
                        <MdOutlineAccountCircle size={18} />
                        <span>Account details</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={styles.dropdownMenuItemStyle}>
                        <SlBasket size={18} />
                        <span>Orders</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={styles.dropdownMenuItemStyle}>
                        <CiHeart size={20} />
                        <span>Wishlist</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={styles.dropdownMenuItemStyle}>
                        <IoSettingsOutline size={18} />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={styles.dropdownMenuItemStyle}>
                        <CiDeliveryTruck size={19} />
                        <span>Delivery</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={styles.dropdownMenuItemStyle}>
                        <HiOutlineLogout size={18} color="#ef4444 " />
                        <span className="text-red-500">Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default HeaderUser;
