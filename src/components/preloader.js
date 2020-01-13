import React from 'react'
import styles from '../styles/preloader.module.less'

export default () => (
  <div className="wrapper">
    <div className={styles.content}>
      <div className={styles.preloader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
)
