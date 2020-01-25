import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header'
import Helmet from '../components/helmet'
import Stars from '../components/stars'
import WithPreloader from '../utils/withPreloader'
import styles from '../styles/skills.module.less'

export default () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulSkills(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            technology
            level
          }
        }
      }
      site {
        siteMetadata {
          techologies
        }
      }
    }
  `)

  const skills = query.allContentfulSkills.edges.map(edge => {
    const { technology, level } = edge.node
    return (
      <li key={technology} className={styles.skill}>
        <h3>{technology}</h3>
        <div className={styles.level}>
          <Stars className={styles.stars} level={level} />
          <span>{level}</span>
        </div>
      </li>
    )
  })

  const techologies = query.site.siteMetadata.techologies

  return (
    <WithPreloader>
      <div className="wrapper">
        <Helmet title="Стек" />
        <div className={styles.content}>
          <Header>Мой стек</Header>
          <div className={styles.description}>
            <p>
              Что я еще люблю в программировании – это возможность постоянно
              учить что-то новое. Я знаю довольно много различных технологий и
              умею применять их на практике. Позиционирую себя как
              фронтенд-разработчика, хотя имею базовые навыки бэкенда.
            </p>
            <p>
              Моя основная цель сейчас – максимально быстрый рост как
              разработчика, получение коммерческого опыта и опыта работы в
              команде. Причина, почему я решил заниматься программированием
              профессионально – желание посвящать любимому делу как можно больше
              времени, насколько это возможно.
            </p>
          </div>
          <ul className={styles.skills}>
            {skills}
            <li className={styles.other}>
              А также:
              <br /> <span>{techologies}</span> и др.
            </li>
          </ul>
        </div>
      </div>
    </WithPreloader>
  )
}
