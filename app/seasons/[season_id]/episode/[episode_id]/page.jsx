import EpisodeViewer from '@/components/EpisodeViewer'
import EpisodeDescription from '@/components/EpisodeDescription'

const EpisodeSelectedPage = ({ params }) => {
  const season = params.season_id
  const episode = params.episode_id
  return (
    <div className='episode-page'>
      <EpisodeViewer season={season} episode={episode} />
      <EpisodeDescription season={season} episode={episode} />
    </div>
  )
}

export default EpisodeSelectedPage
