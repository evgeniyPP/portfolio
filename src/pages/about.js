import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header'
import Helmet from '../components/helmet'
import WithPreloader from '../utils/withPreloader'
import styles from '../styles/skills.module.less'
import techs from '../images/techs.png'

export default () => {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          technologies
        }
      }
    }
  `)

  const technologies = query.site.siteMetadata.technologies

  return (
    <WithPreloader>
      <div className="wrapper">
        <Helmet title="Обо мне" />
        <div className={styles.content}>
          <Header>Обо мне</Header>
          <main>
            <img src={techs} alt="js techologies" />
            <p>
              Я люблю постоянно учить что-то новое, и программирование дает мне
              такую возможность. Я знаю довольно много различных технологий и
              умею применять их на практике. Позиционирую себя как
              фронтенд-разработчика, хотя имею базовые навыки бэкенда и знаю
              основы веб-дизайна.
            </p>
            <p>
              Моя основная цель сейчас – максимально быстрый рост как
              разработчика, получение коммерческого опыта и опыта работы в
              команде. Причина, почему я решил заниматься программированием
              профессионально – желание посвящать любимому делу как можно больше
              времени, насколько это возможно.
            </p>
            <div className={styles.skills}>
              <p>
                Ниже следует список технологий, с которыми мне приходилось
                работать. С некоторыми из них, такими как React или Vue, я
                работаю постоянно. Некоторые я осваиваю в настоящее время.
                Подробнее о том, как часто какие технологии я использую, можно
                узнать из моих{' '}
                <Link className={styles.link} to="/projects">
                  проектов
                </Link>
                :
              </p>
              <p className={styles.technologies}>{technologies} и др.</p>
            </div>
          </main>
        </div>
      </div>
    </WithPreloader>
  )
}
