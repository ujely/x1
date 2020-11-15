import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { Twemoji } from "react-emoji-render"

import PageMetadata from "../components/PageMetadata"
import Translation from "../components/Translation"
import Button from "../components/Button"
import Link from "../components/Link"
import { Mixins } from "../components/Theme"
import ActionCard from "../components/ActionCard"
import { Divider } from "../components/SharedStyledComponents"

import studioGif from "../assets/ethereum-studio.gif"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 6rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 8rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 896px;
`
const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  ${Mixins.textLevel2}
`

const Subtitle = styled.p`
  ${Mixins.textLevel4}
  color: ${(props) => props.theme.colors.text300};
  max-width: 55ch;
`

const LearnSubtitle = styled.p`
  ${Mixins.textLevel4}
  color: ${(props) => props.theme.colors.text200};
  max-width: 45ch;
`

const Gif = styled.img`
  margin-top: 4rem;
`

const Caption = styled.p`
  ${Mixins.textLevel5}
  text-align: center;
  color: #7f7f7f;
`

const H2 = styled.h2`
  margin-top: 8rem;
  margin-bottom: 4rem;
  max-width: 35ch;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.4;
  font-weight: 400;
  font-size: 1.5rem;
`

const TemplateSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 8rem;
  text-align: center;
`

const LearnSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
  text-align: center;
`

const ResourceTitle = styled.h2`
  min-width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Card = styled.div`
  margin: 4rem 1rem 0;
  flex: 1;
  min-width: 260px;
  max-width: 400px;

  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h3`
  margin: 0;
`

const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.text200};
  margin: 2rem 0 1rem;
`

const CardLink = styled.div`
  margin-top: auto;
`

const Emoji = styled(Twemoji)`
  & > img {
    width: 3em !important;
    height: 3em !important;
    margin-bottom: 0 !important;
  }
`
const TemplateCard = ({ template }) => (
  <Card>
    <Emoji svg text={template.icon} />
    <div>
      <CardTitle>
        <Translation id={template.title} />
      </CardTitle>
      <CardDescription>
        <Translation id={template.description} />
      </CardDescription>
    </div>
    <CardLink>
      <Link to={template.link.url}>
        <Translation id={template.link.text} />
      </Link>
    </CardLink>
  </Card>
)

const ActionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const ResourceCard = styled(ActionCard)`
  flex: 0 1 300px;
