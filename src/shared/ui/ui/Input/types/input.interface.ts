import { EditorProps } from 'draft-js';
import { InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface IInputProps {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export type TypeInputProps = IInputProps & InputHTMLAttributes<HTMLInputElement>;

export interface IInput extends TypeInputProps {}

type TypeEditorPropsInput = EditorProps & IInput;

export interface ITextEditor extends Omit<TypeEditorPropsInput, 'editorState'> {
	onChange: (...event: any[]) => void;
	value: string;
}
