import { Avatar, Box, Button, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/static/logo.svg';

import styles from './Header.module.scss';

/** Шапка сайта. */
export const Header = (): JSX.Element => {
    return (
        <Paper className={styles.root} elevation={0}>
            <Box display="flex" alignItems="center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <a className={styles.logo} >
                        <Image height={35} width={40} src={Logo} alt="Logo" />
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder="Поиск" />
                </div>

                <Link href="/write">
                    <a>
                        <Button variant="contained" className={styles.penButton}>
                            Новая запись
                        </Button>
                    </a>
                </Link>
            </Box>
            <Box display="flex" alignItems="center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Link href="/profile/1">
                    <a>
                        <Avatar
                            className={styles.avatar}
                            src="https://leonardo.osnova.io/ea5d3f52-093c-5ee6-b0fd-91167dad35b1/-/scale_crop/200x200/-/format/webp"
                            variant="rounded"
                        />
                    </a>
                </Link>
            </Box>
        </Paper>
    );
};

Header.displayName = 'components/Header';
