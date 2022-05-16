import { Box } from '@mui/material';
import type { NextPage } from 'next/types';

import { AppLayout } from '@/layouts/AppLayout';
import { Content, Header, Sidebar } from '@/widgets/Profile';

/** Страница профиля. */
const Profile: NextPage = () => {
    return (
        <AppLayout contentFullWidth hideComments>
            <Header />
            <Box display="flex" alignItems="start">
                <Content />
                <Sidebar />
            </Box>
        </AppLayout>
    );
};

Profile.displayName = 'pages/Profile';

export default Profile;
