import * as React from 'react';

import { cn } from '@/lib/utils';
import { TypeReactChildren } from '@/types/ReactChildren.type';

type TypeSide = 'left' | 'right';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: TypeReactChildren;
    iconSide?: TypeSide;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, iconSide = 'left', ...props }, ref) => {
        return (
            <div
                className={cn(
                    'flex h-10 items-center rounded-md border border-input bg-white px-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
                    className
                )}
            >
                {iconSide === 'left' && icon}
                <input
                    {...props}
                    type={type}
                    ref={ref}
                    className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                {iconSide === 'right' && icon}
            </div>
        );
    }
);
Input.displayName = 'Input';

export { Input };
