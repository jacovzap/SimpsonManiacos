import Link from 'next/link'
import { BiSkipPrevious } from 'react-icons/bi'
import { BiSkipNext } from 'react-icons/bi'

import seasonsInfo from '@/assets/seasons.info'

const returnPreviousEpisodeAndSeason = (season, episode) => {
  const previousEpisode = episode - 1
  const previousSeason = season

  if (season - 1 === 0) return { previousEpisode: 1, previousSeason: 1 }

  if (previousEpisode === 0) {
    const previousSeason = season - 1
    const previousEpisode = seasonsInfo[previousSeason - 1].episodes
    return { previousEpisode, previousSeason }
  }

  return { previousEpisode, previousSeason }
}

const returnNextEpisodeAndSeason = (season, episode) => {
  const nextEpisode = episode + 1
  const nextSeason = season

  if (nextEpisode > seasonsInfo[season - 1].episodes) {
    const nextSeason = season + 1
    const nextEpisode = 1
    return { nextEpisode, nextSeason }
  }

  return { nextEpisode, nextSeason }
}

const EpisodeViewerControl = ({episode, season}) => {
    const { previousEpisode, previousSeason } = returnPreviousEpisodeAndSeason(
      Number(season),
      Number(episode)
    )
    const { nextEpisode, nextSeason } = returnNextEpisodeAndSeason(
      Number(season),
      Number(episode)
    )
  return (
    <div className='episode-viewer'>
      <div className='episode-viewer-control'>
        <Link
          href={`/seasons/${previousSeason}/episode/${previousEpisode}`}
          style={{ textDecoration: 'none' }}
        >
          <div className='episode-viewer-control-previous'>
            <div className='episode-viewer-control-previous-icon'>
              <BiSkipPrevious />
            </div>
            <p className='episode-viewer-control-previous-text'>
              Episodio anterior
            </p>
          </div>
        </Link>
        <Link
          href={`/seasons/${nextSeason}/episode/${nextEpisode}`}
          style={{ textDecoration: 'none' }}
        >
          <div className='episode-viewer-control-next'>
            <p className='episode-viewer-control-next-text'>
              Episodio siguiente
            </p>
            <div className='episode-viewer-control-next-icon'>
              <BiSkipNext />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default EpisodeViewerControl
