import style from './Contacts.module.css'
import { FaWhatsapp,FaLinkedin,FaGithub } from "react-icons/fa"

function Contacts(){
    return(
        <div className={style.contactsSection} id="contacts">
            <ul>
                <li><FaWhatsapp/> (51)9 9328-1831</li>
                <li>E-mail: pedro@agenciatopo.net</li>
            </ul>
            <section>
                <a target='_blank' href='https://github.com/dtr4p/'><FaGithub size={30}/></a>
                <a target='_blank' href='https://www.linkedin.com/in/pedro-henrique-ramos-dutra-5b0b832a5/'><FaLinkedin size={30}/></a>
            </section>
        </div>
    )
}

export default Contacts