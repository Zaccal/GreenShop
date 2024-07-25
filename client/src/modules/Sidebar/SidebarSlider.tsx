import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import styles from './Sidebar.module.css';
import { Button } from '@/components/ui/button';

const SidebarSlider = () => {
    const [valuesSlider, setValuesSlider] = useState([0, 1500]);

    return (
        <div className="ml-3 mb-9">
            <Slider
                className="mt-7 mb-4"
                value={valuesSlider}
                onValueChange={(value) => setValuesSlider(value)}
                min={0}
                max={2000}
            />
            <p className={`${styles.optionPrice}`}>
                Price:{' '}
                <span className={`${styles.price}`}>
                    ${valuesSlider[0]} - ${valuesSlider[1]}
                </span>
            </p>
            <Button className="font-bold mt-4">Filter</Button>
        </div>
    );
};

export default SidebarSlider;
