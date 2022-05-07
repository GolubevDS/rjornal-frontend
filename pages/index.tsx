import { ArticleCard } from '@/components/ArticleCard';
import { AppLayout } from '@/layouts/AppLayout';

/** Главная страница. */
export default function Home(): JSX.Element {
    return (
        <AppLayout>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </AppLayout>
    );
}

Home.displayName = 'pages/Home';
