import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { useLocation } from 'react-router-dom';
import { firstCharUpper } from './utils';

interface IReplace {
    name: string;
    value: string;
}

interface ICurrentLocation {
    replace?: IReplace[];
}

const CurrentLocation = ({ replace }: ICurrentLocation) => {
    const location = useLocation();
    const path = replace
        ? location.pathname
              .split('/')
              .filter((item) => item)
              .map((item) => {
                  if (
                      replace.some((replaceItem) => replaceItem.name === item)
                  ) {
                      return replace.find(
                          (replaceItem) => replaceItem.name === item
                      )!.value;
                  }

                  return item;
              })
        : location.pathname.split('/').filter((item) => item);

    return (
        <div className="mb-11">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="font-bold" href="/">
                            Home
                        </BreadcrumbLink>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    </BreadcrumbItem>
                    {path.map((pathItem, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink
                                href={`/${path.slice(0, index + 1).join('/')}`}
                            >
                                {firstCharUpper(pathItem)}
                            </BreadcrumbLink>
                            {index < path.length - 1 && (
                                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                            )}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default CurrentLocation;
