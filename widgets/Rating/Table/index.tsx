import { 
    Paper,
    Table as MaterialTable,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';

import { FollowButton } from '@/components/FollowButton';

import styles from './Table.module.scss';

/** Таблица для страница рейтинга. */
export const Table = (): JSX.Element => {
    return (
        <Paper elevation={0}>
            <MaterialTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Имя пользователя</TableCell>
                        <TableCell>Рейтинг</TableCell>
                        <TableCell align="right" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <span className={styles.userRating}>1</span>
                            Березин И.Н.
                        </TableCell>
                        <TableCell>540</TableCell>
                        <TableCell align="right">
                            <FollowButton />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </MaterialTable>
        </Paper>
    );
};

Table.displayName = 'widgets/Rating/Table';
