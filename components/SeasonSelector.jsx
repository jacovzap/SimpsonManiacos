import { BsCaretDownFill } from "react-icons/bs";

const SeasonSelector = ({ season }) => {
  return (
    <div>
      <button className='season-selector-button'>
        Temporada {season}
        <BsCaretDownFill/>
        </button>
      <div></div>
    </div>
  )
}

export default SeasonSelector
