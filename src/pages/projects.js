import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
    <div>
      <h1>Мои проекты:</h1>
      <ul>{projects}</ul>
    </div>
  )
}
