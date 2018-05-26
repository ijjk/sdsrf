import React, { Component } from 'react'
import Link from 'gatsby-link'
import logo from '../../imgs/header/logo.png'
import style from './headerStyle'
import toggleScroll from '../../util/toggleScroll'

const navItems = [
  'Home',
  'Projects',
  'Blog',
  'Resources',
  'SDS',
  'Membership',
  'Donate',
]

class Header extends Component {
  state = {
    show: false,
  }

  show = e => {
    const show = Boolean(e.target.checked)
    if (this.state.show === show) return
    this.setState({ show })
    toggleScroll(show)
  }

  render() {
    return (
      <header css={style}>
        <Link to="/" onClick={this.show}>
          <img src={logo} alt="SDS Research fund logo" />
        </Link>

        <input
          type="checkbox"
          id="expand"
          checked={this.state.show}
          onChange={this.show}
        />
        <label htmlFor="expand">
          <div className="burger">{[1, 2, 3].map(i => <div key={i} />)}</div>
        </label>

        <ul>
          <li className="fill" />
          {navItems.map(item => {
            const isHome = item === 'Home'
            return (
              <li key={item} css={style.li}>
                <Link
                  to={isHome ? '/' : '/' + item.toLowerCase()}
                  activeClassName="active"
                  onClick={this.show}
                  exact={isHome}
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
      </header>
    )
  }
}

export default Header
