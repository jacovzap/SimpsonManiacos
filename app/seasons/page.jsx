import SeasonCard from '@/components/SeasonCard'
import seasonsInfo from '@/assets/seasons.info'

const SeasonPage = () => {
  return (
    <div className='season-page-layout'>
        <h1 className='principal-page-title'>Temporadas</h1>
        <section className='season-list-layout'>
          <div className='season-list-grid'>
            {seasonsInfo.slice(0).reverse().map((season) => {
              return (
                <SeasonCard key={season.id} season={`${season.id}`} date={season.year}/>
              )
            })}
          {/* <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard />
          <SeasonCard /> */}
          </div>
        </section>
    </div>
  )
}

export default SeasonPage
