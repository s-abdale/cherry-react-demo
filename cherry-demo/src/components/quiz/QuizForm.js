import './quizForm.css';
import QuestionBank from "./QuestionBank";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function QuizForm() {
  const [currentQ, setCurrentQ] = useState("");
  const [result, setResult] = useState();
  const resultsBank = [
    {
      name: null,
      image: null,
      description: null
    },
    {
      name: 'blue',
      image: 'y',
      description: 'z'
    },
    {
      name: 'lavendar',
      image: 'y',
      description: 'z'
    },
    {
      name: 'yellow',
      image: 'y',
      description: 'z'
    },
    {
      name: 'green',
      image: 'y',
      description: 'z'
    },
    {
      name: 'sza',
      image: 'y',
      description: 'z'
    },
    {
      name: 'cream',
      image: 'y',
      description: 'z'
    },
    {
      name: 'black',
      image: 'y',
      description: 'z'
    },
  ]
  
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
        <Link className="restart-quiz-link" to="/home/quiz" onClick={() => window.location.reload()}> restart quiz </Link>
      </>
    )
  }
  else {
    return (
      <div className='results-container'>
        <p className='result-statement'>🎉 complete! answer is: {resultsBank[result].name}</p>
        <Link className="restart-quiz-link" to="/home/quiz" onClick={() => window.location.reload()}> try again! </Link>
      </div>
    )
  }
}

export default QuizForm;