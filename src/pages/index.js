import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Tooltip, OverlayTrigger } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  var ReactRotatingText = require("react-rotating-text")
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        {unemployed && (
          <ReactRotatingText
            className={dark ? `text-white` : `text-dark`}
            items={[
              `Hey! I'm looking for more data to explore :)`,
              'The Light-Mode Gods have saved you - click on the sun!',
              'Also looking for roles in Data Science and Analytics',
              'Currently building a Facial Recognition project with Open CV',
              'Lets work on a project together!',
              'In the works - posts on pursuing mental health wellness',
              'Like what you see? Reach out to me!',
            ]}
          />
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "6rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Amateur poet by night` : `Rebel scum by night`}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com/m2iyer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OverlayTrigger overlay={<Tooltip>@m2iyer</Tooltip>}>
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="icons github"
              />
            </OverlayTrigger>
          </a>
          <a
            href="https://www.linkedin.com/in/monica-iyer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OverlayTrigger overlay={<Tooltip>in/monica-iyer</Tooltip>}>
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="icons linkedin"
              />
            </OverlayTrigger>
          </a>
          <a
            href="https://www.kaggle.com/monicaiyer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OverlayTrigger overlay={<Tooltip>@m2iyer</Tooltip>}>
              <FontAwesomeIcon icon={["fab", "kaggle"]} className="icons ka" />
            </OverlayTrigger>
          </a>
          <a
            href="mailto:monicaiyer101@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OverlayTrigger overlay={<Tooltip>monicaiyer@gmail.com</Tooltip>}>
              <FontAwesomeIcon
                icon={["fas", "envelope"]}
                className="icons mail"
              />
            </OverlayTrigger>
          </a>
          <OverlayTrigger overlay={<Tooltip>That's my resume!</Tooltip>}>
            <a
              href="../../Monica Iyer - Resume.pdf"
              title="Monica Iyer Resume"
              target="_blank"
              download
            >
              <FontAwesomeIcon
                icon={["fas", "file-alt"]}
                className="icons file"
                title="That's my Resume"
              />
            </a>
          </OverlayTrigger>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