`

const templates = [
  {
    title: "page-build-hello-world-title",
    description: "page-build-hello-world-description",
    link: {
      url: "https://studio.ethereum.org/1",
      text: "page-build-hello-world-link-text",
    },
    icon: ":wave:",
  },
  {
    title: "page-build-coin-contract-title",
    description: "page-build-coin-contract-description",
    link: {
      url: "https://studio.ethereum.org/2",
      text: "page-build-coin-contract-link-text",
    },
    icon: ":key:",
  },
  {
    title: "page-build-crypto-pizza-title",
    description: "page-build-crypto-pizza-description",
    link: {
      url: "https://studio.ethereum.org/3",
      text: "page-build-crypto-pizza-link-text",
    },
    icon: ":pizza:",
  },
]

const BuildPage = ({ data }) => {
  const intl = useIntl()

  const resources = [
    {
      title: "CryptoZombies",
      description: "page-build-cryptozombies-description",
      to: "https://cryptozombies.io/en/solidity",
      image: data.cryptoZombie.childImageSharp.fixed,
      alt: "CryptoZombies",
    },
    {
      title: "Ethernauts",
      description: "page-build-ethernauts-description",
      to: "https://ethernaut.openzeppelin.com/",
      image: data.oz.childImageSharp.fixed,
      alt: "Open Zeppelin Ethernaut",
    },
    {
      title: "Vyper.fun",
      description: "page-build-vyperfun-description",
      to: "https://vyper.fun",
      image: data.vyperfun.childImageSharp.fixed,
      alt: "Vyper.fun",
    },
    {
      title: "Remix",
      description: "page-build-remix-description",
      to: "https://remix.ethereum.org",
      image: data.remix.childImageSharp.fixed,
      alt: "Remix",
    },
    {
      title: "ChainShot",
      description: "page-build-chainshot-description",
      to: "https://www.chainshot.com",
      image: data.chainshot.childImageSharp.fixed,
      alt: "ChainShot",
    },
    {
      title: "ConsenSys Academy",
      description: "page-build-consensys-academy-description",
      to: "https://consensys.net/academy/bootcamp/",
      image: data.consensys.childImageSharp.fixed,
      alt: "ConsenSys Academy",
    },
    {
      title: "Scaffold-eth",
      description: "page-build-scaffold-eth-description",
      to: "https://github.com/austintgriffith/scaffold-eth",
      image: data.scaffoldEth.childImageSharp.fixed,
      alt: "Scaffold-eth",
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={intl.formatMessage({ id: "page-build-meta-title" })}
        description={intl.formatMessage({ id: "page-build-meta-description" })}
        image={data.ogImage.childImageSharp.fixed.src}
      />
      <Header>
        <H1>
          <Translation id="page-build-title" />
        </H1>
        <Subtitle>
          <Translation id="page-build-subtitle" />
        </Subtitle>
        <Button to="https://studio.ethereum.org">
          <Translation id="page-build-try-button" />
        </Button>
        <Gif src={studioGif} loading="eager" alt="Ethereum Studio preview" />
        <Caption>
          <Translation id="page-build-powered-by" />{" "}
          <Link to="https://superblocks.com">Superblocks</Link>
        </Caption>
        <H2>
          <Translation id="page-build-h2" />
        </H2>
      </Header>
      <TemplateSection>
        {templates.map((template, idx) => {
          return <TemplateCard key={idx} template={template} />
        })}
      </TemplateSection>

      <ResourceTitle>
        <Translation id="page-build-more-learning-title" />
      </ResourceTitle>
      <ActionCardContainer>
        {resources.map((resource, idx) => {
          return (
            <ResourceCard
              key={idx}
              to={resource.to}
              alt={resource.alt}
              image={resource.image}
              title={resource.title}
            >
              <Translation id={resource.description} />
            </ResourceCard>
          )
        })}
      </ActionCardContainer>

      <Divider />

      <LearnSection>
        <h2>
          <Translation id="page-build-learn-more-cta" />
        </h2>
        <LearnSubtitle>
          <Translation id="page-build-learn-more-description" />
        </LearnSubtitle>
        <Button isSecondary={true} to="/learn/">
          <Translation id="learn-more" />
        </Button>
      </LearnSection>
      <p>
        <Translation id="page-build-collaboration" />
      </p>
    </Page>
  )
}

export default BuildPage

export const logoImage = graphql`
  fragment logoImage on File {
    childImageSharp {
      fixed(height: 200, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

// TODO get larger ogImage (1200px width)
export const query = graphql`
  query {
    zeroX: file(relativePath: { eq: "build/0x.png" }) {
      ...logoImage
    }
    chainshot: file(relativePath: { eq: "build/chainshot.png" }) {
      ...logoImage
    }
    consensys: file(relativePath: { eq: "build/consensys.png" }) {
      ...logoImage
    }
    cryptoZombie: file(relativePath: { eq: "build/crypto-zombie.png" }) {
      ...logoImage
    }
    oz: file(relativePath: { eq: "build/oz.png" }) {
      ...logoImage
    }
    vyperfun: file(relativePath: { eq: "build/vyperfun.png" }) {
      ...logoImage
    }
    remix: file(relativePath: { eq: "build/remix.png" }) {
      ...logoImage
    }
    scaffoldEth: file(relativePath: { eq: "build/scaffold-eth.png" }) {
      ...logoImage
    }
    ogImage: file(relativePath: { eq: "ethereum-studio-image.png" }) {
      childImageSharp {
        fixed(width: 896) {
          src
        }
      }
    }
  }
`
