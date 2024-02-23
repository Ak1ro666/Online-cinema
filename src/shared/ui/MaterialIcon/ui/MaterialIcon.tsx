import * as MaterialIcons from 'react-icons/md';

import { FC } from 'react';
import { TypeMaterialIconName } from '../types/icons.type';

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};
