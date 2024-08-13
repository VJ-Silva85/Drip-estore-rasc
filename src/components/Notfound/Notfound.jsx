import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <>
            <h1>Pagina não encontrada</h1>
            <Link to={"/"}><button type="submit" className='entrar-bt'>Voltar a home</button></Link>
        </>
    );
}
 
export default Notfound;