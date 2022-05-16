import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { IconButton } from '@mui/material';

import styles from './Control.module.scss';

/**
 * Параметры панели управления для окна с редактиром.
 *
 * @prop {Boolean} isFullscreen Флаг отображения в полноэкранном режиме.
 * @prop {Function} onChangeFullscreen Функция переключения полноэкранного режима.
 * @prop {Function} onClose Функция для закрытия окна.
 */
interface IProps {
    isFullscreen: boolean;
    onChangeFullscreen: () => void;
    onClose: () => void;
}

/** Панель управления для окна с редактором. */
export const Control = ({
    isFullscreen,
    onChangeFullscreen,
    onClose
}: IProps): JSX.Element => {
    return (
        <div className={styles.control}>
            <IconButton onClick={onChangeFullscreen}>
                {isFullscreen
                    ? <CloseFullscreenIcon/>
                    : <OpenInFullIcon/>
                }
            </IconButton>
            <IconButton onClick={onClose}>
                <CloseIcon/>
            </IconButton>
        </div>
    );
};

Control.displayName = 'widget/Writing/Control';
