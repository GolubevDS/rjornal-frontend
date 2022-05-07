import { Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { ArticleActions } from '@/components/ArticleActions';

import styles from './ArticleCard.module.scss';

/** Карточка статьи. */
export const ArticleCard = (): JSX.Element => {
    return (
        <Paper elevation={0} className={styles.root}>
            <div className={styles.content}>
                <Typography className={styles.title} variant="h5">
                    <Link href={'/articles/1'}>
                        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eum quas placeat sint facere ipsum?</a>
                    </Link>
                </Typography>
                <Typography className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rem? Veritatis aliquam minima molestiae reprehenderit dignissimos dicta ipsam eaque nobis possimus quis magni, aspernatur optio repellat nisi? Placeat, culpa at.</Typography>
            </div>
            <Image
                src="https://leonardo.osnova.io/f9794d2a-744d-56a5-a745-82a54f24e15a/-/preview/1300/-/format/webp/"
                height={400}
                width={640}
                alt="Картинка"
            />
            <ArticleActions />
        </Paper>
    );
};

ArticleCard.displayName = 'components/ArticleCard';
