'use client'
import { useState } from 'react'

import Link from 'next/link'
import seasonsInfo from '@/assets/seasons.info'

import { BiSkipPrevious } from 'react-icons/bi'
import { BiSkipNext } from 'react-icons/bi'

const returNumberOfEpisodeAtChangeOfSeason = (season, episode) => {}

const EpisodeViewer = ({ season, episode }) => {
  const numberOfEpisodes = seasonsInfo[season].episodes
  let newEpisode = 0

    if (episode === numberOfEpisodes) {
      newEpisode = 1
    } else {
       newEpisode++
    }

    console.log(newEpisode)
  

  return (
    <div className='episode-viewer'>
      <div className='episode-viewer-video'></div>
      <div className='episode-viewer-control'>
        <Link href={`/seasons/${season}/episode/${newEpisode}`}>
          <div className='episode-viewer-control-previous'>
            <div className='episode-viewer-control-previous-icon'>
              <BiSkipPrevious />
            </div>
            <p className='episode-viewer-control-previous-text'>
              Episodio anterior
            </p>
          </div>
        </Link>
        <Link href={`/seasons/${season}/episode/${newEpisode}`}>
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

export default EpisodeViewer
