import cn from 'classnames';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { FC, useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { ITextEditor } from '@/shared/ui/ui/Input/types/input.interface';

import styles from './TextEditor.module.scss';

export const TextEditor: FC<ITextEditor> = ({ onChange, value, placeholder, error }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [isUpdated, setIsUpdated] = useState(false);

	useEffect(() => {
		if (isUpdated) return;

		const defaultValue = value || '';
		const blockFromHtml = htmlToDraft(defaultValue);

		const contentState = ContentState.createFromBlockArray(blockFromHtml.contentBlocks, blockFromHtml.entityMap);

		const newEditorState = EditorState.createWithContent(contentState);
		setEditorState(newEditorState);
	}, [isUpdated, value]);

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true);

		setEditorState(editorState);

		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	};

	return (
		<div className={cn(styles.common, styles.editorWrapper, 'animate-fade')}>
			<label>
				<span>{placeholder}</span>

				<div className={styles.wrapper}>
					<Editor
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={{
							options: ['inline', 'list'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: ['bold', 'italic', 'underline', 'strikethrough'],
							},
							list: {
								inDropdown: false,
								options: ['unordered', 'ordered'],
							},
							textAlign: { inDropdown: true },
						}}
					/>
				</div>

				{error && <div className={styles.error}>{error.message as unknown as string}</div>}
			</label>
		</div>
	);
};
