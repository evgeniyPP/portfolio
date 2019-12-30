import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
    <div>
      <h2>{name}</h2>
      <p>{technologies}</p>
      <p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink}
        </a>
      </p>
      <p>
        <a href={siteLink} target="_blank" rel="noopener noreferrer">
          {siteLink}
        </a>
      </p>
      <img src={photo.file.url} alt="project screenshot" />
      {documentToReactComponents(description.json)}
    </div>
  )
}
