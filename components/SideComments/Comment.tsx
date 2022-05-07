import { Avatar } from '@mui/material';
import Link from 'next/link';

import styles from './SideComments.module.scss';

/** Комментарий для бокового блока. */
export const Comment = (): JSX.Element => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <Avatar style={{ marginRight: 10 }}>Г</Avatar>
                <Link href={'/profile'}>
                    <a>
                        <b>Голубев В.Л.</b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam accusamus possimus consequuntur voluptate mollitia.</p>
            <Link href={'/news'}>
                <a>
                    <span className={styles.postTitle}>Заголовок</span>
                </a>
            </Link>
        </div>
    );
};

Comment.displayName = 'components/SideComments/Comment';
