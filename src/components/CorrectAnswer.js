import React from 'react'
import { BsCheckCircle, BsX } from "react-icons/bs";
import './CorrectAnswer.css'

function CorrectAnswer() {
    return (
        <div>
            <div className="cancel-con"><BsX className="cancel"/></div>
            <BsCheckCircle className="right-icon" />
            <div className="right">Correct!</div>
            <div className="announce">
                You just earned 20 points!
            </div>
            <div className="next-con">
                <button className="quiz-question-next">Next Trivia</button>
            </div>
            <div className="awoof">
                You have 2 free Quizzes left for today
            </div>
        </div>
    )
}

export default CorrectAnswer
