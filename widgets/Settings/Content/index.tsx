import { Divider, Paper, Typography } from '@mui/material';

import { SettingsForm } from '@/components/SettingsForm';

import styles from './Content.module.scss';

/** Содержимое страницы с настройками пользователя. */
export const Content = (): JSX.Element => {
    return (
        <Paper className={styles.root}>
            <Typography variant="h6">Основные настройки</Typography>
            <Divider className={styles.divider} />
            <SettingsForm />
        </Paper>
    );
}

Content.displayName = 'widgets/Settings/Content';
