import { FC } from 'react'

import styles from './AuthButton.module.scss'
import Link from 'next/link'
import { getOneMovieUrl } from '@/shared/config/url.config'

export const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return <Link href={`/auth?redirect=${getOneMovieUrl(slug)}`} className={styles.btn}>Sign in</Link>
}
