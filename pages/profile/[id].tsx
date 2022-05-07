import { Box } from '@mui/material';

import { AppLayout } from '@/layouts/AppLayout';
import { Content, Header, Sidebar } from '@/widgets/Profile';

/** Страница профиля. */
export default function Profile(): JSX.Element {
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
