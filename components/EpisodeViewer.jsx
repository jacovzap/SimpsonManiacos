
import episodesVideo from '@/assets/episodes.video'

const EpisodeViewer = ({ season, episode }) => {

  return (
    <div className='episode-viewer'>
      <div className='episode-viewer-video'>
      <iframe width="720" height="405" src={episodesVideo[season - 1].episodes[episode - 1].video} frameborder="0" allowfullscreen="true"></iframe>
      {/* <iframe src="https://sbbrisk.com/e/8s1z8893wbg7.html" width='640' height='360' allowfullscreen='true'></iframe> */}
      </div>
    </div>
  )
}

export default EpisodeViewer
