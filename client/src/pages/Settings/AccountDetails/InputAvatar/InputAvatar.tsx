import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MdPhoto } from 'react-icons/md';
import styles from './InputAvatar.module.css';

const avatarUrl =
    'https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.pn';

const InputAvatar = () => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <p>Photo</p>
            <div className="flex items-center gap-6">
                <AsyncImage
                    url={avatarUrl}
                    skiletonClassname="!rounded-full !w-12 !h-12"
                    fallbackImageClassName={styles.fallback}
                    fallbackChildren={<MdPhoto />}
                    className="rounded-full w-12 h-12"
                />
                <Input type="file" className="font-bold" />
                <Button className="font-bold" variant={'ghost'}>
                    Remove
                </Button>
            </div>
        </div>
    );
};

export default InputAvatar;
