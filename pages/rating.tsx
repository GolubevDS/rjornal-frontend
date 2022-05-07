import { AppLayout } from '@/layouts/AppLayout';
import { Header, Table } from '@/widgets/Rating';

/** Страница c рейтингом пользователей. */
export default function Rating(): JSX.Element {
    return (
        <AppLayout>
            <Header />
            <Table />
        </AppLayout>
    );
};

Rating.displayName = 'pages/Rating';
