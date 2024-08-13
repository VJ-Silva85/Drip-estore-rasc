import miniCartLogo from '../../../assets/mini-cart.svg'
import loupeImg from '../../../assets/loupe.svg'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <>
        <header>
            {/* header container de 100% */}
            <div className='header-container'>
                {/* header wrapper container de 80% */}
                <div className='header-wrapper'>
                        <Logo />
                        <div className='search-box'>
                            <input type="search" placeholder="Pesquisar produto..."></input>
                            <img src={loupeImg} width='25px' height='25px' alt="loupe-img" className='loupe-img'/>
                        </div>
                    <a href="">Cadastre-se</a>
                    <input className='entrar-bt' type="button" value="Entrar" />
                    <img src={miniCartLogo} width='33px' height='29px' alt="cart-logo"/>
                </div>
                  
            </div>
            
            <div className='menu-container'>
                <div className='nav-menu'>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/produtos"}>Produtos</Link></li>
                        <li><Link to={"/categorias"} >Categorias</Link></li>
                        <li><Link to={"/meuspedidos"}>Meus pedidos</Link></li>
                    </ul>
                </div>     
            </div>
           
                     
        </header>
        </>
    )
}