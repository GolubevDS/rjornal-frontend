import { Content } from '@/widgets/Settings';

import { AppLayout } from '../../layouts/AppLayout';

/** Страница с настройками пользователя. */
export default function Settings(): JSX.Element {
    return (
        <AppLayout hideComments>
            <Content />
        </AppLayout>
    );
}

Settings.displayName = 'pages/Profile/Settings';
