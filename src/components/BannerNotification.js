import React from "react"
import styled from "styled-components"

// Note: to avoid width overlfow, parent element
// should have `position: absolute;`
const Banner = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: 1rem;
`

const BannerNotification = ({ children }) => {
  return <Banner>{children}</Banner>
}

export default BannerNotification
