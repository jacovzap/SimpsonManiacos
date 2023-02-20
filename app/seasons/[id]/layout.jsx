import SeasonSelector from '@/components/SeasonSelector'
import EpisodeList from '@/components/EpisodeList'

const SelectedSeasonPage = ({children, params}) => {
    const id = params.id
  return (
    <div className='selected-season-page-container'>
      <section className='selected-season-page-principal-section'>
        {children}
        <div style={{marginTop: '25px'}}>
          <SeasonSelector season={id}/>
          <EpisodeList season={id}/>
        </div>
      </section>
      <section className='selected-season-page-secondary-section'></section>
    </div>
  )
}

export default SelectedSeasonPage
