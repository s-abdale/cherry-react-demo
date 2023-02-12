const QuestionBank = [
  {
      question: "Do you like wearing vibrant or netural colours?",
      id: 0,
      answerA: "Vibrant",
      idNextQuestionA: 1, // HANDLES YELLOW BLUE LAVANDER GREEN SZA
      answerB: "Neutral",
      idNextQuestionB: 5 // HANDLES BLACK AND CREAM
  },
  {
      question: "Are crocs practical shoes or fashion shoes?",
      id: 1,
      answerA: "Practical",
      idNextQuestionA: 2, // HANDLES YELLOW BLUE AND LAVANDER
      answerB: "Fashion",
      idNextQuestionB: 4 // HANDLES SZA AND GREEN
  },
  {
      question: "Do you wear your crocs in sports mode?",
      id: 2,
      answerA: "Yes",
      crocResultA: 1, // TERMINAL: blue
      answerB: "No",
      idNextQuestionB: 3 // HANDLES YELLOW AND LAVANDER
  },
  {
      question: "Which do you like better: flowers or rubber ducks?",
      id: 3,
      answerA: "Flowers",
      crocResultA: 2, // TERMINAL: lavander
      answerB: "Rubber ducks",
      crocResultB: 3, // TERMINAL: yellow
  },
  {
      question: "Which look are you going for: bold colours or unexpected details?",
      id: 4,
      answerA: "Bold colours",
      crocResultA: 4, // TERMINAL: green
      answerB: "Details",
      crocResultB: 5, // TERMINAL: sza wood
  },
  {
      question: "Do you only wear white sneakers?",
      id: 5,
      answerA: "Yes",
      crocResultA: 6, // TERMINAL: cream
      answerB: "No",
      crocResultB: 7 // TERMINAL: black
  }
]

export default QuestionBank;

/* 
  What colour crocs should you get?

  Options:
    black
    cream
    green
    sza wood
    lavender
    blue
    yellow
*/