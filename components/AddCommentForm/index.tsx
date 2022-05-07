import { Box, Button, Input } from '@mui/material';

import styles from './AddCommentForm.module.scss';

/** Форма для добавления комментария. */
export const AddCommentForm = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <Input
                className={styles.fieldRoot}
                minRows={1}
                placeholder="Написать комментарий..."
                fullWidth
                multiline
            />
            <Box display="flex" justifyContent="flex-end">
                <Button color="secondary" variant="contained">
                    Опубликовать
                </Button>
            </Box>
        </div>
    );
};

AddCommentForm.displayName = 'comonents/AddCommentForm';
