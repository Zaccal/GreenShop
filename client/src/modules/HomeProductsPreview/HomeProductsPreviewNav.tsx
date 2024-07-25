import { useState } from 'react';
import Navigation, {
    NavOption
} from '@/components/custom/Navigation/Navigation';

const HomeProductsPreviewNav = () => {
    const [HeaderNavOptions, setHeaderNavOptions] = useState<NavOption[]>(
        () => [
            {
                title: 'All Plants',
                active: true,
                id: 1
            },
            {
                title: 'New Arrivals',
                active: false,
                id: 2
            },
            {
                title: 'Sale',
                active: false,
                id: 3
            }
        ]
    );

    return (
        <Navigation
            setOptions={setHeaderNavOptions}
            options={HeaderNavOptions}
        />
    );
};

export default HomeProductsPreviewNav;
