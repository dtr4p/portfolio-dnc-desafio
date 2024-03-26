import Button1 from '../Elements/Button1'
import style from './About.module.css'
import {useState, useEffect} from 'react'

function About(){

    const [text, setText] = useState('');
    const toRotate = ['o Pedro Dutra!', 'Desenvolvedor Front-End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 120;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        
        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }



    return(
        <div className={style.aboutMe}>
            <h1>Olá, eu sou {text} </h1>
            <p>Sou um desenvolvedor front-end, e minha missão é criar<br/>
               aplicações e sites modernos, responsivos, e o mais importante,<br/>
               que sejam a sua cara! E aí, vamos criar juntos?</p>
                <section> <a target='_blank' href='https://api.whatsapp.com/send/?phone=5551993281831&text&type=phone_number&app_absent=0'><Button1 text='Saiba mais'/></a></section>
        </div>
    )
}

export default About