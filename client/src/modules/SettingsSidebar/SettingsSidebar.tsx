import { Button } from '@/components/ui/button';
import { CgDanger, CgProfile } from 'react-icons/cg';
import {
    CiDeliveryTruck,
    CiHeart,
    CiLocationOn,
    CiLogout
} from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import SettingsSidebarLink from './SettingsSidebarLink/SettingsSidebarLink';

const SettingsSidebar = () => {
    return (
        <div className="bg-muted w-[310px] py-[18px]">
            <h3 className="font-bold text-lg px-[18px]">My account</h3>
            <div className="mt-[18px]">
                <SettingsSidebarLink
                    to="account_details"
                    icon={<CgProfile size={20} />}
                >
                    Account details
                </SettingsSidebarLink>
                <SettingsSidebarLink
                    icon={<CiLocationOn size={23} />}
                    to="address"
                >
                    Address
                </SettingsSidebarLink>
                <SettingsSidebarLink icon={<SlBasket size={20} />} to="orders">
                    Orders
                </SettingsSidebarLink>
                <SettingsSidebarLink
                    icon={<CiHeart size={20} />}
                    to="whishlist"
                >
                    Wishlist
                </SettingsSidebarLink>
                <SettingsSidebarLink
                    icon={<CiDeliveryTruck size={20} />}
                    to="delivery"
                >
                    Delivery
                </SettingsSidebarLink>
                <SettingsSidebarLink icon={<CgDanger size={20} />} to="support">
                    Support
                </SettingsSidebarLink>
                <Button
                    variant={'ghost'}
                    className="flex items-center justify-start cursor-pointer hover:text-red-600 gap-2 text-[16px] px-[23px] py-3 text-red-500 border-t w-full"
                >
                    <CiLogout size={20} /> Log out
                </Button>
            </div>
        </div>
    );
};

export default SettingsSidebar;
