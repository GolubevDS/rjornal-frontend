import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreHorizOutlined';

import styles from './Comment.module.scss';

/** Компонент комментария. */
export const Comment = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <div className={styles.userInfo}>
                <Avatar>Б</Avatar>
                <b>Березин И.Н.</b>
                <span>2 часа</span>
            </div>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat animi? Dolor aperiam itaque accusamus incidunt excepturi ipsa, odio corrupti.</Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton>
                <MoreIcon />
            </IconButton>
            <Menu elevation={2} open={false} keepMounted>
                <MenuItem>Удалить</MenuItem>
                <MenuItem>Редактировать</MenuItem>
            </Menu>
        </div>
    );
};

Comment.displayName = 'components/Comment';
