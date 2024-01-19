import SingleQuestion from "./SingleQuestion"

const Questions = ({ questions, activeId, toggleQuestions }) => {

    return (
        <section className="container">
            <h1>Questions</h1>
            {questions.map((question) => {
                return <SingleQuestion
                    key={question.id}
                    {...question}
                    questions={questions}
                    activeId={activeId}
                    toggleQuestions={toggleQuestions}
                />
            })}
        </section>
    )
}
export default Questions