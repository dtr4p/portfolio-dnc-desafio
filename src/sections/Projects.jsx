import style from './Project.module.css'
import Card from '../Elements/Card'
import Ptfl from '../Elements/images/ptfl.svg'
import Lpdnc from '../Elements/images/lpdnc.svg'
import Lpdnc2 from '../Elements/images/lpdnc2.svg'
import API from '../Elements/images/api.svg'
import ArrowDown from '../Elements/images/arrowDown.svg'
import ArrowUp from '../Elements/images/arrowUp.svg'
import { useState } from 'react'

function Projects() {
    const [show, setShow] = useState(false);
    
   
    const toggleShow = () => {
        setShow(!show);
    };
    
    // Escolhe a imagem da seta com base no estado de 'show'
    // Se 'show' for true, a seta para cima é mostrada, caso contrário, a seta para baixo
    const arrow = show ? ArrowUp : ArrowDown;
    
    return (
        <div className={style.projectSection} id="projects">
            <div className={style.title}>
                <h1>Projetos</h1>
                <img 
                    src={arrow} 
                    onClick={toggleShow} 
                    className={style.arrow} 
                    alt='Toggle Projects'
                />
            </div>
            { show && (
                <div>
                    <div className={style.cards}>
                        <Card 
                            link="https://portfolio-3y30cc33b-dtr4ps-projects.vercel.app/" 
                            desc='Outra versão de portfólio, utilizando React e React Hooks.' 
                            title='Portfólio' 
                            image={Ptfl}
                        />
                        <Card 
                            title="Landing Page" 
                            desc="Projeto da escola DNC. Landing Page feita utilizando HTML, CSS e JavaScript." 
                            image={Lpdnc} 
                            link="https://lpdncteste.netlify.app/"
                        />
                    </div>
                    <div className={style.cards}>
                        <Card 
                            desc="Landing Page utilizando HTML e CSS, com formulário integrado para captura de leeds." 
                            image={Lpdnc2} 
                            title="Landing Page Arquitetura" 
                            link="https://desafio-01dnc.netlify.app/"
                        />
                        <Card 
                            link="https://dncweatherproject.netlify.app/" 
                            title="Consumo de API" 
                            desc="Interface com consumo de API's para informações de clima e localização." 
                            image={API}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;