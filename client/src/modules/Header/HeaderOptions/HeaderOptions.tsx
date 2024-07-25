import IconButton from '@/components/custom/IconButton/IconButton';
import { SlBasket } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import HeaderOptionAuth from './HeaderOptionAuth/HeaderOptionAuth';
import HeaderOptionSearch from './HeaderOptionSearch';
import HeaderUser from './HeaderUser/HeaderUser';

const HeaderOptions = () => {
    const nav = useNavigate();
    const isAuth = true;

    return (
        <div className="flex items-center gap-7">
            <HeaderOptionSearch />

            <IconButton onClick={() => nav('/shop/shoping_cart')} count={6}>
                <SlBasket />
            </IconButton>

            {isAuth ? <HeaderUser /> : <HeaderOptionAuth />}
        </div>
    );
};

export default HeaderOptions;
