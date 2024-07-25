import { MouseEventHandler } from 'react';
import styles from './Navigation.module.css';
import { TypeSetState } from '@/types/SetState.type';
import { deactiveOption } from './utils';

export interface NavOption {
    title: string;
    active: boolean;
    id: number;
}

interface INavigation {
    options: NavOption[];
    setOptions?: TypeSetState<NavOption[]>;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const Navigation = ({
    options,
    className,
    onClick,
    setOptions
}: INavigation) => {
    return (
        <nav className="flex items-center gap-12">
            {options.map((optionData) => {
                return (
                    <a
                        href="#"
                        key={optionData.title}
                        onClick={(event) => {
                            event.preventDefault();

                            if (setOptions)
                                deactiveOption(setOptions, options, optionData);

                            if (onClick) onClick(event);
                        }}
                        className={
                            optionData.active
                                ? `${styles.active} ${className}`
                                : className
                        }
                    >
                        {optionData.title}
                    </a>
                );
            })}
        </nav>
    );
};

export default Navigation;
