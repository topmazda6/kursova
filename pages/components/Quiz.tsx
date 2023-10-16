import React, {useEffect, useState} from "react";
import quizzes from "../../public/quizzes.json";
import cards from "../../public/books.json";
import Card from "@/pages/components/Card";


const Quiz = () => {
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [score, setScore] = useState(0);
    let [randomNum, setRandomNum] = useState(0)

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        setCurrentQuiz(currentQuiz + 1);
    };

    useEffect(() => {
        console.log(cards.length)
        setRandomNum(randomNumberInRange(0, cards.length));
        console.log(randomNum)

    }, []);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            {currentQuiz === quizzes.length ? (
                <div className="score-section">
                    <div className="">
                        <Card
                            title={cards[randomNum].title}
                            description={cards[randomNum].description}
                            imagen={cards[randomNum].imagen}
                            author={cards[randomNum].author}
                            height="500px"
                            width="30%"
                            margin="0 auto"
                            offset={2}
                            showArrows={false}
                        />
                    </div>
                </div>
            ) : (
                <div className="quiz-section">
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuiz + 1}</span>/{quizzes.length}
                        </div>
                        <div className="question-text">
                            {quizzes[currentQuiz].questionText}
                        </div>
                    </div>
                    <div className="answer-section">
                        {quizzes[currentQuiz].answerOptions.map(
                            ({answerText, isCorrect}, index) => (
                                <button
                                    key={`${answerText} + ${index}`}
                                    className='card'
                                    onClick={() => handleAnswerButtonClick(isCorrect)}
                                >
                                    {answerText}
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Quiz;
