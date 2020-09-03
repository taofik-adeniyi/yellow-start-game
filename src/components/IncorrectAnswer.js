import React from 'react'
import { BsXCircle } from "react-icons/bs";
import './IncorrectAnswer.css'

function IncorrectAnswer() {
    return (
        <div className="">
            <BsXCircle className="wrong-icon"/>
            <div className="wrong">Wrong!</div>
            <div className="wrong-text">
                Where did participant 1 (Iyanya) grow up?
            </div>
            <div className="display-correct">
                Correct Answer: Abia State
            </div>
            <div className="next-trial-con">
                <button className="quiz-question-next">Next Trivia</button>
            </div>
            <div className="awoof">*You have 2 free Quizzes left for today</div>
        </div>
    )
}

export default IncorrectAnswer
