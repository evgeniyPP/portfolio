import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header'
import Stars from '../components/stars'
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
    <div className="wrapper">
      <div className={styles.content}>
        <Header>Мой стек</Header>
        <div className={styles.description}>
          <p>
            Что я еще люблю в программировании – это возможность постоянно учить
            что-то новое. Я знаю довольно много различных технологий и умею
            применять их на практике. Несмотря на то, что я на данный момент
            больше осведомлен во фронтенде, также интересуюсь бэкенд-частью. До
            Middle-уровня мне не хватает знания стандартных шаблонов разработки,
            я могу перемудрить там, где что-то можно сделать "в лоб". У меня нет
            опыта работы в команде разработчиков.
          </p>
          <p>
            Поэтому я на данный момент оценил бы себя как Upper-junior Front-end
            разработчика.
          </p>
          <p>
            Но моя краткосрочная цель – устроиться в компанию и за полгода
            упорной работы стать полноценным членов команды уровня Middle.
          </p>
        </div>
        <ul className={styles.skills}>
          {skills}
          <li className={styles.other}>
            А также: <span>{techologies}</span> и многое другое
          </li>
        </ul>
      </div>
    </div>
  )
}
