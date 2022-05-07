import IconButton from '@mui/material/IconButton';
import CommentsIcon from '@mui/icons-material/ModeCommentOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';

import styles from './ArticleActions.module.scss';

/** Компонент с возможными действиями для статьи. */
export const ArticleActions = (): JSX.Element => {
    return (
        <ul className={styles.root}>
            <li>
                <IconButton>
                    <CommentsIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </li>
        </ul>
    );
};

ArticleActions.displayName = 'components/ArticleActions';
