import Image from 'next/image'
import Link from 'next/link'
import { BsPlayFill } from 'react-icons/bs'

import { fetchEpisodes } from '../services/fetchEpisodes' 

const EpisodeList = async ({ season }) => {
  const episodes =  await fetchEpisodes(season)
  return (
    <div className='episode-list'>
      {episodes.episodes.map(episode => {
        return (
          <Link
            href={`/seasons/${season}/episode/${episode.episode_number}`}
            key={episode.episode_number}
            style={{ textDecoration: 'none' }}
          >
            <div className='episode-list-element'>
              <div className='episode-list-element-image'>
                <Image
                  className='episode-list-element-image-img'
                  src={`https://image.tmdb.org/t/p/w154${episode.still_path}`}
                  alt='image'
                  width={100}
                  height={100}
                  priority
                  unoptimized
                />
                <div className='episode-list-element-image-hover'>
                  <BsPlayFill />
                </div>
              </div>
              <p className='episode-list-element-number'>
                {season} - {episode.episode_number}
              </p>
              <p className='episode-list-element-title' title={episode.name}>
                {episode.name}
              </p>{' '}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default EpisodeList
