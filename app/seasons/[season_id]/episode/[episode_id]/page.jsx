import EpisodeViewer from '@/components/EpisodeViewer'

const EpisodeSelectedPage = ({ params }) => {
  const season = params.season_id
  const episode = params.episode_id
  return (
    <>
      <EpisodeViewer season={season} episode={episode} />
    </>
  )
}

export default EpisodeSelectedPage
