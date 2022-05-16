import { Button, Input } from '@mui/material';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { Modal } from '@/components/Modal';

import { Control } from './Control';
import styles from './Writing.module.scss';

const Editor = dynamic(() => import('@/components/Editor').then(m => m.Editor), { ssr: false });

/** Вслывающее окно для создания новой статьи. */
export const Writing = (): JSX.Element => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const { writing } = router.query;

    useEffect(() => {
        setIsOpen(writing && typeof writing === 'string' ? /^\d+$/.test(writing) : false);
    }, [writing]);

    /** Обработка закрытия окна. */
    const handleClose = useCallback(async () => {
        await router.replace(router.pathname, undefined, { shallow: true });
    }, [router]);


    return (
        <Modal isFullscreen={isFullscreen} isOpen={isOpen} onClose={handleClose}>
            <Control
                isFullscreen={isFullscreen}
                onChangeFullscreen={() => setIsFullscreen(!isFullscreen)}
                onClose={handleClose}
            />
            <div className={clsx(styles.writing, isFullscreen && styles.fullscreen)}>
                <Input className={styles.titleField} placeholder="Заголовок" />
                <div className={styles.editor}>
                    <Editor />
                </div>
                <div className={styles.footer}>
                    <Button variant="contained" color="secondary">
                        Опубликовать
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

Writing.displayName = 'components/Writing';
