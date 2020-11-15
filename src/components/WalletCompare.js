import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"

import Translation from "../components/Translation"
import Button from "./Button"
import Tag from "./Tag"
import SelectableCard from "./SelectableCard"
import WalletCard from "./WalletCard"
import { Content, CardContainer } from "./SharedStyledComponents"
import Link from "./Link"

import { getLocaleTimestamp } from "../utils/time"
import { trackCustomEvent } from "../utils/matomo"

const Container = styled.div`
  margin-top: 2rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text200};
`

const GradientContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.cardGradient};
  padding: 3rem 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.tableItemBoxShadow};
  border-bottom: 1px solid ${(props) => props.theme.colors.tableItemBoxShadow};
`

const FeatureCard = styled(SelectableCard)`
  margin: 1rem;
  padding: 1.5rem;
  flex: 1 0 30%;
  min-width: 280px;
  max-width: 30%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 46%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 100%;
  }
`

const FilterContainer = styled.div`
  min-height: 82px;
`

const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`

const ClearLink = styled.button`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const walletCardImage = graphql`
  fragment walletCardImage on File {
    childImageSharp {
      fixed(width: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const ResultsContainer = styled.div`
  margin-top: 0rem;
  text-align: center;
`

const Emoji = styled(Twemoji)`
  & > img {
    width: 3em !important;
    height: 3em !important;
    margin-bottom: 2em !important;
    margin-top: 2em !important;
  }
`

const Disclaimer = styled.div`
  margin-top: 2rem;
`

// `id` fields must match src/data/wallets.csv column headers
const walletFeatures = [
  {
    id: "has_card_deposits",
    emoji: ":credit_card:",
    title: <Translation id="page-find-wallet-buy-card" />,
    description: <Translation id="page-find-wallet-buy-card-desc" />,
  },
  {
    id: "has_explore_dapps",
    emoji: ":world_map:",
    title: <Translation id="page-find-wallet-explore-dapps" />,
    description: <Translation id="page-find-wallet-explore-dapps-desc" />,
  },
  {
    id: "has_defi_integrations",
    emoji: ":money_with_wings:",
    title: <Translation id="page-find-wallet-fi-tools" />,
    description: <Translation id="page-find-wallet-fi-tools-desc" />,
  },
  {
    id: "has_bank_withdrawals",
    emoji: ":bank:",
    title: <Translation id="page-find-wallet-withdraw" />,
    description: <Translation id="page-find-wallet-withdraw-desc" />,
  },
  {
    id: "has_limits_protection",
    emoji: ":shield:",
    title: <Translation id="page-find-wallet-limits" />,
    description: <Translation id="page-find-wallet-limits-desc" />,
  },
  {
    id: "has_high_volume_purchases",
    emoji: ":whale:",
    title: <Translation id="page-find-wallet-volume" />,
    description: <Translation id="page-find-wallet-voluem-desc" />,
  },
  {
    id: "has_dex_integrations",
    emoji: ":repeat:",
    title: <Translation id="page-find-wallet-swaps" />,
    description: <Translation id="page-find-wallet-swaps-desc" />,
  },
  {
    id: "has_multisig",
    emoji: ":busts_in_silhouette:",
    title: <Translation id="page-find-wallet-multisig" />,
    description: <Translation id="page-find-wallet-multisig-desc" />,
  },
]

const WalletCompare = () => {
  const [state, setState] = useState({ selectedFeatureIds: [], wallets: [] })

  // image variables must match `id` column in src/data/wallets.csv
  const data = useStaticQuery(graphql`
    query {
      allWallets: allWalletsCsv {
        nodes {
          id
          name
          url
          description
          brand_color
          has_mobile
          has_desktop
          has_web
          has_hardware
          has_card_deposits
          has_explore_dapps
          has_defi_integrations
          has_bank_withdrawals
          has_limits_protection
          has_high_volume_purchases
          has_dex_integrations
          has_multisig
        }
      }
      timestamp: walletsCsv {
        parent {
          ... on File {
            id
            name
            fields {
              gitLogLatestDate
            }
          }
        }
      }
      alpha: file(relativePath: { eq: "wallets/alpha.png" }) {
        ...walletCardImage
      }
      ambo: file(relativePath: { eq: "wallets/ambo.png" }) {
        ...walletCardImage
      }
      argent: file(relativePath: { eq: "wallets/argent.png" }) {
        ...walletCardImage
      }
      atomic: file(relativePath: { eq: "wallets/atomic.png" }) {
        ...walletCardImage
      }
      authereum: file(relativePath: { eq: "wallets/authereum.png" }) {
        ...walletCardImage
      }
      bitski: file(relativePath: { eq: "wallets/bitski.png" }) {
        ...walletCardImage
      }
      blockchain: file(relativePath: { eq: "wallets/blockchain.png" }) {
        ...walletCardImage
      }
      coinbase: file(relativePath: { eq: "wallets/coinbase.png" }) {
        ...walletCardImage
      }
      dharma: file(relativePath: { eq: "wallets/dharma.png" }) {
        ...walletCardImage
      }
      eidoo: file(relativePath: { eq: "wallets/eidoo.png" }) {
        ...walletCardImage
      }
      enjin: file(relativePath: { eq: "wallets/enjin.png" }) {
        ...walletCardImage
      }
      eql: file(relativePath: { eq: "wallets/eql.png" }) {
        ...walletCardImage
      }
      gnosis: file(relativePath: { eq: "wallets/gnosis.png" }) {
        ...walletCardImage
      }
      imtoken: file(relativePath: { eq: "wallets/imtoken.png" }) {
        ...walletCardImage
      }
      ledger: file(relativePath: { eq: "wallets/ledger.png" }) {
        ...walletCardImage
      }
      lumi: file(relativePath: { eq: "wallets/lumi.png" }) {
        ...walletCardImage
      }
      metamask: file(relativePath: { eq: "wallets/metamask.png" }) {
        ...walletCardImage
      }
      monolith: file(relativePath: { eq: "wallets/monolith.png" }) {
        ...walletCardImage
      }
      mycrypto: file(relativePath: { eq: "wallets/mycrypto.png" }) {
        ...walletCardImage
      }
      myetherwallet: file(relativePath: { eq: "wallets/myetherwallet.png" }) {
        ...walletCardImage
      }
      pillar: file(relativePath: { eq: "wallets/pillar.png" }) {
        ...walletCardImage
      }
      portis: file(relativePath: { eq: "wallets/portis.png" }) {
        ...walletCardImage
      }
      rainbow: file(relativePath: { eq: "wallets/rainbow.png" }) {
        ...walletCardImage
      }
      squarelink: file(relativePath: { eq: "wallets/squarelink.png" }) {
        ...walletCardImage
      }
      status: file(relativePath: { eq: "wallets/status.png" }) {
        ...walletCardImage
      }
      torus: file(relativePath: { eq: "wallets/torus.png" }) {
        ...walletCardImage
      }
      trezor: file(relativePath: { eq: "wallets/trezor.png" }) {
        ...walletCardImage
      }
      trust: file(relativePath: { eq: "wallets/trust.png" }) {
        ...walletCardImage
      }
      zengo: file(relativePath: { eq: "wallets/zengo.png" }) {
        ...walletCardImage
      }
    }
  `)

  useEffect(() => {
    const nodes = data.allWallets.nodes
    const wallets = nodes
      .map((node) => {
        node.image = data[node.id]
        node.randomNumber = Math.floor(Math.random() * nodes.length)
        return node
      })
      .sort((a, b) => a.randomNumber - b.randomNumber)
    setState({ selectedFeatureIds: state.selectedFeatureIds, wallets })
  }, [data, state.selectedFeatureIds])

  const intl = useIntl()
  let lastUpdated
  // TODO remove conditionals once file is registered in git
  if (data.timestamp.parent.fields) {
    lastUpdated = getLocaleTimestamp(
      intl.locale,
      data.timestamp.parent.fields.gitLogLatestDate
    )
  }

  const clearFilters = () => {
    setState({ selectedFeatureIds: [], wallets: state.wallets })
  }

  // Add feature filter (or remove if already selected)
  const handleSelect = (featureId) => {
    const selectedFeatureIds = state.selectedFeatureIds

    const index = selectedFeatureIds.indexOf(featureId)
    if (index > -1) {
      selectedFeatureIds.splice(index, 1)
    } else {
      selectedFeatureIds.push(featureId)

      const feature = walletFeatures.filter(
        (feature) => feature.id === featureId
      )[0].title
      trackCustomEvent({
        eventCategory: `Wallet feature`,
        eventAction: `Selected`,
        eventName: feature,
      })
    }
    setState({ selectedFeatureIds, wallets: state.wallets })
  }

  let filteredWallets = state.wallets.filter((wallet) => {
    for (const featureId of state.selectedFeatureIds) {
      if (wallet[featureId] !== "TRUE") {
        return false
      }
    }
    return true
  })

  const hasSelectedFeatures = state.selectedFeatureIds.length > 0
  const selectedFeatures = walletFeatures.filter((feature) =>
    state.selectedFeatureIds.includes(feature.id)
  )
  const remainingFeatures = walletFeatures.filter(
    (feature) => !state.selectedFeatureIds.includes(feature.id)
  )

  return (
    <Container>
      <Content>
        <h2>
          <Translation id="page-find-wallet-feature-h2" />
        </h2>
        <CardContainer>
          {walletFeatures.map((card, idx) => {
            const isSelected = state.selectedFeatureIds.includes(card.id)
            return (
              <FeatureCard
                key={idx}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
                isSelected={isSelected}
                onSelect={handleSelect}
                value={card.id}
              />
            )
          })}
        </CardContainer>

        <ButtonContainer id="results">
          <Button to="/wallets/find-wallet/#results">
            <Translation id="page-find-wallet-search-btn" />
          </Button>
        </ButtonContainer>
      </Content>

      <GradientContainer>
        <h2>
          <Translation id="page-find-wallet-Ethereum-wallets" />
        </h2>
        <FilterContainer>
          {hasSelectedFeatures && (
            <Subtitle>
              <Translation id="page-find-wallet-we-found" />{" "}
              {filteredWallets.length}{" "}
              {filteredWallets.length === 1 ? "wallet" : "wallets"}{" "}
              <Translation id="page-find-wallet-following-features" />
            </Subtitle>
          )}
          {!hasSelectedFeatures && (
            <Subtitle>
              <Translation id="page-find-wallet-showing" />
              {filteredWallets.length}{" "}
              <Translation id="page-find-wallet-overwhelmed" />
            </Subtitle>
          )}
          <TagsContainer>
            <TagContainer>
              {selectedFeatures.map((feature) => {
                return (
                  <Tag
                    name={feature.title}
                    key={feature.id}
                    onSelect={handleSelect}
                    value={feature.id}
                  />
                )
              })}
              {remainingFeatures.map((feature) => {
                return (
                  <Tag
                    name={feature.title}
                    key={feature.id}
                    onSelect={handleSelect}
                    value={feature.id}
                    isActive={false}
                  />
                )
              })}
            </TagContainer>
            {hasSelectedFeatures && (
              <ClearLink onClick={clearFilters}>
                <Translation id="page-find-wallet-clear" />
              </ClearLink>
            )}
          </TagsContainer>
        </FilterContainer>
        {filteredWallets.length === 0 && (
          <ResultsContainer>
            <Emoji svg text=":crying_face:" />
            <h2>
              <Translation id="page-find-wallet-not-all-features" />{" "}
              <b>
                <Translation id="page-find-wallet-yet" />
              </b>
            </h2>
            <p>
              <Translation id="page-find-wallet-try-removing" />
            </p>
          </ResultsContainer>
        )}
        <ResultsContainer>
          <CardContainer>
            {filteredWallets.map((wallet) => {
              return <WalletCard wallet={wallet} key={wallet.id} />
            })}
          </CardContainer>
        </ResultsContainer>
        <Disclaimer>
          <p>
            <em>
              <Translation id="page-find-wallet-not-endorsements" />{" "}
              <Link to="/contributing/adding-products/">
                <Translation id="page-find-wallet-listing-policy" />
              </Link>
              <Translation id="page-find-wallet-add-wallet" />{" "}
              <Link to="https://github.com/ethereum/ethereum-org-website/issues/new/choose">
                <Translation id="page-find-wallet-raise-an-issue" />
              </Link>
              .{" "}
              {lastUpdated && (
                <span>
                  <Translation id="page-find-wallet-last-updated" />{" "}
                  <strong>{lastUpdated}</strong>.
                </span>
              )}
            </em>
          </p>
        </Disclaimer>
      </GradientContainer>
    </Container>
  )
}

export default WalletCompare
