import React, { useState } from 'react'
import './QuizQuestion.css'
// import { FaInfoCircle } from "react-icons/fa";
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';
import { BsStar, BsStarFill } from "react-icons/bs";
import './QuizQuestion.css'

function QuizQuestion() {

    const [questionAnswer, setquestionAnswer] = useState()

    const [showForm, setShowForm]= useState('show')

    const questionAnswerChange = (event) => {
        setquestionAnswer(event.target.value)
    }
    
    const handleQuestionSubmit = (event) => {
        event.preventDefault()
        if(questionAnswer === 'Abeokuta'){
            setShowForm('correct')
        }else {
            setShowForm('incorrect')
        }
    }

    if(showForm === 'show')
    {
        return(
            <div className="quiz-question">
                <form onSubmit={handleQuestionSubmit}>
                    <BsStarFill className="star-icon" />
                    <div className="quiz-no">Quiz One</div>
                    <div className="quiz-content">Where did Iyanaya (Contestant 1) grow up?</div>
                    <div>
                        <select className="select-element" value={questionAnswer} onChange={questionAnswerChange}>
                            <option disabled selected className="option-element">
                                Select Answer
                            </option>
                            <option className="option-element" value="Abeokuta">
                                Abeokuta
                            </option>
                            <option className="option-element" value="Ilorin">
                                Ilorin
                            </option>
                        </select>
                    </div>
                    <div className="submit-con">
                        <button className="quiz-question-submit" type="submit">Submit</button>
                    </div>
                    <div className="awoof">*You have 2 free Quizzes left for today</div> 
                </form>
            </div>
        )
    }else if (showForm === 'correct'){
        return (
            <CorrectAnswer />
        )
    }else if (showForm === 'incorrect') {
        return(
            <IncorrectAnswer />
        )
    }
}

export default QuizQuestion
