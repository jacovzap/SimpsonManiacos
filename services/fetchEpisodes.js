
export const fetchEpisodes = async season => {
    return fetch(
      `https://api.themoviedb.org/3/tv/456-the-simpsons/season/${season}?api_key=11d3e5d68a0acbbd20499b43994c7817&language=es-MX`
    ).then(response => response.json())
  }


export const fetchSpecificEpisode= async (season, episode) => {
  return fetch(
`https://api.themoviedb.org/3/tv/456-the-simpson/season/${season}/episode/${episode}?api_key=11d3e5d68a0acbbd20499b43994c7817&language=es-MX`  ).then(response => response.json())
}


