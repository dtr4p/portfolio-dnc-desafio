import style from './Navbar.module.css'
import { FaLinkedin,FaGithub } from "react-icons/fa"
import Nav from 'react-bootstrap/Nav'
function Navbar(){
    return(
        <div className={style.navBar}>
            <ul>
                <li><Nav.Link className={style.animation} href='#projects'>Projetos</Nav.Link></li>
                <li><Nav.Link className={style.animation} href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link className={style.animation} href='#contacts'>Contatos</Nav.Link></li>
            </ul>
            <ul>
               <li><a target='_blank' href='https://www.linkedin.com/in/pedro-henrique-ramos-dutra-5b0b832a5/'><FaGithub size={30}/></a></li> 
               <li><a target='_blank' href='https://github.com/dtr4p/'><FaLinkedin size={30}/></a></li> 
            </ul>
        </div>
    )
}

export default Navbar