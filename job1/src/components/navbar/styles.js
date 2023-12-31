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
@media (max-width:966px){

    img{
        width: 100px;
    }
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
@media (max-width:1200px){
    font-size: 17px;
}
@media (max-width:1000px){
    font-size: 15px;
}
@media (max-width:850px){
    display: flex;
    gap: 20px;
    
}
`

export const HomeContainer = styled (LinksContainer)`
display:flex;
align-items: center;
@media (max-width: 768px){
    display: none;
}
`