import styled from "styled-components";

export const HeaderWrapper = styled.header`
 background: ${props => props.theme.colors.surface};
 padding: 1rem 2rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom: 1px solid ${props => props.theme.colors.gray[100]};
grid-area: header;
`;

export const Logo = styled.div`
 span {
   color: ${props => props.theme.colors.primary};
 }
 font-size: 1.5rem;
 font-weight: 600;
 width:169px;
`;

export const SearchSection = styled.div`
 flex: 1;
 max-width: 600px;
 margin: 0 2rem;
 position: relative;
 background: #F8F9FE;
 border-radius: 0.5rem;
 
 input {
   width: 100%;
   padding: 0.75rem 1rem;
   border: none;
   background: transparent;
   &:focus {
     outline: none;
   }
 }
`;

export const Actions = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
`;

export const DateContainerStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;`;

export const DayStyled = styled.h2`
margin:0;
font-size:14px;
`;

export const DateStyled = styled.span`
color:${props => props.theme.colors.primary};
font-weight:500;
font-size:14px;
`;

export const IconStyled = styled.div`
width:34px;
height:34px;
border-radius: 0.5rem;
display:flex;
align-items:center;
justify-content:center;
color: ${props => props.theme.colors.surface};
background-color:${props => props.theme.colors.primary};
cursor:pointer;
&:hover{
opacity: 0.9;

}

`
