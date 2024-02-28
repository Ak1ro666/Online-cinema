import { FC, MouseEvent } from 'react';

import { useActions } from '@/shared/hooks/useActions';
import { MaterialIcon } from '@/shared/ui/ui/MaterialIcon';

export const LogoutButton: FC = () => {
	const { logout } = useActions();

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		logout();
	};

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	);
};
