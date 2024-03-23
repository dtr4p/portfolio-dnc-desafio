import style from './Techs.module.css'
import Html from '../Elements/images/html.svg'
import Css from '../Elements/images/css.svg'
import Js from '../Elements/images/js.svg'
import Reactjs from '../Elements/images/react.svg'

function Techs(){
    return(
        <div className={style.skills} id="skills">
            <h1>Minhas Habilidades</h1>
            <div>
                <img src={Html} alt="error" />
                <img src={Css} alt="" />
                <img src={Js} alt="" />
                <img src={Reactjs} alt="" />
            </div>
        </div>
    )
}

export default Techs