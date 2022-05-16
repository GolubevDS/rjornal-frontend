import type { NextPage } from 'next/types';

import { AppLayout } from '@/layouts/AppLayout';
import { Comments } from '@/widgets/Article/Comments';
import { Content } from '@/widgets/Article/Content';

/** Внутреняя страница со статьей. */
const Article: NextPage = () => {
    return (
        <AppLayout contentFullWidth={true} >
            <Content />
            <Comments />
        </AppLayout>
    );
};

Article.displayName = 'pages/Article';

export default Article;