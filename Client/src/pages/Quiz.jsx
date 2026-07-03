import { useEffect, useState }
from "react";

import { useNavigate }
from "react-router-dom";

import {
  getQuestions,
  saveResult
} from "../services/api";

function Quiz() {

  const navigate = useNavigate();

  const [questions, setQuestions] =
    useState([]);

  const [current, setCurrent] =
    useState(0);

  const [selected, setSelected] =
    useState("");

  const [score, setScore] =
    useState(0);

  const [popup, setPopup] =
    useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions =
    async () => {

      const response =
        await getQuestions();

      setQuestions(response.data);
    };

  const handleNext =
    async () => {

      if(selected === "") {
        alert("Select Answer");
        return;
      }

      let updatedScore = score;

      if(
        selected ===
        questions[current].answer
      ) {

        updatedScore++;

        setScore(updatedScore);

      } else {

        setPopup("Wrong Answer");

        setTimeout(() => {
          setPopup("");
        }, 1500);
      }

      if(
        current + 1 <
        questions.length
      ) {

        setCurrent(current + 1);

        setSelected("");

      } else {

        const resultData = {

          username:
          localStorage.getItem(
            "username"
          ),

          email:
          localStorage.getItem(
            "email"
          ),

          score: updatedScore
        };

        await saveResult(
          resultData
        );

        navigate(
          "/result",
          {
            state: {
              score: updatedScore
            }
          }
        );
      }
    };

  if(questions.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (

    <div className="quiz-container">

      <div className="quiz-card">

        <h2>
          Question {current + 1}/15
        </h2>

        <h3>
          {questions[current].question}
        </h3>

        <div className="options">

          {
            questions[current]
            .options.map(
              (option, index) => (

              <label
                key={index}
                className="option-label"
              >

                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={
                    selected === option
                  }

                  onChange={(e)=>
                    setSelected(
                      e.target.value
                    )
                  }
                />

                {option}

              </label>

            ))
          }

        </div>

        {
          popup &&
          <div className="popup">
            {popup}
          </div>
        }

        <button
          className="next-btn"
          onClick={handleNext}
        >

          {
            current === 14
            ?
            "Finish Attempt"
            :
            "Next Question"
          }

        </button>

      </div>

    </div>
  );
}

export default Quiz;