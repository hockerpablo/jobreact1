import styled from "styled-components";

export const NavbarContainer =styled.div `
height: 150px;
background-color: #F3E5D1 ;
display: flex ;
justify-content:space-between;
align-items: center;
padding: 1rem 4rem;

img{
    width: 150px;

}
`

export const LinksContainer = styled.div`
color: black;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
font-family: 'Playpen Sans';
font-size: 25px;
color: black;
text-shadow: 1px 1px 2px black;
`

export const HomeContainer = styled (LinksContainer)`
display:flex;
align-items: center;
@media (max-width: 768px){
    display: none;
}`