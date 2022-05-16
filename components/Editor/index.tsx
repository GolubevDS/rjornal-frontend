import { createReactEditorJS } from 'react-editor-js';

import { tools } from './tools';
import { i18n } from './i18n';

const EditorJS = createReactEditorJS();

export const Editor = (): JSX.Element => {
    return (
        <EditorJS
            placeholder="Нажмите Tab для выбора инструмента"
            i18n={i18n}
            tools={tools}
            minHeight={0}
        />
    );
};
