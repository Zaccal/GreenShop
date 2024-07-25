import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import IconButton from '@/components/custom/IconButton/IconButton';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CiSearch } from 'react-icons/ci';

export interface IProductPreviewDialog {
    src: string;
    className?: string;
}

const ProductPreviewDialog = ({ src, className }: IProductPreviewDialog) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <IconButton className={`${className} bg-white p-2 rounded`}>
                    <CiSearch />
                </IconButton>
            </DialogTrigger>

            <DialogContent className="w-auto">
                <div className="flex items-center justify-center">
                    <AsyncImage url={`http://localhost:5000/api/${src}`} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductPreviewDialog;
