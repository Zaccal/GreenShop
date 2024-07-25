import SettingsSidebar from '@/modules/SettingsSidebar/SettingsSidebar';
import { Route, Routes } from 'react-router-dom';
import AccountDetails from './AccountDetails/AccountDetails';
import Address from './Address/Address';
import NotExist from './NotExist/NotExist';

const Settings = () => {
    return (
        <div className="flex items-start gap-7">
            <SettingsSidebar />
            <div className="w-full">
                <Routes>
                    <Route
                        path="/account_details"
                        element={<AccountDetails />}
                    />
                    <Route path="/address" element={<Address />} />
                    <Route path="*" element={<NotExist />} />
                </Routes>
            </div>
        </div>
    );
};

export default Settings;
