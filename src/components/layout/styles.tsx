import styled from "styled-components";

export const LayoutWrapper = styled.div`
 display: grid;
 grid-template-areas:
   "header header"
   "sidebar content";
 grid-template-columns: 250px 1fr;
 grid-template-rows: auto 1fr;
 min-height: 100vh;
`;

export const ContentArea = styled.main`
 grid-area: content;
 padding: 2rem;
 background: ${props => props.theme.colors.background};
`;

export const WelcomeMessage = styled.h1`
font-weight:300;
margin-bottom:16px;
`