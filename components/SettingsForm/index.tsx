import { Button, Divider, TextField } from '@mui/material';

import styles from './SettingsForm.module.scss';

/** Форма для измения данных пользователя. */
export const SettingsForm = (): JSX.Element => {
    return (
        <form>
            <TextField
                className={styles.field}
                size="small"
                label="Никнейм"
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                className={styles.field}
                size="small"
                label="Эл. почта"
                variant="outlined"
                fullWidth
                required
            />
            <TextField size="small" label="Пароль" variant="outlined" fullWidth required />
            <Divider className={styles.divider} />
            <Button color="secondary" variant="contained">
                Сохранить изменения
            </Button>
        </form>
    );
}

SettingsForm.displayName = 'components/SettingsForm';
