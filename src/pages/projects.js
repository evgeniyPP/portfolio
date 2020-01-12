import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header'
import Helmet from '../components/helmet'
import styles from '../styles/projects.module.less'

export default () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: position, order: ASC }) {
        edges {
          node {
            name
            slug
            shortDescription
            technologies
            githubLink
            siteLink
            photo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const projects = query.allContentfulProject.edges.map(edge => {
    const {
      name,
      slug,
      shortDescription,
      technologies,
      githubLink,
      siteLink,
      photo
    } = edge.node
    return (
      <li className={styles.project} key={slug}>
        <div className={styles.project__text}>
          <Link to={`/projects/${slug}`}>
            <h2 className={styles.project__title}>{name}</h2>
            <p className={styles.project__shortDesc}>{shortDescription}</p>
            <p>{technologies}</p>
          </Link>
          <div className={styles.links}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              Сайт
            </a>
          </div>
        </div>
        <Link className={styles.project__image} to={`/projects/${slug}`}>
          <img src={photo.file.url} alt={slug} />
        </Link>
      </li>
    )
  })

  return (
    <div className="wrapper">
      <Helmet title="Проекты" />
      <div className={styles.content}>
        <Header>Мои проекты</Header>
        <ul className={styles.projects}>{projects}</ul>
      </div>
    </div>
  )
}
