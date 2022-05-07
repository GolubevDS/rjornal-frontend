import { Avatar, Paper } from '@mui/material';

import styles from './Sidebar.module.scss';

/** Боковой блок на странице пользователя. */
export const Sidebar = (): JSX.Element => {
    return (
        <Paper className={styles.root} elevation={0}>
            <b>Подписчики</b>
            <div className={styles.list}>
                <Avatar>Г</Avatar>
                <Avatar>Г</Avatar>
            </div>
        </Paper>
    );
};

Sidebar.displayName = 'widgets/Profile/Sidebar';
