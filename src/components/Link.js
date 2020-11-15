import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as IntlLink } from "gatsby-plugin-intl"
import styled from "styled-components"

import { languageMetadata } from "../utils/translations"
import { trackCustomEvent } from "../utils/matomo"

const HASH_PATTERN = /^#.*/
// const DOMAIN_PATTERN = /^(?:https?:)?[/]{2,}([^/]+)/
// const INTERNAL_PATTERN = /^\/(?!\/)/
// const FILE_PATTERN = /.*[/](.+\.[^/]+?)([/].*?)?([#?].*)?$/

const isHashLink = (to) => HASH_PATTERN.test(to)

const ExternalLink = styled.a`
  &:after {
    color: ${(props) => props.theme.colors.primary};
    margin-left: 0.125em;
    margin-right: 0.3em;
    display: inline;
    content: "↗";
    transition: all 0.1s ease-in-out;
    font-style: normal;
  }
  &:hover {
    &:after {
      transform: translate(0.15em, -0.2em);
    }
  }
`

const InternalLink = styled(IntlLink)`
  &.active {
    color: ${(props) => props.theme.colors.primary};
  }
`

const Link = ({
  to,
  href,
  children,
  hideArrow = false,
  className,
  isPartiallyActive = true,
}) => {
  // markdown pages pass `href`, not `to`
  to = to || href

  const isExternal = to.includes("http") || to.includes("mailto:")
  const isHash = isHashLink(to)

  // Must use <a> tags for anchor links
  // Otherwise <Link> functionality will navigate to homepage
  // See https://github.com/gatsbyjs/gatsby/issues/21909
  if (isHash) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    )
  }

  const eventOptions = {
    eventCategory: `External link`,
    eventAction: `Clicked`,
    eventName: to,
  }

  if (isExternal) {
    return hideArrow ? (
      <a
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCustomEvent(eventOptions)}
      >
        {children}
      </a>
    ) : (
      <ExternalLink
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCustomEvent(eventOptions)}
      >
        {children}
      </ExternalLink>
    )
  }

  // If lang path has been explicitly set, use `gatsby` Link
  const langPath = to.split("/")[1]
  if (Object.keys(languageMetadata).includes(langPath)) {
    return (
      <GatsbyLink
        className={className}
        to={to}
        activeClassName="active"
        partiallyActive={isPartiallyActive}
      >
        {children}
      </GatsbyLink>
    )
  }

  // Use `gatsby-plugin-intl` Link (which prepends lang path)
  return (
    <InternalLink
      className={className}
      to={to}
      activeClassName="active"
      partiallyActive={isPartiallyActive}
    >
      {children}
    </InternalLink>
  )
}

export default Link
