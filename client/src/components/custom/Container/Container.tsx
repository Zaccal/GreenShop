import { TypeReactChildren } from '@/types/ReactChildren.type';

interface IContainer {
    children: TypeReactChildren;
}

const Container = ({ children }: IContainer) => {
    return <div className="max-w-[1222px] px-3 mx-auto">{children}</div>;
};

export default Container;
