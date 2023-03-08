'use client'

import Link from 'next/link'
import Searcher from './Searcher'
import { BsList } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

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
  const [searcherHidden, setSearcherHidden] = useState(true)
  const [dropdownHidden, setDropdownHidden] = useState(true)

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-dropdown'>
          <div className='navbar-dropdown-icon-container'>
            <BsList
              className='navbar-dropdown-icon-element'
              style={
                dropdownHidden
                  ? {  }
                  : { backgroundColor: '#373A40', color: '#FFD43B' }
              }
              onClick={() => setDropdownHidden(!dropdownHidden)}
            />
          </div>

          <div
            className='navbar-dropdown-menu'
            style={dropdownHidden ? { display: 'none' } : { display: 'flex' }}
          >
            {Navigation.map(({ label, route }) => {
              return (
                <Link
                  style={{ textDecoration: 'none' }}
                  className='navbar-dropdown-menu-option'
                  href={route}
                  key={route}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
        <div className='navbar-logo'>SIMPSONMANIACOS</div>
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
            <BsSearch
              className='navbar-searcher-hidden-icon'
              onClick={() => setSearcherHidden(!searcherHidden)}
              style={
                searcherHidden
                  ? {  }
                  : { backgroundColor: '#373A40', color: '#FFD43B' }
              }
            />
            <div
              className='navbar-searcher-hidden-displayed'
              style={searcherHidden ? { display: 'none' } : { display: 'flex' }}
            >
              <Searcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
