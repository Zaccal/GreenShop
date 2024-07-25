import ButtonIcon from '@/components/custom/ButtonIcon/ButtonIcon';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TbLogin2 } from 'react-icons/tb';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';

const HeaderOptionAuth = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <ButtonIcon icon={<TbLogin2 />}>Login</ButtonIcon>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] py-[50px] flex justify-center">
                <div className="max-w-md w-full">
                    <Tabs defaultValue="Login" className="w-full">
                        <TabsList
                            variant="default"
                            className="grid grid-cols-2 w-full"
                        >
                            <TabsTrigger value="Login">Login</TabsTrigger>
                            <TabsTrigger value="Register">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Login" className="mt-[53px]">
                            <LoginForm />
                        </TabsContent>
                        <TabsContent value="Register" className="mt-[53px]">
                            <RegisterForm />
                        </TabsContent>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default HeaderOptionAuth;
