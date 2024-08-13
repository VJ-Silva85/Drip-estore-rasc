import footerLogo from '../../../assets/logo-footer.svg'
import headerLogo from '../../../assets/logo-header.svg'

export const LogoFooter = () => {
    return ( 
        <>
        <img src={footerLogo} width='253px' height='44px' alt="logo" className='logo-store'/>
        </>
     );
}
 

const Logo = () => {
    return ( 
        <>
        <img src={headerLogo} width='253px' height='44px' alt="logo" className='logo-header'/>
        </>
     );
}
 
export default Logo;