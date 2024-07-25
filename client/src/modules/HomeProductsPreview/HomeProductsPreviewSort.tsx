import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

const HomeProductsPreviewSort = () => {
    return (
        <div className="flex justify-between items-center">
            <Label htmlFor="sortProducts">Short by:</Label>
            <Select>
                <SelectTrigger className="w-[140px] border-0 text-left">
                    <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Sort by:</SelectLabel>
                        <SelectItem value="Lowest">
                            Lowest to Highest Price
                        </SelectItem>
                        <SelectItem value="Highest">
                            Highest to Lowest Price
                        </SelectItem>
                        <SelectItem value="Alphabetical">
                            Alphabetical
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default HomeProductsPreviewSort;
