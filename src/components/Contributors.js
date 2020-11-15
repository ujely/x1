import React, { useEffect, useState } from "react"
import styled from "styled-components"

import ActionCard from "./ActionCard"
import data from "../data/contributors.json"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ContributorCard = styled(ActionCard)`
  max-width: 132px;
  margin: 0.5rem;

  .action-card-image-wrapper {
    min-height: 100px;
  }
  .action-card-image {
    width: 132px;
    height: 132px;
  }
  .action-card-content {
    padding: 1rem;
    h3 {
      font-size: ${(props) => props.theme.fontSizes.m};
    }
    p {
      margin-bottom: 0;
    }
  }
`

const Contributors = () => {
  const [contributorsList, setContributorsList] = useState([])

  useEffect(() => {
    const list = data.contributors.map((item) => {
      item.randomNumber = Math.floor(Math.random() * data.contributors.length)
      return item
    })
    list.sort((a, b) => a.randomNumber - b.randomNumber)
    setContributorsList(list)
  }, [])

  return (
    <Container>
      {contributorsList.map((contributor, idx) => {
        return (
          <ContributorCard
            key={idx}
            image={contributor.avatar_url}
            to={contributor.profile}
            title={contributor.name}
          />
        )
      })}
    </Container>
  )
}

export default Contributors
