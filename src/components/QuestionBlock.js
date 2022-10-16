import { useState } from "react"
import "./QuestionBlock.css"



function QuestionBlock ({text, status}){
    const [stat, setStatus] = useState()
    let handler = () => {
        let currentStatus = undefined;
        if (status) {
            status = false;
            currentStatus = status;
           
           
        } else{
            status = true;
            currentStatus = status;
            
        }
        
        setStatus(currentStatus);
        console.log(stat);
    }    
    return(
        <div className={stat ? "question__block done" : "question__block"}>
            <h3 className='question__text'>{text}</h3>
            <div className="buttons__wrap">
            <button className='question_complete' onClick={handler}>I`ve learned it</button>
            <a href='https://uk.reactjs.org/docs/getting-started.html'><button className='question_info'>Read about</button></a>
            <a href='https://www.google.com.ua/?gws_rd=ssl'><button className='question_ask'>Ask</button></a>
        </div>
        </div>
    )
}

export default QuestionBlock
