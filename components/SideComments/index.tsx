import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';

import { Comment } from './Comment';
import styles from './SideComments.module.scss';

/** Боковой блок с последними комментариями. */
export const SideComments = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <h3>
                Комментарии <ArrowRightIcon />
            </h3>
            <Comment />
            <Comment />
        </div>
    );
};

SideComments.displayName = 'components/SideComments';
