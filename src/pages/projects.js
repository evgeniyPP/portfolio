import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from '../styles/projects.module.less'

export default () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            name
            slug
            technologies
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
    const { name, slug, technologies, photo } = edge.node
    return (
      <li key={slug}>
        <Link to={`/projects/${slug}`}>
          <h4>{name}</h4>
          <p>{technologies}</p>
          <img src={photo.file.url} alt={slug} />
        </Link>
      </li>
    )
  })

  return (
    <React.Fragment>
      <div className={styles.debug}>
        <div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>Мои проекты</h1>
          <ul>{projects}</ul>
        </div>
      </div>
    </React.Fragment>
  )
}
