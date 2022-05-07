import {
    Avatar,
    Box,
    Button,
    Paper,
    Tab,
    Tabs,
    Typography
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import Link from 'next/link';

import styles from './Header.module.scss';

/** Заглавный блок для страница профиля. */
export const Header = (): JSX.Element => {
    return (
        <Paper className={styles.root} elevation={0}>
            <Box display="flex" justifyContent="space-between">
                <div>
                    <Avatar
                        className={styles.avatar}
                        src="https://leonardo.osnova.io/ea5d3f52-093c-5ee6-b0fd-91167dad35b1/-/scale_crop/200x200/-/format/webp"
                        variant="rounded"
                    />
                    <Typography className={styles.fullName} variant="h4">
                        Dima Golybev
                    </Typography>
                </div>
                <div>
                    <Link href="/profile/settings">
                        <a>
                            <Button className={styles.setting} variant="contained">
                                <SettingsIcon />
                            </Button>
                        </a>
                    </Link>
                    <Button startIcon={<MessageIcon />} variant="contained" color="secondary">
                        Написать
                    </Button>
                </div>
            </Box>

            <div className={styles.stats}>
                <Typography className={styles.stats}>
                    +208
                </Typography>
                <Typography>2 подписчика</Typography>
            </div>

            <Typography>На проекте с 15 сен 2016</Typography>

            <Tabs className={styles.tabs} value={0} indicatorColor="secondary" textColor="secondary">
                <Tab label="Статьи" />
                <Tab label="Комментарии" />
                <Tab label="Закладки" />
            </Tabs>
        </Paper>
    );
};

Header.displayName = 'widgets/Profile/Header';
