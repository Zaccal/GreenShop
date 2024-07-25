import IconButton from '@/components/custom/IconButton/IconButton';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { IoSearch } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

const HeaderOptionSearch = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <IconButton>
                    <IoSearch />
                </IconButton>
            </DialogTrigger>
            <DialogContent
                isClose={false}
                className="sm:max-w-[900px] px-4 py-4"
            >
                <Input
                    icon={<CiSearch className="text-xl" />}
                    placeholder="Search"
                    type="search"
                />
                <ScrollArea className="h-72"></ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default HeaderOptionSearch;
