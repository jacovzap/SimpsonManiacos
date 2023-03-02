import { fetchSpecificEpisode } from "@/services/fetchEpisodes"


const EpisodeDescription = async ({ season, episode }) => {
  const episodes = await fetchSpecificEpisode(season, episode)
  return (
    <div className='episode-description'>
      <div className='episode-description-header'>
        <h1 className='episode-description-header-title'>{episodes.name}</h1>
        <p className='episode-description-header-season'>{season} - {episode}</p>
      </div>

      <div className='episode-description-body'>
        <p>
          {episodes.overview}
        </p>
      </div>
    </div>
  )
}

export default EpisodeDescription
