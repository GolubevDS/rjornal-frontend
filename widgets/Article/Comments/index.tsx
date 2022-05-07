import { Paper, Typography } from '@mui/material';

import { AddCommentForm } from '@/components/AddCommentForm';
import { Comment } from '@/components/Comment';

import styles from './Comments.module.scss';

/** Комментарии для статьи. */
export const Comments = (): JSX.Element => {
    return (
        <Paper elevation={0} className={styles.root}>
            <div className="container">
                <Typography variant="h6" className={styles.title}>42 комментария</Typography>
                <AddCommentForm />
                <Comment />
            </div>
        </Paper>
    );
};

Comments.displayName = 'widgets/Article/Comments';
