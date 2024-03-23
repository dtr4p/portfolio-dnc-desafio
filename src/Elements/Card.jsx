import style from './Card.module.css'
import Button1 from './Button1'

function Card({image, title, desc, link}){
    return(
        <div className={style.Card}>
            <img src={image} alt="Error" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <section>
            <a target='_blank' href={link}><Button1 text='Ver Projeto'></Button1></a>
            </section>
        </div>
    )
}

export default Card