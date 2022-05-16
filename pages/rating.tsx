import type { NextPage } from 'next/types';

import { AppLayout } from '@/layouts/AppLayout';
import { Header, Table } from '@/widgets/Rating';

/** Страница c рейтингом пользователей. */
const Rating: NextPage = () => {
    return (
        <AppLayout>
            <Header />
            <Table />
        </AppLayout>
    );
};

Rating.displayName = 'pages/Rating';

export default Rating;