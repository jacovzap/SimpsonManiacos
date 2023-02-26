const EpisodeDescription = ({ season, episode }) => {
  return (
    <div className='episode-description'>
      <div className='episode-description-header'>
        <h1 className='episode-description-header-title'>Rata de cementerio</h1>
        <p className='episode-description-header-season'>32 - 2</p>
      </div>

      <div className='episode-description-body'>
        <p>
          Mr. Burns discovers that his employees do not like him very much,
          because of his pompous ways. Smithers decides to helps a distraught
          Mr. Burns go undercover as a man named Fred Kranepool. Initially
          determined to punish disloyal employees, the plant employees grow to
          like, causing Mr. Burns to want to adopt that personality
          permanently. Smithers is forced to expose his boss, causing Mr. Burns
          to revert to his former tyrannical personality.
        </p>
      </div>
    </div>
  )
}

export default EpisodeDescription
