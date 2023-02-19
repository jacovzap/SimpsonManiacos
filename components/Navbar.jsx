import Searcher from "./Searcher"


const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo'>Aqui vendria el logo</div>
        <div className='navbar-menu'>
          <div className="navbar-menu-option">Temporadas</div>
          <div className="navbar-menu-option">Película</div>
          <div className="navbar-menu-option">Cortos</div>
          <div className='navbar-searcher'>
            <Searcher/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
