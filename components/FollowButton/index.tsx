import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/AddOutlined';
import CheckIcon from '@mui/icons-material/CheckOutlined';
import { useState } from 'react';

import styles from './FollowButton.module.scss';

/** Кнопка подписки. */
export const FollowButton = (): JSX.Element => {
    const [followed, setFollowed] = useState(false);

    return (
        <Button
            className={styles.followButton}
            onClick={() => setFollowed(!followed)}
            variant="contained"
        >
            {!followed ? <AddIcon /> : <CheckIcon className={styles.checkIcon} />}
        </Button>
    );
};

FollowButton.displayName = 'components/FollowButton';
