import SeasonCard from '@/components/SeasonCard'
import seasonsInfo from '@/assets/seasons.info'
import Link from 'next/link'

const SeasonPage = () => {
  return (
    <div className='season-page-layout'>
      <h1 className='principal-page-title'>Temporadas</h1>
      <section className='season-list-layout'>
        <div className='season-list-grid'>
          {seasonsInfo
            .slice(0)
            .reverse()
            .map(season => {
              return (
                <Link
                  href={`/seasons/${season.id}`}
                  key={season.id}
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <SeasonCard season={`${season.id}`} date={season.year} />
                </Link>
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default SeasonPage
