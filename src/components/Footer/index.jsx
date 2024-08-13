import Logo, { LogoFooter } from "../Logo";
import facebookinc from "../../../assets/facebook.svg"
import instaInc from "../../../assets/instagram.svg"
import twitterInc from "../../../assets/twitter.svg"


export function Footer(){
    return(
        <>
        <footer>
        <div className='container-footer'>
            <div className='text-areaFooter'>
                <div className='Logo-Texto'>
                    <LogoFooter/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='social-box'>
                        <img src={facebookinc} width="13px" alt=""/>
                        <img src={instaInc} width="25px" height="" alt="" />
                        <img src={twitterInc} width="30px" height="" alt="" />
                    </div>
                </div>
                <div className='info-colun'>
                    <h3>Informações</h3>
                        <ul>
                            <li><a href="">Sobre Dip Store</a></li>
                            <li><a href="">Segurança</a></li>
                            <li><a href="">Whishlist</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Trabalhe conosco</a></li>
                            <li><a href="">Meus pedidos</a></li>
                        </ul>
                </div>
                <div className='info-colun'>
                    <h3>Categorias</h3>
                        <ul>
                            <li><a href="">Camisetas</a></li>
                            <li><a href="">Calças</a></li>
                            <li><a href="">Bones</a></li>
                            <li><a href="">Headphones</a></li>
                            <li><a href="">Tenis</a></li>
                        </ul>
                </div>
                <div className='contato-colun'>
                    <h3>Contato</h3>
                        <p> Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p><br />
                        <p>(85) 3051-3411</p>
                </div>
                
            </div>
            </div>
               <div className='f-containerEnd'>
                <div className='footer-endbox'>
                    <div className='Copyright-footer'>
                        <span>@ 2024 Digital College</span>
                    </div>
                </div>
                </div>  
            
        </footer>
        
        </>
    )
}