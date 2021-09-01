import * as S from "./styles";
import logo from "assets/img/logo.png";
import { Link } from "react-router-dom";


const Footer = () =>{
    return (
        <S.Footer>  
        <picture>
            <a href="index.html">
                <img src={logo} alt="Logo do Site" />
            </a>
        </picture>
        <ul>
            <li>
                <Link to="">
                    <h1>Trepcismo</h1>
                </Link>
                <ul>
                    <li>
                        <Link to="">Regras</Link>
                    </li>

                    <li>
                        <Link to=""> Ltrep </Link>
                    </li>
                    
                    <li>
                        <Link to="">Galeria</Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to=""> <h1>Sobre</h1> </Link>

                <ul>
                    <li>
                        <Link to="">Quem Somos</Link>
                    </li>
                    <li>
                        <Link to="">Membros</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="">
                    <h1>Redes Sociais</h1>
                </Link>

                <ul>
                    <li>
                        <Link to="https://www.instagram.com/">Instagram</Link>
                    </li>

                    <li>
                        <Link to="https://discord.com/">Discord</Link>
                    </li>

                    <li>
                        <Link to="https://twitter.com/home">Twitter</Link>
                    </li>
                </ul>
            </li>
        </ul>
        </S.Footer>
    );
};
export default Footer;