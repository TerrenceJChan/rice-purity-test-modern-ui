import React, { useState } from 'react';
import purityQuestions from "../assets/purityQuestions.json"

const Questionnaire = () => {
    const [score, setScore] = useState(100)
    const adjustScore = ({ target }) => {
        if (target.checked === true) {
            setScore(score - 1)
        } else {
            setScore(score + 1)
        }
    }
    const questions = purityQuestions.map((question) =>
        <li key={question.key}>
            <input type="checkbox" name={question.key + 1} className="mr-1" onChange={adjustScore} />
            <label htmlFor={question.key + 1}>{question.question}</label>
        </li>
    )
    return (
        <>
            <form className="border-2 border-sky-500 p-2">
                <div className="flex justify-center">
                    <p>SCORE</p>
                    <p>{score}</p>
                </div>
                <ol className="list-decimal list-inside">
                    {questions}
                </ol>
            </form>
        </>
    )
}

export default Questionnaire