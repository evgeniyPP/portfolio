import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/header.module.less'

export default ({ children, to }) => (
  <Link to={to || '/'} className={styles.title}>
    <FontAwesomeIcon className={styles.icon} icon={faCaretLeft} />
    <h1>{children}</h1>
  </Link>
)
