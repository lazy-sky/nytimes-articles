import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import { HomeIcon, SheetIcon } from 'assets/svg'

import styles from './GNB.module.scss'

const menuItems = [
  {
    text: '홈',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    text: '스크랩',
    link: '/scrap',
    icon: <SheetIcon />,
  },
]

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        {menuItems.map(({ text, link, icon }) => (
          <li key={text}>
            <NavLink to={link} className={({ isActive }) => cx(isActive && styles.isActive)}>
              {icon}
              <div>{text}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GNB
