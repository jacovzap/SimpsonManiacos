// import '../assets/seasons_images/'
import Image from 'next/image'
// import imagen from '../public/seasons_images/1.jpg'

const SeasonCard = ({ season, date }) => {
  return (
    <div className='season-card-container'>
      <div className='season-card-image'>
        <Image
          className='season-card-image-img'
          src={`/seasons_images/${season}.jpg`}
          width={100}
          height={100}
          alt='img'
          unoptimized
        />
      </div>
      <div className='season-card-description'>
        <p className='season-card-description-title'>Temporada {season}</p>
        <p className='season-card-description-subtitle'>{date}</p>
      </div>
    </div>
  )
}

export default SeasonCard
