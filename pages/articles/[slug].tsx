import { AppLayout } from '@/layouts/AppLayout';
import { Comments } from '@/widgets/Article/Comments';
import { Content } from '@/widgets/Article/Content';

/** Внутреняя страница со статьей. */
export default function Article(): JSX.Element {
    return (
        <AppLayout contentFullWidth={true} >
            <Content />
            <Comments />
        </AppLayout>
    );
};

Article.displayName = 'pages/Article';
