import './quizForm.css';
import { QuestionBank, ResultsBank } from "./QuestionBank";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function QuizForm() {
  const [currentQ, setCurrentQ] = useState("");
  const [result, setResult] = useState();
  
  useEffect( () => {
    setCurrentQ(QuestionBank[0])
  }, []);
  useEffect( () => {
    setResult(null)
  }, []);

  function handleClickA (){
    const nextQ = QuestionBank.find(question => question.id === currentQ.idNextQuestionA);
    if (nextQ) {setCurrentQ(nextQ)}
    else {
      setResult(currentQ.crocResultA);
    };
  };

  function handleClickB (){
    const nextQ = QuestionBank.find(question => question.id === currentQ.idNextQuestionB);
    if (nextQ) {setCurrentQ(nextQ)}
    else {
      setResult(currentQ.crocResultB);
    };
  };

  if (!result) {
    return (
      <>
        <div className='quiz-container'>
          <p> {currentQ.question} </p>  
          <div className='buttons-container'>
            <button className="button" onClick={handleClickA}> {currentQ.answerA} </button>
            <button className="button" onClick={handleClickB}> {currentQ.answerB} </button>
          </div>
        </div>
        <Link className="restart-quiz-link" to="/home/quiz" onClick={() => window.location.reload()}>restart quiz</Link>
      </>
    )
  }
  else {
    let image = ResultsBank[result].image;

    return (
      <div className='quiz-container'>
        <p className='result-statement'>🎉 complete! you should get {ResultsBank[result].name} crocs</p>
        <img src={`/quiz-media/${image}`} className='croc-image' alt='Picture of croc'/>
        <Link className="restart-quiz-link" to="/home/quiz" onClick={() => window.location.reload()}>try again!</Link>
      </div>
    )
  }
}

export default QuizForm;