import style from './Button1.module.css'

function Button1({text, link}){
    return(
        <button className={style.button1}>{text}</button>
    )
}

export default Button1