import React from 'react'
// import { Link, graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header'
import styles from '../styles/resume.module.less'

export default () => {
  return (
    <div className="wrapper">
      <div className={styles.content}>
        <Header>Моё резюме</Header>
      </div>
    </div>
  )
}
