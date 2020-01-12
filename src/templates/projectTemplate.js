import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Header from '../components/header'
import Helmet from '../components/helmet'
import styles from '../styles/projectTemplate.module.less'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      technologies
      githubLink
      siteLink
      photo {
        file {
          url
        }
      }
      description {
        json
      }
    }
  }
`

export default props => {
  const {
    name,
    technologies,
    githubLink,
    siteLink,
    photo,
    description
  } = props.data.contentfulProject

  return (
    <div className="wrapper">
      <Helmet title={name} />
      <div className={styles.content}>
        <Header to="/projects">{name}</Header>
        <div className={styles.project}>
          <Link className={styles.technologies} to="/skills">
            {technologies}
          </Link>
          <div className={styles.links}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              Сайт
            </a>
          </div>
          <a
            className={styles.image}
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={photo.file.url} alt="project screenshot" />
          </a>
          <div className={styles.description}>
            {documentToReactComponents(description.json)}
          </div>
        </div>
      </div>
    </div>
  )
}
