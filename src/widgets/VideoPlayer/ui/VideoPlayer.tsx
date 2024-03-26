import { FC, useEffect, useState } from 'react';
import styles from './VideoPlayer.module.scss';
import { IVideoPlayer } from '../types/video.interface';
import { useVideo } from '../hooks/useVideo';
import cn from 'classnames';
import { useAuth } from '@/shared/hooks/useAuth';
import { AuthPlaceholder } from '@/shared/ui/model/AuthPlaceholder';
import { MaterialIcon } from '@/shared/ui/ui/MaterialIcon';

export const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSources }) => {
	const { actions, video, videoRef } = useVideo();

	const { user } = useAuth();

	return (
		<div className={cn(styles.wrapper, { 'h-96': !user })}>
			{user ? (
				<>
					<video
						className={styles.video}
						ref={videoRef}
						src={videoSources}
						preload="metadata"
						onClick={actions.toggleVideo}
					/>

					<div className={styles.controlsHidden}>
						<div className={styles.progressBarContainer}>
							<div style={{ width: `${video.progress}%` }} className={styles.progressBar}></div>
						</div>

						<div className={styles.controls}>
							<div>
								<button onClick={actions.revert}>
									<MaterialIcon name="MdHistory" />
								</button>
								<button onClick={actions.toggleVideo}>
									<MaterialIcon name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'} />
								</button>
								<button onClick={actions.forward}>
									<MaterialIcon name="MdUpdate" />
								</button>

								<div className={styles.timeControls}>
									<p className={styles.controlsTime}>
										{Math.floor(video.currentTime / 60) + ':' + ('0' + Math.floor(video.currentTime % 60)).slice(-2)}
									</p>
									<p> / </p>
									<p className={styles.controlsTime}>
										{Math.floor(video.videoTime / 60) + ':' + ('0' + Math.floor(video.videoTime % 60)).slice(-2)}
									</p>
								</div>
							</div>
							<div>
								<button onClick={actions.fullScreen}>
									<MaterialIcon name="MdFullscreen" />
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	);
};
