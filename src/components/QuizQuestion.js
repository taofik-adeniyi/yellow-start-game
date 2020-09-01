import React, { useState } from 'react'
import './QuizQuestion.css'
import { FaInfoCircle } from "react-icons/fa";
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';


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
            <form onSubmit={handleQuestionSubmit}>
                <FaInfoCircle className="circleIcon" />
                <h3 className="detectNumber">Quiz One</h3>
                <h4>Where did Iyanaya (Contestant 1) grow up?</h4>
                <select value={questionAnswer} onChange={questionAnswerChange}>
                    <option value="Abeokuta">
                        Abeokuta
                    </option>
                    <option value="Ilorin">
                        Ilorin
                    </option>
                </select>
                <button type="submit">Submit</button>
                <div>You have 2 free Quizzes left for today</div> 
            </form>
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
