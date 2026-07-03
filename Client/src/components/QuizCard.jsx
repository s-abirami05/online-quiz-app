{question.options.map(
  (option, index) => (

    <label
      key={index}
      className="option"
    >

      <input
        type="radio"
        name="answer"
        value={option}
        checked={
          selectedAnswer === option
        }
        onChange={(e) =>
          setSelectedAnswer(
            e.target.value
          )
        }
      />

      {option}

    </label>
  )
)}