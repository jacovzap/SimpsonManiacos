import Link from 'next/link'
import Searcher from './Searcher'
import { BsSearch } from 'react-icons/bs'

const Navigation = [
  {
    label: 'Temporadas',
    route: '/seasons'
  },
  {
    label: 'Película',
    route: '/movie'
  },
  {
    label: 'Cortos',
    route: '/shorts'
  }
]

const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo'>Aqui vendria el logo</div>
        <div className='navbar-menu'>
          {Navigation.map(({ label, route }) => {
            return (
              <Link className='navbar-menu-option' href={route} key={route}>
                {label}
              </Link>
            )
          })}
          <div className='navbar-searcher'>
            <Searcher />
          </div>
          <div className='navbar-searcher-hidden'>
            <BsSearch className='navbar-searcher-hidden-icon' />
            <div className='navbar-searcher-hidden-displayed'>
              <Searcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
