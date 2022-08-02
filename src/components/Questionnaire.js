import purityQuestions from "../assets/purityQuestions.json"

const questions = purityQuestions.map((question) =>
    <li key={question.key}>
        <input type="checkbox" name={question.key + 1} className="mr-1" />
        <label htmlFor={question.key + 1}>{question.question}</label>
    </li>
)

const Questionnaire = () => {
    return (
        <form className="border-2 border-sky-500 p-2">
            <ol className="list-decimal list-inside">
                {questions}
            </ol>
        </form>
    )
}

export default Questionnaire