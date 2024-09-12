import * as MaterialIcons from 'react-icons/md';
import { FC, useState, useEffect } from 'react';
import { TypeMaterialIconName } from '../types/icons.type';

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];

	const [isRenderClient, setIsRenderClient] = useState<boolean>(true);

	useEffect(() => {
		setIsRenderClient(false);
	}, []);

	if (isRenderClient) return null;

	return (
		<>
			{IconComponent && <IconComponent />}
			{!IconComponent && <MaterialIcons.MdDragIndicator />}
		</>
	);
};
