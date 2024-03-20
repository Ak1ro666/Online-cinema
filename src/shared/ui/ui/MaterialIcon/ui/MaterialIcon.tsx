import * as MaterialIcons from 'react-icons/md';

import { FC } from 'react';
import { TypeMaterialIconName } from '../types/icons.type';
import { useRenderClient } from '@/shared/hooks/useRenderClient'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];

	useRenderClient()

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};
