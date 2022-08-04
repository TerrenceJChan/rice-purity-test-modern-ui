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
        <li key={question.key} className="text-xl bg-red-100 transition-colors hover:bg-red-300 p-2 rounded-lg shadow-md">
            <input type="checkbox" name={question.key + 1} className="mr-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" onChange={adjustScore} />
            <label htmlFor={question.key + 1} className="pl-1">{question.question}</label>
        </li>
    )
    return (
        <>
            <form className="bg-white shadow-2xl p-4 rounded-xl">
                <div className="flex gap-x-4 justify-center mb-4 text-3xl">
                    <p className="uppercase">Score</p>
                    <p>{score}</p>
                </div>
                <ol className="list-decimal list-inside flex flex-col gap-y-3">
                    {questions}
                </ol>
            </form>
        </>
    )
}

export default Questionnaire