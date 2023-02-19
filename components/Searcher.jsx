import { BsSearch } from "react-icons/bs";

const Searcher = () => {
  return (
    <div className="searcher-container">
      <input type='text'
        placeholder="Buscar"
        maxLength={100}
        className="searcher-input"
       />
    <BsSearch className="searcher-icon"/>
    </div>
  )
}

export default Searcher
