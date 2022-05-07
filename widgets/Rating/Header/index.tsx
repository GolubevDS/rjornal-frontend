import { Paper, Tab, Tabs, Typography } from '@mui/material';

import styles from './Header.module.scss';

/** Заглавный блок для страница рейтинга. */
export const Header = (): JSX.Element => {
    return (
        <Paper className={styles.root} elevation={0}>
            <Typography className={styles.title} variant="h5">
                Рейтинг сообществ и блогов
            </Typography>
            <Typography className={styles.description}>
                Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из рейтинга по итогам
                месяца бесплатно получают Plus-аккаунт на месяц.
            </Typography>
            <Tabs className={styles.tabs} value={0} indicatorColor="primary" textColor="primary">
                <Tab label="За неделю" />
                <Tab label="За месяц" />
                <Tab label="За всё время" />
            </Tabs>
        </Paper>
    );
};

Header.displayName = 'widgets/Rating/Header';
