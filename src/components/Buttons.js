import './buttons.css'

function Buttons (){
    return(
        <div className="buttons__wrap">
            <button className='question_complete' >I`ve learned it</button>
            <button className='question_info'>Read about</button>
            <a href='https://www.google.com.ua/?gws_rd=ssl'><button className='question_ask'>Ask</button></a>
        </div>
    )
}


   



export default Buttons