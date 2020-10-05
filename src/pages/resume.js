import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { SEO, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"

export default ({ data }) => {
  const history = data.allMarkdownRemark.edges || []
  const images = data.allFile.edges || []
  const imageMap = Utils.getImageMap(images, /\/[work].*\/|$/)
  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume">
        &nbsp;
        <a href="../../resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
          />
        </a>
      </PageTitle>

    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___startDate], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            location
            position
            tags
            startDate(formatString: "MMMM")
            endDate(formatString: "MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/company/" }
        relativeDirectory: { regex: "/content/work/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
