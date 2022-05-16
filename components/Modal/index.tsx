import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './Modal.module.scss';

/**
 * Параметры модального окна.
 *
 * @prop {ReactNode} children Содержимое внутри модального окна.
 * @prop {Boolean} isFullscreen Флаг отображения в полный экрана.
 * @prop {Boolean} isOpen Флаг отображения модального окна.
 * @prop {Function} onClose Функция для закрытия модального окна.
 */
interface IProps {
    children: ReactNode;
    isFullscreen: boolean;
    isOpen: boolean;
    onClose: () => void;
}

/** Модальное окно. */
export const Modal = ({ children, isFullscreen, isOpen, onClose }: IProps): JSX.Element => {
    return isOpen && (
        <div
            className={clsx(
                styles.overlay,
                isFullscreen && styles.fullscreen
            )}
            onClick={onClose}
        >
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

Modal.displayName = 'components/Modal';
