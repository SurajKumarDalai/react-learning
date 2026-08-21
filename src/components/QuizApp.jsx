import { useState } from "react";

const questions = [
    {
        question: "What does JSX stand for?",
        options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JSON XML",
            "JavaScript Extension"
        ],
        answer: "JavaScript XML"
    },
    {
        question: "Which hook is used to manage state?",
        options: [
            "useEffect",
            "useState",
            "useRef",
            "useContext"
        ],
        answer: "useState"
    },
    {
        question: "Which method is commonly used to render a list in React?",
        options: [
            "filter()",
            "reduce()",
            "map()",
            "find()"
        ],
        answer: "map()"
    }
];

function QuizApp(){

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);

    const current = questions[currentQuestion];

    function handleNext(){
        if(selectedAnswer === current.answer){
            setScore(score +1)
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
        
    }

    return(

        <>

        {/* currentQuestion + 1 → question number → 1
        questions.length → total questions → 3
        current.question → actual question text → "What does JSX stand for?" */}
        


        {currentQuestion >= questions.length?
        (
            <>
            <h2>Quiz Completed!</h2>
            <p>Score : {score} / {questions.length}</p>
            </>
        ):(
            <>
        <h2>
            Question {currentQuestion+1} of {questions.length}     
        </h2>

        <h3>
            {current.question}
        </h3>

        {current.options.map((option, index)=>(
            <button 
            key={index} 
            onClick={()=> setSelectedAnswer(option)}
            >
                {option}
            </button>
        ))}
        <p>
        Selected Answer: {selectedAnswer}
        </p>

        <button onClick ={handleNext}>
            Next :
        </button>
            </>
        )
        }

        </>
    )
}
export default QuizApp;


// QUESTIONS
// │
// ↓
// currentQuestion = 0
// │
// ↓
// questions[0]
// │
// ↓
// Display question
// │
// ↓
// Display options
// │
// ↓
// User clicks option
// │
// ↓
// selectedAnswer = option
// │
// ↓
// User clicks
// NEXT
// │
// ↓
// Is selectedAnswer correct?
// /          \
// YES           NO
// ↓             ↓
// score + 1       no score
// \             /
// \           /
// ↓         ↓
// next question
// │
// ↓
// selectedAnswer = ""
// │
// ↓
// Repeat...
// │
// ↓
// currentQuestion = 3
// │
// ↓
// Quiz Completed!
// │
// ↓
// Show score