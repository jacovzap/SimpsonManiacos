import EpisodeViewerControl from '@/components/EpisodeViewerControl'
import EpisodeDescription from '@/components/EpisodeDescription'

const EpisdePageLayout = ({ children, params }) => {
  const season = params.season_id
  const episode = params.episode_id
  return (
    <div className='episode-page'>
      {children}
      <EpisodeViewerControl season={season} episode={episode} />
      <EpisodeDescription season={season} episode={episode} />
    </div>
  )
}

export default EpisdePageLayout
