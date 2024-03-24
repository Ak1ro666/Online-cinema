import { FC } from 'react'
import { IBannerProps } from '../types/banner.interface'
import Image from 'next/image'
import styles from './Banner.module.scss'

export const Banner: FC<IBannerProps> = ({ image, Detail }) => {
	return <div className={styles.banner}>
		<Image
			src={image}
			draggable={false}
			layout='fill'
			className='image-like-bg object-top'
			unoptimized
			priority
			alt="banner"
		/>

		{
			Detail && <Detail />
		}
	</div>
}
