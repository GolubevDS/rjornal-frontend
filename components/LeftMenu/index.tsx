import { Button } from '@mui/material';
import FireIcon from '@mui/icons-material/WhatshotOutlined';
import MessageIcon from '@mui/icons-material/SmsOutlined';
import TrendingIcon from '@mui/icons-material/TrendingUpOutlined';
import ListIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './LeftMenu.module.scss';

const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
    { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
    { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];

/** Боковая навигационный блок. */
export const LeftMenu = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.leftMenu}>
            <ul>
                {menu.map((obj) => (
                    <li key={obj.path}>
                        <Link href={obj.path}>
                            <a>
                                <Button
                                    startIcon={obj.icon}
                                    variant={router.asPath === obj.path ? 'contained' : 'text'}
                                >
                                    {obj.text}
                                </Button>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

LeftMenu.displayName = 'components/LeftMenu';
