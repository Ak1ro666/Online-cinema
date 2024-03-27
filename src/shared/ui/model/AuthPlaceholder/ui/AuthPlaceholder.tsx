import { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'
import { AuthButton } from '@/shared/ui/model/AuthButton'

export const AuthPlaceholder: FC<{ slug: string, title: string }> = ({ slug, title }) => {
	return <div className={styles.placeholder}>
		<div>
			<div>{title}</div>
			<AuthButton slug={slug} />
		</div>
	</div>
}