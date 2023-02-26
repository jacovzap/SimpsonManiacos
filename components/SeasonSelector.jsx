'use client'
//import an api of all episodes of simpsons 

import { useState } from 'react'
import Link from 'next/link'

import seasonsInfo from '@/assets/seasons.info'

import { BsCaretDownFill } from 'react-icons/bs'

const SeasonSelector = ({ season }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const invertedList = seasonsInfo.slice(0).reverse()
  return (
    <div className='season-selector'>
      <button
        className='season-selector-button'
        onClick={() => {
          setIsSelectOpen(!isSelectOpen)
        }}
      >
        Temporada {season}
        <BsCaretDownFill />
      </button>
      <div
        className='season-selector-select'
        style={
          isSelectOpen ? { visibility: 'visible' } : { visibility: 'hidden'}
        }
        onClick={() => {
          setIsSelectOpen(!isSelectOpen)
        }}
      >
        {invertedList.map(season => {
          return (
            <Link
              key={`season-${season.id}`}
              href={`/seasons/${season.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className='season-selector-select-option'>
                Temporada {season.id}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SeasonSelector
