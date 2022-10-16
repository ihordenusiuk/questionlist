import './App.css';
import data from './components/Data';
import QuestionBlock from './components/QuestionBlock';
function App() {
  const question = data.map((el, i)=>{
  
    return QuestionBlock(el)
  })
  return (
   <div className='container'>
    <div className='animation__wrap'></div>
    {question}
    
   </div>
  );
}

export default App;
