import React from 'react'
import icono from '../../assets/img/banana.png'
import {FaHouseChimneyUser, FaCircleUser, FaRegistered, FaAppleWhole, FaRankingStar, FaBuilding, FaPeriscope} from 'react-icons/fa6'
import { HomeContainer, LinksContainer, NavbarContainer } from './styles'



export const Navbar = () => {
  return (
    
    
      <NavbarContainer>
    
        <div>
        <a href="/#">
          <img  src={icono} alt="" />
        </a>
        </div>
        
      <LinksContainer>
      <HomeContainer>

           <div>
           <FaHouseChimneyUser/>
           <span>home</span>
           </div>
           <div>
           <FaCircleUser/>
            <span>Iniciar Sesion</span>
           </div>
           <div>
            <FaRegistered/>
            <span>Registrarse</span>
           </div>
           <div>
            <FaAppleWhole/>
            <span>Productos</span>
           </div>
           <div>
            <FaRankingStar/>
            <span>Destacados</span>
           </div>
           <div>
            <FaBuilding/>
            <span>Nosotros</span>
           </div>
           <div>
            <FaPeriscope/>
            <span>Contacto</span>
           </div>
       </HomeContainer>
      </LinksContainer>
          
       
    
    </NavbarContainer>
    
  )
}
