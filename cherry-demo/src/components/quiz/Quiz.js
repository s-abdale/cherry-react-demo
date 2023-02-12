import './quiz.css';
import QuizForm from './QuizForm';

function Quiz() {
  return (
    <div className='quiz-main'>
      <h1>Quiz! </h1>
      <QuizForm/>
    </div>
  )
}

export default Quiz;

// reference: https://medium.com/@jnesong/making-a-personality-quiz-in-react-dc858f61e734