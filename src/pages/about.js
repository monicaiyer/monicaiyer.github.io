import React, { useContext } from "react"
import { PageLayout } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      {author && (
        <>
          &nbsp;-<i>{author}</i>
        </>
      )}
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    gamesList,
    findsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))
  const gameLinks = gamesList.map(game => MediaLink(game))
  const findLinks = findsList.map(finds => MediaLink(finds))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <Container>
        <Image
          roundedCircle
          width="160"
          height="160"
          src={`../../icons/me-${toString()}.gif`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>|</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <a
              href="https://www.dictionary.com/e/fictional-characters/padawan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              padawan
            </a>
            &nbsp;
            <b>{occupation}</b> and a recent graduate in Statistics and Cognitive Science
            from University of Waterloo. I have a deep interest in data transparency and am 
            currently exploring projects on DC Facial Recognition Comics, Advanced SQL 
            Query Optimization and writing mini guides on pursuing Mental Health Wellness as 
            a student and beyond!
          </p>

          <p className="i-5">
            Check out my <Link to="/projects">projects</Link>{" "}
            and{" "}
            {/* Comment in blog here */}
            <a
              href="https://monicaiyer.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              poetry
            </a>{" "}
            to see what I've been up to!
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>looking for full-time opportunities in Data Science and Analytics</b>! If
                  you like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:monicaiyer@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />

          <div className="text-left row">
            <div className="col-6">
              <h5 className="p-0 pl-3 ml-4 watch-list-title pt-4">
                Some of my favourite reads:
              </h5>
              <ul className="watch-list">{bookLinks}</ul>
            </div>
            <div className="col-6">
              <h5 className="p-0 pl-3 ml-4 watch-list-title pt-4">
                Binge-worthy shows:
              </h5>
              <ul className="watch-list">{showLinks}</ul>
            </div>
            <div className="col-6">
              <h5 className="p-0 pl-3 ml-4 watch-list-title pt-4">
                Games that changed the game:
              </h5>
              <ul className="watch-list">{gameLinks}</ul>
            </div>
            <div className="col-6">
              <h5 className="p-0 pl-3 ml-4 watch-list-title pt-4">
                Late night munchies:
              </h5>
              <ul className="watch-list">{findLinks}</ul>
            </div>
          </div>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
        gamesList {
          title
          author
          link
        }
        findsList {
          title
          link
        }
      }
    }
  }
`
