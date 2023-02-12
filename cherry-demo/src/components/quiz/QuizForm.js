import './quizForm.css';
import QuestionBank from "./QuestionBank";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function QuizForm() {
  const [currentQ, setCurrentQ] = useState("");
  const [result, setResult] = useState();
  const resultsBank = ['blue', 'lavendar', 'yellow', 'green', 'sza', 'cream', 'black'];
  

  useEffect( () => {
    setCurrentQ(QuestionBank[0])
  }, []);
  useEffect( () => {
    setResult(0)
  }, []);


  function handleClickA (){
    const nextQ = QuestionBank.find(question => question.id === currentQ.idNextQuestionA);
    if (nextQ) {setCurrentQ(nextQ)}
    else {
      setResult(currentQ.crocResultA);
    };
  }

  function handleClickB (){
    const nextQ = QuestionBank.find(question => question.id === currentQ.idNextQuestionB);
    if (nextQ) {setCurrentQ(nextQ)}
    else {
      setResult(currentQ.crocResultB);
    };
  }



  if (!result) {
    return (
      <>
        <div>
          <p> {currentQ.question} </p>  
          <button className="quiz-button" onClick={handleClickA}> {currentQ.answerA} </button>  
          <button className="quiz-button" onClick={handleClickB}> {currentQ.answerB} </button>
        </div>
        <Link className="quiz-link" to="/home/quiz" onClick={() => window.location.reload()}> restart quiz </Link>
      </>
    )
  }
  else {
    return (
      <>
        <p>🎉 complete! answer is: {resultsBank[result]}</p>
        <Link className="quiz-link" to="/home/quiz" onClick={() => window.location.reload()}> try again! </Link>
      </>
    )
  }
}

export default QuizForm;