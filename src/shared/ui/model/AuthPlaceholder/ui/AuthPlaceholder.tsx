import { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'
import { AuthButton } from '@/shared/ui/model/AuthButton'

export const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return <div className={styles.placeholder}>
		<div>
			<div>You must be logged in to start watching</div>
			<AuthButton slug={slug} />
		</div>
	</div>
}