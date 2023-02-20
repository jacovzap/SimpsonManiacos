import Image from 'next/image'
import seasonsInfo from '@/assets/seasons.info'

const SelectedSeasonPage = ({ params }) => {
  const season = params.id
  const seasonInfo = seasonsInfo[season - 1]  

  return (
    <div className='selected-season-information'>
      <div className='selected-season-information-image'>
        <Image
          className='selected-season-image'
          src={`/seasons_images/${season}.jpg`}
          alt={'image'}
          width={100}
          height={100}
          unoptimized
        ></Image>
      </div>
      <div className='selected-season-information-description'>
        <h1 className='principal-selected-season-title'>
          Los Simpsons (Temporada {seasonInfo.id})
        </h1>
        <p className='principal-selected-season-year'>{seasonInfo.year}</p>
        {/* <span className='principal-selected-season-star'>☆</span> */}
        <div className='principal-selected-season-rating'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35px'
            height='35px'
            id='iconContext-star'
            viewBox='0 0 24 24'
            fill='#FFC300'
            role='presentation'
          >
            <path d='M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'></path>
          </svg>
          <p className='principal-selected-season-rating-text'>{seasonInfo.rating}/10</p>
          <div className='principal-selected-season-rating-imdb'>
            <p className='principal-selected-season-rating-imdb-text'>IMDb</p>
        </div>
        </div>
  
      </div>
    </div>
  )
}

export default SelectedSeasonPage
