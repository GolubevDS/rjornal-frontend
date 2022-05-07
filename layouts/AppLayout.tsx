import type { ReactNode } from 'react';

import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';

/**
 * Параметры лейаута приложения.
 *
 * @prop {boolean} [contentFullWidth = false] Флаг формата отображения основного контента.
 * @prop {ReactNode} children Дочернее содержимое компонента.
 * @prop {boolean} [hideComments = false] Флаг отображения панели комментариев.
 */
interface IProps {
    contentFullWidth?: boolean;
    children: ReactNode;
    hideComments?: boolean;
}

/** Лейаут приложения. */
export const AppLayout = ({ contentFullWidth = false, children, hideComments = false }: IProps): JSX.Element => {
    return (
        <div className="wrapper">
            <LeftMenu />
            <div className={contentFullWidth ? 'content--full' : 'content'}>
                {children}
            </div>
            {!hideComments && <SideComments />}
        </div>
    );
};

AppLayout.displayName = 'layouts/AppLayout';
