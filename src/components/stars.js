import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/stars.module.less'

export default ({ level }) => {
  const stars = []
  for (let i = 0; i < level; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`solid-${i}`}
        icon={solidStar}
        className={styles.star}
      />
    )
  }
  for (let i = 0; i < 10 - level; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`reg-${i}`}
        icon={regStar}
        className={styles.star}
      />
    )
  }

  return <div>{stars}</div>
}
