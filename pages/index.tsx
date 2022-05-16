import type { NextPage } from 'next/types';

import { ArticleCard } from '@/components/ArticleCard';
import { AppLayout } from '@/layouts/AppLayout';

/** Главная страница. */
const Home: NextPage = () => {
    return (
        <AppLayout>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </AppLayout>
    );
};

Home.displayName = 'pages/Home';

export default Home;
