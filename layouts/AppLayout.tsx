import type { ReactNode } from 'react';

import { LeftMenu } from '@/components/LeftMenu';
import { SideComments } from '@/components/SideComments';
import clsx from 'clsx';

/**
 * Параметры лейаута приложения.
 *
 * @prop {Boolean} [contentFullWidth = false] Флаг формата отображения основного контента.
 * @prop {ReactNode} children Дочернее содержимое компонента.
 * @prop {Boolean} [hideComments = false] Флаг отображения панели комментариев.
 */
interface IProps {
    contentFullWidth?: boolean;
    children: ReactNode;
    hideComments?: boolean;
}

/** Лейаут приложения. */
export const AppLayout = ({
    contentFullWidth = false,
    children,
    hideComments = false
}: IProps): JSX.Element => {
    return (
        <div className="wrapper">
            <LeftMenu />
            <div className={clsx('content', { 'content--full': contentFullWidth })}>
                {children}
            </div>
            {!hideComments && <SideComments />}
        </div>
    );
};

AppLayout.displayName = 'layouts/AppLayout';
