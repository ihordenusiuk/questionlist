import "./QuestionBlock.css"
import Buttons from './Buttons'
function QuestionBlock ({text, status}){
    
    return(
        <div className='question__block'>
            <h3 className='question__text'>{text}</h3>
            <Buttons/>
        </div>
    )
}

export default QuestionBlock
