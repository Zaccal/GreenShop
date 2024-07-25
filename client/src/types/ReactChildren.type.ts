import { ReactElement, ReactNode } from 'react';

export type TypeReactChildren =
    | ReactElement
    | ReactElement[]
    | string
    | ReactNode
    | ReactNode[]
    | undefined;
