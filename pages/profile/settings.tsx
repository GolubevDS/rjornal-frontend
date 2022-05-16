import type { NextPage } from 'next/types';

import { Content } from '@/widgets/Settings';

import { AppLayout } from '../../layouts/AppLayout';

/** Страница с настройками пользователя. */
const Settings: NextPage = () => {
    return (
        <AppLayout hideComments>
            <Content />
        </AppLayout>
    );
};

Settings.displayName = 'pages/Profile/Settings';

export default Settings;
