import { FC, Fragment } from 'react'

import { IContentList } from '@/shared/ui/model/Content/types/content.interface'
import Link from 'next/link'
import styles from './ContentList.module.scss'

export const ContentList: FC<IContentList> = ({ name, links }) => {

	return <div className={styles.list}>
		<div className={styles.name}>{name}</div>
		<div className={styles.links}>
			{
				links.map((link, index) => <Fragment key={index}>
					<Link href={link.link}>
						{link.title}
					</Link>
					{index + 1 === links.length ? '' : ', '}
				</Fragment>)
			}
		</div>
	</div>
}
