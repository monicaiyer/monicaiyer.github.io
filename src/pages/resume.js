import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "react-bootstrap/Image"

export default () => {
  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume">
        &nbsp;
        <a href="../../Monica Iyer - Resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
          />
        </a>
      </PageTitle>
      <a href="../../Monica Iyer - Resume.pdf" target="_blank" download>
        <Image
          fluid
          src={`../../monica-iyer-resume-image.png`}
          alt={`My Resume`}
        />
      </a>
    </PageLayout>
  )
}
