import { ArticleCard } from '@/components/ArticleCard';

import styles from './Content.module.scss';

/** Содержимое на странице профиля. */
export const Content = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
    );
};

Content.displayName = 'widgets/Profile/Content';
