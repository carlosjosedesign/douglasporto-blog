import styled from "styled-components"
import media from "styled-media-query"

import * as V from "@styles/variables"
export const Footer = styled.footer.attrs({
  role: "dialog",
})`
  align-items: center;
  background-color: var(--bgSolid);
  border-top: ${V.Border.default};
  bottom: 0;
  box-shadow: 2px 3px 4px var(--boxShadow);
  color: ${V.Color.white};
  display: flex;
  height: ${V.Height.footer};
  justify-content: center;
  flex-direction: row;
  left: 0;
  padding-left: ${V.Space.default};
  padding-right: ${V.Space.default};
  position: fixed;
  right: 0;
  z-index: ${V.ZIndex.footer};
`

export const FooterText = styled.div`
  display: none;
  ${media.greaterThan("medium")`
    display: block;
  `}
`
export const FooterSocial = styled.div`
  display: none;
  ${media.lessThan("medium")`
    display: block;
  `}
`
